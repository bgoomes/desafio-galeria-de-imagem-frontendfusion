import axios from "axios"
import { useState, useEffect } from "react"
import { Foto } from "../ui/fotos"

const url = "https://picsum.photos/v2/list"

type imgProps ={
    id: number
    author: string
    url: string
    isFav?: boolean
}


export function Galery(){
    const [img, setImg] = useState<imgProps[]>([])
    
    async function getImg(){
        try {
            const response = await axios.get(url)
            const data = response.data
            setImg(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getImg()
    }, [])

    return (
        <div className="w-full pt-40">
            <div className="max-w-[1980px] m-auto flex flex-col gap-10 items-center justify-center">
                <h1 className="text-2xl font-semibold">Imagens</h1>
                <div className="flex flex-wrap gap-6 justify-center">
                    {img.length === 0 ? <h1 className="animate-pulse">Carregando...</h1> : (
                        img.map((item) => (
                            <Foto key={item.id} author={item.author} url={item.url} />
                        ))
                    )}
                </div>
            </div>
            
        </div>
    )
}
