


function ProductRow(props) {
    
    return( 
    <div className="table">
                    <tr>
                        <td style={{color: !props.tables.inStock ? "red" : "black"} }>{props.tables.name}</td>
                     
                        <td style={{color: !props.tables.inStock ? "red" : "black"} }>{props.tables.price}</td>
                    </tr>
        </div>
        )
}

export default ProductRow