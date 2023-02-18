import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
        <div className='app'>
          <BrowserRouter>
            <NavBar cartwidgedt={CartWidget}/>
            <Banner />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Bienvenido(a) a MedShop! El portal de Equipos Médicos más grande de La Argentina'} descuento={'Nuestros productos más vendidos con un 30%OFF'}/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                <Route path='/item/:id' element={<ItemDetailContainer />}/>
            </Routes>
            <Footer />
          </BrowserRouter> 
        </div>
  );
}

export default App;
