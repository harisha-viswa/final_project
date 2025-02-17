// import React, { useState } from "react";

// function Modal({ onClose }) {
//   const [jobDetails, setJobDetails] = useState({
//     role: "",
//     experience: "",
//     salary: "",
//     location: "",
//     file: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setJobDetails({ ...jobDetails, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.size < 2 * 1024 * 1024) {
//       setJobDetails({ ...jobDetails, file });
//     } else {
//       alert("File size should be less than 2MB");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Job details submitted:", jobDetails);
//     onClose();
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Create Job</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="role" placeholder="Job Role" onChange={handleChange} required />
//           <input type="text" name="experience" placeholder="Years of Experience" onChange={handleChange} required />
//           <input type="text" name="salary" placeholder="Stipend/Salary" onChange={handleChange} required />
//           <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
          
//           {/* Custom Styled Upload Button */}
//           <label className="upload-button custom-file-upload">
//             <input type="file" accept=".pdf" onChange={handleFileChange} required hidden />
//             Upload PDF
//             <span className="file-size-note">(Max: 20MB)</span>
//     <input type="file" accept=".pdf" onChange={handleFileChange} required />
//           </label>
          
          

//           {/* Submit Button */}
//           <button type="submit" className="submit-button">Submit</button>
//         </form>
//         <button className="close-button" onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }

// export default Modal;
