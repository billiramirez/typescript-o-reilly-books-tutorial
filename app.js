var userInput;
var userName;
userInput = 4;
userInput = "Max";
/**
 * unknown: If you want to use this type, you should be extremly sure you don't know
 * the type of the value. You cannot asign a unkown value to another type without runtime
 * type checking.
 *
 * any: this is more flexible
 */
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError("An error ocurred", 500);
