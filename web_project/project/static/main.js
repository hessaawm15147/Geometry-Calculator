$(document).ready(function(){
    $("#circlePress").click(function(){
        $("#toggleCircle").slideToggle("slow");
    });
    $("#button1").click(function(){
        let pi = 3.14;
        let userQatarCircle = parseFloat($("#userInput").val());
        let circleArea = pi * (userQatarCircle ** 2);
        let circlePerimeter = 2 * pi * userQatarCircle;
        $("#circleArea").val(circleArea);
        $("#circlePerimeter").val(circlePerimeter);
    });
    $("#rectanglePress").click(function(){
        $("#toggleRectangle").slideToggle("slow");
    });
    $("#button2").click(function(){
        let userLengthRectangle = parseFloat($("#rectangleInputLength").val());
        let userWidthRectangle = parseFloat($("#rectangleInputWidth").val());
        let rectangleArea = userLengthRectangle * userWidthRectangle;
        let rectanglePerimeter = 2 * (userLengthRectangle + userWidthRectangle);
        $("#rectangleArea").val(rectangleArea);
        $("#rectanglePerimeter").val(rectanglePerimeter);
    });
    $("#squarePress").click(function(){
        $("#toggleSquare").slideToggle("slow");
    });
    $("#button3").click(function(){
        let userSideSquare = parseFloat($("#squareInputSide").val());
        let squareArea = userSideSquare ** 2;
        let squarePerimeter = 4 * userSideSquare;
        $("#squareArea").val(squareArea);
        $("#squarePerimeter").val(squarePerimeter);
    });
    $("#trianglePress").click(function(){
        $("#toggleTriangle").slideToggle("slow");
    });
    $("#button4").click(function(){
        let userBaseTriangle = parseFloat($("#triangleInputBase").val());
        let userHeightTriangle = parseFloat($("#triangleInputHeight").val());
        let triangleArea = (userBaseTriangle * userHeightTriangle) / 2;
        $("#triangleArea").val(triangleArea);
    });
});
