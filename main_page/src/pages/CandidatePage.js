import React, { useState, useEffect } from "react";
import "./CandidatePage.css";

import { FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // Import close
import * as XLSX from "xlsx"; // Import xlsx

const CandidatePage = () => {
  const [candidateName, setCandidateName] = useState("Candidate Name");
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", resume: null });

  useEffect(() => {
    const storedName = localStorage.getItem("candidateName");
    if (storedName) setCandidateName(storedName);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setJobs([
        { id: 1, title: "Software Engineer", stipend: "50,000", location: "Chennai", experience: "2 Years" },
        { id: 2, title: "Frontend Developer", stipend: "45,000", location: "Bangalore", experience: "1 Year" },
      ]);
    }, 1000);
  }, []);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplyForm(true);
    setFormData({ name: "", email: "", phone: "", resume: null }); // Reset form fields
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const fileSizeMB = file.size / (1024 * 1024); // Convert size to MB
      if (fileSizeMB > 20) {
        alert("⚠️ File size exceeds 20MB. Please upload a smaller file.");
        e.target.value = ""; // Reset the file input
        return;
      }
      setFormData({ ...formData, resume: file });
    }
  };
  

  const handleSubmit = () => {
    const { name, email, phone, resume } = formData;

    if (!name || !email || !phone || !resume) {
      alert("⚠️ All fields are mandatory. Please fill out the entire form.");
      return;
    }

    if (!email.includes("@")) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("⚠️ Please enter a valid 10-digit phone number.");
      return;
    }

    //Check if the phone number is unique
    const isPhoneUnique = !appliedJobs.some((applicant) => applicant.phone === phone);
    if (!isPhoneUnique) {
      alert("⚠️ You have already applied with this phone number.");
      return;
    }

    // Store the applicant's data
    const newApplicant = { name, email, phone, resume };

    // Add the applicant to the applied jobs list
    setAppliedJobs([...appliedJobs, newApplicant]);

    // Prepare the data to be saved in Excel
    const excelData = appliedJobs.map((applicant) => ({
      Name: applicant.name,
      Email: applicant.email,
      Phone: applicant.phone,
      Resume: applicant.resume.name, // Only store the resume file name
    }));

    // Convert to Excel file and trigger download
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Candidates");
    XLSX.writeFile(wb, "Candidate_Applications.xlsx");


    alert(`✅ Successfully applied for ${selectedJob.title}!`);
    
   
    setShowApplyForm(false);
  };

  const handleRevokeClick = (jobId) => {
    setAppliedJobs(appliedJobs.filter((id) => id !== jobId));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
      
        <div className="profile">
          <FaUserCircle size={28} />
          <span>{candidateName}</span>
        </div>
      </nav>

      {/* Job Listings */}
      <div className="job-list">
        {jobs.length === 0 ? (
          <p>Loading jobs...</p>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h2>{job.title}</h2>
              <p>Stipend: {job.stipend}</p>
              <p>Location: {job.location}</p>
              <p>Experience: {job.experience}</p>
              <div className="job-actions">
                <button
                  onClick={() => handleApplyClick(job)}
                  className={`apply-btn ${appliedJobs.includes(job.id) ? "applied" : ""}`}
                >
                  {appliedJobs.includes(job.id) ? "Applied ✔" : "Apply"}
                </button>

                <button
                  className="revoke-btn"
                  onClick={() => handleRevokeClick(job.id)}
                  disabled={!appliedJobs.includes(job.id)}
                >
                  Revoke
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Apply Form Popup */}
      {showApplyForm && (
        <div className="popup">
          <div className="popup-content">
            {/* Close Button (X) */}
            <button className="close-btn" onClick={() => setShowApplyForm(false)}>
              <IoClose size={16} />
            </button>

            <h2 className="popup-title">Apply for {selectedJob?.title}</h2>
            <form className="apply-form">
              <label>Your Name</label>
              <input type="text" name="name" placeholder="Enter your name" onChange={handleInputChange} />

              <label>Email ID</label>
              <input type="email" name="email" placeholder="Enter your email" onChange={handleInputChange} />

              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="Enter your phone number" onChange={handleInputChange} />

              <label>Upload Resume (Max: 20MB)</label>
              <input type="file" accept=".pdf" onChange={handleFileChange} />
              <small className="file-size-info">Max file size: 20MB</small>


              <button type="button" onClick={handleSubmit} className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidatePage;
