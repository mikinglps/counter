import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState([]);
  const amount = 36;
  const arr = [];

  const updateValue = () => {
    if(value > 36){
      window.alert("Número maior que 36."); 
      return
    }
    localStorage.setItem(String(value), Number(localStorage.getItem(value)) + 1 )
  }

  
  useEffect(() => {
    if(loading){
      setLoading(false)
    }
  }, [values])


  useEffect(() => {
    if(loading){
    const newArr = []
    for(let i = 0; i <= amount; i++){
      newArr.push(localStorage.getItem(String(arr[i])))
      if(localStorage.getItem(String(newArr[i])) == null || localStorage.getItem(String(newArr[i])) == undefined){
        localStorage.setItem(String(newArr[i]), 0);
      }
    }
      setValues(newArr)
    }
    setLoading(false);
  },[loading])

  if(loading){
    return <div>Loading...</div>
  }else{

  return (
    <div className="App">
      <div className="holder">
      <h2>Adicionar Número</h2>
      <form>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={() => updateValue()}>Confirmar</button>
      </form>
      </div>
      <div className='numbers'>
      {(() => {
            
            for (let i = 0; i <= amount; i++) {
                arr.push(
                  <div className='single'>
                    <h2>{i}</h2>
                    <p>{localStorage.getItem(String(i))}</p>
                  </div>
                );
            }
            return arr;
        })()}
      </div>
    </div>
  );
}
}

export default App;
