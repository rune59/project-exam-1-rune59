
const blogSpecificContainer = document.querySelector(".oneBlog");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

// This link is for developing on my local computer
// const url = "http://localhost:10013/wp-json/wp/v2/posts?_embed/" + id;
const url = "http://localhost:10008/wp-json/wp/v2/posts?_embed/" + id;



// And this link is for use after the WP and database has been uploaded 
// from local server on my computer to my web-hotel. 
// const url = "https://runrun.no/minBlogg/wp-json/wp/v2/posts?_embed/" + id;

console.log(url);

async function fetchOneBlog() {

    try {
        const response = await fetch(url);
        const thisBlog = await response.json();
    

        console.log("thisBlog:" + thisBlog)

        createHTML(thisBlog);
    }
    catch(error) {
        console.log(error);
    }
    
}
fetchOneBlog();


function createHTML(thisBlog) {
    blogSpecificContainer.innerHTML =
            `<div class="oneBlog">
                <h2>Blog id: ${thisBlog.id}</h2>
                <h2>Blog title: ${thisBlog.title.rendered}</h2>
                <h3>Blog text: ${thisBlog.content.rendered}</h3>
                <img src="${thisBlog._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}">
            </div>`
        ;
}



