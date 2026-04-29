document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay")
  const mobileMenuClose = document.getElementById("mobile-menu-close")

  function openMobileMenu() {
    if (mobileMenu && mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove("hidden")
      mobileMenu.classList.remove("-translate-y-full")
      document.body.style.overflow = "hidden" // Prevent background scrolling
    }
  }

  function closeMobileMenu() {
    if (mobileMenu && mobileMenuOverlay) {
      mobileMenu.classList.add("-translate-y-full")
      mobileMenuOverlay.classList.add("hidden")
      document.body.style.overflow = "" // Restore scrolling
    }
  }

  // Open menu when hamburger is clicked
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", openMobileMenu)
  }

  // Close menu when X button is clicked
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", closeMobileMenu)
  }

  // Close menu when overlay is clicked
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", closeMobileMenu)
  }

  // Close menu when pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileMenu()
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        closeMobileMenu()
      }
    })
  })

  // Form submission handling
  const contactForm = document.querySelector('form[action*="formsubmit.co"]')
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // FormSubmit.co will handle the actual submission
      // This is just for any additional client-side handling if needed
      console.log("Form submitted")
    })
  }
})