import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Jason!"
  const students = ["Jason", "Also Jason", "Still Jason"]
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      {students.map((student) => (
        <>
          <h2 key={student}>{student}</h2>
          <button onClick={() => console.log({student})}>Click me</button>
        </>
      ))}
    </div>
  );
}

export default App;
