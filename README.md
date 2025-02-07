# AngularJS to Angular Migration Example
This repository demonstrates how to run AngularJS and Angular applications side-by-side during migration. This approach follows the official Angular upgrade guide's recommendations for incremental migration.

## Project Structure
- `/src/legacy` - Contains the AngularJS (1.x) application
- `/src/modern` - Contains the new Angular application
- `/src/hybrid` - Contains upgrade/downgrade modules and shared services

## Features
- Hybrid application setup
- Example of upgrading components
- Shared services between AngularJS and Angular
- Bootstrap configuration for both frameworks

## Getting Started
1. Install dependencies:
```bash
npm install
```

2. Run the application:
```bash
npm start
```

## Migration Strategy
This example follows the recommended upgrade path:
1. Run both frameworks side by side
2. Upgrade services and components incrementally
3. Use the `upgrade/static` module to communicate between frameworks
4. Gradually migrate components from bottom up

## Resources
- [Official Angular Upgrade Guide](https://angular.io/guide/upgrade)
- [AngularJS to Angular Migration Workshop](https://angular.io/guide/upgrade-performance)
