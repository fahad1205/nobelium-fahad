import React, { useState } from 'react';

// console.log(x)
//  let x = 10


const products = [
  { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 20 },
  { id: 3, name: 'Product C', price: 30 },
  { id: 4, name: 'Product D', price: 40 },
];
 const BillingForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [billItems, setBillItems] = useState([{ product: '', quantity: 0 }]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [billdata, setBilldata] = useState([]);
  
  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };
  
  const handleProductChange = (index, event) => {
    const newBillItems = [...billItems];
    newBillItems[index].product = event.target.value;
    setBillItems(newBillItems);
  };
  
  const handleQuantityChange = (index, event) => {
    const quantity = parseInt(event.target.value);
    if (quantity >= 1) {
      const newBillItems = [...billItems];
      newBillItems[index].quantity = quantity;
      setBillItems(newBillItems);
    }
  };
  
  const handleAddItem = () => {
    if (billItems[billItems.length - 1].quantity >= 1) {
      setBillItems([...billItems, { product: '', quantity: 0 }]);
    }
  };
  
  const handleProductSelect = (event) => {
    const selectedProductIds = Array.from(event.target.selectedOptions, option => option.value);
    const selectedProducts = products.filter(product => selectedProductIds.includes(product.id.toString()));
    setSelectedProducts(selectedProducts);
  };
  
 
  const handleCreateBill = () => {
    const billDatas = [
      ...customerName,
      ...billItems,
    ];
    // console.log(billData); // replace this with your own code to save the bill data to state
    
    setSelectedProducts([]);
    setBillItems([{ product: '', quantity: 0 }]);
    setBilldata(billDatas)
    // localStorage.setItem('billData', JSON.stringify(billData));
    
  };
  const totalPrice = selectedProducts.reduce((total, product) => total + (product.price * billItems.find(billItem => billItem.product === product.id.toString()).quantity), 0);
  
  return (
    <div>
      <label>
        Customer Name:
        <input type="text" value={customerName} onChange={handleCustomerNameChange} />
      </label>
      <br />
      <br />
      {billItems.map((billItem, index) => (
        <div key={index}>
          <label>
            Product:
            <select multiple value={[billItem.product]} onChange={(event) => handleProductChange(index, event)} onClick={(event) => handleProductSelect(event)}>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} - {product.price}
                </option>
              ))}
            </select>
          </label>
          
          <label>
            Quantity:
            <input type="number" value={billItem.quantity} onChange={(event) => handleQuantityChange(index, event)} />
          </label>
          {index === billItems.length - 1 && (
            <button onClick={handleAddItem}>Add More Item</button>
          )}
          <br />
          <br />
      <button onClick={handleCreateBill}>Create Bill</button>
       {billdata}
      </div>

       
  ))}

  </div>
  )}


  export default BillingForm;