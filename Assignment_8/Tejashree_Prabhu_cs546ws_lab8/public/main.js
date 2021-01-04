module.exports = {
    isPalindrome(text) {
        if (text === undefined)
            return;

        var originalString = text.toLowerCase().replace(/[^\w]|_/g, "");
        var reversedString = text.toLowerCase().replace(/[^\w]|_/g, "").split("").reverse().join("");

        if (originalString == reversedString)
            return true;

        else
            return false;
    }
}