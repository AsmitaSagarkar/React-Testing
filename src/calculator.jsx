import { useState } from "react";

const Calculator = () =>{

    const [num1,setNum1] = useState();
    const [num2,setNum2] = useState();
    const [result,setResult] = useState();
    
    function handleNum1(e){
        setNum1(Number(e.target.value));
    }
    function handleNum2(e){
        setNum2(Number(e.target.value));
    }
    function add(){
        const res = num1+num2;
        setResult(res);
    }

    return (
        <>
        <label> Number 1 
        <input 
        type="number" 
        placeholder="enter first number"
        value={num1} 
        onChange={handleNum1}
        
        /></label>

        <label> Number 2 
        <input 
        type="number"
        placeholder="enter second number"
        value={num2} 
        onChange={handleNum2}
        /> </label>

        <button onClick={add}>Add</button>
        <h1>Result is : {result}</h1>
        
        </>
    )

}
export default Calculator;