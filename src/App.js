import React from 'react'
import Search from './Search';

function App() {
  const library = [
            {name:"Backbone.js"},
            {name:"Javascript"},
            {name:"Node.js"},
            {name:"React.js"},
            {name:"Angular.js"},
            {name:"Zenatix gur"},
            {name:"Zenatix gurgaon"},
            {name:"Zenatix gurgaon address"},
            {name:"Zenatix sikanderpur,sector 26,gurgaon"}
]

  return (
    <div className="App">
      
      <Search library={library} />
    </div>
  );
}

export default App;
