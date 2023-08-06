import React from 'react'
import Loading from './components/ui/Loading'
import Error from './components/ui/Loading'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { useState } from 'react'

const App = () => {
  const[isLoading,setIsLoading]= useState(false)
  return (
    <main className=''>
      { isLoading && <Loading/>}
      <NavBar/>
      <Footer/>
    </main>
  )
}

export default App