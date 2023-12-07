import React, { useState, useEffect } from "react";
import "./App.css";
import {
  ChakraProvider,
  Box,
  Heading,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import {
  FaLaptopCode,
  FaLightbulb,
  FaPencilAlt,
  FaShoppingCart,
  FaSearch,
  FaEarlybirds,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  useEffect(() => {
    if (isSearchOpen) {
      document.getElementById("searchInput").focus();
    }
  }, [isSearchOpen]);

  // Function to toggle the search bar visibility
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  //carousel
  const images = [
    "https://images.pexels.com/photos/163811/street-art-shipping-container-freight-highway-163811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/772650/pexels-photo-772650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Change to your second image URL
    "https://images.pexels.com/photos/173294/pexels-photo-173294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Change to your third image URL
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true, // Set centerMode to true for centering the images
    centerPadding: "0", // Remove padding for better centering
  };

  return (
    <ChakraProvider>
      <div className="App">
        <header className="header">
          <nav className="navbar">
            <div className="logo">
              <img
                src="src\images\Animation - 1701962989988.gif"
                alt="Section 2"
              />
              <span> The Street Art Project</span>{" "}
              {/* Add your fake company name */}
            </div>
            <ul className="nav-links">
              <li>Home</li>
              <li>About</li>
              <li>Resources</li>
              <li>Contact</li>
              <li className="highlighted">Services</li>
            </ul>
            <div className="search-container">
              <Icon as={FaSearch} onClick={toggleSearch} cursor="pointer" />
              {isSearchOpen && (
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Search..."
                  onBlur={() => setIsSearchOpen(false)}
                />
              )}
            </div>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-content">
            <Heading
              as="h1"
              fontSize="8xl"
              color="black"
              textAlign="center"
              mb="4"
            ></Heading>
          </div>
        </section>

        <section className="content-section light-bg">
          <div className="section-content">
            <h2>Street Art </h2>
            <p>
              is visual art created in public locations for public visibility.
              Street art has evolved from the early forms of defiant graffiti
              into a more commercial form of art, as one of the main differences
              now lies with the messaging. Street art is often meant to provoke
              thought rather than rejection among the general audience through
              making its purpose more evident than that of graffiti. The issue
              of permission has also come at the heart of street art, as
              graffiti is usually done illegally, whereas street art can
              nowadays be the product of an agreement or even sometimes a
              commission. However, it remains different from traditional art
              exposed in public spaces by its explicit use of said space in the
              conception phase.{" "}
            </p>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="carousel-image">
                  <img src={image} alt={`Section ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="lastone">
          <div className="lastone-content">
            <Heading
              as="h1"
              fontSize="8xl"
              color="black"
              textAlign="center"
              mb="4"
            ></Heading>
          </div>
        </section>
      </div>
    </ChakraProvider>
  );
}
export default App;
