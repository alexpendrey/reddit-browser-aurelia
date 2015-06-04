
export const config = {
  redditUrl: 'http://www.reddit.com/',
  popularSubs: 'subreddits/popular.json',
  subredditDetail: 'r/${subreddit}.json'
};

export function AppConfig() {
    return config;
}
