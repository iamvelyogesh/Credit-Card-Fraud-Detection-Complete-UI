/**
 * Created by Jason Wong on 4/9/2017.
 */

(function (angular) {
    "use strict";

    /**
     * This is the main app module. This will hold all data for the app
     * and all business logic. This will integrate all existing components.
     */
    angular.module('app', [
        'ngRoute',
        'ui.bootstrap',
        'app.util',
        'app.templates',
        'app.api'
    ]);
})(angular);;/**
 * Created by Jason Wong on 4/9/2017.
 */
(function(angular) {
    "use strict";

    /**
     * This configures the application.
     * Routes - Routing using hashbangs
     * Localization - Settings for localization service
     */
    angular.module("app")
        .config(["$httpProvider", "$locationProvider", "$localizationProvider", "$routeProvider",
            function($httpProvider, $locationProvider, $localizationProvider, $routeProvider) {

                /**
                 * CONFIGURATION FOR LOCALIZATION
                 */
                $localizationProvider.config({
                    defaultLocale: "english", //this is the default selected locale
                    localesFolderPath: "assets/locales", //This is where the locales files are stored as .json files
                    supportedLocales: ["english", "tagalog"], //This is the array of supported locales
                    cacheLocally: true, //cache everything to localstorage
                    localCacheExpiration: 20000 //Expire every 20 seconds (for now)
                });

                /**
                 * CONFIGURATION FOR ROUTES
                 */
                $routeProvider.when("/", {
                    templateUrl: "./html/app/app.html",
                    controller: "appController"
                }).otherwise({ //default to login
                    redirectTo: "/"
                });
            }
        ]);
})(angular);
;/**
 * Created by Jason Wong on 4/9/2017.
 */
(function(angular) {
    "use strict";

    /**
     * This configures the rules for the categorizing service.
     */
    angular.module("app")
        .config(["$categoryProvider",
            function($categoryProvider) {

                /**
                 * Each rule is in the format: <priority>, <rule name>, <accept function>, <cost function>
                 */

                $categoryProvider.configRule(1,"reject",function(parcel){
                    return parcel.weight > 50;
                },function(parcel){
                    return null;
                });

                $categoryProvider.configRule(2,"heavy",function(parcel){
                    return parcel.weight > 10;
                },function(parcel){
                    return 15 * parcel.weight;
                });

                $categoryProvider.configRule(3,"small",function(parcel){
                    return parcel.getVolume() < 1500;
                },function(parcel){
                    return 0.05 * parcel.getVolume();
                });

                $categoryProvider.configRule(3,"medium",function(parcel){
                    return parcel.getVolume() < 2500;
                },function(parcel){
                    return 0.04 * parcel.getVolume();
                });

                $categoryProvider.configRule(5,"large",function(parcel){
                    return true; //accept everything
                },function(parcel){
                    return 0.03 * parcel.getVolume();
                });
            }
        ]);
})(angular);
;/**
 * Created by Jason Wong on 4/9/2017.
 */
