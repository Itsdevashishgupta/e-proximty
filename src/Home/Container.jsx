import './Container.css';
function Outer(props){
    return(
        <div className="outer">
            {props.children}
        </div>
    );
}
export default Outer;