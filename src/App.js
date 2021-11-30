import './App.css';
import { Component } from 'react';
import { Card } from 'pipeline-ui';
import AlgoDonate from './AlgoDonation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card bg={"#e8e8e8"} width={"auto"} maxWidth={"750px"} mx={"auto"} my={3} p={0} pb={3} px={3}>
          {/* Success Message & Output Transaction ID */}
          <AlgoDonate 
            receiverAddress="2OWDII7AOVTNHA4YRFUGTUITOW62UAAQ7L7WJX7AXY34JZVBYFU65T7MV4"
          />
        </Card>
        
      </div>
    );
  }
}


export default App;
