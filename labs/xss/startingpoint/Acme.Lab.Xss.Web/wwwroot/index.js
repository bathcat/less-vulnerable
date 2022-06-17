const endpoint = "http://localhost:5094/posts";

const postEndpoint = id => `${endpoint}/id`;

class ApiPostService {

    async add(newPost) {
        await fetch(endpoint, { body: newPost, method: 'POST' });
    }

    async getAll() {
        const response = await fetch(endpoint);
        return await response.json();
    }

    async get(id) {
        const url = postEndpoint(id);
        const response = await fetch(url);
        return await response.json();
    }

    async create(newPost) {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost),
        }
        const response = await fetch(endpoint,options);
        return await response.json();
    }

    async remove(pontID) {
        await fetch(postEndpoint(), { method: 'DELETE' });
    }
}


const postService = new ApiPostService();


const renderPost =
    post => `   

        <article class="message m-5">
          <div class="message-header">
            <p>${post.title}</p>
          </div>
          <div class="message-body">
            ${post.content}
          </div>
        </article>

`;


const renderPosts =
    (posts) => posts.map(renderPost).join('');

window.submitPost = () => {
    const post = {
        title: document.querySelector('#a-title').value,
        content:document.querySelector('#a-content').value,
    };
    postService.create(post)
               .then(_ => window.location.href = "/");
};

window.refreshPosts = async () => {
    const posts = await postService.getAll();
    if (!!posts) {
      document.querySelector('#a-panel').innerHTML = renderPosts(posts);
    }
}
