import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import {useState} from "react";
import dataProducts from "../data.json"



function ProductPage() {
    const [products, setProducts] = useState(dataProducts)

    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar/>
            <ProductTable/>
        </div>
    )
}

export default ProductPage