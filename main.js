/**
 * Tuli Ma Property Brokers - Main JavaScript Controller
 * Hand-crafted with vanilla JS for high performance.
 */

// Global Property Database (Zambian Real Estate Listings)
const propertyListings = [
  {
    id: 1,
    title: "Executive 4-Bedroom Villa",
    location: "Kabulonga, Lusaka",
    price: "$3,200 / month",
    numericPrice: 3200,
    type: "rent",
    category: "Rentals",
    beds: 4,
    baths: 4.5,
    area: "420 sqm",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "Modern luxury villa in secure gated estate. Includes private swimming pool, backup generator, smart home systems, and neat landscaping."
  },
  {
    id: 2,
    title: "Charming 3-Bedroom Family House",
    location: "Woodlands, Lusaka",
    price: "ZK 4,500,000",
    numericPrice: 4500000,
    type: "sale",
    category: "Houses for Sale",
    beds: 3,
    baths: 2,
    area: "280 sqm",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "Centrally located close to woodlands mall. Features expansive private yard, elegant master bedroom ensuite, and electric wire fence."
  },
  {
    id: 3,
    title: "Premium Furnished Studio Apartment",
    location: "Rhodes Park, Lusaka",
    price: "$1,500 / month",
    numericPrice: 1500,
    type: "furnished",
    category: "Fully Furnished Apartments",
    beds: 1,
    baths: 1,
    area: "75 sqm",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "Turn-key luxury studio apartment inside a serviced compound. Includes high-speed Wi-Fi, cleaning service, and access to compound pool."
  },
  {
    id: 4,
    title: "10-Acre Agricultural Land Estate",
    location: "Leopards Hill, Lusaka",
    price: "ZK 12,000,000",
    numericPrice: 12000000,
    type: "land",
    category: "Land for Sale",
    beds: 0,
    baths: 0,
    area: "10 Acres",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "Prime virgin farm land suitable for luxury housing development or productive smallholding. Flat topography, main road access, complete title deeds."
  },
  {
    id: 5,
    title: "Ultra-Modern 3-Storey Office Plaza",
    location: "Roma (Great East Road), Lusaka",
    price: "$1,850,000",
    numericPrice: 1850000,
    type: "commercial",
    category: "Commercial Property",
    beds: 0,
    baths: 6,
    area: "950 sqm",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "State-of-the-art office spaces perfect for financial institutions, multinational firms, or corporate headquarters. Ample parking for 30+ cars."
  },
  {
    id: 6,
    title: "Modern 2-Bedroom Apartment",
    location: "Ibex Hill, Lusaka",
    price: "ZK 15,000 / month",
    numericPrice: 15000,
    type: "rent",
    category: "Apartments",
    beds: 2,
    baths: 2,
    area: "120 sqm",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "Elegant modern apartment with master bedroom ensuite. Fits active working class, featuring modern fitted kitchen cabinets and paved driveway."
  },
  {
    id: 7,
    title: "High-End 5-Bedroom Mansions",
    location: "Roma, Lusaka",
    price: "ZK 8,200,000",
    numericPrice: 8200000,
    type: "sale",
    category: "Houses for Sale",
    beds: 5,
    baths: 5,
    area: "600 sqm",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    description: "Architectural masterpiece with flawless fittings. Private poolside bar, dual-car garage, luxury security booth, and integrated borehole systems."
  },
  {
    id: 8,
    title: "Serviced 2-Bedroom Furnished Apartment",
    location: "Kabulonga, Lusaka",
    price: "$2,200 / month",
    numericPrice: 2200,
    type: "furnished",
    category: "Fully Furnished Apartments",
    beds: 2,
    baths: 2.5,
    area: "140 sqm",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "Stately duplex within walking distance of Centro Mall. Fully loaded kitchen, designer leather couches, automated security, and satellite television."
  },
  {
    id: 9,
    title: "Scenic 1.5-Acre Gated Residential Lot",
    location: "Lilayi, Lusaka",
    price: "ZK 1,200,000",
    numericPrice: 1200000,
    type: "land",
    category: "Land for Sale",
    beds: 0,
    baths: 0,
    area: "1.5 Acres",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "Rare and beautiful plot of land located in Lilayi’s safe residential farm sector. Perfect for building a luxury family home, surrounded by mature trees."
  },
  {
    id: 10,
    title: "Premium Retail Commercial Space",
    location: "Woodlands (Chindo Road), Lusaka",
    price: "ZK 35,000 / month",
    numericPrice: 35000,
    type: "commercial",
    category: "Commercial Property",
    beds: 0,
    baths: 2,
    area: "180 sqm",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    description: "Spacious ground floor showroom space with absolute street-front visibility. Features a wide presentation counter, heavy security shutters, and storage."
  }
];

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Global Components Setup
  setupLoader();
  setupStickyHeader();
  setupMobileMenu();
  setupBackToTop();
  setupFAQ();
  setupCounterAnimation();
  
  // Dynamic Page-Specific Initializations
  const pathname = window.location.pathname;
  if (pathname.includes("listings.html")) {
    initListingsPage();
  } else if (pathname.includes("buy.html")) {
    initBuyPage();
  } else if (pathname.includes("rent.html")) {
    initRentPage();
  } else if (pathname.includes("contact.html")) {
    initContactPage();
  } else {
    // Default to Home Page if index.html or empty route
    initHomePage();
  }
});

