
const searchInput =document.getElementById("searchinput");
const result =document.getElementById("section");



async function getMovies(searchText){
    const res =await fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`);
    const movies =await res.json();


   

    for(let moviet of movies){

        if(moviet.show.image !=null){
        const div =document.createElement("div");

        div.innerHTML =`<h1> ${moviet.show.name}</h1>
        <p>year : ${moviet.show.premiered}</p>
        <p>runtime : ${moviet.show.runtime}</p>`

        const image =document.createElement("img");

        image.setAttribute("src",moviet.show.image.medium);
        div.append(image);
        result.append(div);
       
   


        }
    }
}


searchinput.addEventListener("keypress",(e)=>{
    const searchText =searchInput.value;
    if(e.key =="Enter"){
        getMovies(searchText)
    }
})