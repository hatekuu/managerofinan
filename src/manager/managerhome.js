import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Realm from 'realm-web';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import './JsonForm.css';
const schema = {
  type: 'object',
  required: ['year', 'month', 'week', 'startDay', 'endDate'],
  properties: {
    year: { type: 'number', title: 'Năm', default:2024 },
    month: { type: 'number', title: 'Tháng',default:3 },
    week: { type: 'number', title: 'Tuần thứ' },
    startDay: { type: 'number', title: 'Ngày bắt đầu của tuần',default:1 },
    endDate: { type: 'number', title: 'Ngày kết thúc của tuần',default:7 }
  }
};

const ManagerHome = () => {
  const [showForm, setShowForm] = useState(true);
  const [jsonForm, setJsonForm] = useState('');

  const [openUserBillDetails, setOpenUserBillDetails] = useState({});
  const app = new Realm.App({ id: process.env.REACT_APP_KEY });
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means it runs once on mount

  const fetchData = async () => {
    try {
      if (!app.currentUser) {
      
      } else {

        const result = await app.currentUser.callFunction("BillJsonForm");
        setJsonForm(result[0]);
        await app.currentUser.refreshAccessToken();
      }
    } catch (error) {
      navigate('/managerofinan/login');
      alert(error.message || 'An error occurred');
    }
  };

  const toggleUserBillDetails = (userBillIndex) => {
    setOpenUserBillDetails(prevState => ({
      ...prevState,
      [userBillIndex]: !prevState[userBillIndex]
    }));
  };
  const handleSubmit = async ({ formData }) => {
    // Xử lý dữ liệu ở đây
 const arg=[formData,app.currentUser.id]
    await app.currentUser.callFunction("updateoption",...arg);
    fetchData();
    setShowForm(false); // Ẩn form sau khi submit
  };

  const handleFormClick = () => {
    setShowForm(true); // Hiển thị form khi người dùng nhấn vào chữ "Form"
  };

  return (
    
   
    <div className="container mx-auto px-4 py-8">
       <div className="containers">
      {showForm ? (
        <Form
          schema={schema}
    
          onSubmit={handleSubmit}
          validator={validator}
        />
      ) : (
        <div className="form-text" onClick={handleFormClick}>Form</div>
      )}
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {jsonForm?.public?.output?.jsonData ?(
          <>
          {jsonForm?.public?.output?.jsonData?.bill.map((userBill, userBillIndex) => (
          <div key={userBillIndex} className="border border-gray-300 p-4">
            <p className="text-lg font-semibold">Đơn hàng: {userBill?.day}</p>
            <p>Ngày mua: {userBill?.date?.day}/{userBill?.date?.month}/{userBill?.date?.year}</p>
            <p>Giờ mua: {userBill?.date?.hour}.{userBill?.date?.period}</p>
            <p>Người mua: {userBill?.user}</p>
            <p>ID người mua: {userBill?.userId}</p>
            {openUserBillDetails[userBillIndex] && (
              <div className="mt-4">
                <ul>
                  {userBill?.cart?.products?.map((product, productIndex) => (
                    <li key={productIndex} className="border p-4 mb-2">
                      <p className="font-semibold">Tên sản phẩm: {product.productName}</p>
                      <p>Loại sản phẩm: {product.productType}</p>
                      <p>Số lượng: {product.quantity}</p>
                      <p>Giá bán: {product.sellingPrice}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button onClick={() => toggleUserBillDetails(userBillIndex)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              {openUserBillDetails[userBillIndex] ? 'Ẩn chi tiết đơn hàng' : 'Hiển thị chi tiết đơn hàng'}
            </button>
          </div>
        ))}
          </>
        ):(
          <div>
            ko có dữ liệu đơn hàng trong thời giang này
          </div>
        )}
        
      </div>
    </div>
  );
};

export default ManagerHome;
