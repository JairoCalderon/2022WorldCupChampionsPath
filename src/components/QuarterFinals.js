const QuarterFinals = ({ quarterFinalTeams, setSemiFinalTeams1, setSemiFinalTeams2, setSemiFinalTeams3, setSemiFinalTeams4 }) => {

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


    return (
        <>
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
                        <form className="quarterFinalsResult">
                            <select name="quartfinal1a" id="quartfinal1a" onChange={handleUserQuarterResults1}>
                                <option hidden value>Winner</option>
                                <option value={quarterFinalTeams[0]}>{quarterFinalTeams[0]}</option>
                                <option value={quarterFinalTeams[3]}>{quarterFinalTeams[3]}</option>
                            </select>
                        </form>
                    </div>

                    <div className="quarterGame">
                        <ul className="quarterOptions">
                            <li className="teamB1">{quarterFinalTeams[2]}</li>
                            <p>X</p>
                            <li className="teamA2">{quarterFinalTeams[1]}</li>
                        </ul>
                        <form className="quarterFinalsResult">
                            <select name="quartfinal1b" id="quartfinal1b" onChange={handleUserQuarterResults2}>
                                <option hidden value>Winner</option>
                                <option value={quarterFinalTeams[2]}>{quarterFinalTeams[2]}</option>
                                <option value={quarterFinalTeams[1]}>{quarterFinalTeams[1]}</option>
                            </select>
                        </form>
                    </div>

                    <div className="quarterGame">
                        <ul className="quarterOptions">
                            <li className="teamC1">{quarterFinalTeams[4]}</li>
                            <p>X</p>
                            <li className="teamD2">{quarterFinalTeams[7]}</li>
                        </ul>
                        <form className="quarterFinalsResult">
                            <select name="quartfinal2a" id="quartfinal2a" onChange={handleUserQuarterResults3}>
                                <option hidden value>Winner</option>
                                <option value={quarterFinalTeams[4]}>{quarterFinalTeams[4]}</option>
                                <option value={quarterFinalTeams[7]}>{quarterFinalTeams[7]}</option>
                            </select>
                        </form>
                    </div>

                    <div className="quarterGame">
                        <ul className="quarterOptions">
                            <li className="teamD1">{quarterFinalTeams[6]}</li>
                            <p>X</p>
                            <li className="teamC2">{quarterFinalTeams[5]}</li>
                        </ul>
                        <form className="quarterFinalsResult">
                            <select name="quartfinal2b" id="quartfinal2b" onChange={handleUserQuarterResults4}>
                                <option hidden value>Winner</option>
                                <option value={quarterFinalTeams[6]}>{quarterFinalTeams[6]}</option>
                                <option value={quarterFinalTeams[5]}>{quarterFinalTeams[5]}</option>
                            </select>
                        </form>

                    </div>
                </div>
            </section >
        </>
    )
}

export default QuarterFinals