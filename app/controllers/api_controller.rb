class ApiController < ActionController::API
  def issue_token(payload)
    JWT.encode(payload, ENV["SOME_SECRET"], ENV["SOME_SUPER_SECRET"])
  end

  def decode(jwt_token)
      decode_helper = {algorithm: ENV["SOME_SUPER_SECRET"]}
      JWT.decode(jwt_token, ENV["SOME_SECRET"], true, decode_helper)[0]
  end
end
