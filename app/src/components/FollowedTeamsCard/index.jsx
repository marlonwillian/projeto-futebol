import { useEffect, useState } from "react";
import styles from "./FollowedTeamsCard.module.css";

function FollowedTeamsCard({ id }) {
  const [team, setTeam] = useState()

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${id}`);
        if (!response.ok) {
          throw new Error('Erro na conexão');
        }
        const result = await response.json();
        setTeam(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchTeam();
  }, [id]);

  console.log(team)

  return (
    team != undefined ? 
      <div className={styles.card} style={{backgroundColor: team.clubColors != null ? team.clubColors.split('/')[0] : "black"}}>
        <div className={styles.team}>
          <img src={team.crest} alt="Escudo do time" />
          <h1>{team.name}</h1>
          <span></span>
        </div>
      </div>
    : ""
  );
}

export default FollowedTeamsCard;