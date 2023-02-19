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

  document.getElementById("rotate_element").classList.add("infinite_rotation");
});