const Final = ({ finalTeams1, finalTeams2 }) => {
    return (
        <>
            <section className="wrapper final">
                <h3>...and the Champion is</h3>
                <form>
                    <select name="final1" id="final1">
                        <option hidden value>Champion</option>
                        <option value={finalTeams1}>{finalTeams1}</option>
                        <option value={finalTeams2}>{finalTeams2}</option>
                    </select>
                </form>
            </section>

        </>
    )
}

export default Final