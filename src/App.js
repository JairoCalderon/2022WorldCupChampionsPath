import firebase from "./firebase"
import './App.css';
import { useEffect, useState } from "react"
import { getDatabase, ref, get } from "firebase/database"
import Groups from "./components/Groups"
import Footer from "./components/Footer";

function App() {
  const [groups, setGroups] = useState([])
  const [selectedGroups, setSelectedGroups] = useState({})
  const [quarterFinalTeams, setQuarterFinalTeams] = useState([])
  const [semiFinalTeams1, setSemiFinalTeams1] = useState([])
  const [semiFinalTeams2, setSemiFinalTeams2] = useState([])
  const [semiFinalTeams3, setSemiFinalTeams3] = useState([])
  const [semiFinalTeams4, setSemiFinalTeams4] = useState([])
  const [finalTeams1, setFinalTeams1] = useState([])
  const [finalTeams2, setFinalTeams2] = useState([])

  const fetchDatabase = async () => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)
    const data = await (await get(dbRef)).val()
    setGroups(data)
  }

  useEffect(() => {
    fetchDatabase()
  }, [])

  const handleUserQuarterResults1 = (event) => {
    setSemiFinalTeams1(event.target.value)
  }
  const handleUserQuarterResults2 = (event) => {
    setSemiFinalTeams2(event.target.value)
  }
  const handleUserQuarterResults3 = (event) => {
    setSemiFinalTeams3(event.target.value)
  }
  const handleUserQuarterResults4 = (event) => {
    setSemiFinalTeams4(event.target.value)
  }
  const handleUserSemiResults1 = (event) => {
    setFinalTeams1(event.target.value)
  }
  const handleUserSemiResults2 = (event) => {
    setFinalTeams2(event.target.value)
  }


  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>Welcome to 2022 World Cup Champion's path</h1>
          <p>Let's figure out which opponets your team will face up to become the champion</p>
        </div>
      </header>

      <main>
        <section className="groupPhase wrapper">
          <p>Let's start by selecting the first and second place of each group and hitting sumbit. Do so for each group at a time</p>
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


        <section className="quarter">
          <h3>Quarter Final Games</h3>
          <p>Let's decide what teams will win their next games</p>
          <div className="wrapper quarterOfFinals">
            <div className="quarterGame">
              <ul className="quarterOptions">
                <li className="teamA1">{quarterFinalTeams[0]}</li>
                <p>X</p>
                <li className="teamB2">{quarterFinalTeams[3]}</li>
              </ul>
              <div className="quarterFinalsResult">
                <select name="quartfinal1a" id="quartfinal1a" onChange={handleUserQuarterResults1}>
                  <option hidden value>Winner</option>
                  <option value={quarterFinalTeams[0]}>{quarterFinalTeams[0]}</option>
                  <option value={quarterFinalTeams[3]}>{quarterFinalTeams[3]}</option>
                </select>
              </div>
            </div>

            <div className="quarterGame">
              <ul className="quarterOptions">
                <li className="teamB1">{quarterFinalTeams[2]}</li>
                <p>X</p>
                <li className="teamA2">{quarterFinalTeams[1]}</li>
              </ul>
              <div className="quarterFinalsResult">
                <select name="quartfinal1b" id="quartfinal1b" onChange={handleUserQuarterResults2}>
                  <option hidden value>Winner</option>
                  <option value={quarterFinalTeams[2]}>{quarterFinalTeams[2]}</option>
                  <option value={quarterFinalTeams[1]}>{quarterFinalTeams[1]}</option>
                </select>
              </div>
            </div>

            <div className="quarterGame">
              <ul className="quarterOptions">
                <li className="teamC1">{quarterFinalTeams[4]}</li>
                <p>X</p>
                <li className="teamD2">{quarterFinalTeams[7]}</li>
              </ul>
              <div className="quarterFinalsResult">
                <select name="quartfinal2a" id="quartfinal2a" onChange={handleUserQuarterResults3}>
                  <option hidden value>Winner</option>
                  <option value={quarterFinalTeams[4]}>{quarterFinalTeams[4]}</option>
                  <option value={quarterFinalTeams[7]}>{quarterFinalTeams[7]}</option>
                </select>
              </div>
            </div>

            <div className="quarterGame">
              <ul className="quarterOptions">
                <li className="teamD1">{quarterFinalTeams[6]}</li>
                <p>X</p>
                <li className="teamC2">{quarterFinalTeams[5]}</li>
              </ul>
              <div className="quarterFinalsResult">
                <select name="quartfinal2b" id="quartfinal2b" onChange={handleUserQuarterResults4}>
                  <option hidden value>Winner</option>
                  <option value={quarterFinalTeams[6]}>{quarterFinalTeams[6]}</option>
                  <option value={quarterFinalTeams[5]}>{quarterFinalTeams[5]}</option>
                </select>
              </div>

            </div>
          </div>
        </section >


        <section className="wrapper">
          <h3>Final Match</h3>
          <div className="semiFinals">
            <div>
              <select name="semifinal1" id="semifinal1" onChange={handleUserSemiResults1}>
                <option hidden value>Semifinal</option>
                <option value={semiFinalTeams1}>{semiFinalTeams1}</option>
                <option value={semiFinalTeams2}>{semiFinalTeams2}</option>
              </select>
            </div>
            <p>X</p>
            <div>
              <select name="semifinal2" id="semifinal2" onChange={handleUserSemiResults2}>
                <option hidden value>Semifinal</option>
                <option value={semiFinalTeams3}>{semiFinalTeams3}</option>
                <option value={semiFinalTeams4}>{semiFinalTeams4}</option>
              </select>
            </div>
          </div>
        </section>


        <section className="wrapper final">
          <h3>...and the Champion is</h3>
          <select name="final1" id="final1">
            <option hidden value>Champion</option>
            <option value={finalTeams1}>{finalTeams1}</option>
            <option value={finalTeams2}>{finalTeams2}</option>
          </select>
        </section>


      </main >
      <Footer />

    </div >
  );
}

export default App;
