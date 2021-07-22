var up = document.getElementById('up');
var down = document.getElementById('down');
var right = document.getElementById('right');
var left = document.getElementById('left');
var keys = document.querySelector('.rectangle-btn');
var messages = document.querySelector('.rectangle-messages');
console.log(keys, messages);


var combination = [3, 0, 2, 3, 0, 1, 2, 3, 1];
var arrayWithElements = new Array();

function clickListener(e) 
{   
    
    var clickedElement=(window.event)
                        ? window.event.srcElement
                        : e.target,
        tags=document.getElementsByTagName(clickedElement.tagName);

    for(var i=0;i<tags.length;++i)
    {
      if(tags[i]==clickedElement)
      {
        arrayWithElements.push(i); 
        console.log(arrayWithElements);
        if(JSON.stringify(combination) == JSON.stringify(arrayWithElements)){
            keys.style.display = 'none';
            messages.style.display = 'block';
        }
        
      }    
    }
}
