'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables - old filter system (removed from HTML)
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-selecct-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");


// project tabs variables
const projectTabs = document.querySelectorAll("[data-project-tab]");
const projectItems = document.querySelectorAll("[data-project-item]");

// project tab switch function
const switchProjectTab = function (tabName) {
  // Remove active class from all tabs
  for (let i = 0; i < projectTabs.length; i++) {
    projectTabs[i].classList.remove("active");
  }
  
  // Add active class to clicked tab
  for (let i = 0; i < projectTabs.length; i++) {
    if (projectTabs[i].getAttribute("data-project-tab") === tabName) {
      projectTabs[i].classList.add("active");
    }
  }
  
  // Show/hide projects based on selected tab
  for (let i = 0; i < projectItems.length; i++) {
    if (tabName === "all" || projectItems[i].getAttribute("data-project-category") === tabName) {
      projectItems[i].classList.add("active");
    } else {
      projectItems[i].classList.remove("active");
    }
  }
}

// add event listeners to all project tabs
for (let i = 0; i < projectTabs.length; i++) {
  projectTabs[i].addEventListener("click", function () {
    switchProjectTab(this.getAttribute("data-project-tab"));
  });
}



// certificate modal variables
const certificateItems = document.querySelectorAll("[data-certificate-item]");
const certModalContainer = document.querySelector("[data-cert-modal-container]");
const certModalCloseBtn = document.querySelector("[data-cert-modal-close-btn]");
const certOverlay = document.querySelector("[data-cert-overlay]");

// cert modal content elements
const certModalTitle = document.querySelector("[data-cert-modal-title]");
const certModalOrg = document.querySelector("[data-cert-modal-org]");
const certModalImg = document.querySelector("[data-cert-modal-img]");

// cert modal toggle function
const certModalToggle = function () {
  certModalContainer.classList.toggle("active");
  certOverlay.classList.toggle("active");
}

// add click event to all certificate items
for (let i = 0; i < certificateItems.length; i++) {

  certificateItems[i].addEventListener("click", function () {

    const certTitle = this.getAttribute("data-cert-title");
    const certOrg = this.getAttribute("data-cert-organization");
    
    certModalTitle.textContent = certTitle;
    certModalOrg.textContent = certOrg;
    
    // construct image path based on certificate name
    const imageName = certTitle.toLowerCase().replace(/\s+/g, '-') + '.jpg';
    certModalImg.src = './assets/images/certificates/' + imageName;
    certModalImg.alt = certTitle;

    certModalToggle();

  });

}

// add click event to certificate modal close button
certModalCloseBtn.addEventListener("click", certModalToggle);
certOverlay.addEventListener("click", certModalToggle);



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}