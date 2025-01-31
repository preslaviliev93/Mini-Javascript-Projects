document.addEventListener("DOMContentLoaded", function(){


    const generateButton = document.getElementById("generate-button");
    const passwordDisplayField = document.getElementById("password-field");
    const copyButton = document.getElementById("copy-button");

    function generateRandomPassword(length=30){
        let password = '';

        // First and last printable ASCII characters
        const asciiStart = 33;
        const asciiEnd = 126;

        for (let i = 0; i < length; i++){
            const randomAscii = Math.floor(Math.random() * (asciiEnd - asciiStart + 1)) + asciiStart;
            password += String.fromCharCode(randomAscii);
        }
        return password;
    }

    generateButton.addEventListener("click", function(){
        console.log(`Button clicked!`);
        const pwd = generateRandomPassword();
        passwordDisplayField.value = pwd;
    })

    copyButton.addEventListener("click", function(){
        passwordDisplayField.select();
        passwordDisplayField.setSelectionRange(0, 99999); /*For mobile devices*/
        navigator.clipboard.writeText(passwordDisplayField.value);
    })
})