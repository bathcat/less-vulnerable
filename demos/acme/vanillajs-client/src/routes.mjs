export const routes = [
  {
    path: '/',
    template: '<avc-home></avc-home>',
  },
  {
    path: '/sign-in',
    template: '<avc-sign-in></avc-sign-in>',
  },
  {
    path: '/latin-translator',
    template: '<avc-latin-translator></avc-latin-translator>',
  },
  {
    path: '/register',
    template: '<avc-register></avc-register>',
  },
  {
    path: '/snakes',
    template: '<avc-snake-list></avc-snake-list>',
  },
  {
    path: '/snakes/:id',
    template: '<avc-snake-details></avc-snake-details>',
  },
  {
    path: 404,
    template: '<h1>Not found</h1>',
  },
];
