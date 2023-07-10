let input = document.querySelector('.todo');
let number = 0;

document.querySelector('#submit').addEventListener('submit', function(){
    if(input.value != ''){
        let mylist= document.createElement('li');
        mylist.innerHTML= input.value;

        let tasks= document.querySelector('#tasks ul');
        tasks.appendChild(mylist);

        input.value= '';

        number++;

        document.querySelector('#count').innerHTML= number;

    }
    else{
        alert('please type something...');
    }
    
    
});