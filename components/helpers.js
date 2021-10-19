import { gql } from '@apollo/client';

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
    Triggernometry: repository(owner: "paissaheavyindustries", name: "Triggernometry") {
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

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const isToday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  );
};
