import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../api";

export const FavContext = createContext({} as isProvaider)

type imgProps ={
    id: number
    author: string
    download_url: string
}

interface isProvaider  {
    img: imgProps[]
    favorite: imgProps[]
    addFav: (id: number) => void
}

type iProps ={
    children: ReactNode
}
 

export function FavProvider({children}: iProps){
    const [img, setImg] = useState<imgProps[]>([])
    const [favorite, setFavorite] = useState<imgProps[]>([])

    useEffect(() => {
        const favIamge = localStorage.getItem('@Favoritos')
        if(favIamge) setFavorite(JSON.parse(favIamge))
    }, [])

    useEffect(() => {
        api.get('/').then(({data}) => {
            setImg(data)
        }).catch((erro) => {console.log(erro)})
    }, [])

    function addFav(id: number){
        const imageToAdd = img.find(image => image.id === id);
        if (imageToAdd && !favorite.some(fav => fav.id === id)) {
            setFavorite((prevFavorites) => [...prevFavorites, imageToAdd]);
            localStorage.setItem("@Favoritos", JSON.stringify([...favorite, imageToAdd]));
        }else {
            alert('imagem já salva!')
        }
    }
    return (
        <FavContext.Provider value={ { favorite, addFav, img } }>
            {children}
        </FavContext.Provider>
    )
}

