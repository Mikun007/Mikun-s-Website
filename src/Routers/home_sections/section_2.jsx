import { useEffect, useState } from "react";


var timeStarted = "";

var controlPressed = "";
var prev_val = [];
var key_press = [];

var new_count = 59;

function Section_2() {
    const [wpm, setWpm] = useState(0);
    const [wordList, setWordList] = useState([]);
    const [count, setCount] = useState(60);
    const [t_should_run, set_t_should_run] = useState("yes");

    // shuffling the array that is inputed
    function array_shuffle(myWords) {
        for (let i = myWords.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [myWords[i], myWords[j]] = [myWords[j], myWords[i]];
          }
          return myWords;
    }

    // word reseting or rearanging
    function reset_the_words() {
        let list = [ "apple",  "banana",  "cherry",  "dog",  "elephant",  "frog", "house", "jacket",  "kite",  "lemon",  "monkey",  "nest",  "orange",  "pencil",  "queen",  "rabbit",  "sun",  "tree", "water", "book",  "car",  "desk",  "eleven",  "fish",  "guitar",  "hat",  "ice", "key",  "lion",  "map",  "nose",  "ocean",  "pizza",  "queen",  "robot",  "snake",  "tree", "window", "cat", "elephant",  "flower", "mountain", "spider",  "tiger",  "umbrella", "watermelon", "ant",  "bird", "deer",  "ear",  "flower",  "goat",  "horse",  "ice",  "jungle",  "kite",  "lion", "nose",  "owl",  "panda",  "queen",  "rain",  "sun",  "tree",  "under",  "violet",  "whale", "yellow",  "apple",  "butter",  "cookie", "egg", "honey", "jam", "lemon",  "milk",  "nut", "pear", "tea", "water", "yam", 'the', 'and', 'cat', 'dog', 'hat', 'car', 'red', 'blue', 'one', 'two',
    'sun', 'run', 'fun', 'jump', 'book', 'pen', 'paper', 'apple', 'orange', 'banana',
    'bed', 'bee', 'box', 'boy', 'bus', 'big', 'buy', 'bag', 'bad', 'bat',
    'can', 'cab', 'cap', 'car', 'cut', 'cow', 'cop', 'cry', 'cup', 'cur',
    'dad', 'den', 'dig', 'dog', 'day', 'dry', 'dip', 'dot', 'due', 'dug',
    'eat', 'egg', 'end', 'ear', 'eel', 'eye', 'ego', 'ewe', 'elk', 'elm',
    'fan', 'fun', 'fed', 'fly', 'fox', 'fix', 'fur', 'fog', 'fee', 'fig',
    'get', 'got', 'gum', 'gun', 'god', 'gap', 'gas', 'gym', 'gut', 'gee',
    'hat', 'hop', 'hit', 'hug', 'hot', 'hen', 'hey', 'hut', 'hum', 'hob',
    'ink', 'ice', 'inn', 'its', 'ivy', 'ill', 'ink', 'irk', 'ion', 'ire',
    'jam', 'jog', 'jet', 'jaw', 'jot', 'jar', 'jig', 'jay', 'jew', 'joy',
    'kid', 'kit', 'key', 'kite', 'kin', 'keg', 'kay', 'ken', 'kim', 'kin',
    'lab', 'led', 'log', 'lip', 'let', 'law', 'lap', 'lit', 'lot', 'lay',
    'men', 'mom', 'man', 'map', 'mud', 'mug', 'met', 'mop', 'mow', 'may',
    'net', 'nod', 'nip', 'now', 'new', 'nut', 'nun', 'nix', 'nil', 'nor',
    'owl', 'own', 'oak', 'oil']
        document.getElementById("contentEditableDiv").innerHTML = "";
        document.querySelector(".word_written").innerHTML = "";
        let new_words = array_shuffle(list);
        setWordList(new_words);
    }

    // when first load the page it should call the reset_the_words funtion to rearange the words
    useEffect(() => {
        reset_the_words()
    }, [])

    // to hide timeing functionality
    function hideTimer(){
        const x = document.querySelector("#svg_timer");
        if (x.style.visibility === "hidden") {
            x.style.visibility = "visible";
            document.getElementById("hide_&_show_btn").innerHTML = "Hide_Timer";
        } else {
            x.style.visibility = "hidden";
            document.getElementById("hide_&_show_btn").innerHTML = "Show_Timer";
        }
    }

    // setting focus on the content editable when click on that area
    function setFocus() {
        const div = document.getElementById("contentEditableDiv");
        div.focus();
    };

    //Refresh the typing speed test
    function handleClick() {
        reset_the_words();
        set_t_should_run("no");
        setCount(60)
        new_count = 60
        timeStarted = "";
        controlPressed = "";
        prev_val = [];
        key_press = [];
        document.getElementById("contentEditableDiv").classList.remove("line_through");
        document.getElementById("timer_path").classList.remove("timer_svg");
        document.getElementById("wpm_speed").classList.remove("background_flash")
        document.getElementById("contentEditableDiv").contentEditable = "true";
        
    };
    
    // Timer
    function timer() {
        document.getElementById("timer_path").classList.add("timer_svg");
        const intervalId = setInterval(() => {
            setCount(new_count--)
            if (document.querySelector(".t_should_run_check").innerHTML === "no") {
                clearInterval(intervalId);
            }
            document.getElementById("navbar").addEventListener("click", () => {
                clearInterval(intervalId);
                handleClick();
            });
          
            if (new_count === 0) {
              clearInterval(intervalId);
              document.getElementById("contentEditableDiv").contentEditable = "false";
              let words_written = Math.round(key_press.length / 5);
              let wrong_words = document.querySelectorAll(".line_through");
              let new_wpm = words_written - wrong_words.length;

              if (new_wpm < 1) {
                setWpm(0)
                document.getElementById("wpm_speed").classList.add("background_flash");
              } else {
                setWpm(new_wpm)
                document.getElementById("contentEditableDiv").contentEditable = "false";
              }
            }
            
          }, 1000);
    };

    // Typing speed test Functionality.
    // Typing function call when key is pressed.
    function changed(event) {
        let keyPressed;
        let word = document.querySelector(".words-to-write span:nth-child(1)").innerHTML;

        // Do this if the Control is pressed
        if (event.key === "Control") {
            controlPressed = "yes";
        }

        if (event.key === "Enter"){
            event.preventDefault();
        }

        // Do this when Space-Bar is pressed
        if (event.key === " ") {
            event.preventDefault();
            let wrong_word = "";
            let the_removed_word = document.querySelector(".words-to-write span:nth-child(1)")
            if (the_removed_word.innerHTML.length > 0) {
                wrong_word = "yes";
            }

            if (document.getElementById("contentEditableDiv").innerHTML.length > 0) {
                the_removed_word.remove();
                let the_word = document.getElementById("contentEditableDiv").innerHTML;
                let to_add_to = document.querySelector(".word_written");
                let newSpan = document.createElement("span");
                newSpan.innerHTML = the_word;
                newSpan.style.marginRight = "0.25rem";
                if (document.getElementById("contentEditableDiv").classList.contains("line_through") || wrong_word === "yes") {
                    newSpan.classList.add("line_through");
                }
                newSpan.classList.add("written_word");
                to_add_to.appendChild(newSpan)

                document.getElementById("contentEditableDiv").innerHTML = null;
                document.getElementById("contentEditableDiv").classList.remove("line_through");
                prev_val = [];
                controlPressed = "";
                
                if (event.key === " ") {
                    key_press.push("space")
                };
                if (event.key === "Shift") {
                    key_press.push("shift")
                };
                if (event.key === "Backspace") {
                    key_press.push("Back")
                };
            }

        }

        // Do this if the Backspace is pressed
        if (event.key === "Backspace") {
            // Do this if the Control+Backspace is pressed
            if (controlPressed === "yes") {
                let new_val = "";
                prev_val.map((e) => {
                    new_val += e;
                    return null;
                })

                let w = document.querySelector(".words-to-write span:nth-child(1)").innerHTML;
                let new_w = new_val + w;

                document.querySelector(".words-to-write span:nth-child(1)").innerHTML = new_w;
                prev_val = [];
                controlPressed = "";
                document.getElementById("contentEditableDiv").classList.remove("line_through");
                document.getElementById("contentEditableDiv").innerHTML = "";
            }

            // Do this if the editable div has a class "line_through"
            if (document.getElementById("contentEditableDiv").classList.contains("line_through")) {
                let editable = document.getElementById("contentEditableDiv").innerHTML;
                if (editable.length === 0 || editable.length === undefined) {
                    document.getElementById("contentEditableDiv").classList.remove("line_through");
                }
                
                if (editable.length - 1 === prev_val.length) {
                    if (editable[editable.length - 3] !== prev_val[prev_val.length - 2]){
                       
                    }else if (editable[editable.length - 2] === prev_val[prev_val.length - 1]) {
                        
                        document.getElementById("contentEditableDiv").classList.remove("line_through");
                    }
                }
                // Or Elese Do this
            } else{
                let w = document.querySelector(".words-to-write span:nth-child(1)").innerHTML;
                let prev_char = prev_val.pop();
                let new_w = prev_char + w;
                if (prev_char !== undefined) {
                    document.querySelector(".words-to-write span:nth-child(1)").innerHTML = new_w;
                }
            }
        }

        // Do this while the key pressed excluding (control and shift)
        if (document.getElementById("contentEditableDiv").classList.contains("line_through")) {
        //Do Nothing
        }else if (event.key === "Shift" ||
         event.key === "Control" ||
         event.key === "Alt" ||
         event.key === "Meta" ||
         event.key === "AltGraph" ||
          event.key === "Backspace" ||
          event.key === "ContextMenu" ||
          event.key === "CapsLock" ||
          event.key === "Tab" ||
           event.key === " " ||
            event.key === "ArrowRight" ||
             event.key === "ArrowLeft" ||
              event.key === "ArrowUp" ||
               event.key === "ArrowDown"
               ) {
            
        } else {
            if (timeStarted === ""){
                timeStarted = "yes";
                set_t_should_run("yes")
                timer();
            };
            keyPressed = event.key;
            if (document.getElementById("contentEditableDiv").contentEditable === "false") {
            
            }else if (keyPressed === word[0]) {
                prev_val.push(word[0]);
                key_press.push(word[0])
                let new_char = word.slice(1);
                document.querySelector(".words-to-write span").innerHTML = new_char;
            }else {
                document.getElementById("contentEditableDiv").classList.add("line_through");
            };
        };
    };

    return (

        <section id="second_section_home">
            <h1>Typing Speed Test 😎 <p className="t_should_run_check" style={{"display": "none"}}>{t_should_run}</p></h1>
            <div className="timer_area">
                <span id="svg_timer">
                    <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="65" cy="65" r="51.5" fill="url(#paint0_linear_0_1)" stroke="#977AFF"/>
                        <path id="timer_path" className="starting_animation" d="M64.3536 122C33.1711 121.653 8 96.2672 8 65.0018C8 33.5206 33.5198 8 65 8C96.4802 8 122 33.5206 122 65.0018C122 96.2673 96.8288 121.654 65.6463 122" stroke="#977AFF" strokeWidth="16" strokeLinecap="round"/>
                        <defs>
                            <linearGradient id="paint0_linear_0_1" x1="117" y1="53" x2="33" y2="101" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E2E2E2"/>
                            <stop offset="1" stopColor="#EDE5E5" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="timer_in_text">
                        <p>{count}</p>
                        <p>seconds</p>
                    </div>
                </span>

                <span id="wpm_speed">
                    <span>
                        <p>{wpm}</p>
                        <p>wpm</p>
                    </span>
                </span>
            </div>

            <div onClick={setFocus} className="typing_area">
                <div className="word_written"></div>
                <div onKeyDown={(event) => {
                    changed(event)
                }} 
                id="contentEditableDiv" contentEditable={true} spellCheck={false} tabIndex={1}></div>
                <div className="words-to-write">
                    {wordList.map((word, index) => {
                        return <span key={index} style={{marginRight: "0.65rem"}}>{word}</span>
                    })}
                </div>
            </div>

            <div className="buttons_div">
                <button id="hide_&_show_btn" onClick={hideTimer} className="btn btn-outline-warning">Hide_Timer</button>
                <button onClick={handleClick} className="btn btn-outline-primary"><i className="fa-solid fa-arrows-rotate fa-2x"></i></button>
            </div>
        </section>

    );
};

export default Section_2;
