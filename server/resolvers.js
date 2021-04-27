const resolvers = {
    Query: {
      launch: async (_source, { id }, { dataSources }) =>
        dataSources.missionAPI.getLaunch(id),
      launches: async (_source, _args, { dataSources }) =>
        dataSources.missionAPI.getLaunches(),
        //(launch_year,mission_name,rocket_name),
        launchesbyfilter: async(_source,{filter},{dataSources})=>
          dataSources.missionAPI.getLaunchesByFilter(filter)
      
    },
    
  }
  
  module.exports = resolvers