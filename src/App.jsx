import './App.css';
import car from './pics/y-car.jpg';

function App() {
  return (
    <div className="app">

      <div className="header">
        <p>AM Cars</p>
      </div>



      <div className="box2">
        <h2>NYA BILAR</h2>
        <div className="card-holder">
          
          <div className="car-card">
            <div className="car-pic">
              {/* <img scr={car} alt="Hallååå"/> */}
            </div>
            <h4>Car Name</h4>
          </div>
          <button>Se bilar</button>

        </div>
      </div>

      <div className="box3">
        <div className="infoHolder">
          <h2>Vår historia</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>

      <div className="footer">
        <p>"Lorem ipsum dolor sit ameut labore et dolore magna aliqua."</p>
      </div>
    </div>
  );
}

export default App;
