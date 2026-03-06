import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    title: "Email me",
  },
  {
    icon: faGithub,
    url: "https://github.com",
    title: "Github",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    title: "LinkedIn",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    title: "Medium",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    title: "Stack Overflow",
  },
];

const Header = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const previousScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const isScrollingDown = currentScrollPosition > previousScrollPosition.current;

      setIsScrollingUp(!isScrollingDown);
      previousScrollPosition.current = currentScrollPosition;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={isScrollingUp ? "translateY(0)" : "translateY(-200px)"}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav className="social-links-nav">
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {socials.map((social, index) => {
                return (
                  <a key={index} href={social.url} target="_blank" title={social.title} rel="noopener noreferrer">
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects-section" onClick={handleClick("projects")}>Projects</a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
