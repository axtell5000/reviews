import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // setting up state
  const [index, setIndex] = useState(0);
  // destructuring
  const { name, job, image, text } = people[index];

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' title="Previous review">
          <FaChevronLeft />
        </button>
        <button className='next-btn' title="Next review">
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' title="Random review">
        surprise me
      </button>
    </article>
  );
};

export default Review;
