

const url = "http://localhost:10008/wp-json/wp/v2/posts?_embed&per_page=100";

const resultsContainer = document.querySelector(".allBlogs");

async function fetchAllBlogs() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);
        console.log('header: ' , response.headers['x-wp-totalpages']);

        resultsContainer.innerHTML = "";
        
        json.forEach(function(blog) {
            resultsContainer.innerHTML +=
                `<a href="blogPostSpecific.html?id=${blog.id}" class="card">
                    <section class="oneBlog">
                        <div class="blogPosts__image">
                            <img src="${blog._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" width=600>
                        </div>
                        <div class="blogPosts__text">
                            <h3 class="blogHeading">${blog.title.rendered}</h3>
                            <p class="blogDescription">Blog description: ${blog.content.rendered}</p>
                            <h5 class="blogId">Blog id: ${blog.id}</h5>
                        </div>
                    </section>
                </a>`
                ;
        });
    }
    catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
        messageContainer.innerHTML = message("error", "this is an error message");
    }
}

fetchAllBlogs();