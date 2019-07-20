var Promise = require('promise');
var Utimes = require('@ronomon/utimes');
var moment = require('moment');
var faker = require('faker');

module.exports = {
  stamp: function(data){
    return new Promise(function(resolve,reject){
      try{
        Utimes.utimes(data.file.output, data.file.btime, data.file.mtime, data.file.atime, function(){
          resolve(data)
        });
      }
      catch(error){
        reject(error);
      }
    })
  }
}
