// var nodeList=document.getElementsByTagName('li');
// var i;
// for(i=0;i<nodeList.length;i++)
// {
//     var button=document.createElement('button')
//     var text=document.createTextNode('X');
//     button.className='remove';
//     button.appendChild(text);
//     nodeList[i].appendChild(button);
// }

// var close = document.getElementsByClassName('remove');
// var i;
// for(i=0;i< close.length;i++)
// {
//     close[i].onclick=function(){
//          var isRemove=confirm("Do you want to remove completly?");
//          if(isRemove===true)
//          {
//             var div=this.parentElement;
//             div.style.display='none';
//          }
         
//     }
// }
function myFunc()
{
    console.log("Function is working");
    var li=document.createElement('li');
    var inputValue=document.getElementById('search').value;
    var text=document.createTextNode(inputValue);
    li.appendChild(text);
    if(inputValue==="")
    {
        alert("You must write something");
    }
    else
    {
       
        document.getElementById('ul-list').appendChild(li);
        li.id="list-item";
    }
    document.getElementById('search').value="";
    var button=document.createElement('button')
    var text=document.createTextNode('X');
    button.className='remove';
    button.appendChild(text);
    li.appendChild(button);
    var close = document.getElementsByClassName('remove');
    var i;
    for(i=0;i< close.length;i++)
    {
        close[i].onclick=function(){
            var isRemove=confirm("Do you want to remove completly?");
            if(isRemove===true)
            {
               var div=this.parentElement;
               div.style.display='none';
            }
    }
    }
    
}






























