import React from 'react'
import '../css/styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

//myApp _app.js é a pagina que carrega antes de cada página
const MyApp = ({ Component, pageProps }) => { //recebe os componentes a as propriedades da página
  return (
    <div>
      <Header />
      <div className='container mx-auto'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp