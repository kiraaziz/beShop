import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import Layout from "./components/Layout"
import UnFound from "./pages/404"
import Cart from "./pages/Card"
import Home from "./pages/Home"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" index element={<Home />} />
      <Route path="cart" index element={<Cart />} />
      <Route path="*" index element={<UnFound />} />
    </Route>
  ) 
)

const App =()=>{

  return (
    <RouterProvider router={router} />
  )
}

export default App