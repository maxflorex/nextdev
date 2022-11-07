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
  }
}
`