import ProductRow from './ProductRow';
// import { useState } from 'react';

function ProductTable(props) {
  // const [table, setTable] = useState('');
  console.log("Product table")
  return (
   
    <div>
      <h3>Product List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {props.products.map((tables) => 
              <ProductRow
                key={tables.id}
                tables={tables}
                // name={tables.name}
                // price={tables.price}
              />
            )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
