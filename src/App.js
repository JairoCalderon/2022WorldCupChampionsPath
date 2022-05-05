import './App.css';
import firebase from "./firebase"
import { useEffect, useState } from "react"
import { getDatabase, ref, get } from "firebase/database"
import Groups from "./components/Groups"
import Footer from "./components/Footer";
import QuarterFinals from './components/QuarterFinals';
import SemiFinals from './components/SemiFinals';
import Final from './components/Final';

function App() {
  const [groups, setGroups] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState({});
  const [quarterFinalTeams, setQuarterFinalTeams] = useState([]);
  const [semiFinalTeams1, setSemiFinalTeams1] = useState([]);
  const [semiFinalTeams2, setSemiFinalTeams2] = useState([]);
  const [semiFinalTeams3, setSemiFinalTeams3] = useState([]);
  const [semiFinalTeams4, setSemiFinalTeams4] = useState([]);
  const [finalTeams1, setFinalTeams1] = useState([]);
  const [finalTeams2, setFinalTeams2] = useState([]);

  const fetchDatabase = async () => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)
    const data = await (await get(dbRef)).val()
    setGroups(data)
  }

  useEffect(() => {
    fetchDatabase()
  }, [])

  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>Welcome to 2022 World Cup Champion's path</h1>
          <p>Let's figure out which opponents your team will face up to become the champion</p>
        </div>
      </header>

      <main>
        <section className="groupPhase wrapper">
          <p>Let's start by selecting the first and second place of each group and hitting sumbit. Do so for each group at a time.</p>
          <div className="initialGroups">
            {
              groups.map((group) => {
                return (
                  <div key={group.id} >
                    <Groups
                      group={group}
                      setSelectedGroups={setSelectedGroups}
                      selectedGroups={selectedGroups}
                      setQuarterFinalTeams={setQuarterFinalTeams}
                      quarterFinalTeams={quarterFinalTeams}
                    />
                  </div>
                )
              })
            }
          </div>
        </section>

        <QuarterFinals
          quarterFinalTeams={quarterFinalTeams}
          setSemiFinalTeams1={setSemiFinalTeams1}
          setSemiFinalTeams2={setSemiFinalTeams2}
          setSemiFinalTeams3={setSemiFinalTeams3}
          setSemiFinalTeams4={setSemiFinalTeams4}
        />

        <SemiFinals
          semiFinalTeams1={semiFinalTeams1}
          semiFinalTeams2={semiFinalTeams2}
          semiFinalTeams3={semiFinalTeams3}
          semiFinalTeams4={semiFinalTeams4}
          setFinalTeams1={setFinalTeams1}
          setFinalTeams2={setFinalTeams2}
        />

        <Final
          finalTeams1={finalTeams1}
          finalTeams2={finalTeams2}
        />


      </main >
      <Footer />

    </div >
  );
}

export default App;
