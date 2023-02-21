function Intro2(props){
    let name="ahmed"
    return(
        <article>
            <h2 className="articleHead">Intro2: Why I love front-end web development</h2>
            {props.friend}
            <h1>{name=="ahmed"?"yes name is ahmed":"no name is not ahmed"}</h1>
        </article>
    )
}

export default Intro2;