(function(angular) {
    "use strict";

    /**
     * The main controller for the default app route
     */
    angular.module("app")
        .controller("appController", ["$scope","Parcel","Profile","$category","creditScoreService","$timeout",
            function($scope, Parcel, Profile, $category, creditScoreService,$timeout) {
                $scope.showForms = true;
                $scope.showResults = false;
                $scope.ratingCount = 0;
                $scope.approvalDetails;

                //default parcel value
                $scope.parcel = new Parcel(0,0,0,0);

                $scope.profile = new Profile("","","",0,"",0,"");

                //generates {cost: <number>, category: <name>}
                $scope.summary = $category.categorize($scope.parcel);

                //Executes whenever there are changes to the parcel values
                $scope.onParcelValueChange = function(){
                    $scope.summary = $category.categorize($scope.parcel);
                };


                $scope.submitDetails = function(profile){
                    //TODO Submit to API details
                    // creditScoreService.getCreditSummary(profile);

                    creditScoreService.getCreditSummary(profile)
                        .then(function(response) {
                          console.log(response);
                            $scope.loanApproval = response.data.approval;
                            $scope.creditScore = response.data.creditScore;
                            $scope.creditRating = response.data.creditRating;
                            $scope.approvalDetails = response;
                            $scope.showForms = false;
                            $scope.showResults = true;
                        }, function(response) {
                            $scope.showForms = false;
                            $scope.showResults = true;
                    });
                    $timeout(function(){
                        $scope.count();
                    },500);
                    
                }

                $scope.resetForm = function(person){
                    $scope.profile = ("","","",0,"",0,"");
                    $scope.loanApproval = null;
                    $scope.showForms = true;
                    $scope.showResults = false;
                }

                $scope.getPanelClass = function(){
                    if($scope.loanApproval == 'DENIED'){
                        return 'panel-danger'
                    }else if($scope.loanApproval == 'ACCEPTED'){
                        return 'panel-success';
                    }else{
                        return 'panel-primary';
                    }
                };

                $scope.getButtonClass = function(){
                    if($scope.loanApproval == 'DENIED'){
                        return 'btn-danger'
                    }else if($scope.loanApproval == 'ACCEPTED'){
                        return 'btn-success';
                    }else{
                        return 'btn-primary';
                    }
                };

                $scope.isExpanded = false;
                $scope.expandedPanel = function(){
                    if($scope.isExpanded){
                        return 'panel-expanded';
                    }else{
                        return 'panel-unexpanded';
                    }
                }

                $scope.expandPanel = function(){
                    if($scope.isExpanded){
                       $scope.isExpanded = false; 
                    }else{
                        $scope.isExpanded = true;
                    }
                }

                $scope.count = function () {
                    $('.count').each(function () {
                        $(this).prop('Counter',0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                                $scope.ratingCount = now;
                            }
                        });
                    });
                }

                $scope.displayGauge = function(rating){
                    if($scope.creditScore <= rating){
                         return false;
                    }else{
                        return true;
                    }
                }
            }
        ]);
})(angular);
;/**
 * Created by Jason Wong on 4/9/2017.
 */
(function (angular) {
    "use strict";

    /**
     * Controller for footer features
     */
    angular.module("app")
        .controller("footerController", [
            function () {

            }
        ]);
})(angular);;/**
 * Created by Jason Wong on 4/9/2017.
 */
(function (angular) {
    "use strict";

    /**
     * Controller for header features
     */
    angular.module("app")
        .controller("headerController", ["$scope","$localization",
            function ($scope,$localization) {
                //get the supported locales based on config
                var locales = $localization.getSupportedLocales();

                //retrieve the next available language in the cycle
                $scope.nextLanguage = function(){
                    var index = locales.indexOf($scope.getActiveLanguage())
                    return locales[(index+1) % locales.length];
                };

                //switch to the next language, sets the localization service and updates labels
                $scope.switchLanguage = function(){
                    $localization.setLocale($scope.nextLanguage());
                };

                //retrieves the currently selected language
                $scope.getActiveLanguage = function(){
                    return $localization.getLocale();
                };
            }
        ]);
})(angular);;/**
 * Created by Jason Wong on 4/9/2017.
 */
(function (angular) {
    "use strict";

    /**
     * Parcel is a class with 4 values. It has a getter function for volume.
     */
    angular.module("app")
        .factory("Parcel", [
            function () {
                var Parcel = function(weight,height,width,depth){
                    var me = this;

                    this.weight = weight;
                    this.height = height;
                    this.width = width;
                    this.depth = depth;

                    //Getter function for volume
                    this.getVolume = function(){
                        return me.height * me.width * me.depth;
                    };
                };

                return Parcel;
            }
        ]);
})(angular);;(function (angular) {
    "use strict";

    angular.module("app")
        .factory("Profile", [
            function () {
                var Profile = function(firstName, lastName, address, age, gender, income, homeOwnership, loanAmount, type){
                    var me = this;

                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.address = address;
                    this.age = age;
                    this.gender = gender;
                    this.income = income;
                    this.homeOwnership = homeOwnership;
                    this.loanAmount = loanAmount;
                    this.type = type;
                };

                return Profile;
            }
        ]);
})(angular);;/**
 * Created by Jason Wong on 4/9/2017.
 */
