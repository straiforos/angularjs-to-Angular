import { UrlHandlingStrategy } from '@angular/router';

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
  shouldProcessUrl(url: any): boolean {
    console.log('shouldProcessUrl', url.toString());
    // Angular handles /v2/* routes and root route, AngularJS handles all other routes
    return url.toString().startsWith('/v2') || url.toString() === '/';
  }

  /**
   * Extracts the URL that should be processed by the Angular router.
   * @param url - The URL tree object to process
   * @returns The URL to be processed
   */
  extract(url: any): any {
    console.log('extract', url.toString());
    return url;
  }

  /**
   * Merges the Angular route with the full application URL.
   * @param newUrlPart - The new URL segment from Angular routing
   * @param wholeUrl - The complete current URL
   * @returns The URL that should be shown in the browser
   */
  merge(newUrlPart: any, wholeUrl: any): any {
    console.log('merge', newUrlPart.toString(), wholeUrl.toString());
    return newUrlPart;
  }
} 