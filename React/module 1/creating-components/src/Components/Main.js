import Intro1 from "./Intro1";
import Intro2 from "./Intro2";

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
                    
                </section>
        </main>
    )
}
export default Main;