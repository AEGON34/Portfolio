import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let rx = mouseX;
    let ry = mouseY;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      rx += (mouseX - rx) * 0.1;
      ry += (mouseY - ry) * 0.1;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dot.style.width = '13px';
      dot.style.height = '13px';
      dot.style.background = '#7dd3fc';
      ring.style.width = '48px';
      ring.style.height = '48px';
      ring.style.borderColor = 'rgba(125,211,252,0.55)';
    };

    const onLeave = () => {
      dot.style.width = '9px';
      dot.style.height = '9px';
      dot.style.background = '#38bdf8';
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(56,189,248,0.4)';
    };

    const interactiveSelectors = 'a, button, input, textarea, select, label, [role="button"], [tabindex]';
    const interactiveEls = document.querySelectorAll(interactiveSelectors);

    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    const onMouseEnterWindow = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };
    const onMouseLeaveWindow = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', onMouseLeaveWindow);
    document.documentElement.addEventListener('mouseenter', onMouseEnterWindow);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeaveWindow);
      document.documentElement.removeEventListener('mouseenter', onMouseEnterWindow);
      cancelAnimationFrame(rafId);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} id="cursor-dot" />
      <div ref={ringRef} id="cursor-ring" />
    </>
  );
}
