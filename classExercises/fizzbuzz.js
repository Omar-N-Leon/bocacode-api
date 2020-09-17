for (i=1; i < 101; i++){

    let fizz = i%3;
    let buzz = i%5;
    
    if (fizz === 0 && buzz === 0) {
        console.log('fizzbuzz')
    } else if (buzz === 0){
        console.log('buzz')
    } else if (fizz === 0){
        console.log('fizz')
    } else {
        console.log(i)
    }
}