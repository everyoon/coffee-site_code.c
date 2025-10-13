import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

const lines = [
  { type: 'comment', text: '// Oops! Something went wrong' },
  { type: 'code', text: 'const error = "404 Not Found";' },
  { type: 'code', text: 'function goHome() {' },
  { type: 'link', text: '    return "Click here to return to main page";' },
  { type: 'code', text: '}' },
];

function NotFound() {
  const navigate = useNavigate();
  const [typedLines, setTypedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (currentLine < lines.length) {
      if (currentChar < lines[currentLine].text.length) {
        const timeout = setTimeout(() => {
          const updated = [...typedLines];
          if (!updated[currentLine]) updated[currentLine] = '';
          updated[currentLine] += lines[currentLine].text[currentChar];
          setTypedLines(updated);
          setCurrentChar(currentChar + 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setCurrentChar(0);
        }, 300);
        return () => clearTimeout(timeout);
      }
    } else if (!typingDone) {
      setTypingDone(true);
    }
  }, [currentChar, currentLine, typedLines, typingDone]);

  return (
    <div className={styles.container}>
      <div className={styles.codeBlock}>
        {typedLines.map((line, idx) => {
          const lineType = lines[idx].type;
          if (lineType === 'comment') {
            return (
              <p key={idx} className={`${styles.line} ${styles.comment}`}>
                {line}
              </p>
            );
          } else if (lineType === 'code') {
            return (
              <p key={idx} className={styles.line}>
                {line
                  .replace(/(const|function|return)/g, (match) => `<span class="${styles.keyword}">${match}</span>`)
                  .replace(/error/g, `<span class="${styles.variable}">error</span>`)
                  .replace(/"404 Not Found"/g, `<span class="${styles.string}">"404 Not Found"</span>`)
                  .replace(/goHome/g, `<span class="${styles.funcName}">goHome</span>`)
                  .replace(/{/g, `<span class="${styles.brace}">&#123;</span>`)
                  .replace(/}/g, `<span class="${styles.brace}">&#125;</span>`)
                  .split(/(<span.*?span>)/g)
                  .map((part, i) =>
                    part.startsWith('<span') ? (
                      <span key={i} dangerouslySetInnerHTML={{ __html: part }} />
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
              </p>
            );
          } else if (lineType === 'link') {
            return (
              <p key={idx} className={`${styles.line} ${styles.indent}`}>
                <span className={styles.link} onClick={() => navigate('/')}>
                  {line.trim()}
                </span>
              </p>
            );
          }
          return null;
        })}
        {typingDone && <div className={styles.cursor}></div>}
      </div>
    </div>
  );
}

export default NotFound;
