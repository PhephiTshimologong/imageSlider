const  prevBtn = document.querySelector('.prev');
const  nextBtn  = document.querySelector('.next');
const gallaryImgs = document.querySelectorAll('.gallery-img');//nodelist sudo array
let currentlySelected = 0;

prevBtn.addEventListener('click', function(){
    gallaryImgs[currentlySelected].classList.remove('active');
    currentlySelected--;
    gallaryImgs[currentlySelected].classList.add('active');
    prevBtn.disabled = false;
    
    if(currentlySelected === 0){
        nextBtn.disabled = true;
    }

});

nextBtn.addEventListener('click', function(){
    gallaryImgs[currentlySelected].classList.remove('active');
    currentlySelected++;
    gallaryImgs[currentlySelected].classList.add('active');
    prevBtn.disabled = false;
    
    if(gallaryImgs.length === currentlySelected + 1){
        nextBtn.disabled = true;
    }
});