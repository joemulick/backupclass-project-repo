// var request = require("request");

// var parameter;
// var parameter2;
// var state;
// var url; 
// var key;

// var options = { method: 'GET',
//   url: url,
//   headers:
//     { 'postman-token': 'f3df2dad-ceb0-4ccb-b54a-ab9433db0b70',
//          'cache-control': 'no-cache',
//          'x-api-key': key 
//     } 
// };



// var helpers = {

//     runHouse: function (query){

//         console.log(query);

//         parameter = 'introduced';
//         url = 'https://api.propublica.org/congress/v1/115/house/bills/${parameter}.json';
//         key = 'yQGAnrKoJi7WWVfZ4LsbCINgYlhrXrm9YrpF2zE8';

//         request(options, function (error, response, body) {
//                   if (error) throw new Error(error);
                  
//                   console.log(body);
        
//         });
//     }

//     runSenate: function (query){
//             console.log(query);
//         parameter = 'senate';
//         parameter2 = 'passed';
//         url = 'https://api.propublica.org/congress/v1/115/${parameter}/bills/${parameter2}.json';
//         key = 'yQGAnrKoJi7WWVfZ4LsbCINgYlhrXrm9YrpF2zE8';

//         request(options, function (error, response, body) {
//                   if (error) throw new Error(error);
//                   body = JSON.parse(body);
//                   res.render('index', { body: body });    

//                   console.log(body);
        
//         });
//     },

//     runState: function (query){
//         console.log(query);

//         parameter = 'state=ca&q=all&';
//         url = 'https://openstates.org/api/v1/bills/?${parameter}';
//         key = 'cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf';

//         request(options, function (error, response, body) {
//                   if (error) throw new Error(error);
                  
//                   body = JSON.parse(body);
//                   res.render('index', { body: body });    

//                   console.log(body);
        
//         });
    
//     },

//     runLocal: function (query){
//         console.log(query);

//         parameter = 'geo/?lat=34.16&long=-118.4';
//         url = 'openstates.org/api/v1/legislators/${parameter}';
//         key = 'cd8b051a-7c89-4c20-9d63-cbabf9ab8ebf';

//         request(options, function (error, response, body) {
//                   if (error) throw new Error(error);
                  
//                   body = JSON.parse(body);
//                   res.render('index', { body: body });    

//                   console.log(body);
        
//         });
//     }
// }

// module.exports = helpers;