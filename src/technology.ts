import "./style.css";

import launchImg from "./assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleImg from "./assets/technology/image-space-capsule-portrait.jpg";
import spaceImg from "./assets/technology/image-spaceport-portrait.jpg";

document.addEventListener("DOMContentLoaded", () => {
  interface TechItem {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  }

  const techData: Record<string, TechItem> = {
    launch: {
      title: "THE TERMINOLOGY",
      subtitle: "LAUNCH VEHICLE",
      description: `Launch vehicle A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
      image: launchImg,
    },
    space: {
      title: "THE TERMINOLOGY",
      subtitle: "SPACE CAPSULE",
      description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
      image: spaceImg,
    },
    capsule: {
      title: "THE TERMINOLOGY",
      subtitle: "SPACEPORT",
      description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
      image: capsuleImg,
    },
  };

  // DOM elements
  const numbers = document.querySelectorAll<HTMLElement>("[data-tech]");
  const titleEl = document.getElementById("tech-title")!;
  const subtitleEl = document.getElementById("tech-subtitle")!;
  const descEl = document.getElementById("tech-description")!;
  const imgEl = document.getElementById("tech-image") as HTMLImageElement;

  // Add click events
  numbers.forEach((num) => {
    num.addEventListener("click", () => {
      const key = num.dataset.tech;
      if (!key) return;

      setActiveTech(key, num);
    });
  });

  function setActiveTech(key: string, activeEl: HTMLElement) {
    numbers.forEach((n) => n.classList.remove("bg-white", "text-black"));

    activeEl.classList.add("bg-white", "text-black");

    // Update content
    const data = techData[key];
    titleEl.textContent = data.title;
    subtitleEl.textContent = data.subtitle;
    descEl.textContent = data.description;
    imgEl.src = data.image;
  }

  window.addEventListener("DOMContentLoaded", () => {
    const first = document.querySelector<HTMLElement>('[data-tech="launch"]');
    if (first) {
      setActiveTech("launch", first);
    }
  });
});
