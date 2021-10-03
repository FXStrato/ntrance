import { gql } from '@apollo/client';

/**
 * When adding a new repo, don't forget to update both repos and repoQuery
 */

export const repos = ['XivAlexander', 'ffxivACTPlugin', 'ffxivMaterialUi'];

export const repoQuery = gql`
  query GetFFXIVRepos {
    rateLimit {
      cost
      remaining
    }
    XivAlexander: repository(owner: "Soreepeong", name: "XivAlexander") {
      releases(last: 1) {
        nodes {
          author {
            login
            avatarUrl
          }
          repository {
            name
            url
          }
          publishedAt
          name
          description
          tagName
          url
          releaseAssets(first: 10) {
            nodes {
              name
              downloadUrl
              size
            }
          }
        }
      }
    }
    ffxivMaterialUi: repository(owner: "skotlex", name: "ffxiv-material-ui") {
      releases(last: 1) {
        nodes {
          author {
            login
            avatarUrl
          }
          repository {
            name
            url
          }
          publishedAt
          name
          description
          tagName
          url
          releaseAssets(first: 10) {
            nodes {
              name
              downloadUrl
              size
            }
          }
        }
      }
    }
    ffxivACTPlugin: repository(owner: "ravahn", name: "FFXIV_ACT_Plugin") {
      releases(last: 1) {
        nodes {
          author {
            login
            avatarUrl
          }
          repository {
            name
            url
          }
          publishedAt
          name
          description
          tagName
          url
          releaseAssets(first: 10) {
            nodes {
              name
              downloadUrl
              size
            }
          }
        }
      }
    }
  }
`;
