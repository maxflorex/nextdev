import { GraphQLClient, gql } from 'graphql-request';

export const hygraph = new GraphQLClient(
  process.env.NEXT_PUBLIC_CLIENT,
  {
    headers: {
      Authorization:
        process.env.NEXT_PUBLIC_TOKEN
    }
  }
);


export const PROJECTS = gql`
{
  projects(orderBy: createdAt_DESC) {
    id
    title
    github
    url
    description
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
    technologies {
      ... on Technology {
        id
        title
        logo {
          id
          url
        }
      }
    }
  }
}
`

export const PROJECT = gql`
  query GetProject($slug: String!) {
  project(where: {slug: $slug}) {
    id
    title
    github
    url
    description
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
    technologies {
      ... on Technology {
        id
        title
        logo {
          id
          url
        }
      }
    }
  }
}
`