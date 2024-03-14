import React from 'react';
const PER_PAGE = 20;
const renderBillItems = ({ filteredBills, currentPage, handleDetailsClick, selectedBill }) => {
    
    return(
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {filteredBills.slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE).map((bill, index) => (
      <li key={index} className="border border-gray-200 p-4">
        <p className="text-lg font-semibold text-gray-800">Người dùng: {bill.user}</p>
        <p className="text-gray-600">Thời gian: {new Date(bill.date).toLocaleString()}</p>
        <p className="text-gray-600">Tổng giá trị: {bill.cart.totalValue}</p>
        <button
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => handleDetailsClick(bill)}
        >
          {selectedBill === bill ? 'Ẩn chi tiết' : 'Hiển thị chi tiết'}
        </button>
        {selectedBill === bill && (
          <ul className="mt-4">
            {bill.cart.products.map((product, productIndex) => (
             <li key={productIndex} className="py-2">
             <div className="border-b border-gray-200 pb-2 mb-2">
               <p className="text-gray-800 text-lg font-semibold mb-1">Tên sản phẩm: {product.productName}</p>
               <p className="text-gray-600 mb-1">Loại sản phẩm: {product.productType}</p>
               <p className="text-gray-600 mb-1">Số lượng: {product.quantity}</p>
               <p className="text-gray-600">Giá bán: {product.sellingPrice}</p>
             </div>
           </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </div>
)
            }
export default renderBillItems;
