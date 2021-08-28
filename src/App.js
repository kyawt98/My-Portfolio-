import React from 'react'
import Home from './components/home/index'
import Loading from './components/common/Loading'
import { useState, useEffect } from 'react'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
      <>
        {loading ? <Loading/> : <Home />}
      </>
  )
  
}

export default App
