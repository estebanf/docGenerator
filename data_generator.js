var Promise = require('promise');
var faker = require('faker');
var moment = require('moment');
var utils = require('./generator_utils');
var cc_gen = require('creditcard-generator')

module.exports = {
  emp_contract_07:function(){
    return new Promise(function(resolve,reject){
      try{
        var employee = faker.name.findName();
        var contract_start = moment(faker.date.past(10))
        var data = {
          file: utils.get_fileData(employee + "_" + contract_start.format("YYYYMMDD")),
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
          file: utils.get_fileData("FT_emp_" + contract_start.format("YYYYMMDD") + "_" + employee),
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
  },
  nca_02:function(){
    return new Promise(function(resolve,reject){
      try{
        var employee = faker.name.findName();
        var contract_start = moment(faker.date.past(10))
        var data = {
          file: utils.get_fileData(faker.finance.account() + "_NCA"),
          content:{
            author: utils.get_author(),
            manager: utils.get_manager(),
            company: utils.get_company(),
            employee: employee,
            position: utils.get_position(),
            product: faker.commerce.productName(),
            day: faker.random.number({min:1,max:27}),
            issue_date: contract_start.format("MMMM Do YYYY"),
            ssn: faker.random.number({min:1,max:8}) + "" + faker.random.number({min:10,max:99}) + "-" + faker.random.number({min:10,max:99}) + "-" + faker.random.number({min:1000,max:9999})
          }
        }
        resolve(data);
      }
      catch(error){
        reject(error);
      }
    });
  },
  nda_01:function(){
    return new Promise(function(resolve,reject){
      try{
        var employee = faker.name.findName();
        var contract_start = moment(faker.date.past(10))
        var data = {
          file: utils.get_fileData("NDA-" + employee + "-" + contract_start.format("YYYYMMDD")),
          content:{
            author: utils.get_author(),
            manager: utils.get_manager(),
            company: utils.get_company(),
            state: faker.address.state(),
            employee: employee,
            emp_company: faker.company.companyName(),
            emp_address: utils.get_address(),
            company_address: utils.get_address(),
            position: utils.get_position(),
            issue_date: contract_start.format("MMMM Do YYYY"),
          }
        }
        resolve(data);
      }
      catch(error){
        reject(error);
      }
    });
  },
  cc_auth_05:function(){
    return new Promise(function(resolve,reject){
      try{
        var contract_date = moment(faker.date.past(10))
        var data = {
          file: utils.get_fileData("CCAUTH-" + contract_date.format("YYYYMMDD") + "-" + faker.finance.account()),
          content:{
            name: faker.name.findName(),
            author: utils.get_author(),
            manager: utils.get_manager(),
            company: utils.get_company(),
            address: utils.get_address(),
            card: cc_gen.GenCC(),
            contract_date: contract_date.format("MMMM Do YYYY"),
            exp_date: contract_date.add(2,"years").add(5,"months").format("MM/YY"),
            code: faker.random.number({min:100,max:999}),
            amount: faker.finance.amount(),
            company_address: utils.get_address(),
          }
        }
        resolve(data);
      }
      catch(error){
        reject(error);
      }
    });
  },
  cc_auth_08:function(){
    return new Promise(function(resolve,reject){
      try{
        var contract_date = moment(faker.date.past(10))
        var data = {
          file: utils.get_fileData(faker.finance.account() + contract_date.format("YYYYMMDD")),
          content:{
            author: utils.get_author(),
            manager: utils.get_manager(),
            company: utils.get_company(),
            title: faker.name.prefix(),
            name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            phone: faker.phone.phoneNumber(),
            phone_home: faker.phone.phoneNumber(),
            phone_business: faker.phone.phoneNumber(),
            phone_mobile: faker.phone.phoneNumber(),
            phone_fax: faker.phone.phoneNumber(),
            address: utils.get_address(),
            email: faker.internet.email(),
            application: faker.finance.account(),
            council: faker.name.findName(),
            receipt: faker.finance.bic(),
            date: contract_date.format("YYYY/MM/DD"),
            amount: faker.finance.amount(),
            card_holder: faker.name.findName(),
            card: cc_gen.GenCC(),
            exp_date: contract_date.add(2,"years").add(5,"months").format("MM/YY"),
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
