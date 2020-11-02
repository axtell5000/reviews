import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // setting up state
  const [index, setIndex] = useState(0);
  // destructuring
  const { name, job, image, text } = people[index];

  // functionality
  // checking if within range
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    // to make sure its keeping track of current / prev state, we useState like below
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    // to make sure its keeping track of current / prev state, we useState like below
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

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
        <button className='prev-btn' title="Previous review" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' title="Next review" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' title="Random review" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
