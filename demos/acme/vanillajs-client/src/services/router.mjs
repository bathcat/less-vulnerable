import { zip } from '../tools.mjs';

export const _getSegments = urlLike => urlLike.split('/');

export const _pathWildcardPrefix = ':';

export const _isPathWildcard = pathSegment =>
  pathSegment.startsWith(_pathWildcardPrefix);

export function _matchRoute(url, route) {
  const urlSegments = _getSegments(url);
  const pathSegments = _getSegments(route.path);
  if (urlSegments.length !== pathSegments.length) {
    return false;
  }
  const routeData = {};
  for (let [pathSegment, urlSegment] of zip(pathSegments, urlSegments)) {
    if (pathSegment === urlSegment) {
      continue;
    }
    if (_isPathWildcard(pathSegment)) {
      routeData[pathSegment.slice(1)] = urlSegment;
      continue;
    }
    return false;
  }
  return { ...route, routeData };
}

export class Router {
  //#routes=[]; TODO: Make routes private.
  constructor({ routes }) {
    this.routes = routes;
  }

  navigateTo(uri) {
    const route = this.getMatchingRoute(uri);
    const template = route.getTemplate(route.routeData);
    history.pushState({}, '', uri);
    this.load(template);
    return false;
  }

  startWith(path) {
    const route = this.getMatchingRoute(path);
    const template = route.getTemplate(route.routeData);
    this.load(template);
    return false;
  }

  load(template) {
    //TODO: Inject this stuff into the constructor.
    const rootElement = document.querySelector('avc-root');

    const routerOutletElement =
      rootElement.shadowRoot.getElementById('routerOutlet');

    routerOutletElement.innerHTML = template;
    return false;
  }

  getMatchingRoute(url) {
    if (typeof url !== 'string') {
      throw new Error('Bad argument.');
    }
    for (let candidate of this.routes) {
      const match = _matchRoute(url, candidate);
      if (!!match) {
        return match;
      }
    }
    this.routes.find(r => r.path === 404);
  }
}
