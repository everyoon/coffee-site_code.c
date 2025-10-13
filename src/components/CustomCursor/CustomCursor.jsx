import React, { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotsRef = useRef([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const lastFrameRef = useRef(0);
  const timeoutIDRef = useRef(null);
  const idleRef = useRef(false);

  const amount = 20;
  const sineDots = Math.floor(amount * 0.3);
  const width = 26;
  const idleTimeout = 150;

  class Dot {
    constructor(index = 0) {
      this.index = index;
      this.anglespeed = 0.05;
      this.x = 0;
      this.y = 0;
      this.scale = 1 - 0.05 * index;
      this.range = width / 2 - (width / 2) * this.scale + 2;
      this.limit = width * 0.75 * this.scale;
      this.element = document.createElement('span');
      this.element.className = styles.dot;
      this.element.style.transform = `translate(-50%, -50%) scale(${this.scale})`;

      if (cursorRef.current) {
        cursorRef.current.appendChild(this.element);
      }
    }

    lock() {
      this.lockX = this.x;
      this.lockY = this.y;
      this.angleX = Math.PI * 2 * Math.random();
      this.angleY = Math.PI * 2 * Math.random();
    }

    draw() {
      if (!idleRef.current || this.index <= sineDots) {
        this.element.style.transform = `translate(${this.x - 13}px, ${this.y - 13}px) scale(${this.scale})`;
      } else {
        this.angleX += this.anglespeed;
        this.angleY += this.anglespeed;
        this.y = this.lockY + Math.sin(this.angleY) * this.range;
        this.x = this.lockX + Math.sin(this.angleX) * this.range;
        this.element.style.transform = `translate(${this.x - 13}px, ${this.y - 13}px) scale(${this.scale})`;
      }
    }

    destroy() {
      if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }
    }
  }

  const startIdleTimer = () => {
    timeoutIDRef.current = setTimeout(goInactive, idleTimeout);
    idleRef.current = false;
  };

  const resetIdleTimer = () => {
    clearTimeout(timeoutIDRef.current);
    startIdleTimer();
  };

  const goInactive = () => {
    idleRef.current = true;
    dotsRef.current.forEach((dot) => dot.lock());
  };

  const buildDots = () => {
    for (let i = 0; i < amount; i++) {
      let dot = new Dot(i);
      dotsRef.current.push(dot);
    }
  };

  const onMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const cursorEl = cursorRef.current;

    // header, footer 영역 확인
    if (
      (header && y >= header.getBoundingClientRect().top && y <= header.getBoundingClientRect().bottom) ||
      (footer && y >= footer.getBoundingClientRect().top && y <= footer.getBoundingClientRect().bottom)
    ) {
      if (cursorEl) cursorEl.style.display = 'none';
      document.body.style.cursor = 'auto';
    } else {
      if (cursorEl) cursorEl.style.display = 'block';
      document.body.style.cursor = 'none';
      mousePositionRef.current.x = x;
      mousePositionRef.current.y = y;
      resetIdleTimer();
    }
  };

  const onTouchMove = (event) => {
    mousePositionRef.current.x = event.touches[0].clientX;
    mousePositionRef.current.y = event.touches[0].clientY;
    resetIdleTimer();
  };

  const render = (timestamp) => {
    positionCursor();
    lastFrameRef.current = timestamp;
    requestAnimationFrame(render);
  };

  const positionCursor = () => {
    let x = mousePositionRef.current.x;
    let y = mousePositionRef.current.y;

    dotsRef.current.forEach((dot, index, dots) => {
      let nextDot = dots[index + 1] || dots[0];
      dot.x = x;
      dot.y = y;
      dot.draw();

      if (!idleRef.current || index <= sineDots) {
        const dx = (nextDot.x - dot.x) * 0.35;
        const dy = (nextDot.y - dot.y) * 0.35;
        x += dx;
        y += dy;
      }
    });
  };

  useEffect(() => {
    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);

    lastFrameRef.current = Date.now();
    buildDots();
    startIdleTimer();
    requestAnimationFrame(render);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      clearTimeout(timeoutIDRef.current);
      dotsRef.current.forEach((dot) => dot.destroy());
      dotsRef.current = [];
    };
  }, []);

  return (
    <>
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div ref={cursorRef} className={styles.cursorContainer} />
    </>
  );
};

export default CustomCursor;
