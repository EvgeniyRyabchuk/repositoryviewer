import './styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from "./components/header";

function App() {
  return (
    <div className="App">
        <Header />
      <FontAwesomeIcon icon={faCoffee} />
    </div> 
  );
}

export default App;
