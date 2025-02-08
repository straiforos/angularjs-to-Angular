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
1. Install all dependencies with a single command:
```bash
npm run install:all
```

2. Run the application in development mode:
```bash
npm run dev    # Runs both legacy and Angular in watch mode concurrently
```

Or for production mode:
```bash
npm start      # Builds legacy app then starts Angular
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
The project provides several npm scripts at the root level:

- `npm run install:all` - Installs dependencies for both applications
- `npm run dev` - Starts both applications in development mode with hot reload
- `npm start` - Builds legacy app and starts Angular for production
- `npm run build` - Builds both applications for production

When running in development mode (`npm run dev`):
- Legacy (AngularJS) app will rebuild automatically on changes
- Angular app will serve from `http://localhost:4200` with live reload
- Legacy app builds to `src/legacy/dist/legacy-bundle.js`

## Resources
- [Official Angular Upgrade Guide](https://angular.io/guide/upgrade)
- [AngularJS to Angular Migration Workshop](https://angular.io/guide/upgrade-performance)
- [Webpack Documentation](https://webpack.js.org/)
