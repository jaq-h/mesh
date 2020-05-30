export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "4ffe11d5bc884fcdbe93a209e742e51c";
export const redirectUri = "http://localhost:3000/redirect";
export const scopes = [
    //user
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-read-recently-played",
    "user-library-read",
    //playlists
    "playlist-read-collaborative",
    "playlist-read-private",


];
