import styles from "./Home.module.css"
import Header from "../../components/Header";
import DayMatches from "../../components/DayMatches";

function Home({ dayMatches }) {
  return (
    <div className={styles.homeBackground}>
      <title>Home</title>
      <Header dayMatches={dayMatches}/>
      <DayMatches dayMatches={dayMatches}/>
    </div>
  );
}

export default Home;