var handlers = {
  getContacts: function(){
    $.getJSON('/contacts', handlers.processContacts);
  },

  processContacts: function(data){
    var list = $('#contacts').empty();
    $.each(data, function(_, person){
      $('<li>').text(person.firstname+" "+person.lastname).appendTo(list);
    })
  },

  addContact: function(){
    var newContact = {
      firstname: $('#form-firstname').val(),
      lastname: $('#form-lastname').val(),
      email: $('#form-email').val(),
      phone: $('#form-phone').val(),
      address: $('#form-address').val()
    }

    // id for the submit button
    // call submit.id on click, function
    // ajax:
    // $.ajax({
    // some params here, data, \
    // })
  //

    $.post('/contacts', newContact, handlers.getContacts);
  }
}

$(function(){
  $('#list_contacts').on('click', handlers.getContacts);
  //
  // $('#list_contacts').on('click', function(){
  //   $('#contacts').toggle("slow", function(){
  //     handlers.getContacts
  //
  //   })
  // });


  $('#add_contact').on('click',function(){
    $('#new-form').toggle("slow", function() {
    });
  });

});
