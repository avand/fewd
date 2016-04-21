# ACME Corp - Multiple Pages

This version of ACME Corp uses Sinatra to provide layout functionality.

## Prerequisites:

* Ruby
* Sinatra
* Forms (see contact.html)

## Instructor Notes:

To build this example from scratch:

* Copy the "multiple_files" project
* Create a Gemfile with "source :rubygems" and add Sinatra
* `bundle install`
* Create server.rb
* Add "route" `get("/") { render :index }`
* Move index.html to views/index.erb
* Boot up the server and confirm it works (`ruby server.rb`)
* Move stylesheets and images to public
* Boot up server and confirm styles and images load correctly
* Move remaining views into views folder
* Add other routes to server.rb
