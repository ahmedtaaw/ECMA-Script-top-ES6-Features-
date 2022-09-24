import Intro1 from "./Intro1";
import Intro2 from "./Intro2";

import Card from "./Card";

function Main(props){
    const styles={
        padding:"20px",
        background:"blue",
        color:"#FFFFFF"
    }
    return(
        <main>
            <h2>Component: Main
                </h2>
                <section style={styles}>
                    <Intro1 color="yellow" number="5"/>
                    <Intro2 friend="Peter"/>
                    <Card h2="First card's h2" h3="First card's h3" />
        <Card h2="Second card's h2" h3="Second card's h3" />
        <Card h2="Third card's h2" h3="Third card's h3" />
                </section>
        </main>
    )
}
export default Main;