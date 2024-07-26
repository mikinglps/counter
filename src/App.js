import './App.css';
import {useEffect, useRef, useState} from 'react';
import calculateMode from './ModeCalc';

function App() {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState([]);
  const [gruposState, setGruposState] = useState([]);
  const [gruposLeft, setGruposLeft] = useState([]);
  const [oldValue, setOldValue] = useState();
  const [oldGroup, setOldGroup] = useState();
  const [groupsModo, setGroupsModo] = useState();
  const [additionalGroups, setAdditionalGroups] = useState();
  const gruposArr = [];
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
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
      
      localStorage.setItem("additionalGroups0", Number(localStorage.getItem("additionalGroups0")) + 1 )

      if(Number(localStorage.getItem("grupos"+String(grupo))) > 0){

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
            
    
            splitter[49] = localStorage.getItem("grupos"+String(grupo));
  
            localStorage.setItem("grupoholder"+String(grupo), String(splitter));
  
          }else{
            localStorage.setItem("grupoholder"+String(grupo), localStorage.getItem("grupoholder"+String(grupo)) + "," + localStorage.getItem("grupos"+String(grupo)))
          }
        }else{
              localStorage.setItem("grupoholder"+String(grupo), localStorage.getItem("grupos"+String(grupo)));
  
        }
      }
      localStorage.setItem("grupos"+String(grupo), 0);
    }else if(value > 6 && value <= 12){
      grupo = 1;
      localStorage.setItem("additionalGroups1", Number(localStorage.getItem("additionalGroups1")) + 1 )
      if(Number(localStorage.getItem("grupos"+String(grupo))) > 0){

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
            
    
            splitter[49] = localStorage.getItem("grupos"+String(grupo));
  
            localStorage.setItem("grupoholder"+String(grupo), String(splitter));
  
          }else{
            localStorage.setItem("grupoholder"+String(grupo), localStorage.getItem("grupoholder"+String(grupo)) + "," + localStorage.getItem("grupos"+String(grupo)))
          }
        }else{
              localStorage.setItem("grupoholder"+String(grupo), localStorage.getItem("grupos"+String(grupo)));
  
        }
      }
      localStorage.setItem("grupos"+String(grupo), 0);
    }else if(value > 12 && value <= 18){
      grupo = 2;

      localStorage.setItem("additionalGroups2", Number(localStorage.getItem("additionalGroups2")) + 1 )

      if(Number(localStorage.getItem("grupos"+String(grupo))) > 0){

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
            
    
            splitter[49] = localStorage.getItem("grupos"+String(grupo));
  
            localStorage.setItem("grupoholder"+String(grupo), String(splitter));
  
          }else{
            localStorage.setItem("grupoholder"+String(grupo), localStorage.getItem("grupoholder"+String(grupo)) + "," + localStorage.getItem("grupos"+String(grupo)))
          }
        }else{
              localStorage.setItem("grupoholder"+String(grupo), localStorage.getItem("grupos"+String(grupo)));
  
        }
      }
      localStorage.setItem("grupos"+String(grupo), 0);
    }else if(value > 18 && value <= 24){
      grupo = 3;
      localStorage.setItem("additionalGroups3", Number(localStorage.getItem("additionalGroups3")) + 1 )
      if(Number(localStorage.getItem("grupos"+String(grupo))) > 0){

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
            
    
            splitter[49] = localStorage.getItem("grupos"+String(grupo));
  
            localStorage.setItem("grupoholder"+String(grupo), String(splitter));
  
          }else{
            localStorage.setItem("grupoholder"+String(grupo), localStorage.getItem("grupoholder"+String(grupo)) + "," + localStorage.getItem("grupos"+String(grupo)))
          }
        }else{
              localStorage.setItem("grupoholder"+String(grupo), localStorage.getItem("grupos"+String(grupo)));
  
        }
      }
      localStorage.setItem("grupos"+String(grupo), 0);
    }else if(value > 24 && value <= 30){
      grupo = 4;
      localStorage.setItem("additionalGroups4", Number(localStorage.getItem("additionalGroups4")) + 1 )
      if(Number(localStorage.getItem("grupos"+String(grupo))) > 0){

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
            
    
            splitter[49] = localStorage.getItem("grupos"+String(grupo));
  
            localStorage.setItem("grupoholder"+String(grupo), String(splitter));
  
          }else{
            localStorage.setItem("grupoholder"+String(grupo), localStorage.getItem("grupoholder"+String(grupo)) + "," + localStorage.getItem("grupos"+String(grupo)))
          }
        }else{
              localStorage.setItem("grupoholder"+String(grupo), localStorage.getItem("grupos"+String(grupo)));
  
        }
      }
      localStorage.setItem("grupos"+String(grupo), 0);
    }else if(value > 30 && value <= 36){
      grupo = 5;
      localStorage.setItem("additionalGroups5", Number(localStorage.getItem("additionalGroups5")) + 1 )
      if(Number(localStorage.getItem("grupos"+String(grupo))) > 0){

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
            
    
            splitter[49] = localStorage.getItem("grupos"+String(grupo));
  
            localStorage.setItem("grupoholder"+String(grupo), String(splitter));
  
          }else{
            localStorage.setItem("grupoholder"+String(grupo), localStorage.getItem("grupoholder"+String(grupo)) + "," + localStorage.getItem("grupos"+String(grupo)))
          }
        }else{
              localStorage.setItem("grupoholder"+String(grupo), localStorage.getItem("grupos"+String(grupo)));
  
        }
      }
      localStorage.setItem("grupos"+String(grupo), 0);
    }

    localStorage.setItem("oldgrupo", String(grupo))
    localStorage.setItem("oldvalue", String(value))
    

    //if(oldGroup != grupo && oldValue != null){
      
     /* if(localStorage.getItem("grupoholder"+String(grupo)) != 'undefined'){
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
          localStorage.setItem("grupoholder"+String(grupo), localStorage.getItem("grupoholder"+String(grupo)) + "," + oldValue)
        }
      }else{
            localStorage.setItem("grupoholder"+String(grupo), localStorage.getItem("grupos"+String(grupo)));

      }*/

    //}

    for(let i = 0; i < 6; i++){
      if(i != grupo){
        localStorage.setItem("grupos"+String(i), Number(localStorage.getItem("grupos"+String(i))) + 1);
      }
    }

  }

  const limparGrupo = (nmrGrupo) => {
    localStorage.setItem("grupos"+String(nmrGrupo), 0)
    localStorage.setItem("grupoholder"+String(nmrGrupo), 'undefined');
  }
  
  const clear = () => {
    localStorage.clear();
  }

  const calculatePercentage = () => {
    let groups = [];
    for(let i = 0; i < 6; i++){
      if(localStorage.getItem(`additionalGroups${i}`).includes(",")){
        let newArr = localStorage.getItem(`additionalGroups${i}`).split(',')
        for(let a = 0; a < newArr.length; a++){
          groups.push(Number(newArr[a]));
        }
      }else{
        groups.push(Number(localStorage.getItem(`additionalGroups${i}`)))
      }
    }

    let percentages = [];
    let total = 0;
    for(let i = 0; i < groups.length; i++){
      total += groups[i] 
    }

    for(let i = 0; i < groups.length; i++){
      percentages[i] = (groups[i] / total) * 100
    }

    for(let i = 0; i < groups.length; i++){
      localStorage.setItem(`percentages${i}`, Math.trunc(Number(percentages[i])))
    }
    
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

    const additionalGroups = []
    for(let i = 0; i < 6; i++){
      additionalGroups.push(localStorage.getItem("additionalGroups"+String(i)));
      if(localStorage.getItem("additionalGroups"+String(i)) == null || localStorage.getItem("additionalGroups"+String(i)) == undefined){
        localStorage.setItem("additionalGroups"+String(i), 0)
      }
    }

    setAdditionalGroups(additionalGroups)

    const gruposHolder = [];
    for(let i = 0; i < 6; i++){
      gruposHolder.push(localStorage.getItem("grupoholder"+String(i)));
      if(localStorage.getItem("grupoholder"+String(i)) == null || localStorage.getItem("grupoholder"+String(i)) == undefined){
        localStorage.setItem("grupoholder"+String(i), undefined);
      }
    }

    setGruposLeft(gruposHolder);

    const gruposModo = []
    for(let i = 0; i < 6; i++){
      gruposModo.push(localStorage.getItem(`gruposmodo${i}`))
      if(localStorage.getItem(`grupomodo${i}`) == null || localStorage.getItem(`grupomodo${i}`) == undefined){
        localStorage.setItem(`grupomodo${i}`, undefined)
      }
    }

    const percentagesGrupo = [];
    for(let i = 0; i < 6; i++){
      percentagesGrupo.push(localStorage.getItem(`percentages${i}`));
      if(localStorage.getItem(`percentages${i}`) == null || localStorage.getItem(`percentages${i}`) == undefined){
        localStorage.setItem(`percentages${i}`, 0);
      }
    }
    calculatePercentage()
  }else{
    //Mudar a cor do texto
    let l1Array = ref1.current.innerHTML.split(',');
    let newContent;
    let l1MaiorNumero;
    console.log(l1Array);
  for(let i = 0; i < l1Array.length; i++){
    if(l1Array[i] != undefined){
      
    if(l1Array[i] > l1MaiorNumero){
      l1MaiorNumero = l1Array[i];
    }
    if(l1Array[i] === l1MaiorNumero){
      newContent += `<span style="color: yellow">${l1Array[i]}, </span>`
    }else{
      newContent += `<span>${l1Array[i]}, </span>`
    }
    }
  }
    ref1.current.innerHTML = newContent;
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
            <p>Grupo 1: {gruposLeft[0] != 'undefined' ? <span ref={ref1} id="grupoLeft1">{gruposLeft[0]}</span> : null} </p>
            <p>Grupo 2: {gruposLeft[1] != 'undefined' ? <span id="grupoLeft2">{gruposLeft[1]}</span> : null}</p>
            <p>Grupo 3: {gruposLeft[2] != 'undefined' ? <span id="grupoLeft3">{gruposLeft[2]}</span> : null}</p>
            <p>Grupo 4: {gruposLeft[3] != 'undefined' ? <span id="grupoLeft4">{gruposLeft[3]}</span> : null}</p>
            <p>Grupo 5: {gruposLeft[4] != 'undefined' ? <span id="grupoLeft5">{gruposLeft[4]}</span> : null}</p>
            <p>Grupo 6: {gruposLeft[5] != 'undefined' ? <span id="grupoLeft6">{gruposLeft[5]}</span> : null}</p>
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
        <div>
          <p>Grupo 1: {localStorage.getItem("percentages0") == NaN ? null : localStorage.getItem("percentages0")}%</p>
          <p>Grupo 2: {localStorage.getItem("percentages1") == NaN ? null : localStorage.getItem("percentages1")}%</p>
          <p>Grupo 3: {localStorage.getItem("percentages2") == NaN ? null : localStorage.getItem("percentages2")}%</p>
          <p>Grupo 4: {localStorage.getItem("percentages3") == NaN ? null : localStorage.getItem("percentages3")}%</p>
          <p>Grupo 5: {localStorage.getItem("percentages4") == NaN ? null : localStorage.getItem("percentages4")}%</p>
          <p>Grupo 6: {localStorage.getItem("percentages5") == NaN ? null : localStorage.getItem("percentages5")}%</p>
          <p>MODO G1: {String(calculateMode(localStorage.getItem("grupoholder0")))}</p>
          <p>MODO G2: {String(calculateMode(localStorage.getItem("grupoholder1")))}</p>
          <p>MODO G3: {String(calculateMode(localStorage.getItem("grupoholder2")))}</p>
          <p>MODO G4: {String(calculateMode(localStorage.getItem("grupoholder3")))}</p>
          <p>MODO G5: {String(calculateMode(localStorage.getItem("grupoholder4")))}</p>
          <p>MODO G6: {String(calculateMode(localStorage.getItem("grupoholder5")))}</p>
        </div>
      </div>
    </div>
    </div>
  );
}
}

export default App;
