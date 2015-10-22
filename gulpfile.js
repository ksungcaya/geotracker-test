var elixir = require('laravel-elixir');

elixir(function(mix) {

    mix.scripts([
       '../bower/angular/angular.js', 
       '../bower/angular-resource/angular-resource.js', 
       '../bower/angular-route/angular-route.js',
       '../bower/lodash/lodash.js',
       '../bower/angular-datepicker/dist/angular-datepicker.js',
       '../bower/isteven-angular-multiselect/isteven-multi-select.js'
    ], 'public/js/vendor/angular.js');

    mix.scripts([
      'app.js',
      'routes.js',
      'controllers/**/*.js',
      'services/**/*.js',
      'directives/**/*.js'
    ], 'public/js/app.js');

    mix.styles([
        '../bower/bootstrap-css-only/css/bootstrap.min.css',
        '../bower/angular-datepicker/dist/angular-datepicker.css',
        '../bower/isteven-angular-multiselect/isteven-multi-select.css',
        'main.css',
    ], 'public/css/app.css');

    mix.copy('resources/assets/bower/bootstrap-css-only/fonts', 'public/css/fonts');

    mix.version([
      'css/app.css',
      'js/vendor/angular.js',
      'js/app.js'
    ]);

    mix.copy('public/css/app.css.map', 'public/build/css/app.css.map');
    mix.copy('public/js/vendor/angular.js.map', 'public/build/js/vendor/angular.js.map');
    mix.copy('public/js/app.js.map', 'public/build/js/app.js.map');
});
