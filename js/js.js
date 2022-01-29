const education = document.querySelector('#ced-06');
console.log(education);

education.addEventListener('click', () =>{
    const iten = document.querySelector(".box-content");
    let event = iten.style.display;
    if (event == 'none'){
        iten.style.display = "block";
    }else{
        iten.style.display = "none";
    }
    
    console.log( iten.style.display );
})

// const openEducation = () =>{
//     education.style.display = 'none';
// }