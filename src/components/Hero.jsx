const Hero =({title, description, cover})=>{

    return(
        <div style={{backgroundImage: `url(${cover})`}} className="h-full w-full cover">
            <div className="h-full w-full bg-zinc-900/40 flex space-y-4 justify-center flex-col p-10">
                <h1 className="bg-zinc-900 text-4xl border-l-4 border-white text-white py-2 px-4 max-w-2xl font-medium">
                    {title}
                </h1>
                <p className="w-2/3 text-lg">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Hero