fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('projects');
    data.forEach(proj => {
      const div = document.createElement('div');
      div.className = 'project';
      div.innerHTML = `
        <h2>${proj.name}</h2>
        <p><strong>Tagy:</strong> ${proj.tags.join(', ')}</p>
        <p>${proj.description}</p>
        <p><strong>Quickstart:</strong></p>
        <ol>${proj.quickstart.map(step => `<li>${step}</li>`).join('')}</ol>
        <p><a href="${proj.github}" target="_blank">GitHub</a> | <a href="${proj.web}" target="_blank">Web</a></p>
      `;
      container.appendChild(div);
    });
  });
