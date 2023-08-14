import React from 'react'
import Loading from './components/ui/Loading'
import {Footer,Card,NavBar,Error} from './components'

import { useState } from 'react'

const App = () => {
  const[isLoading,setIsLoading]= useState(false)
  return (
    <main className=''>
      { isLoading && <Loading/>}
      <NavBar/>
      <Card>
         <h1 className=''>ASD</h1>
      </Card>
      <Footer/>
    </main>
  )
}

export default App