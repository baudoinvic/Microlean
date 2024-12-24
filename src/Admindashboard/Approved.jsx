import React, { useState, useEffect } from "react";

const Approved = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      
      const loanData = [
        { id: 1, name: "John Doe", amount: 50000, status: "Approved" },
        { id: 2, name: "Jane Smith", amount: 30000, status: "Declined" },
        { id: 3, name: "Michael Johnson", amount: 45000, status: "Approved" },
      ];
      setLoans(loanData);
    };

    fetchLoans();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Loan Applications
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{loan.id}</td>
                <td className="px-4 py-2">{loan.name}</td>
                <td className="px-4 py-2">${loan.amount.toLocaleString()}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    loan.status === "Approved"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {loan.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Approved;
