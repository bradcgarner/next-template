export const contact = {
	meta: {
    // limit seoTitle to 55 characters
		//         1       10         20         30         40         50
    seoTitle: 'Contact the Living Building Group',
    h1Tag:    'Contact the Living Building Group',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'Contact the Living Building Group',
    path:        'contact',
    image:       'https://cdn.buttercms.com/FRHkRLSkRUerv58OG5yS',
    alt:         'Contact the Living Building Group',
  },

  contact: {
    // contact info is in the footer
    info: {
      buttonLabel: 'Contact Us',
      address1:    '17416 Germanna Highway',
      address2:    'Culpeper, VA 22701',
      tel:         '1+540.881.0058',
      mapUrl:      'https://www.google.com/maps/place/17416+Germanna+Hwy,+Culpeper,+VA+22701/@38.450847,-77.938673,17z/data=!3m1!4b1!4m5!3m4!1s0x89b42753cc4aeb5d:0x9ee3db7f5b221321!8m2!3d38.4508428!4d-77.936479',
    },
    placeholders: {
      name: 'name',
      email: 'name@email.com',
      tel: '555.555.5555',
      msg: 'How can we help you?',
    },
    submitButton: 'Send',
    // success message that displays when user clicks send on contact us
    success: {
      header: 'Thanks for contacting us!',
      message: [
        'Check your email for an auto-generated confirmation of receipt.',
        'One of our team members will contact you within 1 business day.',
      ]
    },
    // failure message that displays if contact us is not successfull upon send
    fail: {
      header: 'Oops!',
      message: 'Sorry, something went wrong.  Please try again. If this does not work, please email info@purple-roof.com.',
    },
  },

};