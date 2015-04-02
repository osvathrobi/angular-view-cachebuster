# angular-view-cachebuster
On-deployment cache buster for Angular projects.

Http interceptor module for AngularJS to provide deployment based cache busting for your views by appending the version number to the request. 

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
``` javascript
.config(function(AngularViewCachebusterProvider){});
```

## Documentation

Set the version string. This will be appended to each request. (default: 0.0.0)
``` javascript
AngularViewCachebusterProvider.setVersion('0.0.1b');
```

Set noCache. This will append the timestamp to each request (default: false)
``` javascript
AngularViewCachebusterProvider.setNoCache();
```