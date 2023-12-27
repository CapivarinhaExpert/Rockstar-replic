
const navbar = document.getElementById('NavBar')

var lastScrollPosition = 0;

const getScrollData = ()=>{
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    var scrollDirection = (scrollPosition > lastScrollPosition) ? 'down' : 'up';
    
    lastScrollPosition = scrollPosition;
    if(scrollPosition>200){
        if(scrollDirection === 'down'){
            navbar.className = 'down-scroll'
        }else{
            navbar.className= 'up-scroll'
        }
    }
    
}

window.addEventListener('scroll', getScrollData)