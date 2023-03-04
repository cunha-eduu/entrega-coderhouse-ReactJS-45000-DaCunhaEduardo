import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer'
import Cart from './Pages/Cart/Cart'
import CartProvider from './context/CartProvider'

function App() {
  return (
        <main className='app'>
          <BrowserRouter>
            <CartProvider>
              <NavBar cartwidgedt={CartWidget}/>
              <Banner />
              <Routes>
                  <Route path='/' element={<ItemListContainer greeting={'Bienvenido(a) a MedShop! El portal de Equipos Médicos más grande de La Argentina'} descuento={'La calidad de MedShop con un 30%OFF para estudiantes de Medicina'}/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                  <Route path='/item/:id' element={<ItemDetailContainer />}/>
                  <Route path='/cart' element={<Cart/>}/>
              </Routes>
              <Footer />
            </CartProvider>
          </BrowserRouter> 
        </main>
  );
}

export default App;
