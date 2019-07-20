var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');
var fs = require('fs');
var path = require('path');
var Promise = require('promise');


module.exports = {
  render: function(template,data,output){
    return new Promise(function(resolve,reject){
      var content = fs.readFileSync(path.resolve(__dirname,'templates',template + '.docx'));
      var zip = new JSZip(content);
      var doc = new Docxtemplater();
      doc.loadZip(zip);
      doc.setData(data.content);
      try {
        doc.render();
        var buf = doc.getZip().generate({
          type: "nodebuffer",
          compression: "DEFLATE"
        });

        var outputfile = path.resolve(output,data.file.fileName + '.docx')
        fs.writeFileSync(outputfile, buf);
        data.file.output = outputfile;
        resolve(data);
      }
      catch (error){
        var e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
        }
        reject(e);
      }
    });
  }
}
