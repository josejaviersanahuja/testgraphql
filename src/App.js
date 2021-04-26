import './App.css';
import Chars from './components/Chars'
import {useState} from 'react'

function App() {
  const [page, setpage] = useState(1)
  const prevPage =()=>{
    if (page>1) {
      setpage(current=>current-1)
    }
  }
  return (
    <div className="App">
       <img src="https://th.bing.com/th/id/Rd3d7c803299f43718bcc0ffc64e4d81f?rik=gnoj9qrtkPPz7A&pid=ImgRaw" className="App-logo" alt="logo" />
        <p>
          Rick & Morty 
        </p>
        <div>
          <button onClick={prevPage}>Previous page</button>
          <button onClick={()=> setpage(current=>current+1)}>Next page</button>
        </div>
      <div className="App-header">
          
          <Chars page={page}/>
          
      </div>
      <button onClick={()=> setpage(current=>current+1)}>Next page</button>
    </div>
  );
}

export default App;
