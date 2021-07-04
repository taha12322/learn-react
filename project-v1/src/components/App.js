import React from 'react';
import Header from './header/header';

import Tabpanels from './navbar/tabpanels'


class App extends React.Component {
  render(){

    
    return(
      <div id='main'>
        <Header/>
        <Tabpanels/>
      </div>
    )
  }

}


export default App