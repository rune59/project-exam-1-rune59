
const url = "http://localhost:10008/wp-json/wp/v2/posts?_embed&per_page=10";

const carousel = document.querySelector(".carouselbox");
const buttonLeft = document.querySelector(".switchLeft");
const buttonRight = document.querySelector(".switchRight");




async function fetchAllBlogs() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        const posts = results;

        carousel.innerHTML = "";

        for (let i = 0; i < posts.length; i++) {
            console.log(posts[i].id);
            carousel.innerHTML += 
                `<div class="item"> 
                    <div class="carousel-img">
                        <a href="blogPostSpecific.html?id=${results[i].id}"><img src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}"></a>
                    </div>
                    <h3><a href="blogPostSpecific.html?id=${results[i].id}">${results[i].title.rendered}</a></h3>
                </div>`
                ;
        }
    }
    catch (error) {
        console.log(error);
        latestPosts.innerHTML = message("error", error);
        messageContainer.innerHTML = message("error", "this is an error message");
    }
}


fetchAllBlogs();

let scrollPerClick = document.querySelector(".carouselbox").clientWidth; 
let scrollAmount = 0; 

buttonLeft.onclick = function () {
    carousel.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth",
    });

    if(scrollAmount < 0) {
        scrollAmount = 0
    }
}

buttonRight.onclick = function() {
    if(scrollAmount <= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth",
        }); 
    }
}

