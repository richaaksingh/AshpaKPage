function sendMail(){
	alert("i m first !");
	$.ajax({
		type: "POST",
		url: "https://mandrillapp.com/api/1.0/messages/send.json",
		data: {
			'key': 'tEGZLV4E1A6o0E9Pn20hIw',
			'message': {
				'from_email': $('#email').val(),
				'to': [
				       {
				    	   'email': 'richaaksingh06@gmail.com',
				    	   'name': $('#name').val(),
				    	   'type': 'to'
				       }
				       ],
				       'subject': 'inquiry',
				       'html': $('#msg').val(),
			}
		}
	});
	alert("i m second !");
}