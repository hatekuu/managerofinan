
import React, { useState } from 'react';
const Bill = ({jsonData}) => {
    const [openUserBillDetails, setOpenUserBillDetails] = useState({});
  const toggleUserBillDetails = (userBillIndex) => {
    setOpenUserBillDetails(prevState => ({
      ...prevState,
      [userBillIndex]: !prevState[userBillIndex]
    }));
  };
  return (
    <>
 
    {jsonData ? (
      
         <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {jsonData?.bill?.map((userBill, userBillIndex) => (
          <div key={userBillIndex} class="border border-gray-300 p-4">
            <p class="text-lg font-semibold">Đơn hàng: {userBill?.day}</p>
            <p>Ngày mua: {userBill?.date?.day}/{userBill?.date?.month}/{userBill?.date?.year}</p>
            <p>Giờ mua: {userBill?.date?.hour}.{userBill?.date?.period}</p>
            <p>Người mua: {userBill?.user}</p>
            <p>ID người mua: {userBill?.userId}</p>
            {openUserBillDetails[userBillIndex] && (
              <div class="mt-4">
                <ul>
                  {userBill?.cart?.products?.map((product, productIndex) => (
                    <li key={productIndex} class="border p-4 mb-2">
                      <p class="font-semibold">Tên sản phẩm: {product.productName}</p>
                      <p>Loại sản phẩm: {product.productType}</p>
                      <p>Số lượng: {product.quantity}</p>
                      <p>Giá bán: {product.sellingPrice}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button onClick={() => toggleUserBillDetails(userBillIndex)} class="mt-4 form-text py-2 px-4 rounded">
              {openUserBillDetails[userBillIndex] ? 'Ẩn chi tiết đơn hàng' : 'Hiển thị chi tiết đơn hàng'}
            </button>
          </div>
          
        ))}
      </div>
    ) : (
      <div class="text-center">
        Ko có dữ liệu đơn hàng trong thời gian này
      </div>
    )}

  </>
  )
}

export default Bill