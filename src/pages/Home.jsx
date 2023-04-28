import { useState, useEffect } from "react";
import Hero from "../components/Hero"
import Tags from "../components/Tags"
import Elements from "../components/Elements"

const App =()=>{
  
  const [info, setInfo] = useState([])
  const [tag, setTag] = useState("All")
  const [loader, setLoader] = useState(true)
  const [itemLoader, setItemLoader] = useState(true)
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)

  const loadData =async()=>{

    setLoader(true)

    const reqData = await fetch("https://bitter-airline.pockethost.io/api/collections/beShop/records/ii13tmg2rsl2yl7")
    const data = await reqData.json() 
    
    setInfo({
      title: data.title,
      description: data.description,
      tags: data.tags,
      image: `https://bitter-airline.pockethost.io/api/files/${data.collectionId}/${data.id}/${data.image}`
    })

    setLoader(false)

  }

  const loadItems =async()=>{

    setItemLoader(true)

    let data

    if(tag === "All"){
      const reqData = await fetch(`https://bitter-airline.pockethost.io/api/collections/beShopItems/records?page=${page}`)
      data = await reqData.json() 
    } else {
      const reqData = await fetch(`https://bitter-airline.pockethost.io/api/collections/beShopItems/records?filter=(tag='${tag}')&page=${page}`)
      data = await reqData.json() 
    }

    setItems(data)
    setItemLoader(false)

  }

  useEffect(() => {
    loadData()
  }, [])

  useEffect(()=>{
    loadItems()
  }, [tag, page])


  return(
    <>
      {
        loader
        ? <div className="h-full w-full flex items-center justify-center">
            <button className="btn border-0 text-white loading bg-zinc-900">loading</button>
        </div>
        :<>
          <Hero title={info.title} description={info.description} cover={info.image} />
          <Tags tags={info.tags} tag={tag} setTag={setTag}/>
          {
            itemLoader
            ? <div className="h-full w-full flex items-center justify-center">
                <button className="btn border-0 text-white loading bg-zinc-900">loading</button>
            </div>
            :<>
              <Elements items={items} />
              <div className="h-max w-full flex items-center justify-center flex-wrap p-5">
                {
                  [...Array(items.totalPages)].map((_, index) => {
                    return(
                      <button onClick={()=>{setPage(index + 1 )}} className={`m-1 py-1 px-4 rounded-md ${index +1 !== page ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"}`}>{index + 1 }</button>
                    )
                  })
                }
              </div>
            </>
          }
        </>
      }
    </>
  )
}

export default App