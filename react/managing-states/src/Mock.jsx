// start with all the states like, error, success, typing, submitting etc. Gradually remove the unnecessary ones
// Group related data eg: instead of x and y create an object with x and y
// Avoid paradoxes and contradictions in state can cause hard to find bugs
// Avoid redundant and duplicated states
// Avoid deeply nested state its hard to read and maintain

import { useState } from "react";

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success')
    return <h1>That's right!</h1>

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } 
    catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div>
      <h2>City Quiz</h2>

      <p>In which city is there a billboard that turns air into drinking water</p>

      <form onSubmit={handleSubmit}>
        <textarea value={answer} onChange={handleTextareaChange} disabled={status === 'submitting'}
        />

        <button className="block" disabled={answer.length === 0 || status === 'submitting'}>Submit</button>

        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </div>
  );
}

function submitForm(answer) {
  // pretend like its a network request
  // and it takes time
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError)
        reject(new Error('Good guess but its a wrong answer, try again!'));
      else
        resolve();
    }, 1500);
  });
}