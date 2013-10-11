angular.module('sessionService', [])
    .factory('Session', function($location, $http, $q) {
        // Redirect to the given url (defaults to '/')
        function redirect(url) {
            url = url || '/';
            $location.path(url);
        }
        var service = {
            login: function(email, password) {
                
                // var user = {
                //     'username':username,
                //     'password':password
                // }    

                // return $http({
                //     method:'POST',
                //     url: '/api/login/sign_in',
                //     data: $.param(user),
                //     headers:{
                //         'Content-Type' : 'application/x-www-form-urlencoded'
                //     }
                // })

                return $http.post('/api/login/sign_in', {user: {email: email, password: password} })
                    .then(function(response) {
                        alert(response.data.user);
                        service.currentUser = response.data.user;
                        if (service.isAuthenticated()) {
                            //$location.path(response.data.redirect);
                            // $location.path('/record');
                            alert('you are loggedin, welcome!')
                        }
                    });

            },

            logout: function(redirectTo) {
                $http.post('/api/logout').then(function() {
                    service.currentUser = null;
                    redirect(redirectTo);
                });
            },

            register: function( email, password, confirm_password, handle, name ) {

                return $http.post('/api/login', {user: {handle: handle, email: email, name: name, password: password, confirm_password: confirm_password} })
                .then(function(response) {
                    service.currentUser = response.data;
                    if (service.isAuthenticated()) {
                        $location.path('/');
                        // alert('you are register, welcome!')
                    }
                });
            },
            requestCurrentUser: function() {

                if (service.isAuthenticated()) {
                    return $q.when(service.currentUser);
                } else {
                    return $http.get('/api/current_user').then(function(response) {
                        service.currentUser = response.data.user;
                        return service.currentUser;
                    });
                }
            },

            currentUser: null,

            isAuthenticated: function(){
                return !!service.currentUser;
            }
        };
        return service;
    });