
import './App.css';

function GreetingElement() {
    const greeting='Covid Data'
  return (
      <body style={{backgroundcolor:'black', color:'white'}}> 
    <div className="App">
    <h1>{greeting}</h1>
    </div>
    </body>
  );
}

export default GreetingElement;
