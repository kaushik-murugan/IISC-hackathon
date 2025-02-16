import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import '../styles/solve.css';

export default function Solve() {
  const [problem, setProblem] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const handleSolve = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/solve', { problem });
      setResponse(data);
      setError('');
    } catch (err) {
      setError('An error occurred while solving the equation.');
      setResponse(null);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Equation Solver</h1>
      <input type="text" value={problem} onChange={(e) => setProblem(e.target.value)} />
      <button onClick={handleSolve}>Solve</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <div>
          <p>Solution: {response.solution}</p>
          <p>Explanation: {response.explanation}</p>
        </div>
      )}
    </div>
  );
}
