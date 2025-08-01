import profilePicutreNoBg from "../assets/images/profile-nobg.png";
import skillSection from "../sections/skills.js";

export default class About{
    static load = () =>{
        const container = document.createElement("div");
        container.classList.add("section-container","about-background");
        container.setAttribute("id", "about");

        const imageDescription = document.createElement("div");
        imageDescription.className ="imageDescription-container";
        imageDescription.appendChild(this.loadImage());
        imageDescription.appendChild(this.personalDescription());
        container.appendChild(imageDescription);

        container.appendChild(skillSection.load());
        return container;
    }

    static personalDescription = () =>{
        const container = document.createElement("div");
        container.classList.add("about-description");

        const title = () =>{
            const title = document.createElement("h2");
            title.textContent = "About me";
            return title;
        }

        const description = () =>{
            const p = document.createElement("p");
            p.textContent = "I am currently living on the beautiful island of Taiwan, teaching students English as their second language. In my free time, I enjoy long runs. Running helps me reflect on life, providing me with the time and space for deep thinking. When I am not running, I am coding. I began coding in high school and college, but never managed to finish what I started. Now, I have developed a keen interest in computer languages and aspire to dedicate myself to creating apps, hopefully contributing to the community.";
    
            return p;
        }

        container.appendChild(title());
        container.appendChild(description());

        return container;
  
    }

    static loadImage = () =>{
        const div = document.createElement("div");
        div.classList.add("profile-image-container");
        const image = new Image();
        image.src = profilePicutreNoBg;
        image.alt = "A portrait for me";
        image.className = "profile-picture";
        
        div.appendChild(image);

        return div;

    }
}