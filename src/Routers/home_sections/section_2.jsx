import { useState } from "react";

function Section_2() {
    function setFocus() {
        const div = document.getElementById("contentEditableDiv");
        div.focus();
    };

    // Typing speed test is going on this function is called.
    let prev_val = [];
    let controlPressed = "";
    let currentWord = "";
    function changed(event) {
        let keyPressed;
        let word = document.querySelector(".words-to-write span:nth-child(1)").innerHTML;
        console.log(event.key)

        // Do this if the new word is present
        if (currentWord === "") {
            currentWord = word;
        }

        // Do this if the Control is pressed
        if (event.key === "Control") {
            controlPressed = "yes";
        }

        // Do this when Space-Bar is pressed
        if (event.key === " ") {
            let wrong_word = "";
            let the_removed_word = document.querySelector(".words-to-write span:nth-child(1)")
            if (the_removed_word.innerHTML.length > 0) {
                console.log(the_removed_word.innerHTML.length)
                wrong_word = "yes"
            }

            the_removed_word.remove();
            let the_word = document.getElementById("contentEditableDiv").innerHTML;
            let to_add_to = document.querySelector(".word_written");
            let newSpan = document.createElement("span");
            newSpan.innerHTML = the_word;
            newSpan.style.marginRight = "10px";
            if (document.getElementById("contentEditableDiv").classList.contains("line_through") || wrong_word === "yes") {
                newSpan.classList.add("line_through")
                wrong_word = ""
            }
            to_add_to.appendChild(newSpan)

            document.getElementById("contentEditableDiv").innerHTML = "";
            document.getElementById("contentEditableDiv").classList.remove("line_through");
            prev_val = [];
            controlPressed = "";
            currentWord = "";

        }

        // Do this if the Backspace is pressed
        if (event.key === "Backspace") {
            // Do this if the Control+Backspace is pressed
            if (controlPressed === "yes") {
                let new_val = "";
                prev_val.map((e) => {
                    new_val += e;
                })

                let w = document.querySelector(".words-to-write span:nth-child(1)").innerHTML;
                let new_w = new_val + w;

                document.querySelector(".words-to-write span:nth-child(1)").innerHTML = new_w;
                prev_val = [];
                controlPressed = "";
                document.getElementById("contentEditableDiv").classList.remove("line_through");
            }

            // Do this if the editable div has a class "line_through"
            if (document.getElementById("contentEditableDiv").classList.contains("line_through")) {
                let editable = document.getElementById("contentEditableDiv").innerHTML;
                if (editable[editable.length - 2] === prev_val[prev_val.length - 1]) {
                    document.getElementById("contentEditableDiv").classList.remove("line_through");
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
        if (event.key === "Shift" ||
         event.key === "Control" ||
          event.key === "Backspace" ||
           event.key === " " ||
            event.key === "ArrowRight" ||
             event.key === "ArrowLeft" ||
              event.key === "ArrowUp" ||
               event.key === "ArrowDown"
               ) {
            
        } else {
            keyPressed = event.key; 
            if (keyPressed === word[0]) {
                prev_val.push(word[0]);
                let new_char = word.slice(1);
                document.querySelector(".words-to-write span").innerHTML = new_char;
            }else {
                document.getElementById("contentEditableDiv").classList.add("line_through");
            };
        };
    };


    return (

        <section id="second_section_home">
            <div onClick={setFocus} className="typing_area">
                <div className="word_written">
                </div>
                <div onKeyDown={(event) => {
                    changed(event)
                }} 
                id="contentEditableDiv" contentEditable={true} spellCheck={false}></div>
                <div className="words-to-write">
                    <span style={{marginRight: "10px"}}>Common</span>
                    <span style={{marginRight: "10px"}}>Marine</span>
                    <span style={{marginRight: "10px"}}>Kumar</span>
                    <span style={{marginRight: "10px"}}>Common</span>
                    <span style={{marginRight: "10px"}}>Marine</span>
                    <span style={{marginRight: "10px"}}>Kumar</span>
                    <span style={{marginRight: "10px"}}>Common</span>
                    <span style={{marginRight: "10px"}}>Marine</span>
                    <span style={{marginRight: "10px"}}>Kumar</span>
                    <span style={{marginRight: "10px"}}>Common</span>
                    <span style={{marginRight: "10px"}}>Marine</span>
                    <span style={{marginRight: "10px"}}>Kumar</span>
                </div>
            </div>
        </section>

    );
};

export default Section_2;
