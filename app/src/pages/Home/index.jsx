import Header from "../../components/Header";
import styles from "./Home.module.css"
import { useEffect, useState } from "react";
import { getLeagues } from "../../FootballService";

function Home() {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/');
        if(!response.ok) {
          throw new Error('Erro na conexão')
        }
        const result = await response.json();
        setData(result)
      } catch (error) {
        console.log(error.message)
      }
    };

    fetchData();
  }, [])

  console.log(data)

  return (
    <div className={styles.homeBackground}>
      <title>Home</title>
      <Header/>
    </div>
  );
}

export default Home;