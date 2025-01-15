import { useContext } from "react"
import { Foto } from "../ui/fotos"
import { FavContext } from "../../Contexts/FavContext"
 

export function Galery(){
    const { img, addFav } = useContext(FavContext)
    
    
    return (
        <div className="w-full pt-40">
            <div className="max-w-[1980px] m-auto flex flex-col gap-10 p-4 items-center justify-center">
                <h1 className="text-2xl font-semibold">Imagens</h1>
                <div className="flex flex-wrap gap-10 justify-center">
                    {img.length === 0 ? <h1 className="animate-pulse">Carregando...</h1> : (
                        img.map((item :any) => (
                            <Foto key={item.id} author={item.author} url={item.download_url} onClick={() => addFav(item.id)}/>
                        ))
                    )}
                    
                </div>
            </div>
        </div>
    )
}
