const template = document.createElement('template');

template.innerHTML = `
  <div class="navbar">
        <div class="logo">
            <img src="img/twitter-logo-2.png" alt="Logo">
        </div>
        <div>
            <a href="index.html">Home</a>
            <a href="resume.pdf" target="_blank">Resume</a>
            <a href="index.html#contact">Contact</a>
            <a href="blog.html">Blog</a>
        </div>
    </div>
`;

document.body.appendChild(template.content);