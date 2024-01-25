# README


# REACT ON RAILS WEBSITE


#### Description:
a simple web forum made with react on rails with Postgre as the database


## list of questions in website
Developed and tested on macOS sonoma, login for cookies works on chrome but not safari  
How to set up  
### step 1  
set up postgres according [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-ruby-on-rails-application-on-macos)  
and set port to 5432
or use the following to downgrade to a postgre version that has a port at 5432
brew uninstall postgresql 
brew install postgresql@13
brew services start postgresql@13 
brew link postgresql@13 --force
### step 2  
open the terminal in the directory of the project and run    
sudo gem install bundler:2.4.10
### step 3  
thereafter install ruby 3.2.2 by following [this tutorial](https://www.theodinproject.com/lessons/ruby-installing-ruby)
and for the new ruby version tombe used globally, run:
echo 'export PATH="$HOME/.rbenv/bin: SPATH"' >> ~/.zshrc 
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
### step 5
install project dependencies:
bundle install  
yarn add esbuild
### step 6
configure database:
rake db:create db:migrate  

### step 8
seed website with some data
rails db:seed
### step 7
run bin/dev, the website should be running on http://127.0.0.1:3000  

