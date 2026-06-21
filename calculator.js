/* Developed by Amin Arjmand
Email: aminarj2000@gmail.com | Site: aminarjmand.com | GitHub: @sibche2013 
*/

$(document).ready(function () {
    var inputX = $("#x");
    var inputY = $("#y");
    var selectOp = $("#operators");
    var resDisplay = $(".res");
    var opDisplay = $(".operator");

    // Map operators to textual representation for display
    var opNames = {
        "+": "Plus",
        "-": "Minus",
        "*": "Multiplication",
        "/": "Division"
    };

    // Event listener for inputs and select changes instead of high-frequency interval
    $("#x, #y, #operators").on("input change", function () {
        var xStr = inputX.val();
        var yStr = inputY.val();
        var operator = selectOp.val();

        // Display current operator name
        opDisplay.text(opNames[operator]);

        // If fields are empty, keep result at 0
        if (xStr === "" || yStr === "") {
            resDisplay.text("0");
            return;
        }

        var x = Number(xStr);
        var y = Number(yStr);
        var result = 0;

        switch (operator) {
            case "+":
                result = x + y;
                break;
            case "-":
                result = x - y;
                break;
            case "*":
                result = x * y;
                break;
            case "/":
                if (y === 0) {
                    resDisplay.text("Cannot divide by zero");
                    return;
                }
                result = x / y;
                break;
        }

        // Format numbers nicely if they are decimals (max 4 decimal places)
        if (result % 1 !== 0) {
            result = parseFloat(result.toFixed(4));
        }

        resDisplay.text(result);
    });
});
