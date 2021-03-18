
#管理者
User.create!(name: "管理者",
             email: "sample@email.com",
             name_code: 1000,
             position: "管理者",
             department: "管理部",
             specialty: "管理",
             password: "password",
             password_confirmation: "password",
             admin: true)

#グループリーダー
User.create!(name: "船原　忠良",
             email: "sample-g1-@email.com",
             group_superior: true,
             team_superior: false,
             name_code: 10000,
             position: "グループリーダー",
             specialty: "加工",
             department: "試作部",
             password: "password",
             password_confirmation: "password",
             admin: true)

#チームリーダー(加工)
User.create!(name: "亀井　恵多",
  email: "sample-t1-@email.com",
  group_superior: false,
  team_superior: true,
  name_code: 10001,
  position: "チームリーダー",
  specialty: "加工",
  department: "試作部",
  password: "password",
  password_confirmation: "password")

  #チームリーダー(電気)
User.create!(name: "安部　和正",
  email: "sample-t2-@email.com",
  group_superior: false,
  team_superior: true,
  name_code: 10002,
  position: "チームリーダー",
  specialty: "電気",
  department: "試作部",
  password: "password",
  password_confirmation: "password")

  #チームリーダー(組立)
User.create!(name: "浅井　孝一",
  email: "sample-t3-@email.com",
  group_superior: false,
  team_superior: true,
  name_code: 10003,
  position: "チームリーダー",
  specialty: "組立",
  department: "試作部",
  password: "password",
  password_confirmation: "password")



#加工メンバー生成
9.times do |n|
name  = Faker::Name.name
email = "sample-10#{n+1}@email.com"
name_code = "2001#{n+1}"
password = "password"
User.create!(name: name,
    email: email,
    group_superior: false,
    team_superior: false,
    name_code: name_code,
    position: "メンバー",
    specialty: "加工",
    department: "試作部",
    password: password,
    password_confirmation: password)
end

#電気メンバー生成
9.times do |n|
  name  = Faker::Name.name
  email = "sample-20#{n+1}@email.com"
  name_code = "2002#{n+1}"
  password = "password"
  User.create!(name: name,
      email: email,
      group_superior: false,
      team_superior: false,
      name_code: name_code,
      position: "メンバー",
      specialty: "電気",
      department: "試作部",
      password: password,
      password_confirmation: password)
  end


  #組立メンバー生成
9.times do |n|
  name  = Faker::Name.name
  email = "sample-30#{n+1}@email.com"
  name_code = "2003#{n+1}"
  password = "password"
  User.create!(name: name,
      email: email,
      group_superior: false,
      team_superior: false,
      name_code: name_code,
      position: "メンバー",
      specialty: "組立",
      department: "試作部",
      password: password,
      password_confirmation: password)
  end

  #加工受付生成
5.times do |n|
  reception_namuber = "2001#{n+1}"
  reception_name = "プロジェクトP#{n+1}"
  Reception.create!(reception_namuber: reception_namuber,
      reception_name: reception_name,
      reception_specialty: "加工",
      reception_time: "600")
  end

   #電気受付生成
5.times do |n|
  reception_namuber = "2002#{n+1}"
  reception_name = "プロジェクトE#{n+1}"
  Reception.create!(reception_namuber: reception_namuber,
      reception_name: reception_name,
      reception_specialty: "電気",
      reception_time: "800")
  end

   #組立受付生成
5.times do |n|
  reception_namuber = "2003#{n+1}"
  reception_name = "プロジェクトA#{n+1}"
  Reception.create!(reception_namuber: reception_namuber,
      reception_name: reception_name,
      reception_specialty: "組立",
      reception_time: "1000")
  end