type fotoProps ={
    url: string
    author: string
}


export function Foto({ url, author}: fotoProps){
    return (
        <div className="w-[400px] h-[300px] rounded-xl shadow">
            <div>
                <img src={url} alt="img" />
                <span>{author}</span>
            </div>
        </div>
    )
}