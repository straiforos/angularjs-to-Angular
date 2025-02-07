# AngularJS to Angular Migration Example
This repository demonstrates how to run AngularJS and Angular applications side-by-side during migration. This approach follows the official Angular upgrade guide's recommendations for incremental migration.

## Project Structure
- `/src/legacy` - Contains the AngularJS (1.x) application
- `/src/modern` - Contains the new Angular application with upgrade module
  - `/src/modern/app/src/app/upgrade` - Contains upgrade configuration and URL handling strategy

## Features
- Hybrid application setup using Angular's upgrade module
- Seamless routing between AngularJS and Angular routes
- Clean URL-based view switching
- Modern Angular standalone components
- Shared navigation for both frameworks

## Getting Started
1. Install dependencies:
```bash
npm install
```

2. Run the application:
```bash
npm start
```

## Implementation Details
The application uses:
- Angular's `UpgradeModule` for bootstrapping AngularJS
- Custom URL handling strategy to manage routing between frameworks
- CSS-based view switching for smooth transitions
- Path-based routing:
  - `/app/*` routes handled by AngularJS
  - `/v2/*` routes handled by Angular

## Migration Strategy
This example follows the recommended upgrade path:
1. Bootstrap AngularJS within the Angular application
2. Implement clean routing separation between frameworks
3. Migrate components and services incrementally
4. Use path-based routing to clearly separate old and new features

## Resources
- [Official Angular Upgrade Guide](https://angular.io/guide/upgrade)
- [AngularJS to Angular Migration Workshop](https://angular.io/guide/upgrade-performance)
