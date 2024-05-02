const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
	e.preventDefault();
})

function comparar() {
    let tn1 = document.getElementById('txtn1').value;
    let tn2 = document.getElementById('txtn2').value;
    if (parseInt(tn1) < parseInt(tn2)){
        window.alert(`O número: ${tn2} é maior que ${tn1}`);
    } else {
        window.alert(`O número: ${tn2} é menor que ${tn1}`);
    }
}

