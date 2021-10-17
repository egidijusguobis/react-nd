

function Balloon (props) {
    return (
        <>
        <div>Counter = ?</div>
        <div className='balloon' style={{background: props.color}}></div>
        </> 
    );
}

export default Balloon;