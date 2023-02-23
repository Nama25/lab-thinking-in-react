import ProductRow from './ProductRow';
import { useState } from 'react';

function ProductTable() {
  const [table, setTable] = useState('');
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
          <tr>
            {table.map((tables) => (
              <ProductRow
                key={tables.id}
                name={tables.name}
                price={tables.price}
              />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
