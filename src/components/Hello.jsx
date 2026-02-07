import { useEffect, useState } from 'react';

function Hello() {
  const [text, setText] = useState('Front-End');

  useEffect(() => {
    const textLoad = () => {
      setTimeout(() => {
        setText('Front-End');
      }, 0);
      setTimeout(() => {
        setText('Game Dev');
      }, 4000);
      setTimeout(() => {
        setText('Designer');
      }, 8000);
    };

    textLoad(); 
    const interval = setInterval(textLoad, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-white font-bold text-4xl text-center ms-0 md:ms-[30rem]">
      I&apos;m a <span className="text-blue-300">{text}</span>
    </h1>
  )
}

export default Hello