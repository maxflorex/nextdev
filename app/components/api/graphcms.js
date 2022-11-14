import { GraphQLClient, gql } from 'graphql-request';

export const hygraph = new GraphQLClient(
  process.env.NEXT_PUBLIC_CLIENT
  ,
  {
    headers: {
      Authorization:
        process.env.NEXT_PUBLIC_TOKEN
    }
  }
);


export const PROJECTS = gql`
{
  projects {
    id
    title
    github
    url
    screenMockups {
      url
    }
    banner {
      url
    }
    webMockups {
      url
    }
    mobileMockups {
      url
    }
    slug
  }
}
`