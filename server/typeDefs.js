const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Rocket {
      rocket_id: String!
      rocket_name: String!
  }
  type Links { mission_patch: String
    mission_patch_small: String
    reddit_campaign: String
    reddit_launch: String
    reddit_recovery: String
    reddit_media: String
    presskit: String
    article_link: String
    wikipedia: String
    video_link: String
    youtube_id: String
    flickr_images: [String ] }

  type Launch {
    launch_year: String!
    mission_name: String!
    rocket: Rocket!
    launch_date_utc: String!
    links: Links
  }
  type Query {
    launch(flight_number: Int!): Launch
    launches: [Launch]
    launchesbyfilter(filter:String):[Launch]
  }
`;

module.exports = typeDefs
