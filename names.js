var i=0;
function cfun(){
    i++;
    if(document.getElementById('chat').lastChild.getElementsByClassName('username')[0].innerHTML==='raikosenpai'){
      i++;
      unamestuff = document.getElementById('chat').lastChild.getElementsByClassName('username')[0];
      $(unamestuff).before('<i id='+("icon-BFG"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-BFG'+i).style.backgroundImage = "url('http://i.imgur.com/iEKADSh.png')";
      unamestuff.style.color='#D65CFF';
    }
}