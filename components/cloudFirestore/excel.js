import { useState } from 'react';
import { storage } from '../firebase';

function ExcelUploader() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const handleUpload = async () => {
    if (file) {
      const storageRef = storage.ref(`excel/${file.name}`);
      await storageRef.put(file);
      alert('Excel file uploaded successfully!');
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleUpload}>Upload Excel</button>
    </div>
  );
}

export default ExcelUploader;
