import { FC, useEffect, useState } from "react";
import Fondo from "../../assets/Rayas.jpg";
import { useQuery, isError } from "react-query";
import "../../styles/WinsStyle.css";
import { useParams } from 'react-router-dom';

interface Wins {
  id: number;
  name: string;
  description: string;
  rewardsPoints: number;
  difficulty: string;
  image: string;
}


const showToastError = (message: string) => {
    M.toast({html:`<i class="material-icons left">close</i><span>${message}</span>`, 
    displayLength: 2500,
    inDuration: 500,
    outDuration: 500,
    classes: 'alert-error',});
};

const showToastOk = (message: string) => {
    M.toast({html: `<i class="material-icons left">check</i><span>${message}</span>`, 
    displayLength: 2500,
    inDuration: 500,
    outDuration: 500,
    classes: 'alert-ok '});
};


let codigo: any;

const InProcessWins:FC = () => {
    const [idUser, setIdUser] = useState<number | null>(null);
    const [isLoadingUser, setIsLoadingUser] = useState<boolean>(false);
    const { username } = useParams<{ username: string }>();
    

    const usePrompt = (winId: number) => {
        codigo = prompt("Ingrese el código de verificacion:");
        if(codigo.length > 5){
            assignWin(winId, codigo);
            alert("¡Enhorabuena! Objetivo cumplido")
            // showToastOk("¡Enhorabuena! Objetivo cumplido")
        }
        else{
            alert('Código de verificación incorrecto');
            // showToastError('Código de verificación incorrecto');        
        }
    }

    const assignWin = async (winId: number, verificationCode: string) => {
        if (!idUser) {
          console.error('ID de usuario no disponible.');
          return;
        }
      
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
      
        const requestOptions: RequestInit = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow" as RequestRedirect,
          body: JSON.stringify({ verificationCode }) // Incluir el código de verificación en el cuerpo de la solicitud
        };
      
        try {
          const response = await fetch(`http://localhost:8080/users/${idUser}/verify-win/${winId}`, requestOptions);
          if (!response.ok) {
            throw new Error('Failed to assign win');
          }
          const result = await response.text();
          console.log('Success:', result);
      
        } catch (error) {
          console.error('Error:', error);
          alert("ERROR");
        }
      };
      

    useEffect(() => {
      const fetchUserData = async () => {
        console.log(username);
        setIsLoadingUser(true);
        try {
          const response = await fetch(`http://127.0.0.1:8080/users/find/${username}`);
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const userData = await response.json();
          console.log('Fetched user data:', userData);
          console.log(userData[0].id);
          setIdUser(userData[0].id);
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setIsLoadingUser(false);
        }
      };
  
      fetchUserData();
    }, [username]);
  
    const { isLoading, error, data } = useQuery<Wins[]>("inProcessWins", async () => {
      if (!idUser) return [];
      const response = await fetch(`http://localhost:8080/users/${idUser}/unverified-wins`);
      if (!response.ok) {
        throw new Error('Failed to fetch wins data');
      }
      return response.json();
    }, {
      enabled: !!idUser // Solo habilita la consulta cuando idUser no sea nulo
    });
  
    if (isLoadingUser) return <div>Cargando usuario...</div>;
  
    if (isLoading) return <div>Cargando...</div>;
  
    if (error) return isError(error) ? <div>Error: {error.message}</div> : <div>Error: Algo salió mal</div>;

  return (
    
    <ul className="collection borderBottomRight" >
      {data?.map((win: Wins, index: number) => (
        <li key={index} className="collection-item avatar" >
          <img src={win.image} alt="" className="circle" />
          <span className="title">{win.name}</span>
          <p>{win.description}</p>
          <a onClick={() => usePrompt(win.id)} href="#!" className="secondary-content"><i className="secondary-content material-icons">rate_review</i></a>
        </li>
      ))}
      
    </ul>
    
  );
}

export default InProcessWins;
