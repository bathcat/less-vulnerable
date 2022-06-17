export const styles = `
<style>
  @import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
  @import 'https://bulma.io/vendor/fontawesome-free-5.15.2-web/css/all.min.css';
</style>
`;


export async function fetchTemplate(current) {
  const templatePath = current.replace('component.mjs', 'component.html');
  const response = await fetch(templatePath);

  const template = window.document.createElement('template');
  template.innerHTML = styles + (await response.text());

  return template;
}

export class TemplateService{
  #cache=new Map();

  async getComponentTemplate(componentUri){
    if(!componentUri || typeof(componentUri) !== 'string'){
      throw new Error('Bad argument.')
    }
    if(!this.#cache.has(componentUri)){
      this.#cache[componentUri] = await fetchTemplate(componentUri);
    }
    return this.#cache[componentUri];
  }


}



