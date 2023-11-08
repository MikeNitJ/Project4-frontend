import { useEffect, useState } from "react"
import LetsHang from "./LetsHang"
import Popup from "./Popup"
import { updateAction } from "../actions"

export default function Hangman () {
    
    const alphabets =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]  

    const [word, setWord] = useState({
        word: "",
        category: "",
        hint: "",
      });
    const [corrects,setCorrects] = useState([])
    const [incorrects,setIncorrects] = useState([])
    const [gameStatus,setGameStatus] = useState('')
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    
 
    const fetchWordFromAPI = async () => {
        try {
          const response = await fetch("https://www.wordgamedb.com/api/v1/words/random");
          if (response.ok) {
            const data = await response.json();
            setWord({
                word: data.word.toUpperCase(),
                category: data.category,
                hint: data.hint,
              });
            
            setScore(0)
          } else {
            console.error("Failed to fetch word from the API");
          }
        } catch (error) {
          console.error("Error fetching word from the API:", error);
        }
      };


    const onGuess = letter => {
        if (word.word.includes(letter)){
            setCorrects([...corrects,letter])
            setScore(score + 10);
        }else{
            setIncorrects([...incorrects,letter])
            setScore(score - 1);
     }
    }

    const reset = () => {
        fetchWordFromAPI();
        setCorrects([])
        setIncorrects([])
        setGameStatus('')
        if(score >= bestScore){
            setBestScore(score)
        }

    }




    
    useEffect(() => {
        fetchWordFromAPI(); // Fetch the initial word when the component mounts
        }, []); // Empty dependency array means it only runs once when the component mounts


    useEffect(() => {
        if (corrects.length &&word.word.split("").every((letter) => corrects.includes(letter))
      )
            setGameStatus("Win")
           
        }, [corrects])

    useEffect(() => {
        if (incorrects.length === 10)
            setGameStatus("Lose")
    })



    const updateBestScore = async () => {
        if (score >= bestScore) {
          // Call your updateAction function here to update the bestScore in your backend
          // Replace 'name' and 'score' with the appropriate field names in your backend
          const response = await updateAction({
            request: new FormData(),
            // params: { id: /* specify your score ID here */ },
          });
    
          // You can handle the response or add error handling as needed
        }
      };

      
    const hideWord = word.word.split('').map(letter => corrects.includes(letter) ? letter : "_").join(" ")
            
    
    console.log(word.word);
    console.log(incorrects);
    console.log(corrects);
    return <div>
        <p className="hide">{hideWord}</p>
        <p>Score: {score}</p>
        <p> Hint : {word.hint}</p>
        <p>Best Score: {bestScore}</p>
        <button className="button-44" onClick={() => (window.location.href = 'http://localhost:3000/scoreboard')}>Score Board</button>        
        <div >
          <div className="button-container">
            {alphabets.map((letter,index) => 
              <button className="button-43" disabled = {corrects.includes(letter) || incorrects.includes(letter)} onClick = {() => onGuess(letter)} key={index}>{letter}</button>)}
              <LetsHang incorrects = {incorrects.length}/>
              <Popup gameStatus={gameStatus} reset ={reset} word ={word.word} score={score} />
            </div>
        </div>

    </div>
}
    