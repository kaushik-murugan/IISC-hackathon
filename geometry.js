import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import '../styles/geometry.css';

export default function Geometry() {
  const [question, setQuestion] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const handleSolve = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/geometry', { question });

      if (data.image) {
        setImage(`http://localhost:5000/${data.image}`);
        setError('');
      } else {
        setError('Invalid response from server');
      }
    } catch (err) {
      setError('An error occurred while solving the geometry problem.');
      setImage('');
    }
  };

  return (
    <div className="geometry-container">
      <Navbar />
      <h1>Geometry Solver</h1>
      <input 
        type="text" 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)} 
        placeholder="Enter a shape (e.g., Draw a triangle)"
      />
      <button onClick={handleSolve}>Solve</button>
      {error && <p className="error">{error}</p>}
      {image && <img src={image} alt="Geometry Result" />}
    </div>
  );
}
