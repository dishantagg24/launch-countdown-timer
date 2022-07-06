/** @format */

import React, { useEffect, useState } from 'react';
import './App.css';
import { Box } from './components/box';
import { Footer } from './components/footer';
import StarImg from './assets/bg-stars.svg';
import getTimeRemaining from './utils';

function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(0);
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const { seconds, minutes, hours, days } = getTimeRemaining();
      setSecond(seconds);
      setMinute(minutes);
      setHour(hours);
      setDay(days);
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [second, minute, hour, day]);
  return (
    <section>
      <img className='star-img' src={StarImg} alt='star-img' />
      <h2>we're launching soon</h2>
      <div className='boxes'>
        <Box desc='days' time={day} />
        <Box desc='hours' time={hour} />
        <Box desc='minutes' time={minute} />
        <Box desc='seconds' time={second} />
      </div>
      <Footer />
    </section>
  );
}

export default App;
