import FactsCards from "./FactsCards" 

function About() {

    const facts = ['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5']

    const factsCards = facts.map(fact => <FactsCards key={fact} text={fact} />)

    return (
        <section className="about">
            <h2 className="section--title">About</h2>
            <div className="about--facts">
                {factsCards}
            </div>
        </section>
    )
}

export default About