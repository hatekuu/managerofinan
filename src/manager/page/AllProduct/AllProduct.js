import React, { useState, useEffect } from 'react';
import * as Realm from 'realm-web';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

const schema = {
  type: 'object',
  properties: {
    productName: { type: 'string', title: 'Tên sản phẩm' },
    productType: {
      type: 'string',
      title: 'Cách in ấn',
      enum: ['In 2d', 'In 3d'],
      enumNames: ['In 2D', 'In 3D'],
    },
    purchasePrice: { type: 'number', title: 'Chi phí sản xuất, giá mua(Nghìn đồng)' },
    sellingPrice: { type: 'number', title: 'Giá bán' },        
    quantity: { type: 'integer', title: 'Số lượng' },
  },
  required: ['productName', 'productType', 'purchasePrice', 'sellingPrice', 'quantity'],
};

const uiSchema = {
  productName: { "ui:options": { readonly: true } }
};

const AllProduct = () => {
  const app = new Realm.App({ id: process.env.REACT_APP_KEY });
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [product, setProduct] = useState({});
  const [showProduct, setShowProduct] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const FunctionName = 'getAllProducts';
    const result = await app?.currentUser?.callFunction(FunctionName);
    setProducts(result);
    console.log(result);
  };

  const handleChange = async (e) => {
    const FunctionName = 'autoComplete';
    setSearch(e.target.value);
    if (e.target.value !== "") {
      const result = await app?.currentUser?.callFunction(FunctionName, e.target.value);
      setSuggestions(result);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = async (name) => {
    const FunctionName = 'seacrproducts';
    try {
      const result = await app?.currentUser?.callFunction(FunctionName, name);
      setProduct(result);
      setShowProduct(true);
      console.log("search:", result);
      setSearch('');
      setSuggestions([]);
      setShowSuggestions(false);
    } catch (error) {
       console.log(error);
    }
  };

  const handleSubmit = async (formData) => {
    const FunctionName = 'updataProduct';
    try {
      const result = await app?.currentUser?.callFunction(FunctionName, formData.formData);
      setShowProduct(false);
      fetchData();
      console.log(result);
    } catch (error) {
       console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-4 relative">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Search:
        </label>
        <input
          className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={search}
          onChange={handleChange}
        />
        {showSuggestions && suggestions?.length > 0 && (
          <div className="absolute bg-white border rounded shadow-lg mt-1 w-full">
            <ul>
              {suggestions?.map((suggestion, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSuggestionClick(suggestion?.productName)}>
                  {suggestion?.productName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {showProduct && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 border rounded shadow-lg">
            <Form schema={schema} formData={product} validator={validator} uiSchema={uiSchema} onSubmit={handleSubmit} />
            <button onClick={() => setShowProduct(false)} className="bg-gray-500 text-white px-4 py-2 rounded mt-2">Close</button>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {products.map((product, productIndex) => (
          <div key={productIndex} className="mb-4 p-4 border rounded shadow">
            <p className=" mb-2"><span className="font-bold text-lg ">Tên sản phẩm:</span> {product.productName}</p>
  <p className="mb-1"><span className="font-bold">Cách in:</span> {product.productType}</p>
  <p className="mb-1"><span className="font-bold">Chi phí sản xuất, giá mua: </span> {product.purchasePrice}k VNĐ</p>
  <p className="mb-1"><span className="font-bold">Giá bán: </span>{product.sellingPrice}k VNĐ</p>
  <p className="mb-1"><span className="font-bold">Ngày thêm vào kho:</span> {product?.dateImported?.day}/{product?.dateImported?.month}/{product?.dateImported?.year}</p>
  {product?.updateDate?.day && (
    <p className="mb-1"><span className="font-bold">Ngày thêm nhập mới nhất: </span>{product?.updateDate?.day}/{product?.updateDate?.month}/{product?.updateDate?.year}</p>
  )}
            <button onClick={() => handleSuggestionClick(product?.productName)} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
