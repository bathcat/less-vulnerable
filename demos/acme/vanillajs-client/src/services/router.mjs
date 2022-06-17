export class Router {
  constructor(routes) {
    this.routes = routes;
  }

  navigateTo(path) {
    const template = this.getTemplate(path);
    history.pushState({}, '', path);
    this.load(template);
    return false;
  }

  startWith(path) {
    const template = this.getTemplate(path);
    this.load(template);
    return false;
  }

  load(template) {
    const rootElement = document.querySelector('avc-root');

    const routerOutletElement =
      rootElement.shadowRoot.getElementById('routerOutlet');

    routerOutletElement.innerHTML = template;
    return false;
  }

  getTemplate(url) {
    const urlSegments = url.split('/').slice(1);
    const routeData = {};

    const matched = this.routes.find(route => {
      if (route.path === 404) {
        return false;
      }

      const routePathSegments = route.path.split('/').slice(1);

      if (routePathSegments.length !== urlSegments.length) {
        return false;
      }

      for (let i = 0; i < urlSegments.length; i++) {
        if (routePathSegments[i].startsWith(':')) {
          routeData[routePathSegments[i].replace(':', '')] = urlSegments[i];
          continue;
        }

        if (routePathSegments[i] !== urlSegments[i]) {
          return false;
        }
      }
      return true;
    }) ?? this.routes.find(r => r.path === 404);

    return matched.getTemplate(routeData);
  }
}
