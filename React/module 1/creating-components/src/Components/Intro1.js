function Intro1(props){
    return(
        <div>
            <h2 className="articleHead">Intro1: Why I love front-end web development</h2>
            {props.color}
            {props.number}
        </div>
    )
}

export default Intro1;