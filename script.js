// Function to toggle the menu
function toggleMenu() {
  // Select the menu open button
  const menuOpenBtn = document.querySelector(".menu-open-btn");

  // Add click event listener to the menu open button
  menuOpenBtn.addEventListener("click", function () {
    // Select the navigation menu
    const navMenu = document.querySelector(".nav-menu");

    // Toggle the class to show/hide the menu
    navMenu.classList.toggle("toggle-menu");
  });
}

// Call the toggleMenu function to set up menu toggling
toggleMenu();

// Function to toggle submenu items
function toggleSubmenu() {
  // Select all dropdown menu titles
  const dropdownMenuTitle = document.querySelectorAll(".dropdown-menu-title");

  // Loop through each dropdown menu title
  dropdownMenuTitle.forEach((title, index) => {
    // Add click event listener to the dropdown menu title
    title.addEventListener("click", function () {
      // Hide all li elements
      const allLiElements = document.querySelectorAll("h4 ~ li");
      allLiElements.forEach((li) => {
        li.style.display = "none";
      });

      // Toggle the display property of adjacent siblings of h4 when clicked
      const siblings = this.parentNode.querySelectorAll("h4 ~ li");
      siblings.forEach((sibling) => {
        sibling.style.display = "block";
      });

      // Toggle the rotation of the arrow icon
      const arrowIcon = this.querySelector(".sub-menu-arrow-icon");
      arrowIcon.classList.toggle("rotate180");
    });
  });
}

// Call the toggleSubmenu function to set up submenu toggling
toggleSubmenu();
