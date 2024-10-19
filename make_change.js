"use strict";

const $ = selector => document.querySelector(selector);

const processEntry = () => {
    const userEntry = parseInt($("#cents").value);

    if (userEntry >= 0 && userEntry <= 99) {
        const makeChange = userEntry => {
            let changeDue = 0;
            $("#quarters").value = (userEntry - (userEntry % 25)) / 25;
            changeDue = userEntry % 25;
            $("#dimes").value = (changeDue - (changeDue % 10)) / 10;
            changeDue = changeDue % 10;
            $("#nickels").value = (changeDue - (changeDue % 5)) / 5;
            changeDue = changeDue % 5;
            $("#pennies").value = changeDue;
        };
        makeChange(userEntry);
    } 
    else {
        alert("Enter a number between 0 to 99");
    };
    $("#cents").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntry);
    $("#cents").focus();
}
)