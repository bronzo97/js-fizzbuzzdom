const container = document.querySelector('[class="container"]');

for (i = 1; i <= 100; i++) {

    if (i % 3 === 0 & i % 5 === 0) {
        console.log('FrizzBuzz');
        container.innerHTML += `${'FrizzBuzz'}`;
    } else if (i % 3 === 0) {
        console.log('Frizz');
        container.innerHTML += `${'Frizz'}`;

    } else if (i % 5 === 0) {
        console.log('Buzz');
        container.innerHTML += `${'Buzz'}`;

    } else {
        console.log(i);
        container.innerHTML += `${i}`;

    }
    
}