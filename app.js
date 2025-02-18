document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
  
    // Load default home page
    loadPage("home");
  
    // event listeners to nav links
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const page = event.target.getAttribute("data-page");
        loadPage(page);
      });
    });
  
    // Function to load content dynamically
    function loadPage(page) {
      fetch(`data/${page}.html`)
        .then(response => {
          if (!response.ok) {
            throw new Error("Page not found");
          }
          return response.text();
        })
        .then(html => {
          content.innerHTML = html;
        })
        .catch(error => {
          content.innerHTML = `<p>Error loading page: ${error.message}</p>`;
        });
    }
  });
  