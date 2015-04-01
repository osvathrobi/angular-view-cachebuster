# angular-view-cachebuster
On-deployment cache buster for Angular projects

Define a version number for your app. After deployment the http interceptor will bust the cache for your views by appending the version number to the request. 

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

Set the version string (default: 0.0.0)
``` javascript
AngularViewCachebusterProvider.setVersion('0.0.1b');
```

Set noCache. This will append the timestamp to each request (default: false)
``` javascript
AngularViewCachebusterProvider.setNoCache();
```