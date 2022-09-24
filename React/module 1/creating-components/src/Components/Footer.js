function Footer(props){
    return(
        <footer>
            <h2>Component: Footer
                </h2>
                <p>{props.toggleBoolean.toString()}</p>
                <p>{props.math}</p>
                <p>{props.str}</p>
        </footer>
    )
}
export default Footer;