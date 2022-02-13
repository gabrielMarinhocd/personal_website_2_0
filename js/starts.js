// document.getElementById("MyElement").classList.add('MyClass');

// document.getElementById("MyElement").classList.remove('MyClass');

// if ( document.getElementById("MyElement").classList.contains('MyClass') );

const star01 = document.getElementById("star-01");
const star02 = document.getElementById("star-02");
const star03 = document.getElementById("star-03");
const star04 = document.getElementById("star-04");
const star05 = document.getElementById("star-05");

const Avaliar = (data) => {
    if(data == 1){
        star01.classList.add("fas");
        star01.classList.remove("far");

        star02.classList.remove("fas");
        star02.classList.add("far");
        star03.classList.remove("fas");
        star03.classList.add("far");
        star04.classList.remove("fas");
        star04.classList.add("far");
        star05.classList.remove("fas");
        star05.classList.add("far");
    }else if (data == 2){
        star01.classList.add("fas");
        star01.classList.remove("far");
        star02.classList.add("fas");
        star02.classList.remove("far");
        
        star03.classList.remove("fas");
        star03.classList.add("far");
        star04.classList.remove("fas");
        star04.classList.add("far");
        star05.classList.remove("fas");
        star05.classList.add("far");
    }else if (data == 3){
        star01.classList.add("fas");
        star01.classList.remove("far");
        star02.classList.add("fas");
        star02.classList.remove("far");
        star03.classList.add("fas");
        star03.classList.remove("far");

        star04.classList.remove("fas");
        star04.classList.add("far");
        star05.classList.remove("fas");
        star05.classList.add("far");
    }else if (data == 4) {
        star01.classList.add("fas");
        star01.classList.remove("far");
        star02.classList.add("fas");
        star02.classList.remove("far");
        star03.classList.add("fas");
        star03.classList.remove("far");
        star04.classList.add("fas");
        star04.classList.remove("far");

        star05.classList.remove("fas");
        star05.classList.add("far");
    } else if (data == 5){
        star01.classList.add("fas");
        star01.classList.remove("far");
        star02.classList.add("fas");
        star02.classList.remove("far");
        star03.classList.add("fas");
        star03.classList.remove("far");
        star04.classList.add("fas");
        star04.classList.remove("far");
        star05.classList.add("fas");
        star05.classList.remove("far");
    }
}


Avaliar();
