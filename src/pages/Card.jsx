import Item from "./../components/Item"
import { useEffect, useState } from "react"

const Cart =()=>{

    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(0)

    const loadCart =()=>{
      try{
        setCart([...JSON.parse(localStorage.getItem("beShopCart"))])  
      }catch(e){
        console.log("No Cart")
      }
    }

    const setNewCart =(id, count, extra)=>{
        let old = JSON.parse(localStorage.getItem("beShopCart"))
        let newData
    
        if(count > 0){
            newData = old.map((val, index)=>{
                if(val.id === id){
                    return {id, count, extra}
                }else{
                    return val
                }
            })
        } else {
            newData = old.filter((_, index)=> {return _.id !== id})
        }
    
        localStorage.setItem("beShopCart", JSON.stringify(newData))
        loadCart()
    }

    useEffect(()=>{
        loadCart()
    }, [])

    useEffect(()=>{
        setPrice(0)
        cart.forEach((e)=>{
            setPrice(price + (e.count * e.extra.price))
        })
    }, [cart])

    return(
                
        <div className="flex flex-col p-6 space-y-4 lg:w-2/3 m-auto flex-1 h-full">
            <h2 className="text-xl font-semibold">Your cart</h2>
            <ul className="flex flex-col divide-y flex-1 p-3 overflow-y-auto divide-gray-700">
                {
                    cart.map((data) => {
                        return (
                            <Item data={data} setNewCart={setNewCart} />
                        )
                    })
                }
            </ul>
            <div className="space-y-1 text-right">
                <p>Total amount:
                    <span className="font-semibold">{price}</span>
                </p>
            </div>
            <div className="flex justify-end space-x-4">
                <a href="/" type="button" className="px-6 py-2 border rounded-md">Back
                    <span className="sr-only sm:not-sr-only">{" "}to shop</span>
                </a>
                <a href="/checkout" type="button" className="px-6 py-2 border rounded-md bg-zinc-900">
                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                </a>
            </div>
        </div>


    )
}

export default Cart