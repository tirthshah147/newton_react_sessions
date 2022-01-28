import logo from './logo.svg';
import './App.css';
import Pushpa from './components/Pushpa/Pushpa';
import ContextProvider from './context/ContextProvider';

function App() {
  
  return (
    <div className="App">
      <ContextProvider>
          <Pushpa/>
      </ContextProvider> 
    </div>
  );
}

export default App;
