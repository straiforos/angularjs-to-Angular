import { UrlHandlingStrategy, UrlTree } from '@angular/router';

/**
 * Custom URL handling strategy to manage routing between Angular and AngularJS applications.
 * This strategy determines which URLs should be handled by Angular vs AngularJS router.
 */
export class CustomUrlHandlingStrategy implements UrlHandlingStrategy {
  /**
   * Determines if a URL should be processed by the Angular router.
   * @param url - The URL tree object to evaluate
   * @returns boolean - True if URL should be handled by Angular, false if it should be handled by AngularJS
   */
  shouldProcessUrl(url: UrlTree): boolean {
    const urlStr = url.toString();
    // Process modern app routes (/v2/*), let AngularJS handle everything else
    const isModernRoute = urlStr.startsWith('/v2');
    return isModernRoute;
  }

  /**
   * Extracts the URL that should be processed by the Angular router.
   * @param url - The URL tree object to process
   * @returns The URL to be processed
   */
  extract(url: UrlTree): UrlTree {
    return url;
  }

  /**
   * Merges the Angular route with the full application URL.
   * @param newUrlPart - The new URL segment from Angular routing
   * @param wholeUrl - The complete current URL
   * @returns The URL that should be shown in the browser
   */
  merge(newUrlPart: UrlTree, wholeUrl: UrlTree): UrlTree {
    return newUrlPart;
  }
} 