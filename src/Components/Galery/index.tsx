import { useState, useEffect } from "react"
import { Foto } from "../ui/fotos"
import api from "../../api"

type imgProps ={
    id: number
    author: string
    url: string
    download_url: string
    isFav?: boolean
}


export function Galery(){
    const [img, setImg] = useState<imgProps[]>([])
    const [favorite, setFavorite] = useState<imgProps[]>([])
    
    useEffect(() => {
        api.get('/').then(({data}) => {
            setImg(data)
        }).catch((erro) => {console.log(erro)})
    }, [])

    function handlefavorite(){
        alert('clicou aqui!')
    }

    return (
        <div className="w-full pt-40">
            <div className="max-w-[1980px] m-auto flex flex-col gap-10 p-4 items-center justify-center">
                <h1 className="text-2xl font-semibold">Imagens</h1>
                <div className="flex flex-wrap gap-10 justify-center">
                    {img.length === 0 ? <h1 className="animate-pulse">Carregando...</h1> : (
                        img.map((item) => (
                            <Foto key={item.id} author={item.author} url={item.download_url} onClick={handlefavorite}/>
                        ))
                    )}
                    
                </div>
            </div>
            
        </div>
    )
}
