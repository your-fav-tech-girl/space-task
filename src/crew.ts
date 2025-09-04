import "./style.css";

import douglasImg from "./assets/crew/image-douglas-hurley.png";
import markImg from "./assets/crew/image-mark-shuttleworth.png";
import victorImg from "./assets/crew/image-victor-glover.png";
import anoushehImg from "./assets/crew/image-anousheh-ansari.png";

document.addEventListener("DOMContentLoaded", () => {
  interface Crew {
    title: string;
    name: string;
    description: string;
    image: string;
  }

  const crew: Record<string, Crew> = {
    douglas: {
      title: "COMMANDER",
      name: "Douglas Hurley",
      description: `Douglas Gerald Hurley is an American engineer, former Marine Corps<br> pilot and former NASA astronaut. He launched into space for the third<br> time as commander of Crew Dragon Demo-2.`,
      image: douglasImg,
    },
    mark: {
      title: "MISSION SPECIALIST",
      name: "Mark <br> Shuttleworth",
      description: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the <br>company behind the Linux-based Ubuntu operating system.<br> Shuttleworth became the first South African to travel to<br> space as a space tourist.`,
      image: markImg,
    },
    victor: {
      title: "PILOT",
      name: "Victor Glover",
      description: `Pilot on the first operational flight of the SpaceX Crew Dragon to the<br> International Space Station. Glover is a commander in the U.S. Navy<br> where he pilots an F/A-18.He was a crew member of Expedition 64,<br> and served as a station systems flight engineer.`,
      image: victorImg,
    },
    anousheh: {
      title: "MISSION ENGINEER",
      name: "Anousheh Ansari",
      description: `An Iranian American engineer and co-founder of<br> Prodea Systems. She was the<br> first self-funded woman to fly to the ISS and the first Iranian in space.`,
      image: anoushehImg,
    },
  };

  // DOM Elements
  const imgEl = document.getElementById("crew-image") as HTMLImageElement;
  const titleEl = document.getElementById("crew-title") as HTMLElement;
  const descEl = document.getElementById("crew-description") as HTMLElement;
  const nameEl = document.getElementById("crew-name") as HTMLElement;
  const menuToggle = document.getElementById(
    "menu-toggle"
  ) as HTMLButtonElement;
  const menuClose = document.getElementById("menu-close") as HTMLButtonElement;
  const navLinks = document.getElementById("nav-links") as HTMLElement;

  const dots = document.querySelectorAll<HTMLButtonElement>(".crew-dot");

  let isMenuOpen = false;

  // Function to open mobile menu
  function openMenu() {
    isMenuOpen = true;
    navLinks.classList.add("active"); // show nav
    menuToggle.classList.add("hidden"); // hide hamburger
  }

  // Function to close mobile menu
  function closeMenu() {
    isMenuOpen = false;
    navLinks.classList.remove("active"); // hide nav
    menuClose.classList.remove("hidden"); // show hamburger
  }

  // Hamburger click
  menuToggle.addEventListener("click", openMenu);

  // Close button click
  menuClose.addEventListener("click", closeMenu);

  // Optional: close menu when clicking outside
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;

    if (
      !menuToggle.contains(target) &&
      !navLinks.contains(target) &&
      isMenuOpen
    ) {
      closeMenu();
    }
  });

  const updateCrew = (key: string) => {
    const data = crew[key];
    if (!data) return;

    imgEl.src = data.image;
    imgEl.alt = data.title;
    titleEl.textContent = data.title;
    descEl.innerHTML = data.description;
    nameEl.innerHTML = data.name;

    dots.forEach((d) => {
      d.classList.remove("bg-white");
      d.classList.add("bg-gray-500");
    });

    const activeDot = Array.from(dots).find((d) => d.dataset.crew === key);
    if (activeDot) {
      activeDot.classList.remove("bg-gray-500");
      activeDot.classList.add("bg-white");
    }
  };

  updateCrew("douglas");

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const key = dot.dataset.crew;
      if (key) updateCrew(key);
    });
  });
});
