let function_added = "";

function bar_animation() {
  const sass_div = document.querySelector(".the_bar_for_sass");
  const javascript_div =document.querySelector(".the_bar_for_javascript");
  const python_div = document.querySelector(".the_bar_for_python");
  const react_div = document.querySelector(".the_bar_for_react");
  const next_div = document.querySelector(".the_bar_for_next");
  const figma_div = document.querySelector(".the_bar_for_figma");
  const ai_div = document.querySelector(".the_bar_for_ai")
  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        setTimeout(() => {javascript_div.style.width = "55%";}, 200);
        setTimeout(() => {python_div.style.width = "60%";}, 400);
        setTimeout(() => {react_div.style.width = "50%";}, 600);
        setTimeout(() => {sass_div.style.width = "45%";}, 800);
        setTimeout(() => {next_div.style.width = "45%";}, 1100);
        setTimeout(() => {figma_div.style.width = "60%";}, 1300);
        setTimeout(() => {ai_div.style.width = "40%";}, 1500);
        observer.unobserve(entry.target);
      };
    });
  });
  observer.observe(sass_div);
};

function call_meter_animation() {
    // Animation on MarkList of meter on cv page
    function score_animation(target, finalValue){
      const divElement = document.getElementById(target);
  
      let currentValue = 0;
      const duration = 1000;
      const intervalTime = duration / finalValue;
  
      const intervalId = setInterval(()=> {
        divElement.innerHTML = currentValue;
        currentValue++;
  
        if (currentValue > finalValue) {
          clearInterval(intervalId);
        }
      }, intervalTime)
    };
  
    const myDiv = document.querySelector(".cv_section_3");
    const my_meter = document.querySelector(".meter_1");
    const my_meter_2 = document.querySelector(".meter_2");
    const my_meter_3 = document.querySelector(".meter_3");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          my_meter.classList.add("meter-animation");
          my_meter_2.classList.add("meter-animation_2");
          my_meter_3.classList.add("meter-animation_3");
          if (function_added === "") {
            setTimeout(() => {score_animation("10th_mark", 64)}, 200);
            setTimeout(()=> {score_animation("12th_mark", 55)}, 400);
            setTimeout(()=> {score_animation("collage_mark", 72)}, 600);
            function_added = "yes";
          }
          
          observer.unobserve(entry.target);
        }
      });
    });
  
    observer.observe(myDiv)
  }

window.addEventListener("load", () => {

  // navBar Animation while scrolling.
  const body = document.querySelector("html");

  // For touch-Screen Mobile and tablet
  let startY = null;
  let endY = null;

  body.addEventListener("touchstart", (event) => {
    startY = event.touches[0].clientY;
    call_meter_animation();
    bar_animation();
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


    // to reset the functionn added for percent in touch screen
    document.getElementById("navbar").addEventListener("touchstart", () => {
      function_added = ""
    })

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

    call_meter_animation();
    bar_animation();

  });


  // to reset the fuction added while scrolling in laptop or desktop
  document.getElementById("navbar").addEventListener("click", () => {
    function_added = ""
  })
  
});
