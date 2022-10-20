const button = document.querySelector('#button');

// button does work when clicked
button.addEventListener('click', () => {
    console.log("it works")
})



function palindrome(str) {

    // Remove unwanted chars and return alphanumeric str
    let newStr = str
        .toLowerCase()
        .match(/[a-z0-9]/gi)
        .join("");

    // Reverse the newStr
    let revStr = newStr
        .split("")
        .reverse()
        .join("");

    // Check if string is a palindrome
    if (newStr === revStr) {
        console.log("Yes, it's a palindrome.")
        return true;
    } else {
        console.log("Not, it's not a palindrome.")
        return false;
    }
}

palindrome("A man, a plan, a canal. Panama");
