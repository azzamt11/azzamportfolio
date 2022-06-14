import React from 'react';

function WorkCards() {
    return(
        <div id= 'work-cards'>
            <div className= 'card'>
                <div className= 'box app-description-box'>
                    <div className= 'app-display'></div>
                    <div className= 'app-name app' id= 'app-name-1'>Fictune</div>
                    <div className= 'app-description app' id= 'app-description-1'>Online Novel Application</div>
                    <div className= 'app-rate app' id= 'app-rate-1'></div>
                    <a href= 'http://example.com/' target="_blank"><div className= 'app-link app center-flex' id= 'app-link-1'>View in App Store</div></a>
                </div>
            </div>
            <div className= 'card'>
                <div className= 'box app-description-box'>
                    <div className= 'app-display'></div>
                    <div className= 'app-name app' id= 'app-name-2'>Nanum Olshop</div>
                    <div className= 'app-description app' id= 'app-description-2'>Online Shoping Application of Nanum</div>
                    <div className= 'app-rate app' id= 'app-rate-2'></div>
                    <a href= 'http://example.com/' target="_blank"><div className= 'app-link app  center-flex' id= 'app-link-2'>View in App Store</div></a>
                </div>
            </div>
        </div>
        
        
        
    )
}

export default WorkCards;