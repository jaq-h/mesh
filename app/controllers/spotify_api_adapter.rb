class SpotifyApiAdapter

  def self.urls
    {
      "auth" => "https://accounts.spotify.com/api/token/",
      "me" => "https://api.spotify.com/v1/me/",
      "player" => "https://api.spotify.com/v1/me/player",
    }
  end

  def self.body_params
    body = {
      client_id: ENV['CLIENT_ID'],
      client_secret: ENV['CLIENT_SECRET'],
    }
  end

  def self.login(code)
    body = body_params.dup
    body[:grant_type] = "authorization_code"
    body[:code] = code
<<<<<<< HEAD
    body[:redirect_uri] = ENV['REDIRECT_URL']
    puts body
=======
    body[:redirect_uri] = ENV['REDIRECT_URI']
>>>>>>> 6a7ee9976f952609849b90c4f6916a927445bdbe
    auth_response = RestClient.post(urls["auth"], body)
    JSON.parse(auth_response.body)
  end

  def self.getUserData(access_token)
    header = {
      "Authorization": "Bearer #{access_token}"
    }

    user_response = RestClient.get(urls["me"], header)
    JSON.parse(user_response.body)
  end

  def self.currentlyPlaying(access_token)
    header = {
      "Authorization": "Bearer #{access_token}"
    }
    user_response = RestClient.get(urls["player"], header)
    JSON.parse(user_response.body)
  end



end
