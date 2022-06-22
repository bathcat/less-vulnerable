import { ComponentBase } from '/infrastructure/component-base.mjs';

const sanitize = text => {
  const element = document.createElement('div');
  element.innerText = text;
  return element.innerHTML;
};

export class LatinTranslatorComponent extends ComponentBase {
  static Tag = 'avc-latin-translator';

  #translationService = undefined;

  constructor(
    template = LatinTranslatorComponent.Template,
    translationService = LatinTranslatorComponent.Services.translationService
  ) {
    super(template);
    this.#translationService = translationService;

    this.registerClick('#translate', () => this.translate_scary());

    let params = new URLSearchParams(document.location.search);
    let english = params.get('english');
    if (english) {
      this.#english.set(english);
      this.translate_scary();
    }
  }

  #english = this.getInput('#english');

  translate_scary() {
    const original = this.#english.get();
    const translated = this.#translationService.translate(original);
    this.querySelector('#latin').innerHTML = translated;
  }

  translate_sanitized() {
    const original = this.#english.get();
    const translated = this.#translationService.translate(original);
    this.querySelector('#latin').innerHTML = sanitize(translated);
  }

  // Safe because it uses textareas
  // #latin = this.getInput('#latin');
  // translate_safe() {
  //   const original = this.#english.get();
  //   const translated = this.#translationService.translate(original);
  //   this.#latin.set(translated);
  // }
}

export const build = builder =>
  builder.buildComponent(LatinTranslatorComponent, import.meta.url);
