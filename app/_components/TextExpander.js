'use client';

import { use, useState } from "react";


function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(' ').slice(0, 40).join(' ') + '...';

  return (
    <span>
      {displayText}{' '}
      <button
        className='text-primary-700 border-b border-primary-700 leading-3 pb-1'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p className='hover:text-accent-500 cursor-pointer'> {isExpanded ? 'Show less' : 'Show more'}</p>
      </button>
    </span>
  );
}

export default TextExpander;
