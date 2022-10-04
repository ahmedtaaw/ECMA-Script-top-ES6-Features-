import Bowl from "./Bowl";
function Puppy(props){
    return(
        <div>
            {props.name} has <Bowl bowlShapeParent={props.bowlShape} bowlShape="square" bowlStatus="full"/>
        </div>
    )
}
export default Puppy;