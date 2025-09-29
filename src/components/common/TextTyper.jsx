import { useState, useEffect, useRef } from 'react';

export default function TextTyper({ text = '', speed = 30, onComplete }) {
  const [displayedText, setDisplayedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const timeoutRef = useRef(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (typingDone || !text) return;

    let i = 0;
    const type = () => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i < text.length) {
        timeoutRef.current = setTimeout(type, speed);
      } else {
        setTypingDone(true);
        onCompleteRef.current?.();
      }
    };

    type();

    return () => clearTimeout(timeoutRef.current);
  }, [text, speed, typingDone]);

  return <span>{displayedText}</span>;
}
