import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

export default function WordProblem() {
  const [question, setQuestion] = useState('');
  const [context, setContext] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const handleSolve = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/word_problem', { question, context });
      setResponse(data);
      setError('');
    } catch (err) {
      setError('An error occurred while solving the word problem.');
      setResponse(null);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Word Problem Solver</h1>
      <input type="text" placeholder="Enter Question" value={question} onChange={(e) => setQuestion(e.target.value)} />
      <input type="text" placeholder="Enter Context" value={context} onChange={(e) => setContext(e.target.value)} />
      <button onClick={handleSolve}>Solve</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <div>
          <p>Extracted Problem: {response.extracted_problem}</p>
          <p>Solution: {response.solution}</p>
          <p>Explanation: {response.explanation}</p>
        </div>
      )}
    </div>
  );
}