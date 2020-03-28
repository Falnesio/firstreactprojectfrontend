import React, { useState } from 'react';
// JSX (JavaScript + XML)

import Header from './Header';

function App() {
    const [counter, setCounter] = useState(0);
// Array [valor, funçãoDeAtualização]
    function increment(){
        setCounter(counter + 1);
        //counter++;
        //console.log(counter);
    }

    return (
/*      <Header>
        Be the Hero
      </Header>  Versão com children*/
      //<Header title="Be the Hero" /> com propriedades
      //<Header /> versão sem propriedades
      <div>
          <Header>Contador: {counter}</Header>
          <button onClick={increment}>Incrementar</button>
      </div>
  );
}

export default App;
