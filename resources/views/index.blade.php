<!DOCTYPE html>
<html>
<head>
    <base href="/">
    <title>iGeoTracker - Welcome!</title>
    <link rel="stylesheet" type="text/css" href="<% elixir('css/app.css') %>">
</head>
<body ng-app="iGeoTracker">

    <div class="container">
        <div ng-view></div>
    </div>

    <script type="text/javascript" src="<% elixir('js/vendor/angular.js') %>"></script>
    <script type="text/javascript" src="<% elixir('js/app.js') %>"></script>
</body>
</html>