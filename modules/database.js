'use strict';

class Database{
  constructor(){
    this.mongoose = require('mongoose');
    this.mongoose.Promise = global.Promise;
  };

  connect(url, app){
    this.url = url;
    this.app = app;
    this.mongoose.connect(this.url).then(() => {
      console.log("Connection success");
      this.app.listen(3000);
    }, (e) => {
      console.log(e.message);
      console.error('Connection failed');
    });
  };

}
module.exports = new Database();