import FactsCards from "./FactsCards" 

function About() {

    const facts = ['Location 🡢 Germany', 'Fact 2', 'Fact 3']

    const factsCards = facts.map(fact => <FactsCards key={fact} text={fact} />)

    return (
        <section className="about">
            <h2 className="about--title">About</h2>
            <div className="about--facts">
                {factsCards}
            </div>
        </section>
    )
}

export default About