document.addEventListener("DOMContentLoaded", function() {
    // Select all sections for fade-in effect
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = "opacity 1s";
    });

    // Function to fade in sections
    const fadeInSections = () => {
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = 1;
            }, index * 200); // Delay each section slightly for a staggered effect
        });
    };

    // Call the fade-in function on load
    fadeInSections();

    // Add a hover effect to headers
    const headers = document.querySelectorAll("section h2");

    headers.forEach(header => {
        header.addEventListener("mouseover", function() {
            header.style.color = "#FF6347"; // Change to a tomato color on hover
            header.style.transition = "color 0.3s";
        });

        header.addEventListener("mouseout", function() {
            header.style.color = "#007BFF"; // Revert to the original color
        });
    });
});
