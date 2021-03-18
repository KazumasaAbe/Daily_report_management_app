class ApplicationController < ActionController::Base
  include SessionsHelper

  $days_of_the_week = %w{日 月 火 水 木 金 土}

  # ページ出力前に1ヶ月分のデータの存在を確認・セットします。
  def set_one_month 
    @first_day = params[:date].nil? ?
    Date.current.beginning_of_month : params[:date].to_date
    @last_day = @first_day.end_of_month
    one_month = [*@first_day..@last_day]
    @attendances = @user.attendances.where(worked_on: @first_day..@last_day).order(:worked_on)
    unless one_month.count == @attendances.count
      ActiveRecord::Base.transaction do
        one_month.each { |day| @user.attendances.create!(worked_on: day) }
      end
      @attendances = @user.attendances.where(worked_on: @first_day..@last_day).order(:worked_on)
    end
  
  rescue ActiveRecord::RecordInvalid
    flash[:danger] = "ページ情報の取得に失敗しました、再アクセスしてください。"
    redirect_to root_url
  end

  #当日データ取得
  def set_attendance
    @attendance = @attendances.find_by(worked_on: Date.current)
  end

  #ログインしているユーザーを取得
  def set_login_user
    @user = User.find_by(id: current_user.id)
  end

  #paramsIDからユーザーを取得
  def set_user
    @user = User.find(params[:id])
  end

  #受付データの実績値計算
  def set_performance
    @receptions = Reception.all
    @daily_receipts = DailyReceipt.all

      @receptions.each do |reception|
        @daily = @daily_receipts.where(d_receipt_namuber: reception.reception_namuber)

        @sum = 0
        if @daily.present?
            @daily.each do |daily|
              if daily.d_receipt_time.present?
                @sum += daily.d_receipt_time
              end
            end
        end

        @reception = reception.update(reception_Performance_time: @sum)
      end
  end

  def set_remainder
    @receptions = Reception.all
    @daily_receipts = DailyReceipt.all
      @receptions.each do |reception|
        @daily = @daily_receipts.where(d_receipt_namuber: reception.reception_namuber)
        @sum = reception.reception_time
        if @daily.present?
            @daily.each do |daily|
              if daily.d_receipt_time.present?
                @sum1 = daily.d_receipt_time
                @sum -= @sum1
                @sum = BigDecimal(@sum.to_s).floor(2).to_f 
              end
            end
        end

        @reception = reception.update(reception_remainder_time: @sum)
        
      end
  end

  def admin_user
    unless current_user.admin?
      redirect_to root_url
      flash[:danger] ="権限がありません"
  end
end

def admin_or_correct_user
  @user = User.find(params[:user_id]) if @user.blank?
  unless current_user?(@user) || current_user.admin?
    redirect_to root_url
    flash[:danger] = "権限がありません"
  end
end

def not_admin_user
  @user = User.find(params[:user_id]) if @user.blank?
  if @user.admin?
    redirect_to root_url
    flash[:danger] = "権限がありません"
  end
end
 
def reception_validates
  if @attendance.update(attendances_params)
    #受付時間が送られて来ている場合
    if receipts_params.present?
      receipts_params.each do |idd, time|
        #receiptモデルから受付IDで抽出＋更新
        receipt = Receipt.find(idd)
        receipt.update(time)
      end
    end

    if attendances_params[:working_time] == attendances_params[:designation_time] || @attendance.classification == "特別勤務"
      if d_receipt_params.present?

        d_receipt_params.each do |id, item|
          receipt = Receipt.find(id)
          unless receipt.receipt_time.present?
          redirect_to attendances_reception_request_user_url(current_user, data: @attendance) 
          flash[:danger] = "受付時間を入力してください"
        end

        if  receipt.receipt_time.present?
          @daily_receipt = DailyReceipt.where(attendance_id: @attendance.id)
                                        .where(d_receipt_namuber: item[:d_receipt_namuber])
          reception = Reception.find_by(reception_namuber: item[:d_receipt_namuber])
          if @daily_receipt.present?
            @daily_receipt.each do |daily|
            @sum = reception.reception_remainder_time + daily.d_receipt_time 
            end   
          else
            @sum = reception.reception_remainder_time
          end
       
          unless @sum  >= receipt.receipt_time
            redirect_to attendances_reception_request_user_url(current_user, data: @attendance) 
            flash[:danger] = "[ 受付No.#{receipt.receipt_namuber} ] 受付規定時間を超えています。管理者に連絡をしてください"
          end
          end
      end
    end
    else
      redirect_to attendances_reception_request_user_url(current_user, data: @attendance)
      flash[:danger] = "勤務時間と勤務指定時間が等しくありません"
  end
end
end

def business_trip_validates
  if @attendance.classification == "出張"
    unless @attendance.address.present?
      redirect_to attendances_reception_request_user_url(current_user, data: @attendance)
      flash[:danger] = "出張先住所を入力してください"
    end
  end
end

end