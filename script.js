$(document).ready(function () {

  let result = false;



  const handleValue = (value) => {
    if (value === "AC") {
      $("#screen input").val("")

    }
    else if (value === "DEL") {
      removeValue()

    }
    else if (value === "=") {
      showResult();
      result = true;

    }
    else {
      getValue(value);
    }
  }

  const getValue = (value) => {


    if (result) {
      if (value === "+" || value === "-" || value === "*" || value === "/") {
        $("#screen input").val(function (index, currentValue) {
          return currentValue + value;

        });

      }

      else if (value === "=") {
        $("#screen input").val("");
      }

      else {
        $("#screen input").val("");
        $("#screen input").val(function (index, currentValue) {
          return currentValue + value;
        });
      }

      result = false;

    }


    else {
      $("#screen input").val(function (index, currentValue) {
        if (currentValue === "") {
          if (value === ")" || value === "/" || value === "*") {
            return currentValue;
          }

        }


        return currentValue + value;

      });
    }


  };


  const removeValue = (value) => {
    let currentValue = $("#screen input").val();
    $("#screen input").val(currentValue.slice(0, -1))
  }


  const showResult = () => {
    let currentValue = $("#screen input").val()

    try {
      let finalValue = eval(currentValue)

      return $("#screen input").val(finalValue.toString());


    } catch (error) {
      $("#screen input").val("Invalid Input!");

    }
  }


  const buttons = [
    "AC", "DEL", "(", ")", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+",
  ];


  $.each(buttons, function (index, value) {

    let button = $('<input>', { type: 'button', value: value, id: value });
    button.on('click', function () {
      handleValue(value);
    });
    $("#keypad").append(button);
  });
});




