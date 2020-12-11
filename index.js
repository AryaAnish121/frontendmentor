// Selection

var submit = document.querySelector('.input-check');
var toggle = document.querySelector('.sun-moon');
var todoList = document.querySelector('.todo-list');
var input = document.querySelector('.header-input');
var itemsLeft = document.querySelector('.items-left');

// all

var refineAllDesc = document.querySelector('.refineAllDesc');
var refineAllMob = document.querySelector('.refineAllMob');

// active

var refineActiveDesc = document.querySelector('.refineActiveDesc'); 
var refineActiveMob = document.querySelector('.refineActiveMob');

// completed

var refineCompleteDesc = document.querySelector('.refineCompleteDesc'); 
var refineCompleteMob = document.querySelector('.refineCompleteMob');

// clear completed

var clear = document.querySelector('.clear');

// addEvent

var i = 0;

submit.addEventListener('click', function(e){
    e.preventDefault();

    var todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');
    todoDiv.classList.add('uncomplete');
    todoList.appendChild(todoDiv);

    var li = document.createElement('li');
    todoDiv.appendChild(li);
    li.classList.add('todoLi');

    var details = document.createElement('div');
    details.classList.add('details');
    li.appendChild(details);

    var button = document.createElement('button');
    details.appendChild(button);
    button.classList.add('circle');
    button.classList.add('circle-main');

    var img = document.createElement('img');
    img.src = "icon-check.svg";
    button.appendChild(img);

    var name = document.createElement('p');
    name.classList.add('todoName');
    name.innerHTML = input.value;
    details.appendChild(name);

    var cross = document.createElement('div');
    cross.classList.add('cross');
    li.appendChild(cross);

    var line1 = document.createElement('div');
    line1.classList.add('line');
    line1.classList.add('line1');
    cross.appendChild(line1);

    var line2 = document.createElement('div');
    line2.classList.add('line');
    line2.classList.add('line2');
    cross.appendChild(line2);

    var hr = document.createElement('hr');
    todoDiv.appendChild(hr);

    input.value = "";
    itemsLeft.innerHTML = $(".todo-list .uncomplete").length + " items left";

    button.addEventListener('click', function(){
        todoDiv.classList.toggle('uncomplete');
        todoDiv.classList.toggle('complete');
        itemsLeft.innerHTML = $(".todo-list .uncomplete").length + " items left";
    });
    
    refineAllDesc.addEventListener('click', function(){
        $(".todo-list .uncomplete").css("display", "initial");
        $(".todo-list .complete").css("display", "initial");
    });

    refineAllMob.addEventListener('click', function(){
        $(".todo-list .uncomplete").css("display", "initial");
        $(".todo-list .complete").css("display", "initial");
    });

    refineActiveDesc.addEventListener('click', function(){
        $(".todo-list .uncomplete").css("display", "initial");
        $(".todo-list .complete").css("display", "none");
    });

    refineActiveMob.addEventListener('click', function(){
        $(".todo-list .uncomplete").css("display", "initial");
        $(".todo-list .complete").css("display", "none");
    });
    
    refineCompleteDesc.addEventListener('click', function(){
        $(".todo-list .uncomplete").css("display", "none");
        $(".todo-list .complete").css("display", "initial");
    });
    
    refineCompleteMob.addEventListener('click', function(){
        $(".todo-list .uncomplete").css("display", "none");
        $(".todo-list .complete").css("display", "initial");
    });

    clear.addEventListener('click', function(){
        $(".todo-list .complete").remove();
    });

    cross.addEventListener('click', function(){
        $(this).parent().parent().remove();
        itemsLeft.innerHTML = $(".todo-list .uncomplete").length + " items left";
    });

});

toggle.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
});