// Translations
const translations = {
  en: {
    logo_prefix: "W", logo_suffix: "W",
    nav_home: "Home", nav_packages: "Packages", nav_services: "Services",
    nav_gallery: "Gallery", nav_map: "Map", nav_review: "Review", nav_contact: "Contact",
    home_title: "World Wide make travel easy", home_subtitle: "Discover new places with us, adventure awaits!",
    home_btn: "Discover more", book_title: "Book Now", book_where: "Where to go",
    book_how_many: "How many", book_arrival: "Arrival", book_leaving: "Leaving",
    book_submit: "Confirm Booking", packages_title: "Packages",
    filter_all: "All", filter_europe: "Europe", filter_asia: "Asia", filter_africa: "Africa",
    pkg_china: "China", pkg_france: "France", pkg_egypt: "Egypt", pkg_desc: "Welcome to our country",
    pkg_btn: "Book Now", services_title: "Services", srv_travel: "Travel any place",
    srv_travel_desc: "Countries, cities ....", srv_hotel: "Go to any hotel",
    srv_hotel_desc: "Our hotels are the best", srv_food: "Take any food",
    srv_food_desc: "Our delicious food is waiting for you", gallery_title: "Gallery",
    map_title: "Explore Destinations", review_title: "Reviews", contact_title: "Contact Us",
    contact_name: "Full Name", contact_email: "Email", contact_msg: "Message",
    contact_send: "Send Message", footer_text: "© 2026 Travel Agency. All rights reserved.",
    book_place_ph: "Place name", book_guests_ph: "Number of guests",
    contact_name_ph: "Enter your name", contact_email_ph: "Enter your email", contact_msg_ph: "Write your message"
  },
  ar: {
    logo_prefix: "عـ", logo_suffix: "ـالم",
    nav_home: "الرئيسية", nav_packages: "الباقات", nav_services: "الخدمات",
    nav_gallery: "المعرض", nav_map: "الخريطة", nav_review: "الآراء", nav_contact: "تواصل معنا",
    home_title: "سافر حول العالم بسهولة", home_subtitle: "اكتشف أماكن جديدة معنا، المغامرة بانتظارك!",
    home_btn: "اكتشف المزيد", book_title: "احجز الآن", book_where: "إلى أين؟",
    book_how_many: "عدد الأشخاص", book_arrival: "الوصول", book_leaving: "المغادرة",
    book_submit: "تأكيد الحجز", packages_title: "الباقات",
    filter_all: "الكل", filter_europe: "أوروبا", filter_asia: "آسيا", filter_africa: "أفريقيا",
    pkg_china: "الصين", pkg_france: "فرنسا", pkg_egypt: "مصر", pkg_desc: "مرحباً بك في بلدنا",
    pkg_btn: "احجز الآن", services_title: "الخدمات", srv_travel: "سافر لأي مكان",
    srv_travel_desc: "دول، مدن ....", srv_hotel: "إحجز أي فندق",
    srv_hotel_desc: "فنادقنا هي الأفضل", srv_food: "تذوق أي طعام",
    srv_food_desc: "طعامنا اللذيذ في انتظارك", gallery_title: "المعرض",
    map_title: "اكتشف الوجهات", review_title: "آراء العملاء", contact_title: "تواصل معنا",
    contact_name: "الاسم الكامل", contact_email: "البريد الإلكتروني", contact_msg: "الرسالة",
    contact_send: "إرسال رسالة", footer_text: "© 2026 وكالة السفر. جميع الحقوق محفوظة.",
    book_place_ph: "اسم المكان", book_guests_ph: "عدد الضيوف",
    contact_name_ph: "أدخل اسمك", contact_email_ph: "أدخل بريدك الإلكتروني", contact_msg_ph: "اكتب رسالتك"
  }
};

let currentLang = 'en';

// Language Toggle
document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  document.getElementById('lang-toggle').textContent = currentLang === 'en' ? 'AR' : 'EN';
  document.documentElement.classList.toggle('rtl', currentLang === 'ar');
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });
});

// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('light-theme');
  const icon = document.querySelector('#theme-toggle i');
  if(document.documentElement.classList.contains('light-theme')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Menu toggle
document.querySelector(".fa-solid.fa-bars").addEventListener("click", () => {
  const nav = document.querySelector(".navigation");
  nav.classList.toggle("active");
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Intersection Observer for fade-in animations
const observerOptions = { root: null, rootMargin: "0px", threshold: 0.15 };
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach(element => {
  observer.observe(element);
});

// Package Filters
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.package .card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filterValue = btn.getAttribute('data-filter');
    
    cards.forEach(card => {
      if(filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
        setTimeout(() => card.style.opacity = '1', 50);
      } else {
        card.style.opacity = '0';
        setTimeout(() => card.style.display = 'none', 300);
      }
    });
  });
});

// Booking Modal
const modal = document.getElementById('booking-modal');
const closeBtn = document.getElementById('close-modal');
const openBtns = document.querySelectorAll('.open-booking');

openBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
  });
});
closeBtn.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
  if(e.target === modal) modal.classList.remove('active');
});

// Carousel Logic
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

if(nextBtn && prevBtn && track) {
  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: 300, behavior: 'smooth' });
  });
  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -300, behavior: 'smooth' });
  });
}

// Scroll to Top
const scrollTopBtn = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) scrollTopBtn.classList.add('visible');
  else scrollTopBtn.classList.remove('visible');
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Leaflet Map Initialization
// Add a timeout to ensure container is loaded
setTimeout(() => {
  if(document.getElementById('map')) {
    const map = L.map('map').setView([20.0, 0.0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([35.8617, 104.1954]).addTo(map).bindPopup('China');
    L.marker([46.2276, 2.2137]).addTo(map).bindPopup('France');
    L.marker([26.8206, 30.8025]).addTo(map).bindPopup('Egypt');
  }
}, 500);
