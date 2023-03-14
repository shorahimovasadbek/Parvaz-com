import {Outlet} from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/ui/Navbar/Navbar'
import Footer from './components/ui/footer/Footer'
import Weather from './components/ui/Weather/Weather';
import Foss from './components/ui/Foss/Foss';
function App() {
  return (
    <div >
      <Foss/>
      {/* <Nav/>
      <Outlet/>
      <Footer/> */}
    </div>
  );
}
export default App;

