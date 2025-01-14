import { Route, Routes } from 'react-router'

import { App } from '../App'
import { Galery } from '../Components/Galery'
import { Favoritos } from '../Components/Favoritos'


export function AppRoutes(){
    return (
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/' element={<Galery />}/>
                <Route path='/favoritos' element={<Favoritos />} />
            </Route>
        </Routes>
    )
}