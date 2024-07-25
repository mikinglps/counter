import './App.css';
import {useEffect, useRef, useState} from 'react';

function App() {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState([]);
  const [gruposState, setGruposState] = useState([]);
  const [gruposLeft, setGruposLeft] = useState([]);
  const [oldValue, setOldValue] = useState();
  const [oldGroup, setOldGroup] = useState();
  const gruposArr = [];
  const ref = useRef();
  const amount = 36;
  const arr = [];

  const updateValue = async () => {
    
    let grupo;
    if(value > 36 || value == undefined || value == null){
      window.alert("Número maior que 36, ou nenhum número foi adicionado."); 
      return
    }
    

    localStorage.setItem(String(value), Number(localStorage.getItem(value)) + 1 )
    if(value > 0 && value <= 6){  
      grupo = 0;
      localStorage.setItem("grupos"+String(grupo), 0);
    }else if(value > 6 && value <= 12){
      grupo = 1;
      localStorage.setItem("grupos"+String(grupo), 0);
    }else if(value > 12 && value <= 18){
      grupo = 2;
      localStorage.setItem("grupos"+String(grupo), 0);
    }else if(value > 18 && value <= 24){
      grupo = 3;
      localStorage.setItem("grupos"+String(grupo), 0);
    }else if(value > 24 && value <= 30){
      grupo = 4;
      localStorage.setItem("grupos"+String(grupo), 0);
    }else if(value > 30 && value <= 36){
      grupo = 5;
      localStorage.setItem("grupos"+String(grupo), 0);
    }

    localStorage.setItem("oldgrupo", String(grupo))
    localStorage.setItem("oldvalue", String(value))
    

    if(oldGroup != grupo && oldValue != null){
      
      if(localStorage.getItem("grupoholder"+String(grupo)) != 'undefined'){
        let splitter = localStorage.getItem("grupoholder"+String(grupo)).split(',')
        if(splitter.length == 50){
          let old = splitter[49] //Armazena o último valor do array
          let temp; //Variavel temporária
          for(let i = 49; i >= 0; i--){
                if(i == 0){
                  temp = splitter[i + 1] //Se for 0, pra não acessar o valor -1, ele pega o valor de [1]
                }else{
                temp = splitter[i - 1] //Se não for 0, ele pega o valor anterior da variavel para ser mudada
                }
                splitter[i - 1] = old //Variavel a ser mudada. Precisa ser armazenada antes, para não perde-la
                old = temp; //Muda o valor de old, para usar o antigo número, não o novo.
              }
          
  
          splitter[49] = oldValue;
  
          localStorage.setItem("grupoholder"+String(grupo), String(splitter));
        }else{
          localStorage.setItem("grupoholder"+String(oldGroup), localStorage.getItem("grupoholder"+String(oldGroup)) + "," + oldValue)
        }
    }else{
        localStorage.setItem("grupoholder"+String(oldGroup), oldValue);
      }

    }

    for(let i = 0; i < 6; i++){
      if(i != grupo){
        localStorage.setItem("grupos"+String(i), Number(localStorage.getItem("grupos"+String(i))) + 1);
      }
    }
  }

  const limparGrupo = (nmrGrupo) => {
    localStorage.setItem("grupos"+String(nmrGrupo), 0)
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
      setOldValue(localStorage.getItem("oldvalue"));
      setOldGroup(localStorage.getItem("oldgrupo"));
      console.log(localStorage.getItem("oldvalue"))


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
        localStorage.setItem("grupos"+String(i), 0);
      }
    }
      setGruposState(grupos)

    const gruposHolder = [];
    for(let i = 0; i < 6; i++){
      gruposHolder.push(localStorage.getItem("grupoholder"+String(i)));
      if(localStorage.getItem("grupoholder"+String(i)) == null || localStorage.getItem("grupoholder"+String(i)) == undefined){
        localStorage.setItem("grupoholder"+String(i), undefined);
      }
    }

    setGruposLeft(gruposHolder);

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
        <div className='buttonGrupo'>
          <button onClick={() => limparGrupo(0)}>Limpar Grupo 1</button>
          <button onClick={() => limparGrupo(1)}>Limpar Grupo 2</button>
          <button onClick={() => limparGrupo(2)}>Limpar Grupo 3</button>
          <button onClick={() => limparGrupo(3)}>Limpar Grupo 4</button>
          <button onClick={() => limparGrupo(4)}>Limpar Grupo 5</button>
          <button onClick={() => limparGrupo(5)}>Limpar Grupo 6</button>
        </div>
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
      <div className='holder-numbers'>
        <div className='left'>
          <div className='grupos-2'>
            <p>Grupo 1: {gruposLeft[0] != 'undefined' ? gruposLeft[0] : null}</p>
            <p>Grupo 2: {gruposLeft[1] != 'undefined' ? gruposLeft[1] : null}</p>
            <p>Grupo 3: {gruposLeft[2] != 'undefined' ? gruposLeft[2] : null}</p>
            <p>Grupo 4: {gruposLeft[3] != 'undefined' ? gruposLeft[3] : null}</p>
            <p>Grupo 5: {gruposLeft[4] != 'undefined' ? gruposLeft[4] : null}</p>
            <p>Grupo 6: {gruposLeft[5] != 'undefined' ? gruposLeft[5] : null}</p>
          </div>
        </div>
      <div className='numbers'>
      
      {(() => {
            for (let i = 0; i <= amount; i++) {

                arr.push(
                  <div className='single' style={i % 2 == 0 ? {backgroundColor: 'black', color: 'white'} : {backgroundColor: 'rgb(156,28,21)', color: 'white'} }>
                    <h2>{i}</h2>
                    <p>{localStorage.getItem(String(i))}</p>
                  </div>
                  
                );
            }
            return arr;
        })()}
      </div>
      <div className='right'>

      </div>
    </div>
    </div>
  );
}
}

export default App;
