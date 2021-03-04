class ReceiptsController < ApplicationController
  before_action :set_user, only: [:recepts_update]
  before_action :set_one_month, only: [:recepts_update]
  before_action :set_attendance, only: [:recepts_update]

  def receipts_update
    #送られた日付データとidから該当のattendanceを抽出
    @attendance = Attendance.find_by(id: params[:id])
    #attendanceからuserを抽出
    @user = User.find_by(id: @attendance.user_id)
    
    check_params.each do |id, item|
      #idから受付を抽出 + チェック、チェックIDの初期化
      @reception = Reception.find(id)
      @reception = @reception.update(check: "0", check_id: nil)
      #idから受付を抽出 + チェック、チェックIDを反映させる
      @reception = Reception.find(id)
      @reception = @reception.update(item)
    end

    #userに対応するreceiptモデルのデータを初期化
    attendance = Attendance.find(params[:id])
    @receipts = Receipt.where(attendance_id: attendance.id)
    #receiptモデルの初期化
    if @receipts.present?
      @receipts.each do |r|
       r.destroy
      end
    end

      #受付データが全て(receipts_params)送られる
      receipts_params.each do |id, item|
        #idより受付データを取得 + チェック、チェックIDとidが一致するか照合
        @reception = Reception.find(id)
          if @reception.check == "1" && (@reception.check_id == id)
            #送られたIDからattendanceモデルを抽出
            attendance = Attendance.find(params[:id])
            #attendanceモデルと紐づいたreceiptモデルへsave
            @receipt = attendance.receipts.build(item)
            @receipt.save
          end
    end
    flash[:success] = "選択した日報を反映しました"
    if current_user.admin?
      redirect_to admin_reception_request_user_attendance_url(@user, @attendance)

    else
      redirect_to attendances_reception_request_user_url(current_user)
    end
  end

  private

  def receipts_params
    params.require(:user).permit(receipts: [:receipt_namuber,
                                            :receipt_name, 
                                            :receipt_specialty])[:receipts]
  end

  def check_params
    params.require(:user).permit(receptions: [:check, :check_id])[:receptions]
  end

  
end
