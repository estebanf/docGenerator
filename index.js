var argv = require('minimist')(process.argv.slice(2));
var renderer = require('./renderer');
var Promise = require('promise');
var timestamp = require('./timestamp');
var generator = require('./data_generator');
var fs = require('fs');
var path = require('path');
var faker = require('faker');

var groups={
  contracts:{
    templates:["emp_contract_05","emp_contract_06","emp_contract_07"],
    output:"contracts"
  },
  agreements:{
    templates:["nca_02","nda_01"],
    output:"agreements"
  },
  authorization:{
    templates:["cc_auth_05","cc_auth_08"],
    output:"authorizations"
  }
}

function execute(template,output){
    var fn = generator[template];
    return fn()
      .then(function(data){
        console.log("Got data for " + data.file.fileName)
        return renderer.render(template,data,output)
      })
      .then(function(data){
        console.log("Stamping " + data.file.output);
        return timestamp.stamp(data);
      })
      .then(function(data){
        console.log("Completed " + data.file.output);
      })
}
function exec(opts){
  var output_folder = path.resolve(__dirname, 'output',opts.output);
  if(!fs.existsSync(output_folder)){
    fs.mkdirSync(output_folder, { recursive: true });
  }
  var promises = [];
  for (i = 0; i < opts.count; i++) {
    promises.push(execute(opts.templates[faker.random.number({min:0,max:opts.templates.length - 1})],output_folder));
  }
  Promise.all(promises)

    .catch(function(err){
      console.log(err);
    })
}
function run_args(){
  var opts = {
    count: argv.n,
    templates:  argv.T ? groups[argv.T].templates : [argv.t],
    output:  argv.T ? groups[argv.T].output : argv.o
  }
  exec(opts)
}
if(argv.U){
  count_users = argv.U;
  count_files = argv.n;
  group_keys = Object.keys(groups)
  group_size = Math.round(argv.n / group_keys.length)
  for(i=0; i < count_users; i++){
    var user = faker.internet.userName();
    for(var j = 0; j < group_keys.length; j++) {
      var opts = {
        count: group_size,
        templates: groups[group_keys[j]].templates ,
        output: user
      }
      // console.log(opts);
      exec(opts);
    }
  }
}
else {
  run_args()
}
