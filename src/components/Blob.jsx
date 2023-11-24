import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function Blob(props) {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      const mouseX = e.pageX - follower.offsetWidth / 2;
      const mouseY = e.pageY - follower.offsetHeight / 2;

      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 4,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className='blob'
      style={{background: `linear-gradient(to right, ${props.firstColor} 0%, ${props.secondColor} 100%`}}
    ></div>
  );
};

export default Blob;