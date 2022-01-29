
for (let i = 1; i <= 5; i++){
    let education = document.querySelector(`#ed-0${i}`);
    
    education.addEventListener('click', () =>{
        let iten = document.querySelector(`.iten-0${i}`);
        let event = iten.style.display;
        if (event == 'none'){
            iten.style.display = "block";
            education.style.transform = 'rotate(180deg)';
        }else{
            iten.style.display = "none";
            education.style.transform = 'rotate(0deg)';
        }
        
    })
}


// const openEducation = () =>{
//     education.style.display = 'none';
// }