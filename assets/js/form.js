$(document).ready(function() {

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;

  setProgressBar(current);


  $(".next").click(function() {

      console.log("test");

      var form = $("#msform");

      form.validate({
          errorElement: 'span',
          errorClass: 'help-block',
          highlight: function(element, errorClass, validClass) {
              $(element).closest('.form-group').addClass("has-error");
          },
          unhighlight: function(element, errorClass, validClass) {
              $(element).closest('.form-group').removeClass("has-error");
          },
          rules: {
              firstname: {
                  required: true,

              },
              middlename: {
                  required: false,
              },
              lastName: {
                  required: true,

              },
              emailid: {
                  required: true,
              },
              companyname: {
                  required: true,
              },
              name: {
                  required: true,
              },
              email: {
                  required: true,
              },
              address: {
                  required: true,
              },
              Whatsapp: {
                  required: true,
              },
              customertype: {
                  required: true,
              },
              Country: {
                  required: true,
              },
              inputState: {
                  required: true,
              },
              District: {
                  required: true,
              },
              Zipcode: {
                  required: true,
              },
              CommodityNature: {
                  required: true,
              },
              commodity: {
                  required: true,
              },
              hsncode: {
                  required: true,
              },
              unnumber: {
                  required: true,
              },
              Estimated_Total_Weight: {
                  required: true,
              },
              Estimated_Volumes: {
                  required: true,
              },
              Estimated_Date_Of_Hip: {
                  required: true,
              },
              remarks: {
                  required: true,
              },
              shippingmode_1: {
                  required: true,
              },
              shippingtype: {
                  required: true,
              },
              container_type: {
                  required: true,
              },
              container_size: {
                  required: true,
              },
              quantities_2: {
                  required: true,
              },
              country_of_origin: {
                  required: true,
              },
              place_of_receipt: {
                  required: true,
              },
              port_of_loading: {
                  required: true,
              },
              country_of_destination: {
                  required: true,
              },
              port_of_discharge: {
                  required: true,
              },
              place_of_delivery: {
                  required: true,
              },
              freignt: {
                  required: true,
              },


          },
          messages: {
              firstname: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",

              },
              middlename: {
                  required: "<p style='color:green; margin-top: -20px;'>Optional</h1>",
              },
              lastName: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",

              },
              emailid: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              companyname: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              name: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              email: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              address: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              Whatsapp: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              customertype: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              Country: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              inputState: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              District: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              Zipcode: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              CommodityNature: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              commodity: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              hsncode: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              unnumber: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              Estimated_Total_Weight: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              Estimated_Volumes: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              Estimated_Date_Of_Hip: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              remarks: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              shippingmode_1: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              shippingtype: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              container_type: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              container_size: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              quantities_2: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              country_of_origin: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              place_of_receipt: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              port_of_loading: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              country_of_destination: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              port_of_discharge: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              place_of_delivery: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
              freignt: {
                  required: "<p style='color:red; margin-top: -20px;'>Required</h1>",
              },
          }
      });

      current_fs = $(this).parent();
      next_fs = $(this).parent().next();


      if (form.valid() === true) {

      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({ opacity: 0 }, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                  'display': 'none',
                  'position': 'relative'
              });
              next_fs.css({ 'opacity': opacity });
          },
          duration: 500
      });

      setProgressBar(++current);

  }
      
  });

  $(".previous").click(function() {

      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();

      //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

      //show the previous fieldset
      previous_fs.show();

      //hide the current fieldset with style
      current_fs.animate({ opacity: 0 }, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                  'display': 'none',
                  'position': 'relative'
              });
              previous_fs.css({ 'opacity': opacity });
          },
          duration: 500
      });
      setProgressBar(--current);
  });

  function setProgressBar(curStep) {
      var percent = parseFloat(100 / steps) * curStep;
      percent = percent.toFixed();
      $(".progress-bar")
          .css("width", percent + "%")
  }

  // $(".submit").click(function() {
  //     return true;
  // })

});