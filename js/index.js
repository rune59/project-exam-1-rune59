
// const resultsContainer = document.querySelector(".results");
const resultsContainer = document.querySelector(".home-carousel");

const url = "http://localhost:10008/wp-json/wp/v2/posts?_embed&per_page=10";


async function fetchAllBlogs() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        resultsContainer.innerHTML = "";

        // <img src="${blog._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url}">
        // <div class="image" style="background-image: url(${blog.image_url});"></div>


        json.forEach(function(blog) {
            resultsContainer.innerHTML +=
                `<div class="carousel-post"> 
                    <div class="carousel-img"><img src="${blog._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}"></div>
                    <h5>${blog.title.rendered}</h5>
                    <h6>${blog.excerpt.rendered}</h6>
                </div>`
                ;
        });
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    }
    catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
        messageContainer.innerHTML = message("error", "this is an error message");
    }
}

fetchAllBlogs();