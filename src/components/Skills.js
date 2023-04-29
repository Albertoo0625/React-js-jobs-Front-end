import React, { useState } from "react";

const SkillsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [languages, setLanguages] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !skills || languages.length === 0 || !profilePhoto || !cvFile) {
      setError("Please fill in all fields");
      return;
    }

    // You can use this information to send to a backend or to update your state
    console.log({ name, email, skills, languages, profilePhoto, cvFile });
  };

  const handleProfilePhotoChange = (event) => {
    setProfilePhoto(event.target.files[0]);
  };

  const handleCvFileChange = (event) => {
    const file = event.target.files[0];

    // Check that the uploaded file is a PDF file
    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file");
      return;
    }

    setCvFile(file);
  };

  const handleLanguagesChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map((option) => option.value);
    setLanguages(selectedOptions);
  };

  return (
    <div>
      <h1>Skills</h1>
      {error && <div className="error">{error}</div>}
      <div className="skills-list">
        <div className="skill">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
              Skills:
              <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
            </label>
            <br />
            <label>
              Languages:
              <select multiple value={languages} onChange={handleLanguagesChange}>
                <option value="Javascript">Javascript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
                <option value="Ruby">Ruby</option>
                <option value="PHP">PHP</option>
              </select>
            </label>
            <br />
            <label>
              Profile Photo:
              <input type="file" accept="image/*" onChange={handleProfilePhotoChange} />
            </label>
            <br />
            <label>
              CV File (PDF):
              <input type="file" accept=".pdf" onChange={handleCvFileChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
