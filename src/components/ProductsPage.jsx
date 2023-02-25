import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import {useState} from "react";
import dataProducts from "../data.json"



function ProductPage() {
    const [products, setProducts] = useState(dataProducts)
    const [query, setQuery] = useState('');

    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(query.toLowerCase())
      })

    
    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar query={query} setQuery={setQuery} />
            <ProductTable products={filteredProducts}/>
        </div>
    )
}

export default ProductPage