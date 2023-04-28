import { TrashIcon } from "@heroicons/react/24/outline"

const Item =({data, setNewCart})=>{

    const maxWord =(e, limite)=>{

        let word = ""
        if(e.length < limite){
          return(e)
        }else{
          for(let i = 0 ; i <= limite ; i++){
            word = `${word}${e[i]}`
          }
          word = `${word}...`
          return(word)
        }
    }

    return(
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
        <div className="flex w-full space-x-2 sm:space-x-4">
            <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={data.extra.cover}/>
            <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full p-2 space-x-2">
                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">{maxWord(data.extra.name, 60)}</h3>
                        <p className="text-sm text-gray-400">{maxWord(data.extra.description, 250)}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold">{data.extra.price*data.count}</p>
                    </div>
                </div>
                    <div className="w-max flex items-center justify-evenly flex-row bg-zinc-800 p-2 rounded-full  space-x-10">
                        <button onClick={()=>{setNewCart(data.id, data.count + 1, data.extra )}} className=" bg-zinc-900 hover:scale-95 hover:bg-white hover:text-zinc-900 ease-in-out duration-200 rounded-full px-5 py-2 font-semibold">+</button>
                        <h1 className="flex-1 text-center">{data.count}</h1>
                        <button  onClick={()=>{setNewCart(data.id, data.count - 1, data.extra )}} className=" bg-zinc-900 hover:scale-95 hover:bg-white hover:text-zinc-900 ease-in-out duration-200 rounded-full px-5 py-2 font-semibold">-</button>
                        <button onClick={()=>{setNewCart(data.id, 0, data.extra)}} className=" bg-zinc-900 hover:scale-95 hover:bg-white hover:text-zinc-900 ease-in-out duration-200 rounded-full px-5 py-2 font-semibold">
                            <TrashIcon className="h-6 w-5" />
                        </button>
                    </div>
            </div>
        </div>
    </li>
    )
}

export default Item