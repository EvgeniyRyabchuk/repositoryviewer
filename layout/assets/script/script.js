
let isHiddenAsideOpen = false; 
let isPathHistoryOpen = false; 

let aside = document.querySelector(".side_wrapper"); 
let hideWrapper = document.querySelector('.hidden-aside'); 

document.querySelector('#burger-btn').addEventListener("click", () =>
{
    if(!isHiddenAsideOpen) {
        aside.classList.add("side_wrapper--show"); 
        hideWrapper.classList.add("hidden-aside--show"); 
        document.body.style.overflowY = 'hidden'; 
    }
    isHiddenAsideOpen = !isHiddenAsideOpen;  
})

document.querySelector('.side_wrapper').addEventListener("click", (e) => 
{
    isHiddenAsideOpen = !isHiddenAsideOpen; 
    aside.classList.remove("side_wrapper--show"); 
    hideWrapper.classList.remove("hidden-aside--show"); 
    document.body.style.overflowY = 'auto'; 
})

// document.querySelector('.side_wrapper').addEventListener("transitionend", (e) => {
//     if(!isHiddenAsideOpen)
//     {
//         console.log('abc'); 
//         aside.classList.remove("side_wrapper--show"); 
//     }
// }); 

document.querySelector('.hidden-aside').addEventListener("click", (e) => 
{
    e.stopPropagation(); 
})

for(let i of document.querySelectorAll('.nav-link'))  
{
    i.addEventListener("click", () => { 
        aside.classList.remove("side_wrapper--show"); 
        hideWrapper.classList.remove("hidden-aside--show"); 
        document.body.style.overflowY = 'auto'; 
        isHiddenAsideOpen = false; 
        
    }); 
}


// print(); 

// function getCoords(elem, rely) {
//     let box = elem.getBoundingClientRect();
    
//     return {
//       top: box.top + rely.pageYOffset,
//       right: box.right + rely.pageXOffset,
//       bottom: box.bottom + rely.pageYOffset,
//       left: box.left + rely.pageXOffset
//     };
//   }

// setTimeout(print, 1000); 
// function print()
// {
//     console.log(getCoords(document.querySelector(".control-wrapper")).top); 
//     setTimeout(print, 1000); 
// }


// let observer = new IntersectionObserver(entries => {
//     const item = document.querySelector(".control-wrapper"); 
//     const rely = document.querySelector('.content'); 
//     // const rect = item.getBoundingClientRect(); 
//     //  

//     if (entries[0].isIntersecting) {
//         item.style.top = getCoords(item, rely).top + "px";  
//         console.log(item.top); 
//         item.style.position = "absolute"; 
//         item.style.width = '100%'; 
//       }
//       else {
//         item.style.top = '80px'; 
//         item.style.position = "sticky"; 
//       }  
//   });

//   observer.observe(document.querySelector(".article-end"));
  

const pathList = document.querySelector('.path-list');
const list = document.querySelector("#files"); 
 
for(let i = 0; i < 50; i++)
{
    const li = list.querySelector('li').cloneNode(true);
    list.append(li); 
   
}


document.querySelector('.path-history').addEventListener("click", () => {
    if(isPathHistoryOpen)  
        pathList.classList.remove("open");
    else 
        pathList.classList.add("open"); 
    isPathHistoryOpen = !isPathHistoryOpen; 
})



document.body.addEventListener("click", (e) => 
{
    console.log(e.target.className); 
    if(e.target.className != "path-history" && e.target.className != "fas fa-caret-down")
        pathList.classList.remove("open"); 
})