const Tags =({tags, tag, setTag})=>{

    return(
        <div className="flex flex-wrap items-center justify-center p-5">
            <button onClick={()=>{setTag("All")}} className={`${tag === "All" ? "bg-white text-zinc-900": "bg-zinc-900 text-white"} py-1 px-2 rounded-md m-1`}>All</button>            
            {
                tags.map((val) => {
                    return(
                        <button onClick={()=>{setTag(val)}} className={`${tag === val ? "bg-white text-zinc-900 font-medium": "bg-zinc-900 text-white"} py-1 px-2 rounded-md m-1`}>{val}</button>            
                    )
                })
            }
        </div>
    )
}

export default Tags