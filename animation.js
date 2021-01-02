
const menu = document.querySelectorAll('header ul li a') 
const hSlogan = document.querySelector('section.about div h1')
const hSloganT = document.querySelector('section.about div h3')
const contactButton = document.querySelector('section.about div button')
const newButton = document.querySelector('button.newButton')
const social = document.querySelectorAll('div.social div')

newButton.style.transform = 'translateX(90%)'
hSlogan.style.transform = 'translateX(-10%)'
hSloganT.style.transform = 'translateX(10%)'
social.forEach(item => item.style.transform = 'translateX(90%)')

anime({
  targets: newButton,
  translateX: 0,
  duration:2000
 
});

anime({
    targets: hSlogan,
    translateX: 0,
  duration:2000
  });
  anime({
    targets: hSloganT,
    translateX: 0,
    duration:2000
  });
  
  anime({
    targets: 'div.photoZone',
    scale: [
      {value: .9, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
   
  });



  let last_known_scroll_position = 0;
  document.addEventListener('scroll', () => {
    last_known_scroll_position = window.scrollY;
    if(last_known_scroll_position > 315) {
      newButton.style.display = 'flex'
     
     
       
    }
 if(last_known_scroll_position > 1400) {
      
       newButton.style.display = 'none'
      
        anime({
          targets: social,
          translateX: 0,
          duration:700,
          delay: anime.stagger(700),
          easing: 'linear'
         
          
        })
           
      
      }
 
    else if(last_known_scroll_position < 315) {
        contactButton.className = 'scrollOff'
        newButton.style.display = 'none'
    }
  
  })
  

  
  menu[0].addEventListener('click', () => {
    scrollWin()
  })

 