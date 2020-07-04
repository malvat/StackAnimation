var animatedClick = true;
var count = 0;
var limits = [400,310,220];
var elements = [];
var top1 = [];

window.onload = function() {
    var e1 = document.getElementById('stack1');
    var e2 = document.getElementById('stack2');
    var e3 = document.getElementById('stack3');
    elements = [e1, e2, e3];
    top1 = document.getElementById('top');
}


function animateStack() {
    if(animatedClick && count < limits.length) {
        document.getElementById('extra_information').innerHTML = " ";
        addCode();
        document.getElementById('top_information').innerHTML = "TOP &rarr; " + count;
        if(count==0) {
            document.getElementById('array_information').innerHTML = "ARRAY &rarr; [1, 0, 0]";
        } else if(count == 1) {
            document.getElementById('array_information').innerHTML = "ARRAY &rarr; [1, 2, 0]";
        } else if(count == 2) {
            document.getElementById('array_information').innerHTML = "ARRAY &rarr; [1, 2, 3]";
        }
        animatedClick = false;        
        elements[count].style.opacity = 1;
        var temp = 0;
        
        var startFalling = false;
        id1 = setInterval(moveX, 0.5);
        elements[count].style.top = "0px";
        function moveX() {
            if(temp<200) {
                temp++;
                
                elements[count].style.left = temp + 'px';
            } else{
                clearInterval(id1);
                temp = 0;
                id = setInterval(move, 0.5);
            }
        }
 
        function move() {
            
            if(temp<limits[count]) {
                
                temp+= 1;
                elements[count].style.top = temp +'px';
            } else {
                clearInterval(id);
                animatedClick = true;
                if(count==0) {
                    top1.style.opacity = 1;
                    top1.style.top = limits[0] + 35 +'px';
                } else {
                    temp = limits[count-1]+35;
                    var topAnimation = setInterval(moveTop, 0.5);
                }
                count++;
            }

            function moveTop() {
                if(temp>=limits[count-1]+35) {
                    temp--;
                    top1.style.top = temp + 'px';
                } else {
                    clearInterval(topAnimation);
                }
            }
        }

        
    } else if(count >= limits.length) {
        document.getElementById('extra_information').innerHTML = "Stack is Full";
    }
}

function remove() {
    if(animatedClick && count>0) {
        document.getElementById('extra_information').innerHTML = " ";
        removeCode();
        document.getElementById('top_information').innerHTML = "TOP &rarr; " + (count-2);

        if(count-2==0) {
            document.getElementById('array_information').innerHTML = "ARRAY &rarr; [1, 0, 0]";
        } else if(count-2 == 1) {
            document.getElementById('array_information').innerHTML = "ARRAY &rarr; [1, 2, 0]";
        } else if(count-2 == 2) {
            document.getElementById('array_information').innerHTML = "ARRAY &rarr; [1, 2, 3]";
        }

        animatedClick = false;
        var temp = 200;
        var op = 1;
        id = setInterval(move, 0.5)
        function move() {
            if(temp <= 500) {
                temp++;
                elements[count-1].style.left = temp + 'px';
                if(temp <= 470 && op>=0) {
                    op -= 0.01;
                    elements[count-1].style.opacity = op;
                }
            } else {
                clearInterval(id);
                count--;
                elements[count].style.opacity=0;
                animatedClick = true;
                if(count<=0) {
                    top1.style.opacity = 0;
                } else {
                    temp = limits[count]+35;
                    topAnimation = setInterval(moveTop, 0.5);
                }
            }
        }
    } else if(count <= 0) {
        document.getElementById('extra_information').innerHTML = "Stack is Empty";
    }

    function moveTop() {
        if(temp<=limits[count-1]+35) {
            temp++;
            top1.style.top = temp + 'px';
        } else {
            clearInterval(topAnimation);
        }
    }
}


function addCode() {
    var container = document.getElementById('code_sample');
    container.innerHTML = '<h1> Push Operation </h1>' +
    'if (stack not full) : </br>'+
    '&emsp;top&larr; ' + 
    'top + 1; </br>'+ 
    '&emsp;stack[top] &larr; value; </br>' +
    'else: </br>' +
    '&emsp;error message;';

}

function removeCode() {
    var container = document.getElementById('code_sample');
    container.innerHTML = '<h1> POP Operation </h1>' +
    'if (stack not empty) : </br>'+
    '&emsp;top &larr; ' + 
    'return stack[top]; </br>' +
    '&emsp;top&larr;top - 1; </br>'+ 
    'else: </br>' +
    '&emsp;error message;';
}

function introductionCode() {

}