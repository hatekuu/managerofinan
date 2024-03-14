import React, { useEffect, useState } from 'react';
import * as Realm from 'realm-web';
import ReactPaginate from 'react-paginate';
import RenderBillItems from './components/BillItem';

const ManagerHome = () => {
  const app = new Realm.App({ id: process.env.REACT_APP_KEY });
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBill, setSelectedBill] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBills, setFilteredBills] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const PER_PAGE = 20;

  useEffect(() => {
    fetchData();
  }, [currentPage]); 

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      fetchData();
    } else {
      setFilteredBills(filterBills(bills, searchTerm));
    }
  }, [searchTerm, bills]);

  useEffect(() => {
    if (sortBy) {
      handleSort(sortBy);
    }
  }, [sortBy, sortOrder]);

  const fetchData = async () => {
    try {
      const functionName = "getAllUserBill";
      setLoading(true);
      const result = await app.currentUser.callFunction(functionName);
      setBills(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching bills:', error);
      setLoading(false);
    }
  };

  const filterBills = (bills, searchTerm) => {
    return bills.filter(bill =>
      (bill.user && bill.user.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (bill.totalValue && bill.totalValue.toString().includes(searchTerm))
    );
  };

  const handleDetailsClick = (bill) => {
    setSelectedBill(selectedBill === bill ? null : bill);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (field) => {
    let sortedBills = [...filteredBills];
    sortedBills.sort((a, b) => {
      if (field === 'totalValue') {
        return sortOrder === 'asc' ? a.cart.totalValue - b.cart.totalValue : b.cart.totalValue - a.cart.totalValue;
      } else if (field === 'date') {
        return sortOrder === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
    setFilteredBills(sortedBills);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Danh sách đơn hàng</h1>
      <div className="flex mb-4">
        <label className="mr-2">Sắp xếp theo:</label>
        <select
          value={sortBy}
          onChange={handleSortByChange}
          className="mr-2 border rounded px-2 py-1 bg-white shadow-sm"
        >
          <option value="">--Chọn trường--</option>
          <option value="totalValue">Tổng giá trị</option>
          <option value="date">Thời gian</option>
        </select>
        <select
          value={sortOrder}
          onChange={handleSortOrderChange}
          className="border rounded px-2 py-1 bg-white shadow-sm"
        >
          <option value="asc">Tăng dần</option>
          <option value="desc">Giảm dần</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Tìm kiếm"
        value={searchTerm}
        onChange={handleSearch}
        className="border rounded px-4 py-2 mb-4 w-full sm:w-80 bg-white shadow-sm"
      />
      {loading ? (
        <p className="text-center">Đang tải...</p>
      ) : (
        <div>
          <RenderBillItems
            filteredBills={filteredBills}
            currentPage={currentPage}
            handleDetailsClick={handleDetailsClick}
            selectedBill={selectedBill}
          />
        </div>
      )}
      {!loading && (
        <ReactPaginate
          previousLabel={"← Trước"}
          nextLabel={"Tiếp →"}
          pageCount={Math.ceil(filteredBills.length / PER_PAGE)}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex justify-center items-center"}
          activeClassName={"bg-blue-500 text-white"}
          previousClassName={"px-3 py-2 border border-gray-300 rounded-md mr-2 hover:bg-gray-100"}
          nextClassName={"px-3 py-2 border border-gray-300 rounded-md ml-2 hover:bg-gray-100"}
          disabledClassName={"opacity-50"}
          pageClassName={"px-3 py-2 border border-gray-300 rounded-md mr-2 hover:bg-gray-100"}
          breakClassName={"px-3 py-2 border border-gray-300 rounded-md mr-2 hover:bg-gray-100"}
          breakLinkClassName={"px-3 py-2 border border-gray-300 rounded-md mr-2 hover:bg-gray-100"}
          forcePage={currentPage}
        />
      )}
    </div>
  );
};

export default ManagerHome;