// Helper 1: Hide Preloader
function setupLoader() {
  const loader = document.getElementById("site-loader");
  if (loader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.classList.add("hidden");
      }, 400); // smooth visual delay
    });
  }
}

// Helper 2: Sticky Header and Glassmorphism State
function setupStickyHeader() {
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
}

// Helper 3: Mobile Hamburger Menu Sliding Drawer
function setupMobileMenu() {
  const burgerBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("mobile-menu-close");
  const menuDrawer = document.getElementById("mobile-menu");
  
  if (burgerBtn && menuDrawer) {
    burgerBtn.addEventListener("click", () => {
      menuDrawer.classList.add("open");
    });
  }
  
  if (closeBtn && menuDrawer) {
    closeBtn.addEventListener("click", () => {
      menuDrawer.classList.remove("open");
    });
  }

  // Close when clicking a link inside mobile drawer
  const menuLinks = menuDrawer?.querySelectorAll("a");
  if (menuLinks) {
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuDrawer.classList.remove("open");
      });
    });
  }
}

// Helper 4: Back to Top Button scroll handler
function setupBackToTop() {
  const btt = document.getElementById("back-to-top");
  if (btt) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        btt.classList.add("visible");
      } else {
        btt.classList.remove("visible");
      }
    });
    btt.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// Helper 5: Accordeon / FAQ Expanders
function setupFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      // Toggle current item
      const isActive = item.classList.contains("active");
      
      // Close all first for single-accordion effect
      faqItems.forEach(i => {
        i.classList.remove("active");
        const a = i.querySelector(".faq-answer");
        if (a) a.style.maxHeight = null;
      });
      
      if (!isActive) {
        item.classList.add("active");
        const answer = item.querySelector(".faq-answer");
        if (answer) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      }
    });
  });
}

// Helper 6: Numerical Counter Animation
function setupCounterAnimation() {
  const counters = document.querySelectorAll(".counter-number");
  if (counters.length === 0) return;

  const countUp = (counter) => {
    const target = +counter.getAttribute("data-target");
    const speed = 200; // lower number = faster
    const increment = target / speed;
    let current = 0;

    const updateCount = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.ceil(current);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target + (counter.getAttribute("data-suffix") || "");
      }
    };
    updateCount();
  };

  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

