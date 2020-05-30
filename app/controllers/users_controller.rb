class UsersController < ApiController
  # before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  # def index
  #   @users = User.all
  #
  #   render json: @users
  # end
  #
  # # GET /users/1
  # def show
  #   render json: @user
  # end

  # POST /users
  def create
    auth_params = SpotifyApiAdapter.login(params[:code])
    user_data = SpotifyApiAdapter.getUserData(auth_params["access_token"])

    user = User.find_or_create_by(user_params(user_data))
    img_url = user_data["images"][0] ? user_data["images"][0]["url"] : nil

    #encodeAccess = issue_token({token: auth_params["access_token"]})
    #encodeRefresh = issue_token({token: auth_params["refresh_token"]})

    user.update(profile_img_url: img_url, access_token: auth_params["access_token"], refresh_token: auth_params["refresh_token"])

    render json: user.to_json(:except => [:refresh_token, :created_at, :updated_at])


  end

  def show
      user = User.find_by(display_name: params[:display_name])
      now_playing = SpotifyApiAdapter.currentlyPlaying(user.access_token)

      render json: now_playing.to_json

  end

  # PATCH/PUT /users/1

  # DELETE /users/1

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_user
    #   @user = User.find(params[:id])
    # end

    # Only allow a trusted parameter "white list" through.
    def user_params (user_data)
      params = {
        display_name: user_data["display_name"],
        spotify_url: user_data["external_urls"]["spotify"],
      }
    end
end
