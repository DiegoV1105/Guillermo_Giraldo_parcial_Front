import React, { useState } from 'react';
import Form from "./components/Form";
import CardComponent from './components/CardComponent';

const App = () => {
  const [name, setName] = useState('');
  const [music, setMusic] = useState('');
  const [readyCard, setReadyCard] = useState(false);

  return (
    <div className="App" style={{
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Form name={name} setName={setName} music={music} setMusic={setMusic} setReadyCard={setReadyCard} />
      {readyCard && <CardComponent name={name} music={music}/>}
    </div>
  );
}

export default App;
