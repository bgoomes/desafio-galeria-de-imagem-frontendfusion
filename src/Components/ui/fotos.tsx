import { Heart } from 'lucide-react'

type fotoProps ={
    url?: string
    author?: string
    onClick?: () => void
}




export function Foto({ url, author, onClick}: fotoProps){
    return (
        <div className="w-[400px] h-[300px] overflow-hidden">
            <div className="absolute">
                <img src={url} alt="img" className="w-[400px] h-[300px] object-contain rounded-xl"/>
            </div>
            <div className="relative flex justify-between p-8 text-orange-400">
                <button onClick={onClick}><Heart className='hover:scale-105'/></button>
            </div>
        </div>
    )
}