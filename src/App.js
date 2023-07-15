import logo from './logo.svg';
import './assets/css/styles.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
function App() {
  return (
    <div className="App">      
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
