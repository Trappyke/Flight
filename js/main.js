document.getElementById('booking-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var form = event.target;
      var formData = new FormData(form);

      var booking = {};
      for (var entry of formData.entries()) {
        booking[entry[0]] = entry[1];
      }

      // You can do something with the booking object here, such as send it to a server

      // For this example, we will just log the booking to the console
      console.log(booking);

      // You can also redirect the user to another page or show a confirmation message

      // Reset the form
      form.reset();
    });