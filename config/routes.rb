Rails.application.routes.draw do
  
  get 'sessions/new'
  get '/signup', to:'users#new'
  root 'static_pages#top'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/all_index', to: 'users#all_index'

  get '/processing', to: 'receptions#processing'
  get '/electricity', to: 'receptions#electricity'
  get '/assembly', to: 'receptions#assembly'

  resources :receptions 

      resources :users do

        get 'information'

        member do

          #残業申請関連
          get 'attendances/reception_request'            #日報申請ページ
          patch 'attendances/reception_update'           #日報申請patch

          get 'attendances/reception_edit'               #日報編集ページ
          patch 'attendances/reception_edit'             #日報編集申請patch

          get 'attendances/reception_index'              #日報一覧
          get 'attendances/reception_day'                #日報詳細モーダル(個人)

          get 'attendances/receipts_list'                #日報一覧
          delete 'attendances/receipts_destroy'          #各日報削除
          get 'attendances/receipts_day_list'            #日報日毎データ
          get 'attendances/receipts_day'                 #日報詳細モーダル(管理者)


        end

          resources :attendances, only: :update do
            member do
              patch 'receipts/receipts_update'           #日報反映patch
              get 'admin_reception_request'              #admin日報編集ページ
              patch 'admin_reception_update'             #admin日報更新
              get 'admin_reception_index'                #admin用受付一覧
              get 'reset_receptions'                     #受付リセット
            end
          end
      end

end