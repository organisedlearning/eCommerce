import React,{useState,useEffect} from 'react';
import axios from "axios";

export default function App() {
    const [quotes,setQuotes]= useState("");
    useEffect(()=>{
fetch();
//setQuotes(res.data.slip);

    },[])
     const  fetch=() =>axios.get("https://api.adviceslip.com/advice").then((res)=>setQuotes(res.data.slip.advice))
     console.log(quotes);
        //console.log(res.data.slip)
        const handleQuotes=()=>{
            fetch();
        }
        return (
        <div className="Main">
            <h1 className="Heading"> Today's Quotes</h1>
            <h3 className="Quotes">!!! {quotes} !!!</h3>
            <div className="Button"> <button  className="btn"onClick={handleQuotes}> Get Quotes</button></div>
        </div>
    )
    }
