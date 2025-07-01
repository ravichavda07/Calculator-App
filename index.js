let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = parseFloat(eval(string)).toFixed(2); 
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error";
            }
        }
        else if (e.target.innerHTML == 'c') {
            string = "";
            document.querySelector('input').value = string;
        } 
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
