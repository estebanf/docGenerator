var Promise = require('promise');
var faker = require('faker');
var fs = require('fs');
var path = require('path');
const word2pdf = require('word2pdf');

module.exports = {
  convert: function(data,output){
    return new Promise(function(resolve,reject){
      if(faker.random.boolean()){
        try{
          var input_file = data.file.output;
          var output_file = path.resolve(output,data.file.fileName + '.pdf');
          word2pdf(input_file).then(function(pdf){
            fs.writeFileSync(output_file, pdf);
            fs.unlinkSync(input_file);
            data.file.output = output_file;
            resolve(data);
          })
        }
        catch(error){
          reject(error);
        }
      }
      else{
        resolve(data);
      }
    });
  }
}
