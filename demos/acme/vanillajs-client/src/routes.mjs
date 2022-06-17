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
    path: '/register',
    getTemplate: () => '<avc-register></avc-register>',
  },
  {
    path: '/snakes',
    getTemplate: () => '<avc-snake-list></avc-snake-list>',
  },
  {
    path: '/snakes/:id',
    getTemplate: ({ id }) =>
      `<avc-snake-details snakeID='${id}'></avc-snake-details>`,
  },
  {
    path: 404,
    getTemplate: () => '<h1>Not found</h1>',
  },
];
