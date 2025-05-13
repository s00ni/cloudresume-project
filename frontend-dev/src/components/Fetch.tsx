import "../index.css"
import {useState, useEffect} from 'react'

const Fetch = () => {
    const[counter,setCounter] = useState ({visitor_count:""});
    useEffect (()=> {
        fetch('https://l7241ivbyh.execute-api.us-east-1.amazonaws.com/development/subpath/', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({}) //request body
          })
        .then(res => {
            return res.json();
        })
        .then(data=> {
            console.log(data);
                setCounter(data);
        });
    }, []);
    useEffect(() => {
        console.log('Updated state:', counter);
      }, [counter]);
      
    return (
        <span>
            {counter.visitor_count}
        </span>
      );
    };
    export default Fetch