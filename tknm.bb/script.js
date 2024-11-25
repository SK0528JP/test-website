document.addEventListener("DOMContentLoaded", () => {
    // スムーススクロール
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // h1, h2のアニメーション開始
    const headings = document.querySelectorAll("h1, h2");
    headings.forEach(heading => {
        heading.style.animationDelay = "0.75s";
    });
});
