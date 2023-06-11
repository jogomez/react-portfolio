import { useEffect } from 'react';
import "./Typewritter.css";

/**
 * @param {array} data - Array[]: Array of strings to be typed
 * @param {Number} Typespeed - Number: Speed of typing in milisecs
 * @param {Number} MsgDelay - Number: delay between each message in milisecs
 */

// How to use JSDoc to document source code: https://jsdoc.app/tags-param.html
// "The JSDoc tool will scan your source code and generate an HTML documentation website for you"

function Typewritter({data = [], TypeSpeed = 100, MsgDelay = 2000}) {
    useEffect(()=>{
        let CharacterPos = 0;
        let MsgBuffer = "";
        let MsgIndex = 0;
        let delay;

        function StartTyping(){
            let id = document.getElementById("typing-text");
            if (CharacterPos !== data[MsgIndex].length){
                MsgBuffer = MsgBuffer+data[MsgIndex].charAt(CharacterPos);
                id.value = MsgBuffer + "_";
                delay = TypeSpeed;
            } else {
                delay = MsgDelay;
                MsgBuffer = "";
                CharacterPos = -1;
                if (MsgIndex !== data.length - 1){
                    MsgIndex++;
                }
                else{
                    MsgIndex = 0;
                }
            }
            CharacterPos++;
            setTimeout(StartTyping, delay);
        }
        StartTyping();
    });

    return (
        <textarea id="typing-text" readOnly>
        </textarea>
    )
}

export default Typewritter;