const apiConfig = {
  clientId: 'x2uz3v7v5rpf4d4oars4rnk3emlsf0',
  authUrl: 'https://id.twitch.tv/oauth2/authorize',
  redirectUrl: 'https://ellvodka-twitch-clone.netlify.app/auth/authorize',
  baseUrl: 'https://api.twitch.tv/helix',
};

const oAuthConfig = {
  authLink: `${apiConfig.authUrl}?client_id=${apiConfig.clientId}&response_type=token&redirect_uri=${apiConfig.redirectUrl}`
};

export const environment = {
  production: true,
  api: {...apiConfig, ...oAuthConfig},
  twitch: {
    streamPlayerUrl: 'https://player.twitch.tv/?parent=ellvodka-twitch-clone.netlify.app&channel=',
    clipPlayerUrl: 'https://clips.twitch.tv/embed?parent=ellvodka-twitch-clone.netlify.app&clip=',
    videoPlayerUrl: 'https://videos.twitch.tv/embed?parent=ellvodka-twitch-clone.netlify.app&video=',
    chatUrl: 'https://www.twitch.tv/embed/[USERNAME]/chat?parent=ellvodka-twitch-clone.netlify.app',
  }
};
