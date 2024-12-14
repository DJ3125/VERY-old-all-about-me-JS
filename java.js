let DarkPage = 1;
let x = null;
function MoveToCertainPart(location, ButtonId){
   if(!(location==='#top')) {
       window.location.href = location;
   } else {
       let content = document.getElementById("content");
       content.scrollTop = 0;
   }
}
function DarkMode(){
    DarkPage=DarkPage+1;
    if(Boolean(DarkPage%2)){
        //Dark Mode
        document.getElementById('PageModeButton').innerHTML='Go To Light Mode';
        document.body.style.backgroundColor='#343434';
        document.getElementById('practicallyeverything').backgroundColor='#343434';
        x = document.getElementsByClassName('subheader');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'White';
        }
        x = document.getElementsByTagName('p');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'White';
        }
        x = document.getElementsByTagName('li');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'White';
        }
        document.getElementById('top').style.color = 'white';
        x = document.getElementsByTagName('a');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'white';
        }
        x = document.getElementsByTagName('th');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'white';
            x[i].style.borderColor = 'white';
        }
        x = document.getElementsByTagName('td');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'white';
            x[i].style.borderColor = 'white';
        }
        document.getElementById('SideBar').style.borderRightColor = 'white';
        document.getElementById('games').style.backgroundColor = '#4b4b4b';
        document.getElementById('Settings').style.borderTopColor = 'white';
        x = document.getElementsByClassName('SideBarHeaders');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'white';
        }
        x = document.getElementsByTagName('button');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'white';
            x[i].style.backgroundColor = '#595858';
        }
        document.getElementById('borderthis').style.borderColor = 'white';
    } else {
        //Light Mode
        document.getElementById('PageModeButton').innerHTML='Go To Dark Mode';
        document.body.style.backgroundColor='white';
        document.getElementById('practicallyeverything').backgroundColor='white';
        x = document.getElementsByClassName('subheader');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'black';
        }
        x = document.getElementsByTagName('p');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'black';
        }
        document.getElementById('top').style.color = 'black';
        x = document.getElementsByTagName('li');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'black';
        }
        x = document.getElementsByTagName('a');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'black';
        }
        x = document.getElementsByTagName('th');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'black';
            x[i].style.borderColor = 'black';
        }
        x = document.getElementsByTagName('td');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'black';
            x[i].style.borderColor = 'black';
        }
        document.getElementById('SideBar').style.borderRightColor = 'black';
        document.getElementById('games').style.backgroundColor = 'white';
        document.getElementById('Settings').style.borderTopColor = 'black';
        x = document.getElementsByClassName('SideBarHeaders');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'black';
        }
        x = document.getElementsByTagName('button');
        for(var i = 0; i<x.length; i++){
            x[i].style.color = 'black';
            x[i].style.backgroundColor = 'white';
        }
        document.getElementById('borderthis').style.borderColor = 'Black';
    }
}