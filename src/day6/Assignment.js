
function ProblemOne() {
  const [number, setNumber] = useState(0);

  const updateNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div>
      <button onClick={updateNumber}>Generate random number</button>
      
            <h1>Number</h1>
         
        
            <h3>{number}</h3>
         
     
    </div>
  );
}



// ----------------------------------------------------------------------------------------------------------


function ProblemTwo() {
  const [logs, setLogs] = useState([]);

  const handleMouseEnter = () => {
    const now = new Date().toLocaleString();
    setLogs((prevLogs) => [...prevLogs, { time: now, eventName: 'Mouse entered h1' }]);
  };

  const handleMouseLeave = () => {
    const now = new Date().toLocaleString();
    setLogs((prevLogs) => [...prevLogs, { time: now, eventName: 'Mouse left h1' }]);
  };

  return (
    <div>
      <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Hover over me!</h1>
      <h2>Logs:</h2>
      
     <h4>Time  {'\u00A0'.repeat(35)}   Event</h4>
     
 
        
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.time}</td>
              <td>{log.eventName}</td>
            </tr>
          ))}
       
    </div>
  );
}









// ----------------------------------------------------------------------------------------------------------


function ProblemThree() {
  const [greetings, setGreetings] = useState(['Hello', 'Hola', 'Bonjour', 'Konnichiwa']);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  const handleButtonClick = () => {
    setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
  };

  return (
    <div>
      <h1>{greetings[currentGreetingIndex]}</h1>
      <button onClick={handleButtonClick}>Next Greeting</button>
    </div>
  );
}