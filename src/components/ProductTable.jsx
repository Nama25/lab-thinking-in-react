import ProductRow from "./ProductRow";
import {useState} from "react";

function ProductTable() {
    const [table, setTable] = useState("")
    return(
        <div>
            <table>
                <thead>
                   <tr>
                    <th>Name</th>
                    <th>Price</th>
                   </tr> 
                </thead>
                <tbody>
                    <tr>
                        <td>name of product</td>
                        <td>price of product</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable