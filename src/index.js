import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


window.addEventListener("load", () => {

  // navBar Animation while scrolling.
  const body = document.querySelector("body");

  // For touch Screen Mobile and tablet
  let startY = null;
  let endY = null;

  body.addEventListener("touchstart", (event) => {
    startY = event.touches[0].clientY;
  });

  body.addEventListener("touchmove", (event) => {
    endY = event.touches[0].clientY;

    const navBar = document.querySelector(".fixed-navbar-position-home");

    if (endY < startY) {
      if (navBar.classList.contains("animation-up")) {
        navBar.classList.replace("animation-up", "animation-down");
      }
      navBar.classList.add("animation-down");
    }

    if (endY > startY) {
      navBar.classList.replace("animation-down", "animation-up");
    }
  });

  body.addEventListener("touchend", () => {
    startY = null;
    endY = null;
  });


  // For Laptop and desktop.
  body.addEventListener("wheel", (event) => {
    const navBar = document.querySelector(".fixed-navbar-position-home");

    if (event.deltaY > 0) {

      if (navBar.classList.contains("animation-up")) {
        navBar.classList.replace("animation-up", "animation-down")
      };
      navBar.classList.add("animation-down")

    };

    if (event.deltaY < 0) {
      navBar.classList.replace("animation-down", "animation-up");
    };

  });
  
});