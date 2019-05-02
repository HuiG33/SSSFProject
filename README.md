# SSSFProject
Carpool application

API Docs
Base url:
https://env-7549145.jelastic.metropolia.fi

User:
<br/>
`’/users/register – POST’` register user
<br/>
`’/users/login – POST’` login user
<br/>
Carpool:
<br/>
`’/carpools - GET’` get all carpools
<br/>
`’/carpools/start/:town – GET’` get carpools by start point
<br/>
`’/carpools/end/:town – GET’` get carpools by end point
<br/>
`’/carpools/my/:user – GET’` get users carpools
<br/>
`’/carpools/create - POST’` create carpool
<br/>
`'/carpool/:id/suggestion - POST'` create suggestion
<br/>
`'/carpool/:id/waypoint - POST'` create waypoint
<br/>
`'/carpool/:id/suggestion/:ids - POST'` delete suggestion
<br/>
`'/carpool/:id/waypoint/:idw - POST'` delete waypoint
<br/>









