import styles from "./Header.module.css";
import { useEffect, useState } from "react";

function Header({ dayMatches }) {
  const [followedTeams, setFollowedTeams] = useState()

  useEffect(() => {
    for (var i = 1; i < localStorage.length; i++) {
      
      console.log(i)
    }
  }, [])

  return (
    <header className={styles.header}>
      <i class="fa-solid fa-house" style={{fontSize: "25px"}}></i>
      <div className={styles.divInput}>
        <i class="fa-solid fa-magnifying-glass" style={{color: "#757575"}}></i>
        <input type="text" placeholder="Pesquisar"/>
      </div>
      <div className={styles.timesSeguidos}>
        {
          
        }
        {/* <span>Times seguidos</span> */}
      </div>
    </header>
  );
}

export default Header;