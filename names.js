var i=0;
function cfun(){
    i++;
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='CSxKING'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-2');
      $(unameicon).before('<i id='+("icon-NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://imgur.com/3hN3fNi.png')";
      $(unamestuff).removeClass('rank-2');
      unamestuff.style.color='#A1BA00';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Loli'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      $(unamestuff).before('<i id='+("icon-NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://i.imgur.com/BSky1IS.png')";
      unamestuff.style.color='#9966FF';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='_Mio_'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-2');
      $(unameicon).before('<i id='+("icon-NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://imgur.com/f5HTF9D.png')";
      $(unamestuff).removeClass('rank-2');
      unamestuff.style.color='#B20DA5';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Elitehunter47'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      $(unamestuff).before('<i id='+("icon-NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://i.imgur.com/Wyh8Mbv.png')";
      unamestuff.style.color='#EA6900';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Nuvm'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-3');
      $(unameicon).before('<i id='+("icon-NCS"+i)+' class="icon icon-rank-10"></i>');
      //document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://i.imgur.com/Wyh8Mbv.png')";
      //unamestuff.style.color='#EA6900';
      $(unamestuff).removeClass('rank-3');
      $(unamestuff).addClass('rank-10');
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Koalaaa__'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      $(unamestuff).before('<i id='+("icon-NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://i.imgur.com/ucqMWad.jpg')";
      //unamestuff.style.color='#EA6900';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='KuriaMisuto'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-2');
      $(unameicon).before('<i id='+("icon-NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://i.imgur.com/LXoYihi.png')";
      $(unamestuff).removeClass('rank-2');
      unamestuff.style.color='#00E5EE';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Daisy-Chan'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-3');
      $(unameicon).before('<i id='+("icon-NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://i.imgur.com/1kemcRT.pngQ')";
      //$(unamestuff).removeClass('rank-2');
      //unamestuff.style.color='#00E5EE';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='HaremKing'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-2');
      $(unameicon).before('<i id='+("icon-NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://i.imgur.com/Gcf5bSn.png')";
      $(unamestuff).removeClass('rank-2');
      unamestuff.style.color='#FF29EE';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Danklight'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-2');
      $(unameicon).before('<i id='+("icon-NCS"+i)+' class="icon icon-rank-2"'/* style="background-image:none"*/+'></i>');
      //document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://imgur.com/GT0yJLY.png')";
      $(unamestuff).removeClass('rank-2');
      unamestuff.style.color='#FF0000';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Elusive'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      unameicon = document.getElementById('messages').lastChild.getElementsByClassName('icon-rank-2');
      $(unameicon).before('<i id='+("icon-NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://i.imgur.com/S1HQJ1a.png?1')";
      $(unamestuff).removeClass('rank-2');
      unamestuff.style.color='#FFFF00';
    }
    if(document.getElementById('messages').lastChild.getElementsByClassName('uname')[0].innerHTML==='Xfirenl'){
      i++;
      unamestuff = document.getElementById('messages').lastChild.getElementsByClassName('uname')[0];
      $(unamestuff).before('<i id='+("icon-NCS"+i)+' class="icon" style="background-image:none"></i>');
      document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://i.imgur.com/LM6dld8.png')";
      //unamestuff.style.color='#9966FF';
    }
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
      document.getElementById('icon-NCS'+i).style.backgroundImage = "url('http://i.imgur.com/iEKADSh.png')";
      unamestuff.style.color='#FF0000';
    }
}
