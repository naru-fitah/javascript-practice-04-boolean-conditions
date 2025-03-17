// 01

function canEnterClub(age, hasID) {
    return age >= 18 && hasID === true
    ? `Welcome!`
    : `Access denied`
}

console.log(canEnterClub(18, true));  // ✅ "Welcome!"
console.log(canEnterClub(20, false));  // ❌ "Access denied."
console.log(canEnterClub(17, true)); // ❌ "Access denied."

// 02

function hasWiFiAccess(isGuest, hasCode) {
    return isGuest === true || hasCode === true
    ? `You have WiFi access`
    : `No WiFi access`
}

console.log(hasWiFiAccess(true, false));  // ✅ "You have WiFi access."
console.log(hasWiFiAccess(false, true));  // ✅ "You have WiFi access."
console.log(hasWiFiAccess(false, false)); // ❌ "No WiFi access."

// 03

function getDiscount(isVIP, hasCoupon) {
    return isVIP === true || hasCoupon === true
    ? `Discount applied!`
    : `No discount available.`
}

console.log(getDiscount(true, false));  // ✅ "Discount applied!"
console.log(getDiscount(false, true));  // ✅ "Discount applied!"
console.log(getDiscount(false, false)); // ❌ "No discount available."

// 04

function canLogIn(password, isBanned) {
    return password === "1234" && isBanned === false
    ? `Login successful.`
    : password !== "1234"
    ? `Incorrect password.`
    : `Access denied.`
}

console.log(canLogIn("1234", false));  // ✅ "Login successful."
console.log(canLogIn("wrong", false)); // ❌ "Incorrect password."
console.log(canLogIn("1234", true));   // ❌ "Access denied."

// 05

console.log(!!"hello");  // true
console.log(!!0);        // false
console.log(!!" ");      // true
console.log(!!null);     // false
console.log(!!undefined); //false
console.log(!!1);        // true
console.log(!!false);    // false
console.log(!!"false");  // true
