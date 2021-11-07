
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



// let testdata = [
//     { path: '.browserslistrc'},
//     { path: '.editorconfig'},
//     { path: '.gitignore'},
//     { path: 'README.md'}, 
//     { path: 'angular.json'},
//     { path: 'calc_layout'},
//     { path: 'calc_layout/index.html'},
//     { path: 'calc_layout/style.css'},
//     { path: 'karma.conf.js'},
//     { path: 'package-lock.json'},
//     { path: 'package.json'},
//     { path: 'src'},
//     { path: 'src/app'},
//     { path: 'src/app/app.component.css'},
//     { path: 'src/app/app.component.html'},
//     { path: 'src/app/app.component.ts'},
//     { path: 'src/app/app.module.ts'},
//     { path: 'src/assets'},
//     { path: 'src/assets/.gitkeep'},
//     { path: 'src/environments'},
//     { path: 'src/environments/environment.prod.ts'},
//     { path: 'src/environments/environment.ts'},
//     { path: 'src/favicon.ico'},
//     { path: 'src/index.html'},
//     { path: 'src/main.ts'},
//     { path: 'src/polyfills.ts'},
//     { path: 'src/styles.css'}, 
//     { path: 'src/test.ts'},
//     { path: 'tsconfig.app.json'},
//     { path: 'tsconfig.json'},
//     { path: 'tsconfig.spec.json'}
// ]; 

let repos = []; 
let curRepos = { }; 

// дополнение информации о файле/папке
function pathDataModify(obj)
{
    let pathArray = obj.path.split("/"); 
    obj.name = pathArray.pop();  
    obj.owner = pathArray.join("/"); 
}
// получение контента определённой папки репозитория по указаному пути  
function openFolder(repos, path)
{
    return repos.tree.filter((e) => { 
        return e.owner === path ? true : false 
     }) 
}

// получение всех данных репозитория  
async function getFiles(reposName) { 
    const i = await fetch(`https://api.github.com/repos/EvgeniyRyabchuk/${reposName}/git/trees/master?recursive=1`)
    const data = await i.json();
    console.log(data)
    for(let i of data.tree) 
        pathDataModify(i); 
    
    curRepos = data; 
    curRepos.name = reposName; 
    console.log(curRepos);
} 
// пполучение всех репозиториев 
async function getRepos(path) { 
    const i = await fetch(path) 
    const data = await i.json(); 
    repos = data; 
    console.log(repos);
}

getRepos("https://api.github.com/users/EvgeniyRyabchuk/repos");
// getFiles("HostServicePage");  
getFiles("calc");  


console.log([1, 2, 3, 4, 5].filter(e => e === 1)); 