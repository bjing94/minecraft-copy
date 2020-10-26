let collapsables = document.querySelectorAll('.collapsableText');
let topBar = document.querySelector(".top_bar");
let isCollapsed = false;
let hamburgerBtn = document.querySelector('#hamburgerBtn');
collapseTopBar();
function collapseTopBar()
{
    if (window.outerWidth<= 880 && isCollapsed == false) {


        for (const element of collapsables) {
            element.style.display = 'none';
            
        }
        console.log("hidden");
        hamburgerBtn.style.display='block';
        isCollapsed = true;
    } 
    if(window.outerWidth>880 && isCollapsed==true) {
        for (const element of collapsables) {
            element.style.display = 'block';

        }
        console.log("unhidden");
        hamburgerBtn.style.display='none';
        isCollapsed=false;
    }
}
window.addEventListener('resize', () => {
    console.log(window.outerWidth);
    collapseTopBar();
    
})