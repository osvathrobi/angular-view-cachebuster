# angular-view-cachebuster
On-deployment cache buster for Angular projects

Define a version number for your app. After deployment the http interceptor will bust the cache for your views by appending the version number to the request. Uses localstorage to match detect if cache busting is needed to increase performance.
