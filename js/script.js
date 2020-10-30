let collapsables = document.querySelectorAll('.collapsableText');
let topBar = document.querySelector(".top_bar");
let isCollapsed = false;
let hamburgerBtn = document.querySelector('#hamburgerBtn');
let sliderLeft = document.querySelector('.slideLeft');
let scrollElements = document.querySelectorAll('.scrollElement');
let scrollContainerElement = document.querySelector('.scrollContainer');
let scrollElementsNews = document.querySelectorAll('.scrollElement-news');
collapseTopBar();

function collapseTopBar() {
    if (window.outerWidth <= 995 && isCollapsed == false) {


        for (const element of collapsables) {
            element.style.display = 'none';

        }
        console.log("hidden");
        hamburgerBtn.style.display = 'block';
        isCollapsed = true;
    }
    if (window.outerWidth > 995 && isCollapsed == true) {
        for (const element of collapsables) {
            element.style.display = 'block';

        }
        console.log("unhidden");
        hamburgerBtn.style.display = 'none';
        isCollapsed = false;
    }
    if (window.outerWidth <= 749) {
        sliderLeft.style.textAlign = "center";
        sliderLeft.style.marginLeft = "0px";
        sliderLeft.style.marginTop = "0px";
    } else {
        sliderLeft.style.textAlign = "left";
        sliderLeft.style.marginLeft = "100px";
        sliderLeft.style.marginTop = "100px";
    }
    if (window.outerWidth <= 1180) {
        scrollElements[0].style.display = "none";
        scrollElementsNews[0].style.display="none";
        scrollContainerElement.classList.add('scrollContainer-middle');
        if (window.outerWidth <= 740) {
            scrollElements[1].style.display = "none";
            scrollElementsNews[1].style.display="none";
            scrollContainerElement.classList.add('scrollContainer-small');
        }
        else{
            scrollElements[1].style.display = "block";
            scrollElementsNews[1].style.display="block";
            scrollContainerElement.classList.remove('scrollContainer-small');
        }
    } else {
        scrollElements[0].style.display = "block";
        scrollElements[1].style.display = "block";
        scrollElementsNews[0].style.display="block";
        scrollElementsNews[1].style.display="block";
        scrollContainerElement.classList.remove('scrollContainer-middle');
        if(scrollContainerElement.classList.contains('scrollContainer-small'))
        {
            scrollContainerElement.classList.remove('scrollContainer-small');
        }
    }


}
window.addEventListener('resize', () => {
    console.log(window.outerWidth);
    collapseTopBar();

})
let interactiveButtons = document.querySelectorAll('.interactiveButton');
for (const element of interactiveButtons) {
    element.addEventListener('mouseenter', () => {
        let smallLogoCurrent = element.querySelector('.smallLogo');
        let currSrc = smallLogoCurrent.src;
        let currLen = currSrc.length;
        let newSrc = currSrc.slice(0, currLen - 12); //without .gif and because it's reverse we should remover reverse also
        newSrc += ".gif";
        smallLogoCurrent.src = newSrc;
    })
    element.addEventListener('mouseleave', () => {
        let smallLogoCurrent = element.querySelector('.smallLogo');
        let currSrc = smallLogoCurrent.src;
        let currLen = currSrc.length;
        let newSrc = currSrc.slice(0, currLen - 4); //without .gif and 
        newSrc += "-reverse.gif";


        smallLogoCurrent.src = newSrc;


    })
}