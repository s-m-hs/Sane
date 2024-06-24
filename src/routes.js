import PIndex from "./Pages/PIndex/PIndex";
import Category from "./Pages/Category/Category";
import Product from "./Pages/Products/Product";




let routes=[
    {path:"/",element:<PIndex/>},
    {path:"/category/:id",element:<Category/>},
    {path:"product",element:<Product/>}
]




export default routes