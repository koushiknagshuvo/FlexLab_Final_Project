// OwlCarousel2 ============================================>
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 5,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// OwlCarousel2 ============================================>

// Ejs =====================================================>
function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById('formName').value,
    to_name: document.getElementById('toName').value,
    message: document.getElementById('msg').value,
  };
  // emailjs.send("gmail", "template_0pxgqff", tempParams)
  emailjs
    .send('service_35j0zsw', 'template_0pxgqff')

    .then(function (res) {
      console.log('SUCCESS', res.status);
    });
}

// Ejs =====================================================>
