import MagneticFramer from './MagneticFramer'

function Hero(props) {

    function handleHover(e) {
        let name = e.target.name
        if (name == "vite") {
            props.onHover({firstColor: 'rgba(143, 0, 255, 0.223)' , secondColor: 'rgba(255, 0, 200, 0.233)'})
        } else if (name == "css") {
            props.onHover({firstColor: 'rgba(3, 82, 252, 0.233)', secondColor: 'rgba(3, 82, 15, 0.233)'})
        } else if (name == "react") {
            props.onHover({firstColor: 'rgba(3, 173, 252, 0.233)', secondColor: 'rgba(3, 119, 252, 0.233)'})
        } else if (name == "html") {
            props.onHover({firstColor: 'rgba(252, 65, 3, 0.233)', secondColor: 'rgba(252, 95, 3, 0.233)'})
        } else if (name == "js") {
            props.onHover({firstColor: 'rgba(252, 198, 3, 0.233)', secondColor: 'rgba(252, 140, 3, 0.233)'})
        }
        
    }   
    
    function resetHover() {
        // props.onHover({
        //     firstColor: "rgba(143, 0, 255, 0.223)",
        //     secondColor: "rgba(255, 0, 200, 0.233)"
        //   })
    }


    return (
        <section className="hero">
            <div className="hero--name">
                <img src="./Joel Wolf.svg" alt="" />
            </div>
            <div className="hero--skills">
                <div className="hero--skills--grid">
                    <MagneticFramer>
                        <img name="vite" src="./vite.svg" onMouseOver={handleHover} onMouseLeave={resetHover} />
                    </MagneticFramer>
                        <p></p>
                    <MagneticFramer>
                        <img name="css" src="./css.png" onMouseOver={handleHover} onMouseLeave={resetHover} />
                    </MagneticFramer>
                        <p></p>
                    <MagneticFramer>
                        <img name="react" src="./react.png" onMouseOver={handleHover} onMouseLeave={resetHover} />
                    </MagneticFramer>
                        <p></p>
                    <MagneticFramer>
                        <img name="js" src="./js.png" onMouseOver={handleHover} onMouseLeave={resetHover} />
                    </MagneticFramer>
                        <p></p>
                    <MagneticFramer>
                        <img name="html" src="./html.png" onMouseOver={handleHover} onMouseLeave={resetHover} />
                    </MagneticFramer>
                </div>
            </div>
        </section>
    )
}

export default Hero