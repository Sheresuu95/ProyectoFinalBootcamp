import { FC, useEffect, useState } from "react";
import { Profile } from "../common/ProfileStyle.tsx";
import "../../styles/SearchStyle.css";

interface SearchResultsProps {
  searchTerm: string;
}

const SearchResults: FC<SearchResultsProps> = ({ searchTerm }) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch(`http://localhost:8080/profiles/search/?name=${searchTerm}`);
        if (!response.ok) {
          throw new Error('Failed to fetch profiles');
        }
        const data = await response.json();
        setProfiles(data);
        console.log('User Data: ', data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, [searchTerm]);

  return (
    <div className="search-result">
      <h2>Resultados de la búsqueda</h2>
      {profiles.map((profile) => (
         <div key={profile.id} className="search-result-item">
          <div className="profile-card">
          <a className="image-link" href={`/profile/${profile.id}`}>
            <img className="profile-image" src={profile.profile_image} alt="Foto de perfil" style={{ width: "200px", height: "210px" }} />
          </a>
          <div className="search-result-item-body">
            <div className="row">
              <h3>{profile.name} {profile.lastName}</h3>
              <p>Points: {profile.rankingPoints}</p>
              <div className="col-sm-9">
                <h4 className="search-result-item-heading"><a href={`/profile/${profile.id}`}><b>@{profile.username}</b></a></h4>
              </div>
              {/* Aquí puedes agregar más detalles si es necesario */}
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;