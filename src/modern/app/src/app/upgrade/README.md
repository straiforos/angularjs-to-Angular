# Hybrid AngularJS/Angular Application Setup

This directory contains the configuration and modules needed to run AngularJS and Angular applications side by side. This hybrid approach allows for incremental migration from AngularJS to Angular.

## Architecture Overview

The hybrid setup uses Angular's `@angular/upgrade/static` module to:
- Bootstrap both frameworks simultaneously
- Handle routing between old and new components
- Share services between frameworks
- Enable component interoperability

### Key Components

- `upgrade.module.ts`: Main module that bootstraps AngularJS within Angular
- Custom URL handling strategy for routing coordination
- Shared navigation system in the Angular shell

## Quick Start

1. Install node modules.
```bash
npm install
```

2. Configure routing in both applications:

AngularJS routes should use hashbang prefix:
```javascript
$locationProvider.hashPrefix('');
```

Angular routes should be configured with hash navigation:
```typescript
provideRouter(routes, withHashNavigation())
```

4. Bootstrap the hybrid application:
```typescript
bootstrapApplication(AppComponent, appConfig)
  .then(ref => {
    const upgrade = ref.injector.get(UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['legacyApp']);
  });
```

## Route Structure

- Modern Angular routes: `/modern/*`
  - /modern/home
  - /modern/dashboard
  - /modern/settings

- Legacy AngularJS routes: `#!/*`
  - #!/
  - #!/about
  - #!/contact

## Best Practices

1. Keep clear separation between old and new code
2. Use the `modern` path prefix for all new Angular routes
3. Maintain AngularJS routes with hash-based navigation
4. Upgrade components from leaves to root
5. Share services through the upgrade module when needed

## Common Issues

1. **Double Bootstrap**: Ensure AngularJS app is not bootstrapped in its index.html
2. **Route Conflicts**: Use URL handling strategy to separate routing concerns
3. **Style Conflicts**: Namespace CSS classes to avoid collisions
4. **Service Sharing**: Use factory providers for bidirectional service sharing

## Resources

- [Official Angular Upgrade Guide](https://angular.io/guide/upgrade)
- [AngularJS to Angular Migration Workshop](https://angular.io/guide/upgrade-performance)
- [NgUpgrade in Depth](https://angular.io/guide/upgrade-performance#ngupgrade-in-depth) 