import CartWidget from "./CartWidget"
import Footer from "./Footer"
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import Main from "./Main"


const App = () => {
  return (
    <>
      <Header/>
      <CartWidget/>
      <Main/>
      <ItemListContainer greeting = "Bienvenidos a Milo: Estética a Domicilio"/>
      <Footer/>
    </>
  )
  }

export default App;
