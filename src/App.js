import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import Contacto from './components/Pages/Contacto'
import Productos from './components/Pages/Productos'
import Nosotros from './components/Pages/Nosotros'
import CartWidget from './components/CartWidget/CartWidget'

function App() {
  return (
        <div className='app'>
            <NavBar cartwidgedt={CartWidget}/>
            <Banner />
            <ItemListContainer greeting={'Bienvenido(a) a MedShop! El portal de Equipos Médicos más grande de La Argentina'}/>
            <Footer /> 
        </div>
  );
}

export default App;
