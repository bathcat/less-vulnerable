export const styles = `
<style>
  @import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
  @import 'https://bulma.io/vendor/fontawesome-free-5.15.2-web/css/all.min.css';
</style>
`;

export function buildTemplate(contents) {
  const template = window.document.createElement('template');
  template.innerHTML = contents;
  return template;
}

export function buildComponentTemplate(contents) {
  return buildTemplate(styles + contents);
}

export async function fetchTemplate(current) {
  const templatePath = current.replace('component.mjs', 'component.html');
  //TODO: Inject this or something.
  const response = await fetch(templatePath);
  const contents = await response.text();

  return buildComponentTemplate(contents);
}

export class ElementBuilder {
  #services = {};
  #customElementRegistry = {};
  constructor(customElementRegistry, services) {
    this.#customElementRegistry = customElementRegistry;
    this.#services = services;
  }

  async buildComponent(component, uri, options = {}) {
    component.Template = await fetchTemplate(uri);
    return this.buildInlineComponent(component, options);
  }

  buildInlineComponent(component, options = {}) {
    component.Services = this.#services;
    this.#customElementRegistry.define(component.Tag, component, options);
    return component;
  }
}
