// Welcome message
console.log("Welcome to A. Israyelu's Portfolio!");

// Smooth navigation
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});