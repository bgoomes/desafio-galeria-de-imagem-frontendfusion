import axios from "axios"
import { useState, useEffect } from "react"

const url = "https://picsum.photos/v2/list"

type imgProps ={
    id: number
    author: string
    width: number
    height: number
    url: string
    download_url: string
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
        <div>
            <h1>Imagens</h1>
            {img.length === 0 ? <p>Carregando...</p> : (
                img.map((img) => (
                    <div key={img.id}>
                        <div className="w-[400px] h-[400px] border ">
                            <img src={img.url} alt="" />
                        </div>
                        <p>{img.author}</p>
                        <small>{img.width}</small>
                        <small>{img.height}</small>
                    </div>
                ))
            )}
        </div>
    )
}
