// When the document is ready, execute the following code
$(document).ready(function() {
    // Circle calculations
    // -------------------
    // Toggle circle calculations on click
    $("#circlePress").click(function() {
      // Slide toggle the circle calculations container
      $("#toggleCircle").slideToggle("slow");
    });
  
    // Calculate circle area and perimeter on button click
    $("#button1").click(function() {
      // Define pi constant
      let pi = 3.14;
      // Get user input for circle radius
      let userRadiusCircle = parseFloat($("#userInput").val());
      // Calculate circle area
      let circleArea = pi * (userRadiusCircle ** 2);
      // Calculate circle perimeter
      let circlePerimeter = 2 * pi * userRadiusCircle;
      // Display calculated values in input fields
      $("#circleArea").val(circleArea);
      $("#circlePerimeter").val(circlePerimeter);
    });
  
    // Rectangle calculations
    // ----------------------
    // Toggle rectangle calculations on click
    $("#rectanglePress").click(function() {
      // Slide toggle the rectangle calculations container
      $("#toggleRectangle").slideToggle("slow");
    });
  
    // Calculate rectangle area and perimeter on button click
    $("#button2").click(function() {
      // Get user input for rectangle length and width
      let userLengthRectangle = parseFloat($("#rectangleInputLength").val());
      let userWidthRectangle = parseFloat($("#rectangleInputWidth").val());
      // Calculate rectangle area
      let rectangleArea = userLengthRectangle * userWidthRectangle;
      // Calculate rectangle perimeter
      let rectanglePerimeter = 2 * (userLengthRectangle + userWidthRectangle);
      // Display calculated values in input fields
      $("#rectangleArea").val(rectangleArea);
      $("#rectanglePerimeter").val(rectanglePerimeter);
    });
  
    // Square calculations
    // -----------------
    // Toggle square calculations on click
    $("#squarePress").click(function() {
      // Slide toggle the square calculations container
      $("#toggleSquare").slideToggle("slow");
    });
  
    // Calculate square area and perimeter on button click
    $("#button3").click(function() {
      // Get user input for square side length
      let userSideSquare = parseFloat($("#squareInputSide").val());
      // Calculate square area
      let squareArea = userSideSquare ** 2;
      // Calculate square perimeter
      let squarePerimeter = 4 * userSideSquare;
      // Display calculated values in input fields
      $("#squareArea").val(squareArea);
      $("#squarePerimeter").val(squarePerimeter);
    });
  
    // Triangle calculations
    // --------------------
    // Toggle triangle calculations on click
    $("#trianglePress").click(function() {
      // Slide toggle the triangle calculations container
      $("#toggleTriangle").slideToggle("slow");
    });
  
    // Calculate triangle area on button click
    $("#button4").click(function() {
      // Get user input for triangle base and height
      let userBaseTriangle = parseFloat($("#triangleInputBase").val());
      let userHeightTriangle = parseFloat($("#triangleInputHeight").val());
      // Calculate triangle area
      let triangleArea = (userBaseTriangle * userHeightTriangle) / 2;
      // Display calculated value in input field
      $("#triangleArea").val(triangleArea);
    });
  });