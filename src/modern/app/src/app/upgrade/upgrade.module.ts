import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  imports: [
    UpgradeModule
  ]
})
export class LegacyUpgradeModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    // Check if AngularJS is loaded
    if (!(window as any).angular) {
      throw new Error('AngularJS v1.x is not loaded!');
    }
    
    // Make sure the module exists
    if (!(window as any).angular.module('legacyApp')) {
      throw new Error('legacyApp module is not loaded!');
    }
  }
} 