# TDD Auth

This example goes over basic user authentication with
BCrypt via TDD. It also uses Mocha to assert memoziation
of the current_user method in ApplicationController.

## Recreate with these steps

1.  Generate a Rails app
2.  Generate a model User with:
    rails g scaffold user name:string email:string password_hash:string
3.  Test "setting the password sets the password_hash"
4.  Test "getting the password gets password from the password_hash"
5.  Create SessionsControllerTest
6.  Test "GET to new renders new session form"
7.  Test "POST to create redirects to / if email and password match"
8.  Test "POST to create renders new if email and password don't match"
9.  Test "POST to create saves user ID to session if email and passwords don't match"
10.  Fix password/password_hash mass assignment on User
11.  Test "password can be set via mass assignment"
12. Test "password_hash can not be set via mass assignment"
13. Create ApplicationControllerTest
14. Test "current_user returns user whose ID is in session"
15. Test "current_user returns nil if there is no user ID in session"
16. Test "current_user won't find the user twice unnecessarily"
17. Require mocha (Gemfile require false, bundle, require "mocha/setup")

## Links

http://guides.rubyonrails.org/testing.html
