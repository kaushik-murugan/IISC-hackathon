import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

export default function Graph() {
  const [equation, setEquation] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const handlePlot = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/graph', { equation });
      setImage(data.image);
      setError('');
    } catch (err) {
      setError('An error occurred while plotting the graph.');
      setImage('');
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Graph Plotter</h1>
      <input type="text" value={equation} onChange={(e) => setEquation(e.target.value)} />
      <button onClick={handlePlot}>Plot Graph</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {image && <img src={`data:image/png;base64,${image}`} alt="Graph" />}
    </div>
  );
}