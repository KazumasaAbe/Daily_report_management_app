class UsersController < ApplicationController

 before_action :set_user, only: [:show, :edit, :update, :destroy]
 before_action :logged_in_user, only: [:show, :edit, :update, :index, :destroy, :information, :new]
 before_action :correct_user, only: [:edit, :update]
 before_action :admin_user, only: [:destroy, :create, :new]
 before_action :not_admin_user, only: [:index]


  def new
    @user = User.new
  end


  def index
    @users = User.paginate(page: params[:page])
    @user_g = User.find_by(position: "グループリーダー")
    @users_t = User.where(position: "チームリーダー")
    
    @class_text =
    case current_user.specialty
    when "加工" 
      'common-processing'
    when "電気"
      'common-electricity'
    when "組立"
      'common-assembly'
    end

    @specialty_name =
    case current_user.specialty
    when "加工" 
      '加工チーム'
    when "電気"
      '電気チーム'
    when "組立"
      '組立チーム'
    end
  end



  def all_index
    @users = User.all
    @user_g = User.find_by(position: "グループリーダー")
    @users_t = User.where(position: "チームリーダー")
  
  end


  def show
  end


  def create
    @user = User.new(user_params)
     if @user.save
      if @user.position == "チームリーダー"
        @user.update(team_superior: true)
      end
      flash[:success] = '新規作成に成功しました。'
      redirect_to all_index_url
     else
      render :new
     end
  end

  def edit
  end

  def update
    if @user.update(user_params)
      flash[:success] = "個人情報を更新しました。"
      redirect_to attendances_reception_index_user_url(@user)
    else
      render :edit      
    end
  end

  def destroy
    @user.destroy
    flash[:success] = "#{@user.name}のデータを削除しました。"
    redirect_to all_index_url
  end


  def information
    @user = User.find_by(id: params[:user_id])
  end

  private

  def user_params
    params.require(:user).permit(:name,
                                 :email, 
                                 :team_superior,
                                 :group_superior,
                                 :name_code,
                                 :position,
                                 :image,
                                 :department,
                                 :specialty,
                                 :password, 
                                 :password_confirmation)
  end

  def logged_in_user
    unless logged_in?
      store_location
      flash[:danger] = "ログインしてください"
      redirect_to login_url
    end
  end

  def correct_user
    redirect_to(root_url) unless current_user?(@user)
  end

  def admin_user
    redirect_to root_url unless current_user.admin?
  end

  def not_admin_user
    if current_user.admin?
      redirect_to(root_url)
      flash[:danger] ="権限がありません"
    end
  end

end
