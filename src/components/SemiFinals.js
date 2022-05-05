const SemiFinals = ({ semiFinalTeams1, semiFinalTeams2, semiFinalTeams3, semiFinalTeams4, setFinalTeams1, setFinalTeams2 }) => {

    const handleUserSemiResults1 = (event) => {
        setFinalTeams1(event.target.value)
    }
    const handleUserSemiResults2 = (event) => {
        setFinalTeams2(event.target.value)
    }

    return (
        <>
            <section className="wrapper">
                <h3>Final Match</h3>
                <div className="semiFinals">
                    <form>
                        <select name="semifinal1" id="semifinal1" onChange={handleUserSemiResults1}>
                            <option hidden value>Semifinal</option>
                            <option value={semiFinalTeams1}>{semiFinalTeams1}</option>
                            <option value={semiFinalTeams2}>{semiFinalTeams2}</option>
                        </select>
                    </form>
                    <p>X</p>
                    <form>
                        <select name="semifinal2" id="semifinal2" onChange={handleUserSemiResults2}>
                            <option hidden value>Semifinal</option>
                            <option value={semiFinalTeams3}>{semiFinalTeams3}</option>
                            <option value={semiFinalTeams4}>{semiFinalTeams4}</option>
                        </select>
                    </form>
                </div>
            </section>
        </>
    )
}

export default SemiFinals