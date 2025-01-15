import { useContext } from "react";
import { Foto } from "../ui/fotos";
import { FavContext } from "../../Contexts/FavContext";




export function Favoritos(){
    const { favorite } = useContext(FavContext)

    return (
        <div className="w-full pt-40">
            <div className="max-w-[1980px] m-auto flex flex-col gap-10 items-center justify-center">
                <h1 className="text-2xl font-semibold">Favoritas</h1>
                <div className="flex flex-wrap gap-6 justify-center">
                <div className="flex flex-wrap gap-10 justify-center">
                    {favorite.length === 0 ? <h1 className="animate-pulse">Ainda não tem nenhuma imagem favorita...</h1> : (
                        favorite.map((item: any) => (
                            <Foto key={item.id} author={item.author} url={item.download_url}/>
                        ))
                    )}
                </div>
                </div>
            </div>
            
        </div>
    )
}