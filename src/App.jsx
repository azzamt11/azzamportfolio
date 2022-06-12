import React, { useEffect, useState, useLayoutEffect} from 'react';
import * as THREE from 'three';
import createBoxWithRoundedEdges from './RoudedBox';
import WorkCards from './workcard'
import emailjs from 'emailjs-com';


function App() {
  var msg= 'The message has been sent';
  //submit handler
  const hireButtonFunction=  async() => {
    if (document.getElementById('wa-number-input').value!='') {
      var comment= {message: `type 1 message: hiring request from ${document.getElementById('wa-number-input').value}`};
      try {
        await emailjs.send('service_fyni9gf', 'template_3u0dext', comment, '04ztZHjAMyamINfFJ');
      } catch(error) {
        msg= error.message;
      }
      document.getElementById('popup-message-span').innerHTML = `${msg}`;
      document.getElementById('popup-message-background').style.cssText = 'visibility: visible';
      document.getElementById('popup-message').style.cssText = 'height: 200px';
    }
    console.log('saved');
    document.getElementById('wa-number-input').value= '';
  }

  const mailButtonFunction=  async () => {
    if (document.getElementById('mail-box').value!='') {
      var comment= {message: `type 2 message: ${document.getElementById('mail-box').value}`};
      try {
        await emailjs.send('service_fyni9gf', 'template_3u0dext', comment, '04ztZHjAMyamINfFJ');
      } catch(error) {
        msg= error.message;
      }
      document.getElementById('popup-message-span').innerHTML = `${msg}`;
      document.getElementById('popup-message-background').style.cssText = 'visibility: visible';
      document.getElementById('popup-message').style.cssText = 'height: 200px';
    }
    console.log('saved');
    document.getElementById('mail-box').value= '';
  }

  //matrices
  const menuMatrix= ['home', 'about', 'works', 'contact'];
  const colorMatrix= ['#555555', '#f8c37d'];

  //menu functions
  const homeFunction= ()=> {
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.getElementById('home').style.cssText = 'color: #f8c37d';
  }
  const aboutFunction= ()=> {
    window.scrollTo({top: window.innerHeight+100, behavior: 'smooth'});
    document.getElementById('about').style.cssText = 'color: #f8c37d';
  }
  const worksFunction= ()=> {
    window.scrollTo({top: 3*window.innerHeight+100, behavior: 'smooth'});
    document.getElementById('works').style.cssText = 'color: #f8c37d';
  }
  const contactFunction= ()=> {
    window.scrollTo({top: 5*window.innerHeight+100, behavior: 'smooth'});
    document.getElementById('contact').style.cssText = 'color: #f8c37d';
  }

  //updown button function
  var cardPositionParam= 0;
  const buttonDownFunction= () => {
    if (cardPositionParam>0 && cardPositionParam<2) {
      cardPositionParam--;
      console.log(cardPositionParam);
      document.getElementById('work-cards').style.cssText = `top: ${cardPositionParam*100}vh`;
      document.getElementById(`app-name-${cardPositionParam+2}`).style.cssText = `opacity: 1`;
      document.getElementById(`app-description-${cardPositionParam+2}`).style.cssText = `opacity: 1`;
      document.getElementById(`app-rate-${cardPositionParam+2}`).style.cssText = `opacity: 1`;
      document.getElementById(`app-link-${cardPositionParam+2}`).style.cssText = `opacity: 1`;
      document.getElementById(`app-name-${cardPositionParam+1}`).style.cssText = `opacity: 0`;
      document.getElementById(`app-description-${cardPositionParam+1}`).style.cssText = `opacity: 0`;
      document.getElementById(`app-rate-${cardPositionParam+1}`).style.cssText = `opacity: 0`;
      document.getElementById(`app-link-${cardPositionParam+1}`).style.cssText = `opacity: 0`;
    }
  }
  const buttonUpFunction= () => {
    if (cardPositionParam<1 && cardPositionParam>-1) {
      cardPositionParam++;
      console.log(cardPositionParam);
      document.getElementById('work-cards').style.cssText = `top: ${cardPositionParam*100}vh`;
      document.getElementById(`app-name-${cardPositionParam}`).style.cssText = `opacity: 1`;
      document.getElementById(`app-description-${cardPositionParam}`).style.cssText = `opacity: 1`;
      document.getElementById(`app-rate-${cardPositionParam}`).style.cssText = `opacity: 1`;
      document.getElementById(`app-link-${cardPositionParam}`).style.cssText = `opacity: 1`;
      document.getElementById(`app-name-${cardPositionParam+1}`).style.cssText = `opacity: 0`;
      document.getElementById(`app-description-${cardPositionParam+1}`).style.cssText = `opacity: 0`;
      document.getElementById(`app-rate-${cardPositionParam+1}`).style.cssText = `opacity: 0`;
      document.getElementById(`app-link-${cardPositionParam+1}`).style.cssText = `opacity: 0`;
    }
  }
  
  // .............WebGL Construction................../

  //scene, camera and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  const renderer1 = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer1.setSize( window.innerWidth, window.innerHeight );

  //materials
  const material1 = new THREE.MeshBasicMaterial( { color: 0xaadddd } );
  const material2 = new THREE.MeshBasicMaterial( { color: 0xdddddd } );
  const material3 = new THREE.MeshBasicMaterial( { color: 0xddffdd } );
  const material4 = new THREE.MeshBasicMaterial( { color: 0x00ffaa } );
  const material5 = new THREE.MeshBasicMaterial( { color: 0xffaaff } );

  //textures
  const urlsMatrix= ['javascriptLogo.png', 'cssLogo.png', 'javaLogo.png', 'dartLogo.png', 'flutterLogo.png', 'laravelLogo.jpg', 'reactLogo.png', 'phpLogo.png'];
  const loader = new THREE.TextureLoader();
  const makeTexture= (x) => {
    var urls = [];
    for(let i=0; i<6; i++) {
      urls.push(urlsMatrix[x]);
    }
    const texturedMaterial = urls.map(url => {
      return new THREE.MeshBasicMaterial({
        map: loader.load(url)
      })
    });
    return texturedMaterial;
  }

  //cubes
  const makeRoundedCube= (x, y, z, s, p)=> {
    const cube= new THREE.Mesh(new createBoxWithRoundedEdges(s, s, s, 0.25, 8), makeTexture(p));
    cube.position.set(x, y, z);
    cube.rotation.set(3.141, 0, 0);
    return cube;
  }

  const cube1= makeRoundedCube(5, 0, 0, 3, 0);
  const cube2= makeRoundedCube(5, -4, 0, 3, 1);
  const cube3= makeRoundedCube(9, 0, 0, 3, 3);
  const cube4= makeRoundedCube(9, -4, 0, 3, 6);
  const cube5= makeRoundedCube(5, 0, 4, 3, 2);
  const cube6= makeRoundedCube(5, -4, 4, 3, 4);
  const cube7= makeRoundedCube(9, 0, 4, 3, 7);
  const cube8= makeRoundedCube(9, -4, 4, 3, 5);
  const cube9 = makeRoundedCube(0, 0, 5, 1.5, 0);
  const cube10 = makeRoundedCube(3, 6, 5, 1.5, 1);
  const cube11 = makeRoundedCube(6, 7, 10, 1.5, 6);
  const cube12 = makeRoundedCube(-3, 5, 7, 1.5, 2);
  const cube13 = makeRoundedCube(-4, -2, 3, 1.5, 5);
  const cube14 = makeRoundedCube(-5, -2, 5, 1.5, 7);
  const cube15 = makeRoundedCube(-5, -5, 2, 1.5, 1);
  const cube16 = makeRoundedCube(-6.8, -2, 5, 1.5, 0);
  const cube17 = makeRoundedCube(-11, 12, 5, 1.5, 6);
  const cube18 = makeRoundedCube(-11, 8, 2.3, 1.5, 1);

  //rendering
  scene.add(cube1);
  scene.add(cube2);
  scene.add(cube3);
  scene.add(cube4);
  scene.add(cube5);
  scene.add(cube6);
  scene.add(cube7);
  scene.add(cube8);
  scene.add(cube9);
  scene.add(cube10);
  scene.add(cube11);
  scene.add(cube12);
  scene.add(cube13);
  scene.add(cube14);
  scene.add(cube15);
  scene.add(cube16);
  scene.add(cube17);
  scene.add(cube18);

  //other 3d objects
  const makeSquare= (x, y, z, material) => {
    const cube=  new THREE.Mesh(new THREE.BoxGeometry(20, 20, 0.05), material );
    cube.position.set(x, y, z);
    scene.add(cube);
  }

  makeSquare(8, 0, -4, material1); 
  makeSquare(8, 23, -4, material4); 
  makeSquare(-15, 23, -4, material2); 
  makeSquare(-15, 50, -4, material3);
  makeSquare(-38, 50, -4, material5);
  
  const geometryZ = new THREE.BoxGeometry(0.05, 20, 20);
  const cubeZ = new THREE.Mesh( geometryZ, material5);
  cubeZ.position.set(25, 0, 5);
  scene.add( cubeZ );

  //animation function
  function animate() {
    requestAnimationFrame( animate );
    
    camera.rotation.set(1.5, 5.8, -0.05);
    camera.position.set(- 0.003*window.scrollY, -7.6 - 0.0005*window.scrollY, 3.5);
  
    renderer1.render(scene, camera );
  }

  // ....................................................../
  
  //menu coloring matrix
  const colorMenu= (matrix) => {
    for(let k=0; k<4; k++) {
      document.getElementById(`${menuMatrix[k]}`).style.cssText = `color: ${colorMatrix[matrix[k]]}`;
    }
  }
  //use effect

  useEffect(() => {
    colorMenu([1, 0, 0, 0]);
    renderer1.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas1').appendChild(renderer1.domElement);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    //resize function
    window.addEventListener('resize', function(e) {
      var width= window.innerWidth;
      var height= window.innerHeight;
      renderer1.setSize(width, height);
      camera.aspect= width/height;
      camera.updateProjectionMatrix();
      console.log('height= '+window.innerHeight+'width= '+ window.innerWidth);
      if (window.innerHeight*2.5/100>25) {
        console.log('triggered');
        document.getElementById('app-description').style.cssText = 'font-size: 25px;';
      }
    });

    //counter function          ...(for future use)
    function counter(k, id, skill) {
      var i = 0;
      while ( i < k ) {
          setInterval(document.getElementById(`${id}`).innerHTML= `${skill}: ${i}%`, 500);
          i++; // Increment i
          console.log(`${id}+ ${skill}`);
      }
    }
    
    //reverse counter function    ...(for future use)
    function reverseCounter(k, id, skill) {
      var i = k;
      while ( i > 0 ) {
          setInterval(document.getElementById(`${id}`).innerHTML= `${skill}: ${i}%`, 500);
          i--; // Increment i
          console.log(`${id}+ ${skill}`);
      }
    }

    //scrolling function
    function getRidNameSection() {
      document.getElementById('name-section').style.cssText = 'left: -575px; opacity: 0;';
    }
    function restoreNameSection() {
      document.getElementById('name-section').style.cssText = 'left: 0px; opacity: 1;';
    }
    function restoreAboutSection() {
      document.getElementById('about-section').style.cssText = 'left: 0px; opacity: 1;';
    }
    function getRidAboutSectionToRight() {
      document.getElementById('about-section').style.cssText = 'left: 100vw; opacity: 0;';
    }
    function getRidAboutSectionToLeft() {
      document.getElementById('about-section').style.cssText = 'left: -100vw; opacity: 0;';
    }
    function restoreWorkSection() {
      document.getElementById('work-section').style.cssText = 'left: 0px; opacity: 1;';
    }
    function getRidWorkSectionToRight() {
      document.getElementById('work-section').style.cssText = 'left: 100vw; opacity: 0;';
    }
    function getRidWorkSectionToLeft() {
      document.getElementById('work-section').style.cssText = 'left: -100vw; opacity: 0;';
    }
    function restoreContactSection() {
      document.getElementById('contact-section').style.cssText = 'left: 0vw; opacity: 1;';
    }
    function getRidContactSectionToRight() {
      document.getElementById('contact-section').style.cssText = 'left: 100vw; opacity: 0;';
    }


    var scrollParam= 0;
    var lastScrollTop = 0;
    window.addEventListener('scroll', function(){
      var bottomSectionParam= Math.floor((window.scrollY-1)/window.innerHeight);
      var topSectionParam= Math.floor((window.scrollY+1)/window.innerHeight);
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && scrollParam < bottomSectionParam+1){
        scrollParam++;
        if (window.scrollY> this.window.innerHeight && window.scrollY <= 3*this.window.innerHeight) {getRidNameSection(); restoreAboutSection(); colorMenu([0, 1, 0, 0]);}
        else if (window.scrollY> 3*this.window.innerHeight && window.scrollY<= 5*this.window.innerHeight) {getRidAboutSectionToLeft(); restoreWorkSection(); colorMenu([0, 0, 1, 0]);}
        else if (window.scrollY> 5*this.window.innerHeight && window.scrollY<= 7*this.window.innerHeight) {getRidWorkSectionToLeft(); restoreContactSection(); colorMenu([0, 0, 0, 1]);}
      } else if (st < lastScrollTop && scrollParam >= topSectionParam) {
        scrollParam--;
        if (window.scrollY< this.window.innerHeight) {restoreNameSection(); getRidAboutSectionToRight(); colorMenu([1, 0, 0, 0]);}
        else if (window.scrollY < 3*this.window.innerHeight && window.scrollY>= this.window.innerHeight) {restoreAboutSection(); getRidWorkSectionToRight(); colorMenu([0, 1, 0, 0]);}
        else if (window.scrollY < 5*this.window.innerHeight && window.scrollY>= 3*this.window.innerHeight) {restoreWorkSection(); getRidContactSectionToRight(); colorMenu([0, 0, 1, 0]);}
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }, false);
    
    animate();

  }, []);


  return(
    <div className= 'container' id= 'container'>
      <section id='home-section'>
        <div id= 'nav-bar'>
          <div id= 'logo'><div id= 'photo'></div><div id= 'name'>Abdullah Azzam</div></div>
            <div className= 'nav'>
              <div className= 'menu home' id= 'home' onClick= {homeFunction}>Home</div>
              <div className= 'menu about' id= 'about' onClick= {aboutFunction}>About</div>
              <div className= 'menu works' id= 'works'onClick= {worksFunction}>Works</div>
              <div className= 'menu contact' id= 'contact'onClick= {contactFunction}>Contact</div>
            </div>
          </div>
          <div id= 'name-section'>
            <div id= 'name-section-background'></div>
            <div id= 'big-name'>
              <div id= 'big-name-text'>Abdullah Azzam</div>
              <div id= 'greeting'>Welcome To My Portfolio Website, I am ...</div>
            </div>
            <div id= 'description'>
            <div id= 'div-job'>
              <span id= 'span-job1'>Web Frontend Developer</span>
              <span id= 'span-job2'>Android Fullstack Developer</span>
            </div>
            <div id= 'social-media'>
              <a href= 'https://instagram.com/azzamv12' target="_blank"><div className= 'insta media' id= 'insta'></div></a>
              <a href= 'https://github.com/azzamt11' target="_blank"><div className= 'github media' id= 'github'></div></a>
              <a href= 'https://www.youtube.com/channel/UCrTMNDcy6ovSIvMxzio98mg' target="_blank"><div className= 'youtube media' id= 'youtube'></div></a>
            </div>
          </div>
          </div>
        <div id= 'canvas1'></div>
    </section>
    <section id= 'about-section' className= 'section'>
      <div id= 'left-about-section' className= 'left'>
        <div id= 'about-greeting'>Hello Everyone...</div>
        <div id= 'about-me'>I am Abdullah Azzam, I am a self-taught web and android developer, Here are some of my programming skills, including some languages and frameworks.</div>
      </div>
      <div id= 'right-about-section' className= 'right'>
        <div id= 'canvas-field'>
          <div id= 'upper-textfield'>
            <div className= 'skill-text text1'><div className= 'skill-canvas'id='canvas01'><img className= 'image'src= 'javascriptLogo.png'/></div><span className= 'skill-text'>JavaScript: 80%</span></div>
            <div className= 'skill-text text2'><div className= 'skill-canvas'id='canvas02'><img className= 'image'src= 'javaLogo.png'/></div><span className= 'skill-text'>Java: 75%</span></div>
            <div className= 'skill-text text3'><div className= 'skill-canvas'id='canvas03'><img className= 'image'src= 'cssLogo.png'/></div><span className= 'skill-text'>CSS: 80%</span></div>
        </div>
        <div id= 'lower-textfield'>
            <div className= 'skill-text text4'><div className= 'skill-canvas'id='canvas04'><img className= 'image'src= 'reactLogo.png'/></div><span className= 'skill-text'>ReactJS: 80%</span></div>
            <div className= 'skill-text text5'><div className= 'skill-canvas'id='canvas05'><img className= 'image'src= 'flutterLogo.png'/></div><span className= 'skill-text'>Flutter: 75%</span></div>
            <div className= 'skill-text text6'><div className= 'skill-canvas'id='canvas06'><img className= 'image'src= 'laravelLogo.jpg'/></div><span className= 'skill-text'>Laravel: 60%</span></div>
        </div>
        </div>
      </div>
    </section> 
    <section id= 'work-section'className= 'section'>
      <div id= 'left-work-section' className= 'left'>
        <div className= 'greeting'>Furthermore...</div>
        <div className= 'greeting2'>These are some of my works, including android/iOs apps and web apps. Please take a look.</div>
      </div>
      <div id= 'right-work-section' className='right'>
        <div id= 'work-field'>
          <div id= 'work-card'>
            <div id= 'work-left-subfield' className= 'center-flex'>
              <div id= 'display' className='box'>This is display</div>
            </div>
            <div id= 'work-right-subfield'>
              <WorkCards/>
              <div id= 'updown-button'>
                <div className= 'updown' id= 'up' onClick= {buttonUpFunction}></div>
                <div className= 'updown' id= 'down' onClick= {buttonDownFunction}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id= 'contact-section' className= 'section'>
      <div id= 'left-contact-section' className= 'left'>
        <div id= 'contact-greeting' className= 'greeting'>Finally...</div>
        <div id= 'contact-me' className= 'greeting2'>If you are impressed with this portfolio, or you are curious about what else I can do, feel free to contact or hire me.</div>
      </div>
      <div id= 'right-contact-section' className= 'right'>
        <div id= 'contact-section-canvas'>
          <div className= 'contact-component'>
            <div id= 'mail-greeting' className= 'contact-subcomponent'><span id= 'greeting-span'>You can send me anonymous message through this box if you want to give a comment or ask some question about me. The answer will be available <a href= 'http://www.example.com' id= 'ans-anchor' target= '_blank'>here</a>.</span></div>
            <form id= 'message-field'>
              <textarea id= 'mail-box' className= 'contact-subcomponent' onChange= {(e)=> {}}/>
              <div id= 'mail-button' className= 'contact-button purple-button center-flex' value= 'Send' onClick ={(e)=> {mailButtonFunction()}}>Send</div>
            </form>
          </div>    
          <div className= 'contact-component' id= 'hire-box'>
            <div id= 'hire-greeting' className= 'contact-subcomponent'>If you are interrested to hire me. Please enter your whatsapp number and click the button below.</div>
            <form id= 'hire-field'>
              <input id= 'wa-number-input' placeholder= 'whatsapp-number'/>
              <div id= 'hire-button' className='purple-button center-flex' type="submit" onClick ={(e)=> {hireButtonFunction()}}>Hire</div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div id= 'popup-message-background' className= 'center-flex'>
      <div id= 'popup-message'><span id= 'popup-message-span'>The message has been sent.</span><div id= 'popup-OK-button' className= 'purple-button center-flex' onClick= {(e)=> {document.getElementById('popup-message').style.cssText= 'opacity: 0';document.getElementById('popup-message-background').style.cssText= 'visible: hidden';}}>OK</div></div>
    </div>
  </div>
  );

}

export default App;
