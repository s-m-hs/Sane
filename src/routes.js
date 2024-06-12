import PIndex from "./Pages/PIndex/PIndex";
import Category from "./Pages/Category/Category";




let routes=[
    {path:"/",element:<PIndex/>},
    {path:"/category/:id",element:<Category/>}
]




export default routes