import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.testnativescriptspm',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  ios: {
    SPMPackages: [
      {
        name: 'IMGLYEngine',
        libs: ['IMGLYEngine'],
        repositoryURL: 'https://github.com/imgly/IMGLYEngine-swift.git',
        version: '1.36.1',
      },
    ]
  }
} as NativeScriptConfig;