document.addEventListener("DOMContentLoaded", async () => {
    await fetchData(); // Attendez que fetchData() soit terminé avant de continuer
    const searchInput = document.querySelector("#filter-search");
    searchInput.addEventListener("input", filterData);
});

let postsData = [];

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        postsData = data;
        displayData(postsData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(posts) {
    const tableBody = document.querySelector("#data-table tbody");
    tableBody.innerHTML = "";

    posts.forEach(post => {
        const col = document.createElement("tr");
        const Postid = document.createElement("td");
        const ID = document.createElement("td");
        const Name = document.createElement("td");
        const Mail = document.createElement("td");
        const Body = document.createElement("td");

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
        return post.name.toString().includes(searchTerm);
    });

    displayData(filteredPosts);
}
