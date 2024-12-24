// import React from "react";

// const LoanApplicationList = () => {
//   const applications = [
//     { id: 1, applicant: "John Doe", amount: 50000, status: "Pending" },
//     { id: 2, applicant: "Jane Smith", amount: 30000, status: "Approved" },
//     { id: 3, applicant: "Alice Brown", amount: 70000, status: "Declined" },
//   ];

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h2>Loan Applications</h2>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {applications.map((app) => (
//           <li
//             key={app.id}
//             style={{
//               padding: "10px",
//               margin: "10px 0",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//               backgroundColor:
//                 app.status === "Approved"
//                   ? "#d4edda"
//                   : app.status === "Declined"
//                   ? "#f8d7da"
//                   : "#fff3cd",
//             }}
//           >
//             <p>
//               <strong>Applicant:</strong> {app.applicant}
//             </p>
//             <p>
//               <strong>Amount:</strong> ${app.amount}
//             </p>
//             <p>
//               <strong>Status:</strong> {app.status}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default LoanApplicationList;

import React from 'react'

const Done = () => {
  return (
    <div>
      
    </div>
  )
}

export default Done
