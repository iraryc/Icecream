"use strict"

// This function calculates the total cost of the ice cream order
function calculateCost() {

    // Define the base price per scoop and additional price per scoop
    var basePricePerScoop = 2.25;
    var additionalPricePerScoop = 1.25;
    
    // Define the tax rate
    var taxRate = 0.08; // 8% tax rate
            
    // Get the number of scoops from the input field
    var numberOfScoops = parseInt(document.getElementById('numberOfScoops').value);
            
    // Get the selected toppings checkboxes
    var sprinklesCheckbox = document.getElementById('sprinklesCheckbox');
    var hotFudgeCheckbox = document.getElementById('hotFudgeCheckbox');
    var whippedCreamCheckbox = document.getElementById('whippedCreamCheckbox');
    var cherryCheckbox = document.getElementById('cherryCheckbox');
    var nutsCheckbox = document.getElementById('nutsCheckbox');
            
    // Calculate the total price of scoops based on the number of scoops
    var totalScoopPrice = basePricePerScoop + (numberOfScoops - 1) * additionalPricePerScoop;
    
    // Initialize the total topping price
    var totalToppingPrice = 0;
            
    // Add the price of each selected topping to the total topping price
    if (sprinklesCheckbox.checked) {
        totalToppingPrice += 0.50;
    }
    if (hotFudgeCheckbox.checked) {
        totalToppingPrice += 1.25;
    }
    if (whippedCreamCheckbox.checked) {
        totalToppingPrice += 0.25;
    }
    if (cherryCheckbox.checked) {
        totalToppingPrice += 0.25;
    }
    if (nutsCheckbox.checked) {
        totalToppingPrice += 0.25;
    }

    // Calculate the subtotal before tax
    var subTotal = totalScoopPrice + totalToppingPrice;
    
    // Calculate the tax amount
    var tax = subTotal * taxRate;
    
    // Calculate the total due including tax
    var totalDue = subTotal + tax;

    // Construct the HTML string to display the result
    var resultHtml = "<strong>Base Price:</strong> $" + totalScoopPrice.toFixed(2) + "<br>";
        resultHtml += "<strong>Tax:</strong> $" + tax.toFixed(2) + "<br>";
        resultHtml += "<strong>Total Due:</strong> $" + totalDue.toFixed(2);

    // Display the result in the HTML element with the ID 'result'
    document.getElementById('result').innerHTML = resultHtml;
}
