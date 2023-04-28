import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

const Elements =({items})=>{

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


  const buyIt =(e)=>{

    let old = JSON.parse(localStorage.getItem("beShopCart"))
    let newData
    if(old){
      newData = [...JSON.parse(localStorage.getItem("beShopCart")), {id: e.id, count: 1, extra: e}]
    }else{
      newData = [{id: e.id, count: 1, extra: e}]
    }
    localStorage.setItem("beShopCart", JSON.stringify(newData))
    loadCart()
  }

  const [cart, setCart] = useState([])

  const loadCart =()=>{
    try{
      setCart([...JSON.parse(localStorage.getItem("beShopCart"))])  
    }catch(e){
      console.log("No Cart")
    }
  }

  useEffect(()=>{
    loadCart()
  },[])

  const setNewCart =(id, count, extra)=>{
    let old = JSON.parse(localStorage.getItem("beShopCart"))
    let newData = old.filter((_, index)=> {return _.id !== id})

    if(count > 0){
      newData = [...newData, {id, count, extra}]
    }

    localStorage.setItem("beShopCart", JSON.stringify(newData))
    loadCart()
  }

  const amIIn=(e)=>{

    let existState = false
    let count = 0

    cart.map((val) => {
      if(val.id === e.id){
        count = val.count
        existState = true
      }
    })

    if(!existState){
      return(
        <button onClick={()=>{buyIt(e)}} className="p-2 flex hover:scale-95 hover:bg-white hover:text-zinc-900 ease-in-out duration-200 flex-row items-center justify-center space-x-5 bg-zinc-950 w-full rounded-xl ">
          <ShoppingCartIcon className="h-7 w-7  "/>
          <h1 className="text-xl font-medium">
          </h1>
        </button>
      )
    }else{
      return(
        <div className="flex items-center justify-evenly flex-row bg-zinc-800 p-2 rounded-full  space-x-10">
          <button onClick={()=>{setNewCart(e.id, count + 1, e )}} className=" bg-zinc-900 hover:scale-95 hover:bg-white hover:text-zinc-900 ease-in-out duration-200 rounded-full px-5 py-2 font-semibold">+</button>
          <h1 className="flex-1 text-center">{count}</h1>
          <button onClick={()=>{setNewCart(e.id, count - 1, e )}} className=" bg-zinc-900 hover:scale-95 hover:bg-white hover:text-zinc-900 ease-in-out duration-200 rounded-full px-5 py-2 font-semibold">-</button>
        </div>
      )
    }
  }

    return(
        <div className="xl:px-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 p-3">
          {
            items.items && items.items.map((val) => {
                return(
                <div className=" col-span-1 bg-zinc-900 p-2 flex items-center justify-between flex-col space-y-2 rounded-md">
                    <img className="w-full h-96 object-cover rounded-md mb-2" src={val.cover} />

                    <div className="w-full space-y-2 flex-1">
                    <h1 className="w-full px-3 text-2xl font-semibold">
                      {maxWord(val.name, 40)}
                    </h1>
                    <p className="w-full px-3">
                      {maxWord(val.description, 100)}
                    </p>
                    </div>
                      {amIIn(val)}  
                    </div>
                )
            })
            }
        </div>
    )
}

export default Elements