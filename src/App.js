import React, {useState} from 'react';
import Outcomechart from './Outcomechart';
import Crimeschart from './Crimeschart';

function App() {
  const [outcome, setOutcome] = useState('SouthWales')
  const [crimes, setCrimes] = useState('Cathays')

  function inputOutcome(e){
    setOutcome(e.target.value);
  };
  function inputCrimes(e){
    setCrimes(e.target.value);
  };
  return (
    <div className="App">
      <form>
        <div className='question'>
            <h3 className='qs'>Choose your local police force</h3>
            <select value={outcome} onChange={inputOutcome} id="dropdown">
              <option value="SouthWales">South Wales</option>
              <option value="DyfedPowys">Dyfed Powys</option>
              <option value="NorthWales">North Wales</option>
              <option value="Merseyside">Merseyside</option>
            </select>
         </div>
         <Outcomechart outcomes={outcome}/>
         <div className='question'>
             <h3 className='qs'>Choose your neighbourhood</h3>
             <select value={crimes} onChange={inputCrimes} id="dropdown">
               <option value="Cathays">Cathays</option>
               <option value="ChurchVillage">Church Village</option>
               <option value="Taffs Well">Taffs Well</option>
             </select>
          </div>
          <Crimeschart crimes={crimes}/>
      </form>
    </div>
  );
}

export default App;
