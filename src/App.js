import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="ApP">
      {/* <h2 className='position' style={{ paddingLeft: '75px', border: '5px solid red', marginLeft: "550px", marginRight: "500px", marginTop: "560px" }} >Here As my wish</h2> */}


      <Navbar></Navbar>
      <h2 className='position' style={{ textAlign: "center" }}>Here As my wish</h2>
    </div >
  );
}

export default App;
