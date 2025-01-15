import { Heart } from 'lucide-react'

type fotoProps ={
    url?: string
    author?: string
    onClick?: () => void
}




export function Foto({ url, author, onClick}: fotoProps){
    return (
        <div className="w-[400px] h-[300px]">
            <div className="absolute overflow-hidden w-[400px] rounded-xl">
                <img src={url} alt={author}/>
            </div>
            <div className="relative flex justify-between p-8 text-orange-400 ">
                <button onClick={onClick} className='bg-white/80 p-2 rounded-xl'><Heart className='hover:scale-105'/></button>
            </div>
        </div>
    )
}