import { useEffect, useState } from 'react';

const WORDS = ['Fullstack Dev', 'Game Dev', 'Designer'];
const TYPE_SPEED = 80;
const DELETE_SPEED = 50;
const PAUSE = 1800;

function Hello() {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = WORDS[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), PAUSE);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % WORDS.length);
        }
      }
    }, isDeleting ? DELETE_SPEED : TYPE_SPEED);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  return (
    <h1 className="text-white font-bold text-4xl text-center ms-0 md:ms-120 text-shadow-lg animate-slide-up">
      I'm a <span className="text-blue-300">{displayed}<span className="animate-pulse">|</span></span>
    </h1>
  );
}

export default Hello;
