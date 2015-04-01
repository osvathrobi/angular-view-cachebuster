angular.module("angularViewCachebuster", [])
    .provider('AngularViewCachebuster', function($httpProvider) {
        var debug = true;

        var interceptor = function($templateCache) {

            return {
                'request': function(request) {
                    if (request.method === 'GET' && (request.url.indexOf('.html') !== -1) && $templateCache.get(request.url) === undefined) {
                        if (debug) {
                            console.log('intercepting..', request);
                        }

                        request.url = request.url + '?time=' + new Date().getTime();
                    }
                    return request;
                }
            }
        }

        $httpProvider.interceptors.push(interceptor);


        this.$get = [

            function() {
                return new AngularViewCachebuster();
            }
        ];

    });