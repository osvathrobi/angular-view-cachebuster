# angular-view-cachebuster
On-deployment cache buster for Angular projects

Define a version number for your app. After deployment the http interceptor will bust the cache for your views by appending the version number to the request. Uses localstorage to match detect if cache busting is needed to increase performance.

## Usage

Include the required library 
```html
<script src="angular-view-cachebuster.js"></script>
```

Declare a dependency on the `angularViewCachebuster` module
``` javascript
var app = angular.module('myApp', ['angularViewCachebuster']);
```

Optionally declare `AngularViewCachebusterProvider` for additional settings at config phase
```
.config(function(AngularViewCachebusterProvider){});
```
