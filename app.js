function diseaseGreeting(){
    let month = prompt("What month were you born? (1-12):  ");
    console.print(month);
    while (month < 0 || month > 12){
        month = prompt("Incorrect input, please only enter a number 1-12:  ");
    }

    let disease;

    if (month==1) {
        disease = 'hypertention and cardiomyopathy';
    } else if (month==2){
        disease = 'lung and bronchial cancer';   
    } else if (month==3){
        disease = 'cardiac failure, mitral valve disorder and arrythmia';
    } else if (month==4){
        disease = 'angina';
    } else if (month==5){
        disease = '...no increased likelihood of disease! You\'re lucky!';
    } else if (month==6){
        disease = 'preinfarction syndrome';
    } else if (month==7){
        disease = 'athsma';
    } else if (month==8){
        disease = '...no increased likelihood of disease! You\'re lucky!';
    } else if (month==9){
        disease = 'vomiting';
    } else if (month==10){
        disease = 'insect bites, STI\'s, chest infections';
    } else if (month==11){
        disease = '...actually never mind! You don\'t have an increased likelyhood of disease, but actually a decreased likelyhood of developing lung cancer and arrythmia mitral valve disorder. Cool!'; 
    } else if (month==12){
        disease = 'bruising';
    } else {
        disease = '...frankly, we\'re not sure, you didn\'t give us an actual month!';
    }

    document.write('You were born in a month that gives you a higher likelyhood to develope ' + disease + '. Studies have shown that almost every birth month gives that person a higher likelyhood to develope a certain disease over their lifetime. Regardless of the disease you might end up getting, life is way better with a nicely remodeled kitchen! ');
}

function getName(){
    let n = prompt('What is your name?');
    while (n == ''){
        n = prompt('I promise it\'ll be worth it! Please, what is your name?');
    }
    return n;
}

function getRemodelPrice(){
    let price = prompt('If you WERE to remodel anything in your current home, how much would you want to spend? (0-200000):  ');
    while (price < 1 || price > 200001 || price == ''){
        price = prompt('Seriously! We\'re here to help. You\'re here because you\'re looking into remodeling a part of your home. Just give us an approximate amount you want to spend:  ');
    }
    return price;
}

function kitchenGreeting(){
    document.write(getName() + ', we can definitely try to get you a new kitchen for $' + getRemodelPrice() + '. If you\'re serious about figuring out how to get yourself a new kitchen based on your own terms and expectations, give us a call! Our contact info is on the bottom of the page');
}