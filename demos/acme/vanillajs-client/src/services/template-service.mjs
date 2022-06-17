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
