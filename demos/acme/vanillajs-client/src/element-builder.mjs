export const styles = `
<style>
  @import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
  @import 'https://bulma.io/vendor/fontawesome-free-5.15.2-web/css/all.min.css';
</style>
`;

export function buildComponentTemplate(contents){
  const template = window.document.createElement('template');
  template.innerHTML = styles + contents;
  return template;
}

export async function fetchTemplate(current) {
  const templatePath = current.replace('component.mjs', 'component.html');
  const response = await fetch(templatePath);
  const contents = await response.text();

  return buildComponentTemplate(contents);
}


export class ElementBuilder{
  #services={};
  #customElementRegistry={};
  constructor(customElementRegistry, services){
    this.#customElementRegistry=customElementRegistry;
    this.#services=services;
  }

  async build(component, uri) {
    component.Template = await fetchTemplate(uri);
    component.Services = this.#services;
  
    this.#customElementRegistry.define(component.Tag, component);
    return component;
  };
  


};