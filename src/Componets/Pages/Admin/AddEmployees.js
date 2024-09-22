import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmployees } from '../../../Services/Opertions/User';
import { SingleEmpData } from './SingleEmpData';

export const AddEmployees = () => {
  const { empData } = useSelector((state) => state.emp);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Number of items to display per page
  const totalPages = empData ? Math.ceil(empData.length / itemsPerPage) : 1;

  // Get current items based on the current page
  const currentItems = empData ? empData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ) : [];

  // Handler for page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='w-11/12 mx-auto text-pure-greys-100 flex flex-col'>
      <div>
        <h1>Add Team Members</h1>
        <div className='w-11/12 bg-richblack-800 p-2'>
          {empData == null ? (
            <p>No data found!</p>
          ) : (
            currentItems.map((emp) => {
              return <SingleEmpData key={emp.id} data={emp} />;
            })
          )}
        </div>

        {/* Pagination Controls */}
        <div className="pagination mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 bg-gray-600 p-2"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mr-2 p-2 ${currentPage === index + 1 ? 'bg-gray-800 text-white' : 'bg-gray-600'}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-600 p-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
