import { useState } from 'react';
import './App.css';
import GameWrapper from './components/GameWrapper';
import useFetch from './components/useFetch';
import GamePopup from './components/GamePopup';
import TermsAndConditions from './components/TermsAndCondtions';


function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const guid = queryParams.get('guid');
  const [guidValue, setGuidValue] = useState(guid);
  const {data: claim} = useFetch("http://localhost:8000/claim");

  
  
  const claimRequest = (claim) => {
    const host = window.location.origin;
    const url = host + '/claim/random?guid=' + guid;
    let claimStatus = "";

    claim.map((i) => {
      claimStatus = i.status
    })

    return claimStatus;
  }

  return (
    <div className="App">
      {claim && <GameWrapper claimStatus={claimRequest(claim)}/>}
      {claim && <GamePopup claimStatus={claimRequest(claim)}/>}
      <TermsAndConditions/>
    </div>
  );
}

export default App;