// Helper 7: Universal Card Template Engine
function createPropertyCard(prop) {
  const typeBadge = prop.type === 'sale' ? 'FOR SALE' : (prop.type === 'furnished' ? 'FURNISHED' : 'FOR RENT');
  const sizeIcons = prop.beds > 0 ? `
    <div class="flex items-center gap-1">
      <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12h18M3 12a9 9 0 0118 0M3 12c0-3 3-6 9-6s9 3 9 6"></path></svg>
      <span>${prop.beds} Beds</span>
    </div>
    <div class="flex items-center gap-1">
      <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 12V4H4v8M2 12h20M4 12V20h16v-8"></path></svg>
      <span>${prop.baths} Baths</span>
    </div>
  ` : `
    <div class="flex items-center gap-1">
      <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg>
      <span>Verified Docs</span>
    </div>
  `;

  return `
    <div class="luxury-card overflow-hidden rounded-lg flex flex-col group h-full">
      <!-- Image & Badges -->
      <div class="relative overflow-hidden aspect-[4/3] bg-neutral-100">
        <img src="${prop.image}" alt="${prop.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pb-0.5" loading="lazy">
        <div class="absolute top-4 left-4 bg-brand-green text-white text-xs tracking-wider uppercase px-3 py-1.5 rounded-sm font-semibold shadow-md">
          ${prop.category}
        </div>
        <div class="absolute bottom-4 right-4 bg-neutral-900/85 backdrop-blur-sm text-amber-400 text-xs tracking-widest uppercase px-3 py-1 font-semibold rounded-sm">
          ${typeBadge}
        </div>
      </div>
      
      <!-- Content Segment -->
      <div class="p-6 flex-1 flex flex-col">
        <div class="text-sm font-semibold text-amber-600 mb-1 flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span>${prop.location}</span>
        </div>
        
        <h3 class="text-xl font-display font-bold text-slate-900 group-hover:text-brand-green transition-colors mt-1 mb-2 line-clamp-1">
          ${prop.title}
        </h3>
        
        <p class="text-sm text-neutral-600 line-clamp-3 mb-4 leading-relaxed flex-1">
          ${prop.description}
        </p>
        
        <div class="text-2xl font-bold text-brand-green mb-4">
          ${prop.price}
        </div>
        
        <div class="border-t border-neutral-100 pt-4 flex items-center justify-between text-xs font-semibold text-neutral-500 mb-5">
          ${sizeIcons}
          <div class="flex items-center gap-1">
            <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 8V4h4m12 4V4h-4M4 16v4h4m12-4v4h-4"></path></svg>
            <span>${prop.area}</span>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-2 mt-auto">
          <a href="https://wa.me/260979894567?text=Hi! I am interested in [${encodeURIComponent(prop.title)}] located in ${encodeURIComponent(prop.location)}." target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2.5 rounded text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm flex items-center justify-center gap-1.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.022-.015-.072-.041-.116-.062l-.724-.356a1.05 1.05 0 00-.91-.048c-.145.068-.54 1.134-.725 1.341s-.418.232-.716.082l-2.036-.913c-.347-.156-.636-.363-.865-.609l-1.397-1.498a1.53 1.53 0 01-.271-.418c-.092-.19-.044-.316.052-.423s.273-.314.37-.4c.1-.088.163-.166.241-.301s.039-.333-.031-.508l-.512-1.28c-.156-.37-.43-.448-.716-.448h-.615a1.44 1.44 0 00-1.12.512c-.287.327-.923 1.054-.923 2.57 0 1.516.924 2.915 1.11 3.167.185.253 1.83 2.915 4.54 3.992l1.64.664.885.31c1.23.415 2.12.33 2.87.21.84-.132 1.63-.58 1.85-1.13.23-.55.23-1.018.16-1.13-.07-.11-.25-.175-.41-.21z"/></svg>
            Inquire (WA)
          </a>
          <a href="contact.html?property_id=${prop.id}&title=${encodeURIComponent(prop.title)}" class="border border-brand-green text-brand-green hover:bg-brand-green hover:text-white text-center py-2.5 rounded text-xs font-semibold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center focus:ring-2 focus:ring-brand-green focus:outline-none">
            Book Viewing
          </a>
        </div>
      </div>
    </div>
  `;
}

