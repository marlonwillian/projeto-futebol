import { useEffect, useState } from "react";
import styles from "./DayMatches.module.css";

function DayMatches({ dayMatches }) {
  const [match, setMatch] = useState([])
  
  useEffect(() => {
    if (dayMatches != undefined) {
      setMatch([dayMatches.matches[0].homeTeam.name, dayMatches.matches[0].awayTeam.name])
      console.log(match)
    } else {
      console.log("Carregando...")
    }
  }, [])

  return (
    <section className={styles.mainSection}>
      <div className={styles.matchesDiv}>
        
      </div>
    </section>
  );
}

export default DayMatches;