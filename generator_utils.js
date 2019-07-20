var faker = require('faker');
var moment = require('moment');

var civil_statuses = ['Married','Single','Divorced','Windowed']
var positions= ["Accounts receivable/payable specialist","Assessor","Auditor","Bookkeeper","Budget analyst","Cash manager","Chief financial officer","Controller","Credit manager","Tax specialist","Treasurer","Benefits officer","Compensation analyst","Employee relations specialist","HR coordinator","HR specialist","Retirement plan counselor","Staffing consultant","Union organizer","Certified financial planner","Chartered wealth manager","Credit analyst","Credit manager","Financial analyst","Hedge fund manager","Hedge fund principal","Hedge fund trader","Investment advisor","Investment banker","Investor relations officer","Leveraged buyout investor","Loan officer","Mortgage banker","Mutual fund analyst","Portfolio management marketing","Portfolio manager","Ratings analyst","Stockbroker","Trust officer","Business systems analyst","Content manager","Content strategist","Database administrator","Digital marketing manager","Full stack developer","Information architect","Marketing technologist","Mobile developer","Project manager","Social media manager","Software engineer","Systems engineer","Software developer","Systems administrator","User interface specialist","Web analytics developer","Web developer","Webmaster","Actuary","Claims adjuster","Damage appraiser","Insurance adjuster","Insurance agent","Insurance appraiser","Insurance broker","Insurance claims examiner","Insurance investigator","Loss control specialist","Underwriter","Business broker","Business transfer agent","Commercial appraiser","Commercial real estate agent","Commercial real estate broker","Real estate appraiser","Real estate officer","Residential appraiser","Residential real estate agent","Residential real estate broker"]
var authors = ["Emerald Huels IV", "Brent Langworth", "Estel Cummerata", "Breanna Flatley", "Keely Ruecker", "Tremaine Schmeler", "Lavern Keeling", "Ryan Upton", "Buster Willms", "Laura Kreiger", "Harmony Gottlieb", "Myrtis Adams", "Josiah Gutmann", "Mervin Reilly", "Gaston Torphy", "Ansley Wilderman", "Dewitt Waters", "Wava Kerluke", "Christa Bernhard", "Trenton Gislason"];
var managers = ["Vincenzo Rohan", "Reva Casper", "May Gleichner", "Consuelo Spinka", "Alana Stanton", "Madie Kautzer", "Camryn Toy", "Mrs. Flossie Lockman", "Eliane Howell", "Kaitlyn Feeney"]
var companies = ["Homenick, Schaden and O'Kon", "Weimann - Friesen", "Blanda LLC", "Roob - Shields", "Effertz, Kozey and Friesen"]

var getRandomValue = function(arr){
  return arr[faker.random.number({min:0,max:arr.length -1})]
}
var getAddress = function(){
  return faker.fake("{{address.streetAddress}}, {{address.city}}, {{address.zipCode}}, {{address.stateAbbr}}")
}

var fileData = function(filename){
  var getTimeRandoms = function(){
    return {
      years: faker.random.number({min:0,max:10}),
      months: faker.random.number({min:0,max:12}),
      days: faker.random.number({min:0,max:30}),
      hours: faker.random.number({min:0,max:24}),
      minutes: faker.random.number({min:0,max:60}),
      seconds: faker.random.number({min:0,max:60})
    }
  }
  var getMoment = function(seed){
    var r = getTimeRandoms();
    return seed.subtract(r.years,'y').subtract(r.months,'M').subtract(r.days,'d').subtract(r.hours,'h').subtract(r.minutes,'m').subtract(r.seconds,'s')
  }
  var atime = getMoment(moment());
  var atime_u = atime.valueOf();
  var mtime = getMoment(atime);
  var mtime_u = mtime.valueOf();
  var btime = getMoment(mtime);
  var btime_u = btime.valueOf();

  return {
    fileName: filename,
    btime: btime_u,
    mtime: mtime_u,
    atime: atime_u
  }
}

module.exports = {
  get_position: function() { return getRandomValue(positions) },
  get_author: function() { return getRandomValue(authors) },
  get_manager: function() { return getRandomValue(managers) },
  get_company: function() { return getRandomValue(companies) },
  get_address: function() { return getAddress() },
  get_civil_status: function() { return getRandomValue(civil_statuses)},
  get_fileData: fileData
}
