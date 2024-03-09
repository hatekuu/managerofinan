import React, { useEffect, useState } from 'react';
import * as Realm from 'realm-web';

const Managerhome = () => {
  const app = new Realm.App({ id: process.env.REACT_APP_KEY });
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBill, setSelectedBill] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const functionName = "getAllUserBill";
      const result = await app.currentUser.callFunction(functionName);
      setBills(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching bills:', error);
      setLoading(false);
    }
  };

  const handleDetailsClick = (bill) => {
    setSelectedBill(selectedBill === bill ? null : bill);
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {bills.map((bill, index) => (
            <li key={index} className="py-4">
              <button
                className="text-blue-600 underline focus:outline-none"
                onClick={() => handleDetailsClick(bill)}
              >
                {selectedBill === bill ? 'Hide Details' : 'Show Details'}
              </button>
              <p className="text-lg font-semibold">User: {bill.user}</p>
              <p className="text-sm text-gray-500">UserId: {bill.userId}</p>
              <p className="text-sm text-gray-500">Date: {new Date(bill.date).toLocaleString()}</p>
              {selectedBill === bill && (
                <>
                  <p className="text-green-700 font-bold">Total Value: {bill?.cart?.totalValue}</p>
                  <ul className="pl-4">
                    {bill?.cart?.products?.map((product, productIndex) => (
                      <li key={productIndex} className="py-2">
                        <p className="text-sm font-semibold">Product Name: {product.productName}</p>
                        <p className="text-xs text-gray-500">Product Type: {product.productType}</p>
                        {/* Add more product details as needed */}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Managerhome;
