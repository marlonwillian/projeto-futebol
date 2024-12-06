import DayMatches from "../DayMatches";
import FollowedTeamsCard from "../FollowedTeamsCard";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

function Header({ dayMatches }) {
  const [followedTeams, setFollowedTeams] = useState()
  const [sideMenu, setSideMenu] = useState(false)

  function loadLocalStorage() {
    const ids = [];

    for(let i = 0; i < localStorage.length; i++) {
      ids.push(localStorage.key(i))
    }

    setFollowedTeams(ids)
  }

  return (
    <header className={styles.header}>
      <i class="fa-solid fa-house" style={{fontSize: "25px"}}></i>
      <div className={styles.divInput}>
        <i class="fa-solid fa-magnifying-glass" style={{color: "#757575"}}></i>
        <input type="text" placeholder="Pesquisar"/>
      </div>
      <div className={styles.timesSeguidos} onClick={() => {loadLocalStorage(); setSideMenu(true)}}>
        <span>Times seguidos</span>
      </div>
      <div 
        className={styles.sideMenu} 
        style={{right: sideMenu ? "0" : "-350px"}}
      >
        <div className={styles.title}>
          <span onClick={() => setSideMenu(false)}>X</span>
          <h1>Times seguidos</h1>
        </div>
        {
          followedTeams != null ?
            followedTeams.map((id) => (
              <>
                <FollowedTeamsCard id={Number(id)}/>
              </>
            )) 
          : ""
        }
      </div>
    </header>
  );
}

export default Header;