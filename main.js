const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
	e.preventDefault();
})

function comparar() {
    let tn1 = document.getElementById('txtn1').value;
    let tn2 = document.getElementById('txtn2').value;
    console.log(tn1, tn2)
    if (parseInt(tn1) > parseInt(tn2)){
        window.alert(`O número: ${tn1} é maior que ${tn2}`);
    } else {
        window.alert(`O número: ${tn1} é menor que ${tn2}`);
    }
}

