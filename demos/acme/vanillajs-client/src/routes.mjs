export const routes = [
  {
    path: '/',
    getTemplate: () => '<avc-home></avc-home>',
  },
  {
    path: '/sign-in',
    getTemplate: () => '<avc-sign-in></avc-sign-in>',
  },
  {
    path: '/latin-translator',
    getTemplate: () => '<avc-latin-translator></avc-latin-translator>',
  },
  {
    path: '/snakes',
    getTemplate: () => '<avc-snake-list></avc-snake-list>',
  },
  {
    path: '/snakes/create',
    getTemplate: () => `<avc-snake-builder></avc-snake-builder>`,
  },
  {
    path: '/snakes/:id',
    getTemplate: ({ id }) =>
      `<avc-snake-editor snakeID='${id}'></avc-snake-editor>`,
  },
  {
    path: 404,
    getTemplate: () => '<h1>Not found</h1>',
  },
];
