# AngularJS to Angular Migration Example
This repository demonstrates how to run AngularJS and Angular applications side-by-side during migration. This approach follows the official Angular upgrade guide's recommendations for incremental migration.

## Project Structure
- `/src/legacy` - Contains the AngularJS (1.x) application
  - `/app` - Source files for the legacy application
  - `/dist` - Contains the webpack-bundled legacy application
- `/src/modern` - Contains the new Angular application with upgrade module
  - `/src/modern/app/src/app/upgrade` - Contains upgrade configuration and URL handling strategy

## Features
- Hybrid application setup using Angular's upgrade module
- Seamless routing between AngularJS and Angular routes
- Clean URL-based view switching
- Modern Angular standalone components
- Shared navigation for both frameworks
- Webpack bundling for legacy AngularJS code

## Getting Started
1. Install dependencies:
```bash
# Install dependencies for both applications
cd src/legacy && npm install
cd ../modern/app && npm install
```

2. Run the application:
```bash
cd src/modern/app
npm start    # Builds legacy app once then starts Angular
# or
npm run dev  # Runs both legacy and Angular in watch mode concurrently
```

## Implementation Details
The application uses:
- Angular's `UpgradeModule` for bootstrapping AngularJS
- Custom URL handling strategy to manage routing between frameworks
- CSS-based view switching for smooth transitions
- Path-based routing:
  - `/app/*` routes handled by AngularJS
  - `/v2/*` routes handled by Angular
- Webpack bundling for legacy code:
  - Single bundled file for all AngularJS code
  - Modern build tooling with Babel support
  - Development mode with watch capability

## Migration Strategy
This example follows the recommended upgrade path:
1. Bootstrap AngularJS within the Angular application
2. Implement clean routing separation between frameworks
3. Migrate components and services incrementally
4. Use path-based routing to clearly separate old and new features

## Development Workflow
1. Development with hot reload:
   ```bash
   cd src/modern
   npm run dev
   ```
   This will:
   - Start webpack in watch mode for the legacy (AngularJS) code
   - Run Angular dev server with live reload enabled
   - Changes to either codebase will trigger automatic rebuilds
   - Angular app will serve from `http://localhost:4200`
   - Legacy app will rebuild to `src/legacy/dist/legacy-bundle.js`

2. Production build:
   ```bash
   cd src/modern
   npm start
   ```
   This will:
   - Build the legacy app for production using webpack
   - Start the Angular development server

## Resources
- [Official Angular Upgrade Guide](https://angular.io/guide/upgrade)
- [AngularJS to Angular Migration Workshop](https://angular.io/guide/upgrade-performance)
- [Webpack Documentation](https://webpack.js.org/)
