import React,{useMemo} from 'react'

export default function App() {

  const [number ,setNumber]=React.useState(0)
const calcNumber = useMemo(()=>verySlowCalculation(number),[number])
const[count,setCount]=React.useState(10)


function verySlowCalculation (number){
for(let i =0;i<1_000_000_000;i++){
number +=i

}
return number
}

function decrement (){
  setCount(count-1)
}
function increment (){
  setCount(count+1)
}

  return (
    <div>


<input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />



      {calcNumber}

      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  )
}
