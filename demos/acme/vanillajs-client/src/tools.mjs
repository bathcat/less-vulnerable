export async function fetchTemplate(current) {
    const templatePath = current.replace('component.mjs', 'component.html');
    const response = await fetch(templatePath);
    const template = window.document.createElement('template');
    template.innerHTML = await response.text();
    return template;
  }