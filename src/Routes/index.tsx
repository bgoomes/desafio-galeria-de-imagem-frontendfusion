import { Route, Routes } from 'react-router'

import { App } from '../App'
import { Galery } from '../Components/Galery'
import { Favoritos } from '../Components/Favoritos'
import { FavProvider } from '../Contexts/FavContext'


export function AppRoutes(){
    return (
        <FavProvider>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/' element={<Galery />}/>
                <Route path='/favoritos' element={<Favoritos  />} />
            </Route>
        </Routes>
        </FavProvider>
    )
}