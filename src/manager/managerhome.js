import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Realm from 'realm-web';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import './JsonForm.css';
import Bill from './components/Bill';
const schema = {
  type: 'object',
  required: ['year', 'month', 'week', 'startDay', 'endDate'],
  properties: {
    year: { type: 'number', title: 'Năm', default:2024 },
    month: { type: 'number', title: 'Tháng',default:3 },
    week: { type: 'number', title: 'Tuần thứ' },
    startDay: { type: 'number', title: 'Ngày bắt đầu của tuần',default:1 ,minimum:1,maximum:7},
    endDate: { type: 'number', title: 'Ngày kết thúc của tuần',default:7,maximum:7 }
  }
};
const ManagerHome = () => {
  const [showForm, setShowForm] = useState(false);
  const [jsonForm, setJsonForm] = useState('');
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
     
    }
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
        <div className="form-text" onClick={handleFormClick}>Ấn vào đây để mở form </div>
      )}
    </div>
     <Bill jsonData={jsonForm?.public?.output?.jsonData}/>
    </div>
  );
};

export default ManagerHome;
