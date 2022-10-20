const button = document.querySelector('#button');
const text = document.querySelector('#text-input');
let checkmark = document.querySelector('.checkmark');


// button does work when clicked
button.addEventListener('click', () => {
    palindrome(text.value);
})


function reset() {
    checkmark.classList.remove('text-success', 'text-danger');
    // checkmark.innerHTML = "";
}



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
        checkmark.classList.add('text-success');
        checkmark.classList.remove('text-danger');
        checkmark.innerHTML = "Yes";
        return true;
    } else {
        console.log("Not, it's not a palindrome.")
        checkmark.classList.add('text-danger');
        checkmark.classList.remove('text-success');
        checkmark.innerHTML = "No";
        return false;
    }
}