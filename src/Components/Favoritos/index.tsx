import { Foto } from "../ui/fotos";

type favProps ={
    url?: string
    id?: number
}

export function Favoritos({ url }: favProps){
    return (
        <div className="w-full pt-40">
            <div className="max-w-[1980px] m-auto flex flex-col gap-10 items-center justify-center">
                <h1 className="text-2xl font-semibold">Favoritas</h1>
                <div className="flex flex-wrap gap-6 justify-center">
                    <Foto url={url} />
                </div>
            </div>
            
        </div>
    )
}