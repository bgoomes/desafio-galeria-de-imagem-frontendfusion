export function Header(){
    return (
        <header className="w-full h-20 shadow fixed bg-white">
            <nav className="flex items-center justify-center p-7">
                <ul className="flex gap-9 items-center justify-center">
                    <a href="/" className="hover:text-slate-600"><li className="text-xl">Home</li></a>
                    <a href="/favoritos" className="hover:text-slate-600"><li className="text-xl">Favoritos</li></a>
                </ul>
            </nav>
        </header>
    )
}