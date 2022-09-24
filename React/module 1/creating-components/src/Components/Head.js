function Head(props){
    return(
        <header>
            <h2>Component: Header
                </h2>
                <h4>Props 1 {props.name}</h4>
                <h4>Props 2 {props.title}</h4>
                </header>
    )
}

export default Head;