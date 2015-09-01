# Homepage (Root path)
get '/' do
  erb :index
end

#Create new contact
post '/contacts' do
  response = {}
  response[:result] = false
  contact = Contact.new(
    firstname: params[:firstname],
    lastname: params[:lastname],
    email: params[:email],
    phonenumber: params[:phonenumber],
    email: params[:email]
  )
  if contact.save
    response[:result] = true
  end

  response.to_json
end

#Get all contacts
get '/contacts' do
  Contact.all.to_json
end

#Get specific contact
# get '/contacts/:id' do
#   Contact.find(params[:id].to_json
# end

#Edit contact
get '/contacts/:id' do
  Contact.find(params[:id])
end

#Edit contact
put '/contacts/:id/edit' do
  Contact.find(params[:id])
end

delete '/contacts/:id' do
  @contact = Contact.find(params[:id])
  @contact.destroy
end
