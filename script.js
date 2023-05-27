document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".cube").forEach((element) => {
        element.addEventListener("click", function() {
            this.classList.remove('spin');
            this.classList.add('two');

        });
    });
});