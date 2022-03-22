import React from "react";

function Joke(props) {

    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(prevState => !prevState)
    }

    return (
        <div>
            <p>{props.setup}</p>
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
    )
}

export default Joke;