// ---------------------- PAGE LEVEL ENGINES ----------------------

// 1. Home Page Engine
function initHomePage() {
  const featuredContainer = document.getElementById("featured-properties-container");
  if (!featuredContainer) return;
  
  // Select 3 featured listings 
  const featured = propertyListings.filter(p => p.featured === true).slice(0, 3);
  
  let cardsHTML = "";
  featured.forEach(prop => {
    cardsHTML += createPropertyCard(prop);
  });
  
  featuredContainer.innerHTML = cardsHTML;

  // Home Page Testimonial Carousel Setup
  setupTestimonialCarousel();
}

function setupTestimonialCarousel() {
  const slides = document.querySelectorAll(".testimonial-slide");
  const dotsContainer = document.getElementById("carousel-dots");
  if (slides.length === 0 || !dotsContainer) return;

  let currentSlide = 0;
  
  // Create dots dynamically
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = `w-3 h-3 rounded-full transition-all focus:outline-none ${index === 0 ? 'bg-amber-500 scale-125' : 'bg-green-800 hover:bg-amber-400'}`;
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("button");

  function goToSlide(n) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("bg-amber-500", "scale-125");
    dots[currentSlide].classList.add("bg-green-800");

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.remove("bg-green-800");
    dots[currentSlide].classList.add("bg-amber-500", "scale-125");
  }

  // Auto Scroll
  let interval = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 5000);

  // Stop interval on interaction
  dots.forEach(dot => {
    dot.addEventListener("click", () => clearInterval(interval));
  });
}

