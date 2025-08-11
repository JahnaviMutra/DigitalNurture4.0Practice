import React from 'react';
import { ListofPlayers, Scorebelow70 } from './ListofPlayers';
import { OddPlayers, EvenPlayers, IndianPlayersMerged, ListofindianPlayers } from './IndianPlayers';

function App() {

  const flag = false; 

  return (
    <div>
      {flag === true ? ( 
        <div>
          <h1>List of Players</h1>
          <ListofPlayers />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          <Scorebelow70 />
        </div>
      ) : ( 
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          <OddPlayers team={['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6']} />
          <hr />

          <h1>Even Players</h1>
          <EvenPlayers team={['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6']} />
          <hr />
          <h1>List of Indian Players Merged:</h1>
          <ListofindianPlayers IndianPlayers={IndianPlayersMerged} />
        </div>
      )}
    </div>
  );
}

export default App;