# SSSFProject
Carpool application

API Docs
Base url:
https://env-7549145.jelastic.metropolia.fi

User:
’/users/register – POST’ register user
’/users/login – POST’ login user

Carpool:
’/carpools - GET’ get all carpools
’/carpools/start/:town – GET’ get carpools by start point
’/carpools/end/:town – GET’ get carpools by end point
’/carpools/my/:user – GET’ get users carpools
’/carpools/create - POST’ create carpool
'/carpool/:id/suggestion - POST' create suggestion
'/carpool/:id/waypoint - POST' create waypoint
'/carpool/:id/suggestion/:ids - POST' delete suggestion
'/carpool/:id/waypoint/:idw - POST' delete waypoint
