import { renderMatches } from "react-router-dom";

import { AiFillCaretUp } from "react-icons/ai";



export default function Up() {




    return(
        <>
        <div className="up" onClick={() => window.scrollTo(0,0)}>
            <AiFillCaretUp style={{fontSize: '30px'}}/>
            <span class="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
    <span className="pulse-button__rings"></span>
        </div>
        </>
    )
}