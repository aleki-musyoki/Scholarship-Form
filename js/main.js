$(function() {

	'use strict';

	// Form

	var contactForm = function() {

		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					firstName:{
						required: true,
						firstName: true,

					},
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					firstNbame: "Please enter your name",
					email: "Please enter a valid email address",
					message: "Please enter a message"
				},
			} );
		}
	};

});


//Validity Check
const entries = document.getElementsByTagName("input");
const button = document.getElementById("next")
button.addEventListener("click", function(){
	entries.every(input => input.reportValidity());
})
$('#contactForm').blur(function()
{
    if( !$(this).val() ) {
          $(this).parents('p').addClass('warning');
    }
});