
export const config = {
  redditUrl: 'http://www.reddit.com/',
  popularSubs: 'subreddits/popular.json',
  subredditDetail: 'r/${subreddit}.json',
  comments: 'r/${subreddit}/comments/${commentsId}.json'
};

export function AppConfig() {
    return config;
}
