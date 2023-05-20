document.addEventListener("DOMContentLoaded", () => {
    fetchData();
    const searchInput = document.querySelector("#filter-search");
    searchInput.addEventListener("input", filterData);
  });
  
  let postsData = [];

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/comments")
  .then(response => response.json())
  .then(data => {
    postsData = data;   
    displayData(postsData);
  })
  .catch(error => console.log(error));;
}

function displayData(posts) {
  const tableBody = document.querySelector("#data-table tbody");
  tableBody.innerHTML = "";

  posts.forEach(post => {
    const col = document.createElement("tr");
    const Postid = document.createElement("td");
    const ID = document.createElement("td");
    const Name  = document.createElement("td");
    const Mail  = document.createElement("td");
    const Body  = document.createElement("td");

    Postid.textContent = post.postId;
    ID.textContent = post.id;
    Name.textContent = post.name;
    Mail.textContent = post.email;
    Body.textContent = post.body;

    col.appendChild(Postid);
    col.appendChild(ID);
    col.appendChild(Name);
    col.appendChild(Mail);
    col.appendChild(Body);

    tableBody.appendChild(col);
  });
}

function filterData() {
    const searchInput = document.querySelector("#filter-search");
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredPosts = postsData.filter(post => {
        return post.id.toString().includes(searchTerm) || post.postId.toString().includes(searchTerm) ;
    });
  
    displayData(filteredPosts);
}

  
  
  
  
  
  
  