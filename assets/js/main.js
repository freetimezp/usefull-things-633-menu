const btn = document.querySelector(".menu button");

if (btn) {
    btn.addEventListener("click", () => {
        document.querySelector(".menu ul").classList.toggle("active");
    });
}
