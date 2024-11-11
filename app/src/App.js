import { useEffect, useState } from "react";
import Home from "./pages/Home/index.jsx";

function App() {
  const [dayMatches, setDayMatches] = useState()

  useEffect(() => {
    const fetchDayMatches = async () => {
      try {
        const response = await fetch('http://localhost:5000/live-matches');
        if(!response.ok) {
          throw new Error('Erro na conexão')
        }
        const result = await response.json();
        setDayMatches(result)
      } catch (error) {
        console.log(error.message)
      }
    };

    fetchDayMatches();
  }, [])

  return (
    <Home dayMatches={dayMatches}/>
  );
}

export default App;
