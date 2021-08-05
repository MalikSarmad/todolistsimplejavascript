let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('input');//input as p
    var edit = document.createElement('button');
    var del = document.createElement('button');
    var done = document.createElement('button');


    paragraph.setAttribute('type','text');//text
    if(inputField.value !== ''){
        paragraph.value = inputField.value;
    
    

    edit.setAttribute('type','button');//edit button
    edit.setAttribute('value','Edit');
    edit.innerText = "Edit";  

    del.setAttribute('type','button');//del button
    del.setAttribute('value','del');
    del.innerText = "Del";

    done.setAttribute('type','button');//done button
    done.setAttribute('value','done');
    done.innerText = "Done";
    
    //editInput.type = "text";
     //paragraph.classList.add('paragraph-styling');
    //editInput.innerText = inputField.value;//extra
    //paragraph.innerText = inputField.value;
    
    toDoContainer.appendChild(paragraph);
    edit.classList.add("button");
    del.classList.add("button");
    done.classList.add("button");
    toDoContainer.appendChild(edit);
    toDoContainer.appendChild(del);
    toDoContainer.appendChild(done);
    //toDoContainer.appendChild(editInput);

    inputField.value = "";


    edit.addEventListener('click',function(){
        paragraph.value = "";
        // let str = paragraph.value;
        // let arr = str.split(',');
       // paragraph.value = inputField.value;

    })

    // paragraph.addEventListener('click', function(){
    //     paragraph.style.textDecoration = "line-through";
    // })
    // paragraph.addEventListener('dblclick', function(){
    //     toDoContainer.removeChild(paragraph);
    // })

    del.addEventListener('click',() => {
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(edit);
        toDoContainer.removeChild(del);
        toDoContainer.removeChild(done);
    })
    done.addEventListener('click',() => {
        paragraph.style.textDecoration = "line-through";
        paragraph.disabled = true;
        done.disabled = true;
    })
}
else{
    alert("You must write something!");
}
})

