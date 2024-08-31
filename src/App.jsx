import './App.css'
import Header from './layout/Header'
import Banner from './layout/Banner'
import Depoimentos from './layout/Depoimento'
import Footer from './layout/Footer'
import Produto from './layout/Produto'
import Historia from './layout/Historia'
import Resumo from './layout/Resumo'
import Loja from './layout/Loja'


function App() {
  return (
    <>
      <Header />
      <Banner />
      <Produto />
      <Historia />
      <Resumo />
      <Loja />
      <Depoimentos />
      <Footer />
    </>
  )
}

export default App