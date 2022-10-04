

function Bowl(props){
    return(
        <div>
            <p>

                {props.bowlShape}-shaped bowl, and {props.bowlStatus}
                 
                
            </p>
            <p>and bowlShape from parent {props.bowlShapeParent}</p>
        </div>
    )
}
export default Bowl;