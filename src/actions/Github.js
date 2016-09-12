export const FETCH_GITHUB_API = Symbol('fetch github api list');
export const FETCH_GITHUB_API_DONE = Symbol('fetch github api list done');

export function fetchGithubApiList() {
  return {
    type: FETCH_GITHUB_API
  };
}
