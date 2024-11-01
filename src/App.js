import './App.css';
import Header from "./header/Header";
import Home from "./home/Home"
import AboutMe from './aboutme/Aboutme';
import Classes from './classes/Classes';
import ScheduleForm from './scheduleform/ScheduleForm';

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>      
        <AboutMe/>
        <Classes/>
        <ScheduleForm/>
    </div>
  );
}

export default App;
