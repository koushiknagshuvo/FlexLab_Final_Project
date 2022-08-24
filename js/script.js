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

// Set the date we're counting down to
var countDownDate = new Date('Nov 30, 2022 15:37:25').getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById('demo').innerHTML =
    days + 'd : ' + +hours + 'h : ' + minutes + 'm : ' + seconds + 's ';

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);
