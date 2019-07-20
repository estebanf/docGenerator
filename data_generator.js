var Promise = require('promise');
var faker = require('faker');
var moment = require('moment');
var utils = require('./generator_utils');

module.exports = {
  emp_contract_07:function(){
    return new Promise(function(resolve,reject){
      try{
        var employee = faker.name.findName();
        var contract_start = moment(faker.date.past(10))
        var data = {
          file: utils.get_fileData(employee.replace(/[\.\-\_]/g,'').replace(/\s/g,'_') + contract_start.format("YYYYMMDD")),
          content:{
            author: utils.get_author(),
            manager: utils.get_manager(),
            company: utils.get_company(),
            address: utils.get_address(),
            contract_start: contract_start.format("MMMM Do YYYY"),
            agency: faker.company.companyName(),
            agency_addr: utils.get_address(),
            employee: employee,
            civilstatus: utils.get_civil_status(),
            employee_addr: utils.get_address(),
            site_employee: faker.address.country(),
            years: faker.random.number({min:1,max:5}),
            position: utils.get_position(),
            salary:faker.random.number({min:2,max:20}) * 1000,
          }
        }
        resolve(data);
      }
      catch(error){
        reject(error);
      }
    });
  },
  emp_contract_05:function(){
    return new Promise(function(resolve,reject){
      try{
        var employee = faker.name.findName();
        var contract_start = moment(faker.date.past(10))
        var data = {
          file: utils.get_fileData("FT_emp_" + contract_start.format("YYYYMMDD") + "_" + employee.replace(/[\.\-\_]/g,'').replace(/\s/g,'_') ),
          content:{
            author: utils.get_author(),
            manager: utils.get_manager(),
            company: utils.get_company(),
            contract_start: contract_start.format("MMMM Do YYYY"),
            address: utils.get_address(),
            employee: employee,
            employee_addr: utils.get_address(),
            position: utils.get_position(),
            salary:faker.random.number({min:2,max:20}) * 1000,
          }
        }
        resolve(data);
      }
      catch(error){
        reject(error);
      }
    });
  },
  emp_contract_06:function(){
    return new Promise(function(resolve,reject){
      try{
        var employee = faker.name.findName();
        var contract_start = moment(faker.date.past(10))
        var data = {
          file: utils.get_fileData("HR_" + + contract_start.format("YYYYMMDD") + "-" + faker.finance.account()),
          content:{
            author: utils.get_author(),
            manager: utils.get_manager(),
            company: utils.get_company(),
            issue_date: contract_start.format("MMMM Do YYYY"),
            place_of_issue: faker.address.state(),
            address: utils.get_address(),
            employee: employee,
            civilstatus: utils.get_civil_status(),
            employee_addr: utils.get_address(),
            site_employee: faker.address.country(),
            years: faker.random.number({min:1,max:5}),
            position: utils.get_position(),
            salary:faker.random.number({min:2,max:20}) * 1000,

          }
        }
        resolve(data);
      }
      catch(error){
        reject(error);
      }
    });
  }
}
