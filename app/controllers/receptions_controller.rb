class ReceptionsController < ApplicationController
  before_action :set_login_user, only: [:index]
  before_action :set_one_month, only: [:index]
  before_action :set_attendance, only: [:index]
  before_action :set_performance, only: [:index]
  before_action :set_remainder, only: [:index]

  def processing
    @processings = Reception.where(reception_specialty: "加工")
  end

  def electricity
    @electricitys = Reception.where(reception_specialty: "電気")
  end


  def assembly
    @assemblys = Reception.where(reception_specialty: "組立")
  end

  def index
    @receptions = Reception.all
    @processings = Reception.where(reception_specialty: "加工")
    @electricitys = Reception.where(reception_specialty: "電気")
    @assemblys = Reception.where(reception_specialty: "組立")

    @receptions.each do |reception|
      reception.update(check: "0")
    end
  end

  def new
    @reception = Reception.new
  end

  def create
    @reception = Reception.new(reception_params)
      if @reception.save
        flash[:success] = '新規作成に成功しました。'
        redirect_to receptions_url
      else
        flash[:danger] = '新規作成に失敗しました。'
        redirect_to receptions_url
      end
  end

  def edit
    @reception = Reception.find(params[:id])
  end

  def update
    @reception = Reception.find(params[:id])
    if @reception.update(reception_params)
      flash[:success] = '受付日報を更新しました。'
      redirect_to receptions_url
    else
      redirect_to receptions_url
    end
  end

  def show
  end

  def destroy
    @reception = Reception.find(params[:id])
    @reception.destroy
    flash[:success] = "#{@reception.reception_name}のデータを削除しました。"
    redirect_to receptions_url
  end

  private

  def reception_params
    params.require(:reception).permit(:reception_namuber,
                                      :reception_name,
                                      :reception_time,
                                      :reception_specialty)
  end
end
