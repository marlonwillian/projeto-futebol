import { useEffect, useState } from "react";
import styles from "./DayMatches.module.css";

function DayMatches({ dayMatches }) {
  const [match, setMatch] = useState([])
  
  useEffect(() => {
    if (dayMatches != undefined) {
      setMatch(dayMatches.matches)
    }
  }, [dayMatches])

  /* #6c8cc8 - possível cor secundaria */

  console.log(match)

  return (
    <section className={styles.mainSection}>
        {
          match.map((match, i) => i == 15 ? (
            <div 
              className={styles.matchesDiv} 
              style={{
                backgroundImage: match.competition.code == "CL" ? "url(https://t4.ftcdn.net/jpg/04/36/28/61/360_F_436286115_Xw6aeK0u66VJSyy9gBTpZO6bXMHdQLio.jpg)" : match.competition.code == "BSA" ? "url(https://img.freepik.com/vetores-premium/o-design-vetorial-abstrato-e-perfeito-para-o-fundo-de-varias-camisetas-esportivas-como-futebol-etc_622752-1250.jpg)" : ""}}>
              <div className={styles.homeTeam}>
                <img src={`${match.homeTeam.crest}`} alt="Escudo do time anfitrião"/>
                <h1>{`${match.homeTeam.name}`}</h1>
              </div>
              <div className={styles.matchInfo}>
                <img 
                  src={`${match.competition.code != "BSA" ? match.competition.emblem : "https://upload.wikimedia.org/wikipedia/pt/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png"}`}
                  style={{padding: match.competition.code == "CL" ? "2px" : "0px"}}
                  alt="Emblema da competição" 
                />
                <h1 className={styles.score}>{`${match.score.fullTime.home} X ${match.score.fullTime.away}`}</h1>
                <h1>{`${match.status === "FINISHED" ? "Finalizado" : "Em andamento"}`}</h1>
              </div>
              <div className={styles.awayTeam}>
                <img src={`${match.awayTeam.crest}`} alt="Escudo do time visitante"/>
                <h1>{`${match.awayTeam.name}`}</h1>
              </div>
            </div>
          ) : "")
        }
    </section>
  );
}

export default DayMatches;