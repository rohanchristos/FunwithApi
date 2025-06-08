const url = "https://catfact.ninja/fact";
const btn = document.querySelector("#fetch-btn");
const apiTextDiv = document.querySelector("#api-text");

btn.addEventListener("click", fetchCatFact);

function fetchCatFact() {
    // Show loading state
    apiTextDiv.textContent = "Loading...";
    btn.disabled = true;
    btn.textContent = "Fetching...";

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        })
        .then(data => {
            apiTextDiv.textContent = data.fact;
        })
        .catch(err => {
            apiTextDiv.textContent = "Failed to fetch cat fact. Please try again!";
            console.error(err);
        })
        .finally(() => {
            btn.disabled = false;
            btn.textContent = "Fetch API Text";
        });
}
