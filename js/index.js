

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.setAttribute('src', "../img/logo.png");

//CASHING VARIABLES FOR:

//NAVIGATION LINKS
const navLinks = document.querySelectorAll('a');

//CTA SECTION
const cta = document.querySelector('.cta');
const ctaHeadingPrimary = cta.querySelector('h1');
const ctaButton = cta.querySelector('button');
const ctaImg = cta.querySelector('#cta-img');
const ctaContent = siteContent.cta;

//MAIN CONTENT
const main = document.querySelector('.main-content');

  //TOP CONTENT
  const topContent = document.querySelector('.top-content');
  const topTextContent = topContent.querySelectorAll('.text-content');
  console.log(topTextContent[0]);
  const mainContent = siteContent["main-content"];

  //BOTTOM CONTENT
  const bottomContent = document.querySelector('.bottom-content');
  const bottomTextContent = bottomContent.querySelectorAll('.text-content');

//CONTACT SECTION
const contacts = document.querySelectorAll('.contact');
console.log(contacts);

//NAV SECTION
navLinks.forEach((el, index) => el.textContent = siteContent.nav["nav-item-" + (index + 1)]);

//CTA SECTION
ctaHeadingPrimary.textContent = ctaContent["h1"];
ctaButton.textContent = ctaContent["button"];
ctaImg.setAttribute('src', "../img/header-img.png");

//TOP CONTENT
topTextContent[0].querySelector('h4').textContent = mainContent['features-h4'];
topTextContent[1].querySelector('h4').textContent = mainContent['about-h4'];
topTextContent[0].querySelector('p').textContent = mainContent['features-content'];
topTextContent[1].querySelector('p').textContent = mainContent['about-content'];

//MAIN CONTENT IMAGE
main.querySelector('.middle-img').setAttribute('src', '../img/mid-page-accent.jpg');

//BOTTOM CONTENT
bottomTextContent[0].querySelector('h4').textContent = mainContent['services-h4'];
bottomTextContent[0].querySelector('p').textContent = mainContent['services-content'];
bottomTextContent[1].querySelector('h4').textContent = mainContent['product-h4'];
bottomTextContent[1].querySelector('p').textContent = mainContent['product-content'];
bottomTextContent[2].querySelector('h4').textContent = mainContent['vision-h4'];
bottomTextContent[2].querySelector('p').textContent = mainContent['vision-content'];

//CONTACT SECTION