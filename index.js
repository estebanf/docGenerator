var argv = require('minimist')(process.argv.slice(2));
var renderer = require('./renderer');
var Promise = require('promise');
var timestamp = require('./timestamp');
var generator = require('./data_generator');
var fs = require('fs');
var path = require('path');
var pdf = require('./pdf_converter');
var faker = require('faker');

function execute(template,output){
    var fn = generator[template];
    return fn()
      .then(function(data){
        console.log("Got data for " + data.file.fileName)
        return renderer.render(template,data,output)
      })
      // .then(function(data){
      //   console.log("Considering conversion for " + data.file.output)
      //   return pdf.convert(data,output);
      // })
      .then(function(data){
        console.log("Stamping " + data.file.output);
        return timestamp.stamp(data);
      })
      .then(function(data){
        console.log("Completed " + data.file.output);
      })
}
function run(){
  var groups={
    contracts:{
      templates:["emp_contract_05","emp_contract_06","emp_contract_07"],
      output:"contracts"
    }
  }
  var opts = {
    count: argv.n,
    templates:  argv.T ? groups[argv.T].templates : [argv.t],
    output:  argv.T ? groups[argv.T].output : argv.o
  }
  var output_folder = path.resolve(__dirname, 'output',opts.output);
  if(!fs.existsSync(output_folder)){
    fs.mkdirSync(output_folder);
  }
  var promises = [];
  for (i = 0; i < opts.count; i++) {
    promises.push(execute(opts.templates[faker.random.number({min:0,max:opts.templates.length - 1})],output_folder));
  }
  Promise.all(promises)
    .then(function(values){
      // console.log(values);
    })
    .catch(function(err){
      console.log(err);
    })
}
run()
// require('./timestamp').stamp('/Users/estebanf/development/docGenerator/output/output.docx')
