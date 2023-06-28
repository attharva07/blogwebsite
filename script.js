const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


// Array to store blog posts
let posts = [];

// Function to render posts
function renderPosts() {
  const postList = document.getElementById('post-list');
  postList.innerHTML = '';

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    `;

    postList.appendChild(postElement);
  }
}

// Function to handle new post submission
function submitPost() {
  const titleInput = document.getElementById('post-title');
  const contentInput = document.getElementById('post-content');

  const title = titleInput.value;
  const content = contentInput.value;

  if (title && content) {
    const newPost = { title, content };
    posts.push(newPost);

    titleInput.value = '';
    contentInput.value = '';

    renderPosts();
  }
}

// Event listener for submit button
const submitButton = document.getElementById('submit-post');
submitButton.addEventListener('click', submitPost);