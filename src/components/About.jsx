import FactsCards from "./FactsCards" 

function About({data}) { 

    const factsCards = data.map(item => <FactsCards key={item.id} text={item.text} />)

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