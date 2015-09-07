function config ($logProvider, toastr, localStorageServiceProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastr.options.timeOut = 3000;
  toastr.options.positionClass = 'toast-top-right';
  toastr.options.preventDuplicates = true;
  toastr.options.progressBar = true;

  localStorageServiceProvider
    .setPrefix('omnicalc');
}

export default config;
