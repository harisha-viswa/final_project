import React, { useState } from "react";
import "./recruiter.css";
import * as XLSX from "xlsx";




const RecruiterPage = () => {
  
    const [showModal, setShowModal] = useState(false);
    const [jobId, setJobId] = useState(0);
    const [jobRole, setJobRole] = useState("");
    const [yearsOfExperience, setYearsOfExperience] = useState("");
    const [salary, setSalary] = useState("");
    const [location, setLocation] = useState("");
    const [resumeName, setResumeName] = useState("");
    const [jobs, setJobs] = useState([]);

    const generateJobId = () => {
        return Date.now();
    };

    const openJobForm = () => {
        setJobId(generateJobId());
        setShowModal(true);
    };

    const closeJobForm = () => {
        setShowModal(false);
        setJobRole("");
        setYearsOfExperience("");
        setSalary("");
        setLocation("");
        setResumeName("");
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setResumeName(file.name);
        } else {
            setResumeName("");
        }
    };

    const handleSubmit = () => {
        if (!jobRole || !yearsOfExperience || !salary || !location || !resumeName) {
            alert("Please fill all fields before submitting.");
            return;
        }
    
        const newJob = {
            jobId,
            jobRole,
            yearsOfExperience: parseInt(yearsOfExperience),
            salary: parseInt(salary),
            location,
            resumeName,
        };
    
        // Add the new job to the jobs list
        setJobs([...jobs, newJob]);
    
        // Step 1: Export jobs to Excel
        exportToExcel([...jobs, newJob]);
    
        // Close the modal
        closeJobForm();
    };
    
    // Function to export job details to Excel
    const exportToExcel = (jobsData) => {
        const ws = XLSX.utils.json_to_sheet(jobsData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Jobs");
    
        // Generate and download the Excel file
        XLSX.writeFile(wb, "jobs.xlsx");
    };

   
    
    return (
        <div className="recruiter-container">
            <nav className="navbar">
            <div className="profile-icon">👤</div>
            </nav>

            <div className="content">
                <div className="welcome-section">
                    <h1>Welcome, Recruiter!</h1>
                    <p>Manage your job postings efficiently.</p>
                </div>
                <div className="create-job">
                    <button className="create-job-btn" onClick={openJobForm}>
                        ➕ Create a New Job
                    </button>
                </div>
            </div>

            {/* Popup Modal with Overlay */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close-button" onClick={closeJobForm}>
                            ✖
                        </button>

                        <h2>Create Job</h2>

                        <label>Job ID:</label>
                        <input type="text" value={jobId} readOnly />

                        <label>Job Role:</label>
                        <input
                            type="text"
                            placeholder="Enter job role"
                            value={jobRole}
                            onChange={(e) => setJobRole(e.target.value)}
                        />

                        <label>Years of Experience:</label>
                        <input
                            type="number"
                            placeholder="Enter experience required"
                            value={yearsOfExperience}
                            onChange={(e) => setYearsOfExperience(e.target.value)}
                        />

                        <label>Salary:</label>
                        <input
                            type="number"
                            placeholder="Enter stipend or salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                        />

                        <label>Location:</label>
                        <input
                            type="text"
                            placeholder="Enter location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />

                        <label>Upload Job Description (PDF):</label>
                        <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileUpload}
                        />
                        <p className="file-name">{resumeName}</p>

                        <div className="modal-buttons">
                            <button className="submit-btn" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="job-cards-container">
                {jobs.map((job) => (
                    <div className="job-card" key={job.jobId}>
                        <h3>{job.jobRole}</h3>
                        <p><strong>Salary:</strong> ₹{job.salary}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p><strong>Experience:</strong> {job.yearsOfExperience} years</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecruiterPage; 