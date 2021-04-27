const { RESTDataSource,RequestOptions  } = require('apollo-datasource-rest');
const { request } = require('express');
//const { Console } = require('node:console');

class missionAPI extends RESTDataSource {
  
  constructor() {

    super();
    this.baseURL = 'https://api.spacexdata.com/v3/';
    //?launch_year=2020&mission_name=Starlink%203&rocket_name=Falcon%209'
  }

  // getLaunches(launch_year,mission_name,rocket_name) {
   // return this.get(`launches?launch_year=${launch_year}&mission_name=${mission_name}&rocket_name={rocket_name}`)
  //}
  async getLaunches() {
    return this.get('launches')
  }
  async getLaunchesByFilter(filter)
  {
    var resp;
    if (filter!=null && filter!="") {
      var qs= "launches?"+filter;
      console.log(`launches?${filter}`);
      //this.context.params.set('launch_year','2020');
      //this.willSendRequest().request.params.set('launch_year',"2020");
      return this.get(`launches?${filter}`);
    }
    else
      return this.get('launches');
      //return resp.result;
  }
  

  
}

module.exports = missionAPI