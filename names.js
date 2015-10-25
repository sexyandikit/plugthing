var i=0;
function cfun(){
    i++;
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Raiko-Senpai'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      $(unamestuff).before('<i id='+("icon-NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://i.imgur.com/iEKADSh.png')";
      unamestuff.style.color='#D65CFF';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='NinjasebFan'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      $(unamestuff).before('<i id='+("icon-NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://i.imgur.com/Wyh8Mbv.png')";
      unamestuff.style.color='#FF0000';
    }
}