import 'materialize-css/dist/css/materialize.min.css';
import '../../styles/ProfileStyle.css'
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ecofondo from '../../assets/ecofondo.jpg';

const ProfilePage = () => {
  const location = useLocation();
  const pathnameParts = location.pathname.split('/');
  const id = pathnameParts[pathnameParts.length - 1];

  const [personas, setPersonas] = useState({});
  const [wins, setWins] = useState([]);
  const [rewards, setRewards] = useState([]);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);

  const history = useNavigate();

  const handleRedirect = () => {
    history(`/wins/${personas.username}`);
  };

  const handleRedirect2 = () => {
    history(`/rewards/${personas.username}`);
  };

  const handleLike = async (postId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/posts/${postId}/like/1`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error('Failed to like the post');
    } catch (error) {
      console.error('Error al dar like al post:', error);
    }
  };

  const handleFriend = async (profileId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/friends/${profileId}/1`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error('Failed to add friend');
    } catch (error) {
      console.error('Error al agregar amigo:', error);
    }
  };

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch(`http://localhost:8080/profiles/${id}`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        const personasData = {
          name: data.name,
          lastName: data.lastName,
          profile_image: data.profile_image,
          points: data.points,
          username: data.username,
          email: data.email,
          wins: data.wins,
          rewards: data.rewards,
          posts: data.posts,
          rankingPoints: data.rankingPoints,
        };
        setPersonas(personasData);
        setWins(data.wins);
        setRewards(data.rewards);
        setPosts(data.posts);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }

      try {
        const response = await fetch(`http://localhost:8080/friends/ranking/${id}`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data1 = await response.json();
        setUsers(data1);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }

      try {
        const response = await fetch(`http://localhost:8080/friends/${id}`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data2 = await response.json();
        setFriends(data2);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchUsuarios();
  }, [id]);

  return (
    <section style={{ backgroundImage: `url(${ecofondo})`, backgroundSize: 'cover', backgroundColor: 'black' }}>
      <div className="container py-5">
        <div className="row" id='python'>
          <div className="col l4 s12">
            <div className="card">
              <div className="card-content center-align">
                <img
                  src={personas.profile_image}
                  alt="avatar"
                  className="circle responsive-img"
                  style={{ width: '150px', height: '150px' }}
                />
                <p className="text-muted mb-1" id='placa'>@{personas.username}</p>
                {friends.includes(users[0]) ? (
                  <button className="btn" onClick={() => handleFriend(id)}>Unfollow</button>
                ) : (
                  <button className="btn" onClick={() => handleFriend(id)}>Follow</button>
                )}
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <ul className="collection with-header">
                  <li className="collection-header center-align" style={{ backgroundColor: 'lightgray' }}>
                    <i className="material-icons left">star</i>
                    <span className="lead fw-normal mb-0">Friends Ranking</span>
                    <i className="material-icons right">star</i>
                  </li>
                  {users.map((user, index) => (
                    <li className="collection-item" key={user.id}>
                      <span style={{ color: index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? '#E37134' : 'black' }}>
                        #{index + 1} - {user.rankingPoints}
                      </span>
                      <span className="secondary-content">{user.username}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col l8 s12">
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s3"><span className="card-title">Full Name</span></div>
                  <div className="col s9"><span className="text-muted">{personas.name} {personas.lastName}</span></div>
                </div>
                <hr />
                <div className="row">
                  <div className="col s3"><span className="card-title">Email</span></div>
                  <div className="col s9"><span className="text-muted">{personas.email}</span></div>
                </div>
                <hr />
                <div className="row">
                  <div className="col s3"><span className="card-title">Points</span></div>
                  <div className="col s9"><span className="text-muted">{personas.points}</span></div>
                </div>
                <hr />
                <div className="row">
                  <div className="col s3"><span className="card-title">Ranking Points</span></div>
                  <div className="col s9"><span className="text-muted">{personas.rankingPoints}</span></div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col s12 m6">
                <div className="card .rw">
                  <div className="card-content center-align">
                    {wins.length > 0 ? (
                      <>
                        <span className="card-title"><p  style={{color: '#26a69a'}}>Win</p> {wins[0].name}</span>
                        <div className="progress">
                          <div className="determinate" style={{ width: '100%' }}></div>
                        </div>
                        <p className="text-muted">{wins[0].description}</p>
                        <img src={wins[0].image} height="110" width="150" alt={wins[0].name} />
                        <div style={{ marginTop: '20px' }}>
                          <button className="btn npm" onClick={handleRedirect}>Ver más</button>
                        </div>
                      </>
                    ) : (
                      <p>No hay datos de ganancias disponibles.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="col s12 m6">
                <div className="card .rw">
                  <div className="card-content center-align">
                    {rewards.length > 0 ? (
                      <>
                        <span className="card-title"><p  style={{color: '#26a69a'}}>Reward</p> {rewards[0].name}</span>
                        <div className="progress">
                          <div className="determinate" style={{ width: '100%' }}></div>
                        </div>
                        <p className="text-muted">{rewards[0].description}</p>
                        <img src={rewards[0].image} height="110" width="150" alt={rewards[0].name} />
                        <div style={{ marginTop: '20px' }}>
                          <button className="btn npm" onClick={handleRedirect2}>Ver más</button>
                        </div>
                      </>
                    ) : (
                      <p>No hay datos de recompensas disponibles.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
              {posts.map((post) => (
                <div className="col s12 m6" key={post.id} style={{ marginTop: '10px' }}>
                  <div className={`card .rw`} style={post.post_type == 'rewards' ? { border: '2px solid gold' } : post.post_type == 'wins' ? { border: '2px solid turquoise'} : {}}>
                    <div className="card-content post">
                      {post.post_type === 'rewards' && <i className="material-icons right" style={{ color: 'gold' }}>emoji_events</i>}
                      {post.post_type === 'wins' && <i className="material-icons right" style={{ color: 'turquoise' }}>military_tech</i>}
                      <span className="card-title">{post.title}</span>
                      <p>{post.content}</p>
                    </div>
                    <div className='relleno'></div>
                    <div className="card-action">
                        <button className="btn-flat" onClick={() => handleLike(post.id)}>
                          <i className="material-icons left">thumb_up</i>{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                        </button>
                        <span className="right">{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                  </div>
                </div>
              ))}
              </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
