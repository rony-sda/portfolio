import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [outerCursorPosition, setOuterCursorPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    if (isMobile) return;

    let animationFrameId;
    let outerAnimationFrameId;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e?.clientX, y: e?.clientY });
    };

    const animateCursor = () => {
      setCursorPosition(prev => ({
        x: prev?.x + (mousePosition?.x - prev?.x) * 0.15,
        y: prev?.y + (mousePosition?.y - prev?.y) * 0.15
      }));
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    const animateOuterCursor = () => {
      setOuterCursorPosition(prev => ({
        x: prev?.x + (mousePosition?.x - prev?.x) * 0.08,
        y: prev?.y + (mousePosition?.y - prev?.y) * 0.08
      }));
      outerAnimationFrameId = requestAnimationFrame(animateOuterCursor);
    };

    document.addEventListener('mousemove', updateMousePosition);
    animationFrameId = requestAnimationFrame(animateCursor);
    outerAnimationFrameId = requestAnimationFrame(animateOuterCursor);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrameId);
      cancelAnimationFrame(outerAnimationFrameId);
    };
  }, [mousePosition , isMobile]);

  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // 768px এর নিচে হলে mobile ধরলাম
  };

  handleResize(); // প্রথমবার লোড হলে চেক করবে
  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
  }, []);
  
if (isMobile) return null;


  return (
    <>
      {/* Inner cursor - small lime filled circle */}
      <div 
        className="custom-cursor-inner"
        style={{
          transform: `translate(${cursorPosition?.x}px, ${cursorPosition?.y}px)`
        }}
      />
      {/* Outer cursor - larger thin outlined circle */}
      <div 
        className="custom-cursor-outer"
        style={{
          transform: `translate(${outerCursorPosition?.x}px, ${outerCursorPosition?.y}px)`
        }}
      />
    </>
  );
};

export default CustomCursor;