function config ($logProvider, localStorageServiceProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  localStorageServiceProvider
    .setPrefix('omnicalc');
}

export default config;
