$(document).ready(function () {

  const handleValue = (value) => {
    if (value === "AC") {
      $("#screen input").val("")
    }
    else if (value === "DEL") {
      removeValue()

    }
    else if (value === "=") {
      showResult();
    }
    else {
      getValue(value);
    }
  }

  const getValue = (value) => {
    $("#screen input").val(function (index, currentValue) {
      return currentValue + value;
    });
  };


  const removeValue = (value) => {
    let currentValue = $("#screen input").val();
    $("#screen input").val(currentValue.slice(0, -1))
  }


  const showResult = () => {
    let currentValue = $("#screen input").val()
      let finalValue = eval(currentValue)
      $("#screen input").val(finalValue.toString());
  }


  const buttons = [
    "AC", "DEL", "(", ")", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+",
  ];

  let myValue;

  $.each(buttons, function (index, value) {

    let button = $('<input>', { type: 'button', value: value, id: value });
    button.on('click', function () {
      handleValue(value);
    });
    $("#keypad").append(button);
  });
});




