import { useState } from "react"
import ProductsData from '../data/productsData.json'
import Product from "../components/Product"

export default function Products() {

    const [products, setProducts] = useState(ProductsData.products)

    return(
        <div className="flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            {products.map(p => (<Product product = {p}/>))}
            </div>
        </div>
        
    )
}