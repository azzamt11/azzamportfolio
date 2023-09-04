import React from 'react';

function WorkCards() {
    return(
        <div id= 'work-cards'>
            <div className= 'card'>
                <div className= 'box app-description-box'>
                    <div className= 'app-name app' id= 'app-name-1'>QuantumBook Mobile</div>
                    <a href= 'https://play.google.com/store/apps/details?id=id.quantumbook&hl=en_US&pli=1' target="_blank"><div className= 'app-link app center-flex' id= 'app-link-1'></div></a>
                    <div className= 'app-description app' id= 'app-description-1'>Book Catalog Mobile Application for QuantumBook Company</div>
                    <div className= 'app-description app'>Role: Mobile Developer</div>
                    <div className= 'app-description app'>Frontend Framework: Flutter</div>
                    <div className= 'app-description app'>Click image to visit.</div>
                </div>
            </div>
            <div className= 'card'>
                <div className= 'box app-description-box'>
                    <div className= 'app-name app' id= 'app-name-2'>Tennis Game Application</div>
                    <a href= 'https://azzamtennisgamewebversion1.netlify.app/#/' target="_blank"><div className= 'app-link app  center-flex' id= 'app-link-2'></div></a>
                    <div className= 'app-description app' id= 'app-description-2'>Web Application for Azzam's Special Tennis Game</div>
                    <div className= 'app-description app'>Role: Fullstack Developer, Owner</div>
                    <div className= 'app-description app'>Frameworks: Flutter with Firebase</div>
                    <div className= 'app-description app'>Click image to visit.</div>
                </div>
            </div>
            <div className= 'card'>
                <div className= 'box app-description-box'>
                    <div className= 'app-name app' id= 'app-name-3'>Traveloka Mobile Clone</div>
                    <a href= 'https://azzamtmcweb.netlify.app/#/' target="_blank"><div className= 'app-link app  center-flex' id= 'app-link-3'></div></a>
                    <div className= 'app-description app' id= 'app-description-3'>Traveloka Mobile Application Clone</div>
                    <div className= 'app-description app'>Role: Fullstack Developer</div>
                    <div className= 'app-description app'>Frameworks: Flutter</div>
                    <div className= 'app-description app'>Github Repo: <a href= "https://github.com/azzamt11/azzam-tmc">azzam-tmc</a></div>
                    <div className= 'app-description app'>Click image to visit.</div>
                </div>
            </div>
        </div>
        
        
        
    )
}

export default WorkCards;
