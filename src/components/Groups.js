const Groups = ({ group, setSelectedGroups, selectedGroups, setQuarterFinalTeams, quarterFinalTeams }) => {

    const handleUser1Choice = (event) => {
        setSelectedGroups((prev) => {
            return { ...prev, [group.id]: { ...prev[group.id], first: event.target.value } }
        })
    }

    const handleUser2Choice = (event) => {
        setSelectedGroups((prev) => {
            return { ...prev, [group.id]: { ...prev[group.id], second: event.target.value } }
        })
    }

    const handleUserQuarterFinalTeams = (() => {
        Object.values(selectedGroups).map(({ first, second }) => (
            setQuarterFinalTeams([...quarterFinalTeams, first, second])))
    })

    return (
        <>
            <h2>{group.name}</h2>
            <ul className="groupTeams">
                {group.teams.map(team => (
                    <li key={team}>{team}</li>
                ))}

            </ul>
            <ul>
                <li>
                    <form>
                        <label htmlFor="classGroup1" className="sr-only">First Place</label>
                        <select name="FirstPlace" id="classGroup1" onChange={handleUser1Choice}>

                            <option hidden value>1st - {group.name} </option>

                            {group.teams.filter((team) => team !== selectedGroups[group.id]?.second).map(team => (<option key={team} value={team}>{team}</option>
                            ))
                            }

                        </select>

                    </form>

                </li>
                <li>
                    <form>
                        <label htmlFor="classGroup2" className="sr-only">Second Place</label>
                        <select name="SecondPlace" id="classGroup2" onChange={handleUser2Choice}>
                            <option hidden value>2nd - {group.name}</option>
                            {group.teams.filter((team) => team !== selectedGroups[group.id]?.first).map(team => <option key={team} value={team}>{team}</option>)}
                        </select>
                    </form>
                </li>
            </ul>
            <button onClick={handleUserQuarterFinalTeams}>Submit</button>

        </>
    )
}

export default Groups