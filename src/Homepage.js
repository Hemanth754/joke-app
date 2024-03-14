import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap"
import "./homepage.css"






const HomePage = () =>{
    const [jokeData ,setJokeData] = useState([]) 
    
    useEffect(()=>{
        const fetchData = async () => {
            const url = "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10 "
            const data = await fetch(url)
            const sample = await data.json()
            console.log(sample)
            setJokeData(sample.jokes)
        }
        fetchData()
        
    },[])
    return(
        <div className="joke-container">
            <Table striped bordered>
                <thead>
                    <tr>
                        <th id="joke-header">Jokes</th>
                    </tr>
                </thead>
            <tbody>
                {
                    jokeData.map(eachJoke =>(<tr key={eachJoke.id}> <td>{eachJoke.joke}</td></tr>))
                }

            </tbody> 
        </Table>
    
            
        
        </div>
    )
}

export default HomePage 





