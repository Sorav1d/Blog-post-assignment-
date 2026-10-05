window.onload = () => {
  // Initial data
  let postList = [
    {
      title: "Welcome to My Blog",
      content: "This is my first blog post. I'm excited to share my thoughts and experiences with you all!"
    },
    {
      title: "Learning JavaScript",
      content: "JavaScript is a powerful programming language that enables interactive web development. Today I learned about event listeners and DOM manipulation."
    },
    {
      title: "Web Development Tips",
      content: "Always write clean and maintainable code. Use meaningful variable names and comment your code when necessary."
    }
  ]
  postList.map((post) => createPost(post.title, post.content))

  let addPostBtn = document.getElementById("add-post-btn")
  addPostBtn.addEventListener("click", addPost)
}

const createPost = (getTitle, getContent) => {

  const post = document.createElement("div")
  post.className = "post"

  // title + double click to update
  const postTitle = document.createElement("h2")
  postTitle.textContent = getTitle
  postTitle.addEventListener("dblclick", (e) => updateText(e.target, "title"))

  // edit title <button>
  const editTitleBtn = document.createElement("button")
  editTitleBtn.textContent = "Edit Title"
  editTitleBtn.addEventListener("click", (e) => {
    editTitle(e.target.parentElement)
  })

  // content + double click to update
  const postContent = document.createElement("p")
  postContent.textContent = getContent
  postContent.addEventListener("dblclick", (e) => updateText(e.target, "content"))

  // edit content <button>
  const editContentBtn = document.createElement("button")
  editContentBtn.textContent = "Edit Content"
  editContentBtn.addEventListener("click", (e) => {
    editContent(e.target.parentElement)
  })

  // delete <button>
  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Delete Post"
  deleteBtn.addEventListener("click", (e) => {
    deletePost(e.target.parentElement)
  })

  post.appendChild(postTitle)
  post.appendChild(editTitleBtn)
  post.appendChild(postContent)
  post.appendChild(editContentBtn)
  post.appendChild(deleteBtn)

  document.getElementById("posts").appendChild(post)
}

const addPost = () => {
  const title = prompt("Enter the blog post title:")
  if (!title || !title.trim()) return

  const content = prompt("Enter the blog post content:")
  if (!content || !content.trim()) return

  createPost(title.trim(), content.trim())
}

// Shared by the Edit buttons and the double click events
const updateText = (element, label) => {
  const newText = prompt(`Input the updated ${label}:`, element.textContent)
  if (newText && newText.trim()) {
    element.textContent = newText.trim()
  }
}

const editTitle = (target) => {
  updateText(target.querySelector("h2"), "title")
}

const editContent = (target) => {
  updateText(target.querySelector("p"), "content")
}

const deletePost = (target) => {
  const title = target.firstChild.textContent
  const toDelete = confirm(`Are you sure you want to delete "${title}"?`)

  if (toDelete) {
    target.remove()
    alert(`Post "${title}" deleted successfully`)
  }
}