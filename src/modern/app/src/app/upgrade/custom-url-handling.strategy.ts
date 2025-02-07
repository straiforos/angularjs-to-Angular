import { UrlHandlingStrategy, UrlTree } from '@angular/router';

export class CustomUrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree): boolean {
    // Process URLs that start with /v2 in the Angular router
    return url.toString().startsWith('/v2');
  }

  extract(url: UrlTree): UrlTree {
    return url;
  }

  merge(newUrlPart: UrlTree, wholeUrl: UrlTree): UrlTree {
    return newUrlPart;
  }
} 