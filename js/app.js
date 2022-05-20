const row = document.querySelector('[class="row gap-3"]');

for (i = 1; i <= 100; i++) {

    if (i % 3 === 0 & i % 5 === 0) {
        console.log('FrizzBuzz');
        row.innerHTML += `<div class="col frizz-buzz">${'FrizzBuzz'}</div>`;
    } else if (i % 3 === 0) {
        console.log('Frizz');
        row.innerHTML += `<di class="col frizz">${'Frizz'}</di>`;

    } else if (i % 5 === 0) {
        console.log('Buzz');
        row.innerHTML += `<div class="col buzz">${'Buzz'}</div>`;

    } else {
        console.log(i);
        row.innerHTML += `<div class="col number">${i}</div>`;

    }
    
}