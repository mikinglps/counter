import './App.css';
import {useEffect, useRef, useState} from 'react';

function App() {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState([]);
  const [gruposState, setGruposState] = useState([]);
  const gruposArr = [];
  const ref = useRef();
  const amount = 36;
  const arr = [];

  const updateValue = () => {
    let grupo;
    if(value > 36){
      window.alert("Número maior que 36."); 
      return
    }
    localStorage.setItem(String(value), Number(localStorage.getItem(value)) + 1 )
    if(value > 0 && value <= 6){
      grupo = 0;
    }else if(value > 6 && value <= 12){
      grupo = 1
    }else if(value > 12 && value <= 18){
      grupo = 2;
    }else if(value > 18 && value <= 24){
      grupo = 3;
    }else if(value > 24 && value <= 30){
      grupo = 4;
    }else if(value > 30 && value <= 36){
      grupo = 5
    }

    for(let i = 0; i < 6; i++){
      if(i != grupo){
        localStorage.setItem("grupos"+String(i), Number(localStorage.getItem("grupos"+String(i))) + 1);
      }
    }
  }
  
  const clear = () => {
    localStorage.clear();
  }

  
  useEffect(() => {
    if(loading){
      if(gruposState.length > 0 && values.length > 0){
        setLoading(false)
      }
    }
  }, [values, gruposState])


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
    
    const grupos = []
    for(let i = 0; i < 6; i++){
      grupos.push(localStorage.getItem("grupos"+String(i)));
      if(localStorage.getItem("grupos"+String(i)) == null || localStorage.getItem("grupos"+String(i)) == undefined){
        console.log("Sim");
        localStorage.setItem("grupos"+String(i), 0);
      }
    }
      setGruposState(grupos)
  }
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
        <button onClick={() => {updateValue()}}>Confirmar</button><button onClick={() => clear()}>Limpar</button>
      </form>
      </div>
      <div className='grupos'>
        {(() => {
          for(let i = 0; i < 6; i++){
            gruposArr.push(
              <div className='singleGrupo'>
                <h2>Grupo {i + 1}: {localStorage.getItem("grupos"+String(i))}</h2>
              </div>
            )
          }
          return gruposArr;
        })()}
      </div>
      <div className='numbers'>
      
      {(() => {
            for (let i = 0; i <= amount; i++) {

                arr.push(
                  <div className='single' style={i % 2 == 0 ? {backgroundColor: 'black', color: 'white'} : {backgroundColor: 'red', color: 'white'} }>
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
