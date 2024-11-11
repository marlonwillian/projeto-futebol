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

  function formataData (data) {
    let fdata = data.slice(0, 10)
    const aData = [data.slice(8,10), data.slice(5,7), data.slice(2, 4)] 
    return `${aData[0]}/${aData[1]}/${aData[2]}`
  } 

  function formataHorario (horario) {
    let fdata = horario.slice(11, 16)
    const aHorario = [horario.slice(11,13), horario.slice(14,16)] 
    return `${aHorario[0]}:${aHorario[1]}`
  } 

  return (
    <section className={styles.mainSection}>
        {
          match.map((match, i) => i == 5 ? (
            <>
              <div
                className={styles.matchesDiv}
                style={{
                  backgroundImage:
                    match.competition.code == "PD" ? "url(https://img.freepik.com/vetores-premium/design-de-estilo-gradiente-minimalista-de-luxo-preto-de-fundo_698780-808.jpg)" :
                    match.competition.code == "PL" ? "url(https://i.pinimg.com/originals/e5/79/08/e57908aff0f6f4dec8b8d79f2b8e718e.png)" :
                    match.competition.code == "CL" ? "url(https://t4.ftcdn.net/jpg/04/36/28/61/360_F_436286115_Xw6aeK0u66VJSyy9gBTpZO6bXMHdQLio.jpg)" : match.competition.code == "BSA" ? "url(https://img.freepik.com/vetores-premium/o-design-vetorial-abstrato-e-perfeito-para-o-fundo-de-varias-camisetas-esportivas-como-futebol-etc_622752-1250.jpg)" :
                    match.competition.code == "CL" ? "url(https://t4.ftcdn.net/jpg/04/36/28/61/360_F_436286115_Xw6aeK0u66VJSyy9gBTpZO6bXMHdQLio.jpg)" : match.competition.code == "SA" ? "url(https://www.ragucommunication.com/site/assets/files/1674/texture.1280x0p50x50.jpg)" : match.competition.code == "BL1" ? "url(https://img.freepik.com/fotos-premium/um-fundo-vermelho-com-um-logotipo-branco-que-diz-a-palavra_1034303-521629.jpg)" : "", backgroundColor: match.competition.code == "FL1" ? "#112343" : match.competition.code == "PD" ? "#080823" : ""
                    }}>
                <div className={styles.homeTeam}>
                  <img src={`${match.homeTeam.crest}`} alt="Escudo do time anfitrião"/>
                  <h1>{`${match.homeTeam.tla}`}</h1>
                </div>
                <div className={styles.matchInfo}>
                  <img
                    src={`${match.competition.code != "BSA" ? match.competition.emblem : "https://upload.wikimedia.org/wikipedia/pt/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png"}`}
                    style={{padding: match.competition.code == "CL" ? "2px" : "0px"}}
                    alt="Emblema da competição"
                  />
                  <h1 className={styles.score}>
                      {match.status === "FINISHED" || match.status === "FINISHED" ? `${match.score.fullTime.home} X ${match.score.fullTime.away}` : "X"}
                  </h1>
                  <h1>{`${match.status === "FINISHED" ? "Encerrado" : match.status === "IN_PLAY" ? "Em andamento" : match.status === "PAUSED" ? "Intervalo" : ""}`}</h1>
              
                </div>
                <div className={styles.awayTeam}>
                  <img src={`${match.awayTeam.crest}`} alt="Escudo do time visitante"/>
                  <h1>{`${match.awayTeam.tla}`}</h1>
                </div>
              </div>
              <div className={styles.matchDetails}>
                <h1>{`Rodada ${match.matchday}`}</h1>
                <h1>{`${formataData(match.utcDate)}`} {<hr/>} {`${formataHorario(match.utcDate)}`}</h1>
              </div>
            </>
          ) : "")
        }
    </section>
  );
}

export default DayMatches;