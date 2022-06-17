export class Router {
  constructor(routes) {
    this.routes = routes;
  }

  navigateTo(path) {
    const route = this.getRoute(path);
    history.pushState({}, '', path);
    this.load(route.template);
    return false;
  }

  startWith(path){
    const route = this.getRoute(path);
    this.load(route.template);
    return false;
  }

  load(template) {
    const rootElement = document.querySelector('avc-root');

    const routerOutletElement =
      rootElement.shadowRoot.getElementById('routerOutlet');

    routerOutletElement.innerHTML = template;
    return false;
  }

  getRoute(url) {
    const urlSegments = url.split('/').slice(1);

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
          continue;
        }

        if (routePathSegments[i] !== urlSegments[i]) {
          return false;
        }
      }
      return true;
    });

    if (!matched) {
      return this.routes.find(r => r.path === 404);
    }
    return matched;
  }
}
