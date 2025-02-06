import React from 'react';

function Questionscard({ question, answer }) {
  return (
    <div>
      <div className='kurale-regular text-2xl'>
        {question}
      </div>
      <div className='pl-7'>
        {answer}
      </div>
    </div>
  );
}

export default Questionscard;