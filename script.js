const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const results = document.getElementById("results");
const status = document.getElementById("status");

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    const query = input.value.trim();
    if (query === "") {
        return;
    }
