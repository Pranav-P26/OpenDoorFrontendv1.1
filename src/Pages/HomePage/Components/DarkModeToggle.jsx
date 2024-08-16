import React, { useRef, useEffect } from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/LightMode';
import Brightness7Icon from '@mui/icons-material/DarkMode';
import { gsap } from 'gsap';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  const lightIconRef = useRef(null);
  const darkIconRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        rotateY: isDarkMode ? 180 : 0,
        duration: 0.6,
        ease: "power2.inOut"
      });
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    toggleDarkMode();
  };

  return (
    <IconButton
      onClick={handleToggle}
      color="inherit"
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        backgroundColor: (theme) => theme.palette.background.paper,
        '&:hover': {
          backgroundColor: (theme) => theme.palette.action.hover,
        },
        perspective: '1000px',
      }}
    >
      <div 
        ref={containerRef} 
        style={{ 
          width: '24px', 
          height: '24px', 
          position: 'relative',
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          ref={lightIconRef}
          style={{
            position: 'absolute',
            backfaceVisibility: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Brightness4Icon />
        </div>
        <div
          ref={darkIconRef}
          style={{
            position: 'absolute',
            backfaceVisibility: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            transform: 'rotateY(180deg)',
          }}
        >
          <Brightness7Icon />
        </div>
      </div>
    </IconButton>
  );
};

export default DarkModeToggle;