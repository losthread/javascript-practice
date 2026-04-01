// A state is data that react remembers after an event
// local variables updated with events are not rendered by react
// so we use states to retain that data between renders and change it
// any function that starts with use is called hook in react
// Hooks are special functions that are only available while React is rendering 
// states are isolated, if you render the same component somewhere else
  // it will have a different state

import { useState } from 'react'
import { sculptureList } from './data';

export default function Slide() {
  // uses state for data persistence
  // it means we want react to remmember something
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <div className='flex flex-col items-center gap-3 border-1 py-4 px-75'>
      <button onClick={handleNextClick}>
        Next
      </button>

      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>

      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>

      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>

      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </div>
  );
}