
import dataProducts from "../data.json"

function ProductRow(props) {
    return( 
    <div className="table">
            <table>
            <tbody>
                    <tr>
                        <td style={{color: !dataProducts.inStock ? "red" : "black"} }>{props.dataProducts.name}</td>
                        <td>{props.dataProducts.price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
}

export default ProductRow