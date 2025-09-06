import "./style.css";

import moonImg from "./assets/destination/image-moon.png";
import marsImg from "./assets/destination/image-mars.png";
import europaImg from "./assets/destination/image-europa.png";
import titanImg from "./assets/destination/image-titan.png";

document.addEventListener("DOMContentLoaded", () => {
  interface Planet {
    title: string;
    description: string;
    distance: string;
    travel: string;
    image: string;
  }

  const planets: Record<string, Planet> = {
    moon: {
      title: "MOON",
      description: `See our planet as you’ve never seen it before. A perfect<br> relaxing trip away to help regain perspective and come<br> back refreshed. While you’re there, take in some history<br> by visiting the Luna 2 and Apollo 11 landing sites.`,
      distance: "384,400 KM",
      travel: "3 DAYS",
      image: moonImg,
    },
    mars: {
      title: "MARS",
      description: `Don’t forget to pack your hiking boots. You’ll need them <br>to tackle Olympus Mons, the tallest planetary mountain in<br> our solar system. It’s two and a half times the size of<br> Everest!`,
      distance: "225 MIL. KM",
      travel: "9 MONTHS",
      image: marsImg,
    },
    europa: {
      title: "EUROPA",
      description: `The smallest of the four Galilean moons orbiting Jupiter,<br> Europa is a winter lover’s dream. With an icy surface, <br>it’s perfect for a bit of ice skating, curling, hockey, or<br> simple relaxation in your snug wintery cabin.`,
      distance: "628 MIL. KM",
      travel: "3 YEARS",
      image: europaImg,
    },
    titan: {
      title: "TITAN",
      description: `The only moon known to have a dense atmosphere other <br>than Earth, Titan is a home away from home (just a few<br> hundred degrees colder!). As a bonus, you get striking<br> views of the Rings of Saturn.`,
      distance: "1.6 BIL. KM",
      travel: "7 YEARS",
      image: titanImg,
    },
  };

  // DOM Elements
  const imgEl = document.getElementById("planet-image") as HTMLImageElement;
  const titleEl = document.getElementById("planet-title") as HTMLElement;
  const descEl = document.getElementById("planet-description") as HTMLElement;
  const distanceEl = document.getElementById("planet-distance") as HTMLElement;
  const travelEl = document.getElementById("planet-travel") as HTMLElement;
  const tabs = document.querySelectorAll<HTMLLIElement>("#planet-tabs li");

  const updatePlanet = (key: string) => {
    const data = planets[key];
    imgEl.src = data.image;
    imgEl.alt = data.title;
    titleEl.textContent = data.title;
    descEl.innerHTML = data.description;
    distanceEl.textContent = data.distance;
    travelEl.textContent = data.travel;

    tabs.forEach((t) => t.classList.remove("border-b-2"));
    const activeTab = Array.from(tabs).find((t) => t.dataset.planet === key);
    activeTab?.classList.add("border-b-2");
  };

  updatePlanet("moon");

  // Add click events
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.planet;
      if (key) updatePlanet(key);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById(
    "menu-toggle"
  ) as HTMLButtonElement;
  const menuClose = document.getElementById("menu-close") as HTMLButtonElement;
  const navLinks = document.getElementById("nav-links") as HTMLElement;
  const links = document.querySelectorAll<HTMLAnchorElement>(".nav-link");

  if (!menuToggle || !menuClose || !navLinks) return;

  // Open menu
  menuToggle.addEventListener("click", () => {
    navLinks.classList.remove("hidden");
    menuToggle.classList.add("hidden");
  });

  // Close menu
  menuClose.addEventListener("click", () => {
    navLinks.classList.add("hidden");
    menuToggle.classList.remove("hidden");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 640) {
        links.forEach((el) => {
          el.classList.remove("border-r-2", "border-white");
          el.classList.add("border-transparent");
        });
        link.classList.remove("border-transparent");
        link.classList.add("border-r-2", "border-white");
      } else {
        links.forEach((el) => {
          el.classList.remove("border-b-2", "border-white");
          el.classList.add("border-transparent");
        });
        link.classList.remove("border-transparent");
        link.classList.add("border-b-2", "border-white");
      }
    });
  });
});
