class SessionsController < ApplicationController
  def create
    query_params = {
    client_id: ENV["CLIENT_ID"],
    response_type: "code",
    redirect_uri: ENV["REDIRECT_URI"],
    scope: "streaming user-modify-playback-state user-read-playback-state user-read-private user-read-playback-position user-top-read user-library-read user-read-currently-playing user-read-recently-played playlist-read-collaborative playlist-read-private user-follow-read",
   show_dialog: true
    }
    url = "https://accounts.spotify.com/authorize"
    redirect_to "#{url}?#{query_params.to_query}"
  end
end

#user-read-private user-read-playback-position user-top-read user-library-read user-read-currently-playing playlist-read-collaborative
