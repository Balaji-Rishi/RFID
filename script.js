function handleClick(action) {
    alert(action + " clicked!");
}


document.addEventListener("DOMContentLoaded", () => {
    fetch("https://your-api-endpoint.com/get-heading") // Replace with your API endpoint
        .then(response => response.json())
        .then(data => {
            document.getElementById("dynamic-heading").textContent = data.heading || "Default Title";
        })
        .catch(error => {
            console.error("Error fetching heading:", error);
            document.getElementById("dynamic-heading").textContent = "Failed to Load Title";
        });
});
