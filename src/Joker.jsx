import { useState, useEffect } from "react";
import "./Joker.css"

export default function Joker(){
    let[joke, setJoke]= useState({});

    const URL =" https://official-joke-api.appspot.com/random_joke"

    const getnewJoke =async()=>{
        let response = await fetch(URL)
        let jsonResponse = await response.json();
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
    }

    useEffect(()=>{
        async function getFirstJoke(){
        let response = await fetch(URL)
        let jsonResponse = await response.json();
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
     }
     getFirstJoke();
    }, []);

    
    return (
        <div className="joker-container">
            <h3 className="joker-title">Joker!</h3>
            <div className="joke-content">
                <h2 className="joke-setup">{joke.setup}</h2>
                <h2 className="joke-punchline">{joke.punchline}</h2>
            </div>
            <button className="new-joke-button" onClick={getnewJoke}>New Joke</button>
        </div>
    )
}
