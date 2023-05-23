import axios from 'axios'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import IndexPages from './Pages/IndexPages'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegsiterPage'

axios.defaults.baseURL= 'http://localhost:4000'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
      <Route index element={<IndexPages/>}></Route>
      <Route path='/login' element={<LoginPage></LoginPage>}/>
      <Route path='/register' element={<RegisterPage></RegisterPage>}/>
      </Route>
      
    </Routes>
   
  )
}

export default App