// 2. Listings Page Master Engine with Search, Filters and Price ranges
function initListingsPage() {
  const listingsContainer = document.getElementById("listings-container");
  const countFeedback = document.getElementById("listings-count-feedback");
  
  // Filter Fields
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const priceFilter = document.getElementById("price-filter");
  const filterButtons = document.querySelectorAll(".quick-filter-btn");

  if (!listingsContainer) return;

  let activeFilters = {
    keyword: "",
    category: "all",
    priceRange: "all"
  };

  // Event 1: Quick Filter Tab Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("bg-brand-green", "text-white");
        b.classList.add("bg-white", "text-neutral-700");
      });
      btn.classList.remove("bg-white", "text-neutral-700");
      btn.classList.add("bg-brand-green", "text-white");

      activeFilters.category = btn.getAttribute("data-filter");
      // update select element if exists
      if (categoryFilter) categoryFilter.value = activeFilters.category;
      applyFilters();
    });
  });

  // Event 2: Keyword Input Search 
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeFilters.keyword = e.target.value.toLowerCase();
      applyFilters();
    });
  }

  // Event 3: Secondary Select Dropdowns
  if (categoryFilter) {
    categoryFilter.addEventListener("change", (e) => {
      activeFilters.category = e.target.value;
      // Sync quick buttons
      filterButtons.forEach(btn => {
        if (btn.getAttribute("data-filter") === activeFilters.category) {
          btn.classList.add("bg-brand-green", "text-white");
          btn.classList.remove("bg-white", "text-neutral-700");
        } else {
          btn.classList.remove("bg-brand-green", "text-white");
          btn.classList.add("bg-white", "text-neutral-700");
        }
      });
      applyFilters();
    });
  }

  if (priceFilter) {
    priceFilter.addEventListener("change", (e) => {
      activeFilters.priceRange = e.target.value;
      applyFilters();
    });
  }

  // Master Filter Engine Logic
  function applyFilters() {
    let filtered = propertyListings.filter(prop => {
      // 1. Keyword check (title, location, description)
      const matchesKeyword = activeFilters.keyword === "" || 
        prop.title.toLowerCase().includes(activeFilters.keyword) ||
        prop.location.toLowerCase().includes(activeFilters.keyword) ||
        prop.description.toLowerCase().includes(activeFilters.keyword);

      // 2. Category check 
      let matchesCategory = true;
      if (activeFilters.category !== "all") {
        matchesCategory = prop.category.toLowerCase().replace(/\s+/g, '-') === activeFilters.category ||
                          prop.type === activeFilters.category;
      }

      // 3. Price validation
      let matchesPrice = true;
      if (activeFilters.priceRange !== "all") {
        const val = prop.numericPrice;
        // Since rates are either monthly rents in USD ($) or outright purchases in ZMW, we segment price ranges reasonably:
        if (activeFilters.priceRange === "rent-under-2000") {
          matchesPrice = prop.type === "rent" || prop.type === "furnished" ? val < 2000 : false;
        } else if (activeFilters.priceRange === "rent-above-2000") {
          matchesPrice = prop.type === "rent" || prop.type === "furnished" ? val >= 2000 : false;
        } else if (activeFilters.priceRange === "sale-under-5m") {
          matchesPrice = prop.type === "sale" || prop.type === "land" ? (prop.price.includes("ZK") && val <= 5000000) : false;
        } else if (activeFilters.priceRange === "sale-above-5m") {
          matchesPrice = prop.type === "sale" || prop.type === "land" || prop.type === "commercial" ? (prop.price.includes("ZK") ? val > 5000000 : val > 100000) : false;
        }
      }

      return matchesKeyword && matchesCategory && matchesPrice;
    });

    renderFilteredList(filtered);
  }

  function renderFilteredList(list) {
    if (list.length === 0) {
      listingsContainer.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <svg class="w-16 h-16 text-amber-300 mx-auto mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          <h4 class="text-xl font-display font-semibold text-neutral-800">No properties match your selection.</h4>
          <p class="text-neutral-500 mt-2 max-w-md mx-auto">Try clearing search phrases, adjusting prices, or choosing a separate category filter tab above.</p>
          <button id="reset-filters-btn" class="mt-6 bg-brand-green text-amber-100 hover:bg-brand-gold hover:text-brand-green text-xs font-semibold px-5 py-3 tracking-wider uppercase transition-colors rounded">Reset Filters</button>
        </div>
      `;
      const rstBtn = document.getElementById("reset-filters-btn");
      if (rstBtn) {
        rstBtn.addEventListener("click", () => {
          if (searchInput) searchInput.value = "";
          if (categoryFilter) categoryFilter.value = "all";
          if (priceFilter) priceFilter.value = "all";
          activeFilters = { keyword: "", category: "all", priceRange: "all" };
          filterButtons.forEach(b => {
            if (b.getAttribute("data-filter") === "all") {
              b.classList.add("bg-brand-green", "text-white");
              b.classList.remove("bg-white", "text-neutral-700");
            } else {
              b.classList.remove("bg-brand-green", "text-white");
              b.classList.add("bg-white", "text-neutral-700");
            }
          });
          applyFilters();
        });
      }
      if (countFeedback) countFeedback.innerText = "0 Properties Found";
      return;
    }

    let cardsHTML = "";
    list.forEach(prop => {
      cardsHTML += createPropertyCard(prop);
    });
    listingsContainer.innerHTML = cardsHTML;
    if (countFeedback) countFeedback.innerText = `${list.length} Propert${list.length > 1 ? 'ies' : 'y'} Found`;
  }

  // Load Initial List
  applyFilters();
}

// 3. Buy Page Engine
function initBuyPage() {
  const container = document.getElementById("buying-properties-container");
  if (!container) return;

  // Filter properties categorized under Sales or Lands
  const buyProperties = propertyListings.filter(p => p.type === "sale" || p.type === "land" || p.type === "commercial");
  
  let cardsHTML = "";
  buyProperties.forEach(prop => {
    cardsHTML += createPropertyCard(prop);
  });
  
  container.innerHTML = cardsHTML;
}

// 4. Rent Page Engine
function initRentPage() {
  const container = document.getElementById("rental-properties-container");
  if (!container) return;

  // Filter properties categorized under Rent or Furnished
  const rentProperties = propertyListings.filter(p => p.type === "rent" || p.type === "furnished");
  
  let cardsHTML = "";
  rentProperties.forEach(prop => {
    cardsHTML += createPropertyCard(prop);
  });
  
  container.innerHTML = cardsHTML;
}

// 5. Contact / Listing submission handlers
function initContactPage() {
  // Grab query parameters if booked from a viewing button
  const urlParams = new URLSearchParams(window.location.search);
  const selectedPropTitle = urlParams.get('title');
  const selectedPropId = urlParams.get('property_id');
  
  const descField = document.getElementById("property-descr-field");
  const subjectToggle = document.getElementById("form-subject-select");
  
  if (selectedPropTitle && descField) {
    descField.value = `Hi Tuli Ma, I would like to schedule an immediate viewing / consultation for the property "${selectedPropTitle}" (ID Reference: TULI-${selectedPropId}). Let's organize dates. Thanks.`;
    if (subjectToggle) {
      subjectToggle.value = "Request Viewing";
    }
  }

  // Form Submitter Intercepter
  const formElement = document.getElementById("booking-contact-form");
  const formOverlay = document.getElementById("form-success-overlay");
  
  if (formElement && formOverlay) {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Client validation feedback
      const btn = formElement.querySelector("button[type='submit']");
      const btnOriginalVal = btn.innerHTML;
      btn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing Message...`;
      btn.disabled = true;

      // Send to FormSubmit via fetch Ajax so page doesn't refresh instantly! Beautiful flow!
      const formData = new FormData(formElement);
      const mailto = formElement.getAttribute("action");

      fetch(mailto, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        btn.innerHTML = btnOriginalVal;
        btn.disabled = false;
        formOverlay.style.display = "flex";
        formOverlay.classList.remove("hidden");
        formElement.reset();
      })
      .catch(error => {
        // Fallback smooth simulator for local/preview modes
        setTimeout(() => {
          btn.innerHTML = btnOriginalVal;
          btn.disabled = false;
          formOverlay.style.display = "flex";
          formOverlay.classList.remove("hidden");
          formElement.reset();
        }, 1200);
      });
    });

    const closeOverlayBtn = document.getElementById("close-overlay-btn");
    if (closeOverlayBtn) {
      closeOverlayBtn.addEventListener("click", () => {
        formOverlay.style.display = "none";
        formOverlay.classList.add("hidden");
      });
    }
  }

  // Owner Submission Form (List property owners page)
  const ownerForm = document.getElementById("owner-property-submission-form");
  const ownerOverlay = document.getElementById("owner-success-overlay");

  if (ownerForm && ownerOverlay) {
    ownerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const btn = ownerForm.querySelector("button[type='submit']");
      const btnOriginalVal = btn.innerHTML;
      btn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Listing Uploading...`;
      btn.disabled = true;

      const formData = new FormData(ownerForm);
      const mailto = ownerForm.getAttribute("action");

      fetch(mailto, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(() => {
        btn.innerHTML = btnOriginalVal;
        btn.disabled = false;
        ownerOverlay.style.display = "flex";
        ownerOverlay.classList.remove("hidden");
        ownerForm.reset();
      })
      .catch(() => {
        setTimeout(() => {
          btn.innerHTML = btnOriginalVal;
          btn.disabled = false;
          ownerOverlay.style.display = "flex";
          ownerOverlay.classList.remove("hidden");
          ownerForm.reset();
        }, 1200);
      });
    });

    const closeOwnerOverlay = document.getElementById("close-owner-overlay-btn");
    if (closeOwnerOverlay) {
      closeOwnerOverlay.addEventListener("click", () => {
        ownerOverlay.style.display = "none";
        ownerOverlay.classList.add("hidden");
      });
    }
  }
}
