// task1
var membershipType = "Premium";
var accessMessage;
if (membershipType === "Premium") {
    accessMessage = "You have access to all books, including exclusive content.";
} else if (membershipType === "Standard") {
    accessMessage = "You have access to free books and discounted paid books.";
} else if (membershipType === "Basic") {
    accessMessage = "You have access to free books.";
} else {
    accessMessage = "Invalid membership type. Please choose a valid membership.";
}
console.log(accessMessage);



// task1
var membershipType = "Premium";
var accessMessage;
if (membershipType === "Premium") {
    accessMessage = "You have access to all books, including exclusive content.";
} else if (membershipType === "Standard") {
    accessMessage = "You have access to free books and discounted paid books.";
} else if (membershipType === "Basic") {
    accessMessage = "You have access to free books.";
} else {
    accessMessage = "Invalid membership type. Please choose a valid membership.";
}
console.log(accessMessage);
discountRate = 0; // No discount
basePrices = 12;
break;
case (purchaseAmount >= 100 && purchaseAmount <= 500);
discountRate = regularDiscount5; // 5% discount
basePrices = 12;
break;
case (purchaseAmount > 500):
discountRate = regularDiscount10; // 10% discount
basePrices = 0;
break;
default:
console.error("Invalid purchase amount for Regular membership.");
basePrices = 12;
break;
}
break;
case 'VIP';
switch (true) {
case (purchaseAmount < 100):
discountRate = vipDiscount10; // 10% discount
basePrices = 15;
break;
case (purchaseAmount >= 100 && purchaseAmount <= 500):
discountRate = vipDiscount15; // 15% discount
basePrices = 15;
break;
case (purchaseAmount > 500):
discountRate = vipDiscount20; // 20% discount
basePrices = 15;
break;
default:
console.error("Invalid purchase amount for VIP membership.");
basePrices = 0;
break;
}
break;
default:
console.error("Invalid membership status. Must be 'Regular' or 'VIP'.");
basePrices = 0;
break;
}

// Calculate final price if basePrice is valid
let finalPrices = basePrices > 0 ? purchaseAmount * (1 - discountRate) : 0;

// Output the result
if (basePrices > 0) {
console.log(finalPrices);
} else {
console.log("Unable to determine the final price due to invalid inputs.");
}



// task3

const gpa = 3.7;
const extracurricularActivities = 0;
const communityServiceHours = 0;

switch (true) {
    case (gpa >= 3.5):
        console.log('Merit-Based Scholarship');
        break;  
}
switch (true) {
    case (extracurricularActivities >= 2 && gpa >= 3.0):
        console.log('Leadership Scholarship');
        break;
}

switch (true) {
    case (communityServiceHours >= 100 && gpa >= 2.5):
        console.log('Community Service Scholarship');
        break;
    default: console.log("Not Eligible for Scholarship")
        break;
}



// task4
const dayOfWeek = 'Saturday';
const customerAge = 70;

// Ticket prices and discounts
const weekdayPrice = 12;
const weekendPrice = 15;
const seniorDiscountWeekday = 0.5; // 50%
const childDiscountWeekday = 0.5; // 50%
const seniorDiscountWeekend = 0.3; // 30%
const childDiscountWeekend = 0.3; // 30%

// Determine the base price
let basePrice = 0;

if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
    basePrice = weekendPrice;
} else if (dayOfWeek === 'Monday' || dayOfWeek === 'Tuesday' || dayOfWeek === 'Wednesday' || dayOfWeek === 'Thursday' || dayOfWeek === 'Friday') {
    basePrice = weekdayPrice;
} else {
    console.error("Invalid day of the week.");
    basePrice = 0; // Invalid base price due to incorrect day
}

// Apply age-based discounts if the base price is valid
let finalPrice = basePrice;

if (basePrice > 0) {
    if (customerAge >= 65) {
        // Senior discount
        finalPrice *= (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') ? (1 - seniorDiscountWeekend) : (1 - seniorDiscountWeekday);
    } else if (customerAge < 12) {
        // Child discount
        finalPrice *= (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') ? (1 - childDiscountWeekend) : (1 - childDiscountWeekday);
    }
    
}

// Output the result
if (basePrice > 0) {
    console.log(finalPrice);
} else {
    console.log("Unable to determine ticket price due to invalid inputs.");
}



// task5
const userAge = 20;
const participantsRegistered = 95;
const userEmail = 'example@example.com';
if (userAge < 18) {
    console.log("Registration denied: You must be 18 years or older to register.");
} else if (participantsRegistered >= 100) {
    console.log("Registration denied: The event is full. No more registrations are accepted.");
} else {
    console.log("Registration successful!");
}




// task6
   
var teaType = 'Masala';
var addOn = 'Extra Milk';
switch (teaType) {
    case 'Regular':
        basePrice = 15;
        break;
    case 'Masala':
        basePrice = 20;
        break;
    case 'Ginger':
        basePrice = 25;
        break;
    default:
        console.log("order first");
        break;
}

switch (addOn) {
    case 'Extra Sugar':
        extraP = 2.50;
        break;
    case 'Extra Milk':
        extraP = 5;
        break;
    case 'No Add-ons':
        extraP = 0;
        break;
    default:
        console.log("order first");     
        break;
}
let totalPrice = basePrice + extraP;

if (basePrice > 0) {
    console.log(totalPrice);
} else {
    console.log("Konu bro");
}


