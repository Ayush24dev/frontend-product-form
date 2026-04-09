import react from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import Signups from './Component/signup'
import Login from './Component/Login'
import { Dashboard } from './Component/Dashboard'
import Productform from './Component/Productform'

function App() {
    

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Signups />} />
            <Route path='/signup' element={<Signups />} />
            <Route path='/login' element={<Login />} />
            <Route path='/board' element={<Dashboard/>} />
            <Route path='/product' element={<Productform/>} />

        </Routes>

        </BrowserRouter>
        </>
    )

}

export default App;