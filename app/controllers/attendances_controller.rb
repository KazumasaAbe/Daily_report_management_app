class AttendancesController < ApplicationController

  before_action :set_user, only: [:reception_request, :reception_update, :reception_index, :reception_day]
  before_action :set_one_month, only: [:reception_request, :reception_update, :reception_index, :reception_day  ]
  before_action :set_attendance, only: [:reception_request, :reception_update]
  before_action :set_member_attendance, only: [:admin_reception_update]
  before_action :set_performance, only: [:admin_reception_index]
  before_action :admin_user, only: [:admin_reception_request, :admin_reception_update,
                                    :admin_reception_index, :receipts_list, :receipts_day_list]
  before_action :admin_or_correct_user, only: [:reception_index, :reception_request, :reception_update]
  before_action :not_admin_user, only: [:reception_index]
  before_action :reception_validates, only: [:reception_update, :admin_reception_update]
  before_action :business_trip_validates, only: [:reception_update, :admin_reception_update]
  

  #日報提出ページ
  def reception_request
    @receipts = Receipt.where(attendance_id: @attendance.id)
    @receptions = Reception.all
  end

  #日報提出更新
  def reception_update
    #DailyReceiptから当日のattendanceIDで抽出
    @daily_receipts = DailyReceipt.where(attendance_id: @attendance.id)
    #当日日報がある場合は、削除
    if @daily_receipts.present?
      @daily_receipts.each do |d|
        d.destroy
      end
    end
  
    #受付詳細が送られて来ている場合
    if d_receipt_params.present?
      d_receipt_params.each do |id, item|
        attendance = Attendance.find_by(id: @attendance.id)
        @daily_receipt = attendance.daily_receipts.build(item)
        @daily_receipt.save
        receipt = Receipt.find(id)
        @daily_receipt.update(d_receipt_time: receipt.receipt_time)
      end
    end
      redirect_to attendances_reception_index_user_url(current_user)
        flash[:success] = "日報を提出しました"
  end

  #日報編集ページ
  def reception_edit
  end

  #日報編集更新ページ
  def reception_edit
  end

  #個人日報一覧ページ
  def reception_index
  end

  #日報詳細
  def reception_day
    @attendance = @attendances.find_by(worked_on: params[:date])
    @daily_receipts = DailyReceipt.where(attendance_id: @attendance.id)
  end

  
  #日報一覧カレンダー
  def receipts_list
    @attendances = Attendance.all
  end

  #日報日毎データ一覧
  def receipts_day_list
    @attendances = Attendance.where(worked_on: params[:date] )
    attendance = Attendance.find(params[:id])
    @users = User.all
  end

  #日報詳細(個人)
  def receipts_day
    @attendances = Attendance.where(worked_on: params[:date])
    @user = User.find_by(id: params[:id])
    @attendance = @attendances.find_by(user_id: @user.id)
    @daily_receipts = DailyReceipt.where(attendance_id: @attendance.id)
  end


  #admin 日報編集ページ
  def admin_reception_request
    #送られた日付データとidから該当のattendanceを抽出
    @attendance = Attendance.find_by(id: params[:id])

    #attendanceからuserを抽出
    @user = User.find_by(id: @attendance.user_id)
    #抽出したattendanceから紐づいたdaily_receiptを抽出
    @daily_receipt = DailyReceipt.find_by(attendance_id: @attendance.id)
    #抽出したattendanceから紐づいたreceiptを抽出
    @receipts = Receipt.where(attendance_id: @attendance.id)
  end

   #日報提出更新
   def admin_reception_update
    #DailyReceiptから当日のattendanceIDで抽出
    @daily_receipts = DailyReceipt.where(attendance_id: @attendance.id)
    #当日日報がある場合は、削除
    if @daily_receipts.present?
      @daily_receipts.each do |d|
        d.destroy
      end
    end

    #受付詳細が送られて来ている場合
    if d_receipt_params.present?
      d_receipt_params.each do |id, item|
        attendance = Attendance.find_by(id: @attendance.id)
        @daily_receipt = attendance.daily_receipts.build(item)
        @daily_receipt.save
        receipt = Receipt.find(id)
        @daily_receipt.update(d_receipt_time: receipt.receipt_time)
      end
    end
    redirect_to attendances_receipts_day_list_user_url(current_user, date: @attendance.worked_on )
    flash[:success] = "日報を更新しました"
end

  def admin_reception_index
    #送られた日付データとidから該当のattendanceを抽出
    @attendance = Attendance.find_by(id: params[:id])
    #attendanceからuserを抽出
    @user = User.find_by(id: @attendance.user_id)
    @receptions = Reception.all
    @processings = Reception.where(reception_specialty: "加工")
    @electricitys = Reception.where(reception_specialty: "電気")
    @assemblys = Reception.where(reception_specialty: "組立")

    @receptions.each do |reception|
      reception.update(check: "0")
    end
  end


  def reset_receptions
    @attendance = Attendance.find(params[:id])
    @user = User.find_by(id: @attendance.user_id)
    @receptions = Reception.all

    @receptions.each do |reception|
      reception.update(check: 0, check_id: nil)
    end

    @receipts = Receipt.where(attendance_id: @attendance.id)
    if @receipts.present?
      @receipts.each do |receipt|
        receipt.destroy
      end
    end

    if current_user.admin?
      redirect_to admin_reception_request_user_attendance_path(@user, @attendance)
    else
    redirect_to attendances_reception_request_user_url(current_user)
    end


  end




  private

  def attendances_params
    params.require(:user).permit(attendances: [:clean_time,
                                               :meeting_time,
                                               :other_time,
                                               :over_time,
                                               :classification,
                                               :working_time,
                                               :designation_time,
                                               :address])[:attendances]
  end

  def d_receipt_params
    params.require(:user).permit(daily_receipts: [:d_receipt_namuber,
                                                  :d_receipt_name,
                                                  :d_receipt_specialty])[:daily_receipts]
  end

  def receipts_params
    params.require(:user).permit(receipts: [:receipt_time])[:receipts]
  end




end
