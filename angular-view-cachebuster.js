angular.module("angularViewCachebuster", [])
    .provider('AngularViewCachebuster', function($httpProvider) {
    	var noCache = false;
    	var version = '0.0.0';

        var debug = false;

        var interceptor = function($templateCache) {        	
            return {
                'request': function(request) {
                    if (request.method === 'GET' && (request.url.indexOf('.html') !== -1) && $templateCache.get(request.url) === undefined) {
                        if (debug) {
                            console.log('intercepting..', request);
                        }

                        if(noCache) {
                        	request.url = request.url + '?time=' + new Date().getTime();
                        } else {
                        	request.url = request.url + '?v=' + version;
                        }
                    }
                    return request;
                }
            }
        };

        $httpProvider.interceptors.push(interceptor);

        // use timestamp for each request
        this.setNoCache = function() {
        	noCache = true;
        };

        // set version
        this.setVersion = function(v) {
        	version = v;
        };

        this.$get = [

            function() {
                return new AngularViewCachebuster();
            }
        ];

    });