// document.addEventListener("DOMContentLoaded", () =>{
//     rellenarComics();
//   });

// const getComics = async () => {
//     const response = await fetch('./data/comics.json');
//     const data = await response.json();
//     console.log(data);
//     rellenarComics(data);
// }

// const rellenarComics = (comics) =>{
//     let content = document.querySelector("#container-comics");
//     content.innerHTML= "";

//     comics.forEach((comic) => {
//     let htmlComic=`
//         <div class="card">
//             <div class="card-image">
//                 <img src="${comic.img}" alt="" > </img>
//             </div>
//             <h4>${comic.title}</h4>
//             <p>${comic.cartoonist}</p>
//         </div>
//     `;
//     content.innerHTML += htmlComic;
//     });
// }

const gridSimilars = document.querySelector('#container-comics');

const getComics = () => {
    return fetch("./data/comics.json")
        .then(res => res.json())
        .then(data => {
            renderList(data) 
        })
        .catch(error => {
            console.log(error);
         }
        );
}

const renderList = (comics) => {
    gridSimilars.innerHTML="";
    comics.forEach(comic => {
        gridSimilars.innerHTML+=renderCard(comic);
    });
}

const renderCard = (comic) => {
    return `
    <div class="card">
        <div class="" > 
            <img class="card-img-top" src="./img/${comic.img}"></img>
        </div>
        <h4>${comic.title}</h4>
        <p>${comic.cartoonist}</p>
    </div>
    `
}

function init() {
    getComics();
}
init();



