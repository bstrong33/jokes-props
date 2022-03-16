function Joke(props) {
    return (
        <div>
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
            <hr />
            {/* <p>_______________________________________________________________</p> */}
        </div>
    )
}

export default Joke;