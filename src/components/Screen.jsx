const Screen =({children})=>{

    return(
        <div className="h-screen w-screen bg-zinc-800 flex items-center justify-center flex-col">
            {children}
        </div>
    )
}

export default Screen