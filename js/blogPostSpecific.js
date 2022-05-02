
const blogSpecificContainer = document.querySelector(".oneBlog");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

// const url = "http://localhost:10008/wp-json/wp/v2/posts?_embed/" + id;
const url = "http://localhost:10008/wp-json/wp/v2/posts/" + id;

console.log(url);

async function fetchOneBlog() {

    try {
        const response = await fetch(url);
        const thisBlog = await response.json();
        console.log("thisBlog:" + thisBlog)
        // createHTML(thisBlog);

        const mediaUrl = "http://localhost:10008/wp-json/wp/v2/media/" + thisBlog.featured_media;
        const mediaResponse = await fetch(mediaUrl);
        const thisMedia = await mediaResponse.json();
        console.log("this media:" + thisMedia)
        // createHTML(thisBlog, thisMedia.media_details.sizes.full.source_url);

        createHTML(thisBlog, thisMedia.media_details.sizes.full.source_url);


    }
    catch(error) {
        console.log(error);
    }
    
}
fetchOneBlog();


// function createHTML(thisBlog) {
//     blogSpecificContainer.innerHTML =
//             `<div class="oneBlog">
//                 <h2>Blog id: ${thisBlog.id}</h2>
//                 <h2>Blog title: ${thisBlog.title.rendered}</h2>
//                 <h3>Blog text: ${thisBlog.content.rendered}</h3>
//                 <img src="${thisBlog._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}">
//             </div>`
//         ;
// }

function createHTML(thisBlog,image) {
    blogSpecificContainer.innerHTML =
        `            
        <div class="oneBlog-specific">
            <div class="oneBlog-title">
                <h1>${thisBlog.title.rendered}</h1>
            </div>
            <div class="oneBlog-text-and-image">
                <div class="oneBlog-text">
                    <h3>${thisBlog.content.rendered}</h3>
                </div>
                <div class="oneBlog-image">
                    <img src="${image}">
                </div>
            </div>
        </div>
        `;
}







// function createHTML(thisBlog,image) {
//     blogSpecificContainer.innerHTML =
//             `<h2>${thisBlog.title.rendered}</h2>
//             <img src="${image}">
//             <h3>${thisBlog.content.rendered}</h3>
//             `;
// }