(function (angular) {
    "use strict";

    /**
     * This filter uses localize to map the label to its correct
     * localized text
     */
    angular.module("app")
        .filter("localizationFilter", ["$localization",
            function ($localization) {
                return function (input) {
                    return $localization.localize(input);
                }
            }
        ]);
})(angular);;/**
 * Created by Jason Wong on 4/9/2017.
 */
(function (angular) {
    "use strict";

    /**
     * Localization is a convenient cache of mappings of labels with different languages.
     */
    angular.module("app")
        .provider("$category", [
            function () {
                var config = {
                    rules: []
                };

                this.$get = [
                    function () {
                        var $category = function(){};
                        /**
                         * Static function of the categorizing service that
                         */
                        $category.categorize = function(parcel){
                            for(var i=0; i<config.rules.length; i++){ //look through the rules
                                if(config.rules[i].acceptFn(parcel)){ //if the rules accept the parcel object
                                    return { //generate a summary
                                        cost: config.rules[i].costFn(parcel),
                                        category: config.rules[i].rule
                                    }
                                }
                            }
                        };
                        return $category;
                    }
                ];

                /**
                 * Adds a rule to the configuration. This function assures that the list of rules are always in order
                 * based on their priorities.
                 * @param priority
                 * @param rule
                 * @param acceptFn
                 * @param costFn
                 */
                this.configRule = function(priority,rule,acceptFn,costFn){
                    config.rules.push({
                        priority: priority,
                        rule: rule,
                        acceptFn: acceptFn,
                        costFn: costFn
                    });
                    config.rules.sort(function(a,b){
                        return a.priority - b.priority;
                    })
                };

                /**
                 * Configure directly the config variable for this provider
                 * @param k
                 * @param v
                 * @returns {*}
                 */
                this.config = function (k, v) {
                    if (k && v && typeof k == "string") {
                        config[k] = v;
                    } else if (typeof k == "string" && !v) {
                        return config[k];
                    } else if (typeof k == "object" && !v) {
                        config = angular.extend(config, k);
                    } else {
                        throw Error("Unsupported");
                    }
                };
            }
        ])
})(angular);;/**
 * Created by Jason Wong on 4/9/2017.
 */
(function (angular) {
    "use strict";

    /**
     * Set rootScope functions and listeners on bootstrap
     */
    angular.module("app")
        .run(["$rootScope","$localization",
            function ($rootScope,$localization) {
                /**
                 * Expose a label function for localized labels
                 * @param name
                 * @returns {*}
                 */
                $rootScope.label = function(name){
                    return $localization.localize(name);
                };

                var params = {}; //this is the params container

                /**
                 * Params can be accessed in the template through the rootScope
                 * @param name
                 * @returns {*}
                 */
                $rootScope.param = function(name){
                    return params[name];
                };

                /**
                 * This is the event listener that gets invoked when one of the routes have changed
                 * in such event, reassign the new value of the params object
                 */
                $rootScope.$on('$routeChangeStart', function(evt,current,previous) {
                    params=current.params;
                });
            }
        ]);
})(angular);;/**
 * Created by Jason Wong on 4/9/2017.
 */
(function (angular) {
    "use strict";

    /**
     * This utility allows fetching of json files
     */
    angular.module("app")
        .service("creditScoreService", ["$http","$location","objectService","$api",
            function ($http,$location,objectService,$api) {
                var me = this;

                /**
                 * Get credit summary for a profile object
                 * @param profile {
                 *     age,
                 *     homeOwnership,
                 *     income
                 * }
                 */
                this.getCreditSummary = function(profile){
                    return $api.apiPromise({
                        method: 'POST',
                        url: '/creditscore',
                        data: profile
                    });
                };
            }
        ]);
})(angular);