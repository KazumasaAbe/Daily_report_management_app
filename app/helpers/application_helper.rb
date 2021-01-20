module ApplicationHelper


  def full_title(page_name = "")
    base_title = "Daily_Management_App"
     if page_name.empty?
      base_title
     else
      page_name + " | " + base_title      
     end
  end

end
