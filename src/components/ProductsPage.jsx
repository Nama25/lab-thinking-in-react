import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import {useState} from "react";
import dataProducts from "../data.json"



function ProductPage() {
    const [products, setProducts] = useState(dataProducts)
    const [query, setQuery] = useState('');
    const [check, setCheck] = useState(false);

    // iteration 4 SEARCH
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(query.toLowerCase())
      })

    // iteration 5 CHECKBOX

    const handleChange = () => {
        setCheck(!check)
    }

    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar query={query} setQuery={setQuery} handleChange={handleChange}/>
            <ProductTable products={filteredProducts}/>
        </div>
    )
}

export default ProductPage