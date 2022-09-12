import React from 'react';

function WorkCards() {
    return(
        <div id= 'work-cards'>
            <div className= 'card'>
                <div className= 'box app-description-box'>
                    <div className= 'app-name app' id= 'app-name-1'>Fictune Web App</div>
                    <div className= 'app-description app' id= 'app-description-1'>Online Novel Application</div>
                    <div className= 'app-description app'>Role: Fullstack Developer,UI/UX Designer, Owner</div>
                    <div className= 'app-description app'>Frontend Framework: React.js</div>
                    <div className= 'app-description app'>Backend Framework: Laravel</div>
                    <div className= 'app-description app'>Click image below to visit.</div>
                    <a href= 'https://grand-gingersnap-348041.netlify.app' target="_blank"><div className= 'app-link app center-flex' id= 'app-link-1'></div></a>
                </div>
            </div>
            <div className= 'card'>
                <div className= 'box app-description-box'>
                    <div className= 'app-display'></div>
                    <div className= 'app-name app' id= 'app-name-2'>Fictune Mobile App</div>
                    <div className= 'app-description app' id= 'app-description-2'>Mobile Novel Application</div>
                    <div className= 'app-description app'>Role: Fullstack Developer,UI/UX Designer, Owner</div>
                    <a href= 'http://azzamsblogdomain.42web.io/fictuneprogress' target="_blank"><div className= 'app-link app  center-flex' id= 'app-link-2'>View Progress</div></a>
                </div>
            </div>
        </div>
        
        
        
    )
}

export default WorkCards;
