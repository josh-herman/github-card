import React, { useEffect, useState } from "react";
import './App.css';

function App({ user }) {

  const [userInfo, setUserInfo] = useState(null);

  const onClick = () => { window.open(userInfo.html_url, "_blank"); };

  useEffect(() => {
    const apiUrl = `https://api.github.com/users/${user}`;
    fetch(apiUrl)
      .then((res) => { return res.json() })
      .then((info) => {
        console.log(info);
        setUserInfo(info);
      });
  }, []);

  if (userInfo) {
    return (
      <div className="container" onClick={onClick}>
        <img className="profileImage" src={userInfo.avatar_url} />
        <h1 className="name">{userInfo.name}</h1>
        <p className="login">@{userInfo.login}</p>
        <p className="bio">{userInfo.bio}</p>
        <div className="row">
          <div className="column"><p className="data">{userInfo.followers}</p><p className="label">followers</p></div>
          <div className="column"><p className="data">{userInfo.following}</p><p className="label">following</p></div>
          <div className="column"><p className="data">{userInfo.public_repos}</p><p className="label">{userInfo.public_repos === 1 ? "repository" : "repositories"}</p></div>
        </div>
      </div>
    );
  } else { return <p>Loading!</p>; }
}

export default App;
