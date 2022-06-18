import { ComponentBase } from '/infrastructure/component-base.mjs';

export class LatinTranslatorComponent extends ComponentBase {
  static Tag = 'avc-latin-translator';

  #translationService = undefined;

  constructor(
    template = LatinTranslatorComponent.Template,
    translationService = LatinTranslatorComponent.Services.translationService
  ) {
    super(template);
    this.#translationService = translationService;

    this.registerClick('#translate', () => this.translate());

    // TODO: Put this back in.
    // let params = new URLSearchParams(document.location.search);
    // let english = params.get('english');
    // if (english) {
    //   this.englishControl.value = english;
    //   this.translate();
    // }
  }

  #english = this.getInput('#english');
  #latin = this.getInput('#latin');

  translate() {
    const original = this.#english.get();
    const translated = this.#translationService.translate(original);
    this.#latin.set(translated);
  }
}

export const build = builder =>
  builder.buildComponent(LatinTranslatorComponent, import.meta.url);
