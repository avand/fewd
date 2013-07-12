require "sinatra"

get("/")        { erb :index }
get("/about")   { erb :about }
get("/contact") { erb :contact }
get("/signup")  { erb :signup }
