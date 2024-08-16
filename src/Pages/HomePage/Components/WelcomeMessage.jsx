import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const welcomeMessages = [
  { language: "English", message: "Welcome" },
  { language: "Spanish", message: "Bienvenido" },
  { language: "French", message: "Bienvenue" },
  { language: "German", message: "Willkommen" },
  { language: "Italian", message: "Benvenuto" },
  { language: "Portuguese", message: "Bem-vindo" },
  { language: "Dutch", message: "Welkom" },
  { language: "Swedish", message: "Välkommen" },
  { language: "Greek", message: "Καλώς ήρθατε" },
  { language: "Russian", message: "Добро пожаловать" },
  { language: "Japanese", message: "ようこそ" },
  { language: "Chinese", message: "欢迎" },
  { language: "Korean", message: "환영합니다" },
  { language: "Arabic", message: "مرحبا" },
];

const WelcomeMessage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messageRef = useRef(null);
  const subtitleRef = useRef(null);
  const arrowRef = useRef(null);
  const tl = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    tl.current = gsap.timeline();
    animateNextMessage();

    // Animate subtitle to fade in
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
    );

    // Animate arrow button
    gsap.fromTo(
      arrowRef.current,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        delay: 1.5,
      }
    );

    // Add bounce animation for the arrow button
    const arrowBounce = gsap.to(arrowRef.current, {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      if (tl.current) tl.current.kill();
      arrowBounce.kill();
    };
  }, []);

  const animateNextMessage = () => {
    if (!messageRef.current) return;

    const message = welcomeMessages[currentIndex].message;
    const letters = message.split("");

    messageRef.current.innerHTML = "";
    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      messageRef.current.appendChild(span);
    });

    tl.current.clear();
    tl.current
      .to(messageRef.current.children, {
        duration: 0.05,
        opacity: 1,
        rotationX: 0,
        y: 0,
        stagger: 0.03,
        ease: "power4.out",
        onStart: () => {
          gsap.set(messageRef.current.children, { rotationX: -90, y: 20 });
        },
      })
      .to(messageRef.current.children, {
        duration: 0.05,
        opacity: 0,
        rotationX: 90,
        y: -20,
        stagger: 0.03,
        ease: "power4.in",
        delay: 2,
      })
      .call(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % welcomeMessages.length
        );
      });
  };

  useEffect(() => {
    animateNextMessage();
  }, [currentIndex]);

  const handleArrowClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen pt-20 pb-10">
      <h1
        ref={messageRef}
        className="text-3xl md:text-7xl lg:text-9xl font-bold text-center mb-4 min-h-[1.2em] tracking-wide"
        style={{ perspective: "1000px", color: theme.palette.primary.light }}
      ></h1>
      <h2
        ref={subtitleRef}
        className="subtitle text-xl md:text-3xl lg:text-5xl font-semibold text-center mt-4 mb-8"
        style={{
          color: theme.palette.primary.light,
          opacity: 0,
        }}
      >
        Empowering Students with Language Skills
      </h2>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{
          fontSize: "1.5rem",
          padding: "12px 24px",
        }}
        className="hover-effect"
      >
        Start Learning
      </Button>
      <IconButton
        ref={arrowRef}
        onClick={handleArrowClick}
        style={{
          opacity: 0,
          marginTop: "3rem",
          color: theme.palette.primary.light,
          width: "80px",
          height: "80px",
        }}
      >
        <KeyboardArrowDownIcon style={{ fontSize: "4rem" }} />
      </IconButton>
    </div>
  );
};

export default WelcomeMessage;



// TODO: Make sure that the navbar is sticky and appears only when the user scrolls down.
// TODO: In addition, create an arrow that points down and complete the other sections on the welcome page.
// TODO: Finally, get the links working and make it look nice with animations.
