document.addEventListener("DOMContentLoaded", () => {

    const hour = new Date().getHours();

    if (hour >= 18 || hour < 6) {
        document.body.style.background =
            "linear-gradient(to bottom, #0f172a, #334155)";
        document.body.style.color = "#ffffff";
    }

});
