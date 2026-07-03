function ProductList({ products, editProduct, deleteProduct }) {
  return (
    <div className="container">
      <h2>Product List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>
                <button className="edit-btn" onClick={() => editProduct(product)}>
                  Edit
                </button>

                <button className="dlt-btn" onClick={() => deleteProduct(product._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table><br></br>
       
      
    </div>
  );
 
  
}


export default ProductList;