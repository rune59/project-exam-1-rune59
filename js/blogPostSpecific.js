
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

        const mediaUrl = "http://localhost:10008/wp-json/wp/v2/media/" + thisBlog.featured_media;
        const mediaResponse = await fetch(mediaUrl);
        const thisMedia = await mediaResponse.json();
        console.log("this media:" + thisMedia)

        createHTML(thisBlog, thisMedia.media_details.sizes.full.source_url);


    }
    catch(error) {
        console.log(error);
    }
    
}
fetchOneBlog();


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


                    // <img src="${image}" alt="${thisBlog.alt_text}">



