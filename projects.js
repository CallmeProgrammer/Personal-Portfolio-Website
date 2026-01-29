//Projects Section - Fetch projects from JSON and create project cards
fetch("content/projects.json")
  .then(res => res.json())
  .then(projects => {
    const grid = document.getElementById("projectsGrid");

    projects.forEach(project => {
      const card = document.createElement("article");
      card.className = "project-card";

      card.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
        </div>

        <div class="project-content">
          <h3>${project.title}</h3>

          <p class="project-description">
            ${project.description}
          </p>

          <p class="project-role">
            ${project.role}
          </p>

          <div class="project-tags">
            ${project.tech.map(tag => `<span>${tag}</span>`).join("")}
          </div>

          ${project.preview ? `
            <a href="${project.preview}" target="_blank" class="project-preview">
              ↗ Preview
            </a>
          ` : ""}
        </div>
      `;

      grid.appendChild(card);
    });
  })
  .catch(err => console.error("Projects load failed", err));

//Get in touch Section - Open Gmail with prefilled details
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Portfolio Contact Request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=khrithik829@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailURL, "_blank");
  });
//Footer - Set current year
 document.getElementById("year").textContent = new Date().getFullYear();


