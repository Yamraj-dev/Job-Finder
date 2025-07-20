# 💼 Job Finder

A web application where **Recruiters** can post jobs and **Job Seekers** can apply for them. Built using **Node.js**, **Express**, and **EJS**, it includes file upload capabilities for resumes via **Multer**.

---

## 🚀 Features

- ✅ **User Authentication**
  - Register and login (currently stores name/email in Local Storage)
  - MongoDB integration planned for future

- 👔 **Recruiter Dashboard**
  - Post job listings  
  - View applicants and access uploaded resumes

- 👨‍💻 **Job Seeker Dashboard**
  - View job listings
  - Apply for jobs and upload resume (in-progress)

- 📎 **Resume Upload (Multer)**
  - File upload logic is implemented, but improvements are planned

---

## 🛠️ Tech Stack

| Layer     | Tools Used                   |
|-----------|------------------------------|
| **Backend** | Node.js, Express.js          |
| **Frontend**| EJS, HTML, Tailwind CSS      |
| **File Upload** | Multer for resume handling |
| **Storage** | Currently: Local Storage (MongoDB integration coming) |

---

## 🚧 Future Improvements

- 🔧 Fix resume upload feature (Multer bug)
- 🗃 Integrate MongoDB for persistent job and user data
- 🎨 Improve UI/UX and add role-based dashboards

---

## 💻 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/Yamraj-dev/Job-Finder.git
cd Job-Finder

# Install dependencies
npm install

# Start the server
node index.js

# Visit in your browser
http://localhost:3000

# Live on
https://job-finder-backend-o82a.onrender.com/
