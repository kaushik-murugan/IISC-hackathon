import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import '../styles/image.css';

export default function UploadImage() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', file);
      const { data } = await axios.post('http://localhost:5000/upload_image', formData);
      setResponse(data);
      setError('');
    } catch (err) {
      setError('An error occurred while processing the image.');
      setResponse(null);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Upload Image for OCR</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <div>
          <p>Extracted Text: {response.extracted_text}</p>
          <p>Solution: {response.solution}</p>
          <p>Explanation: {response.explanation}</p>
        </div>
      )}
    </div>
  );
}