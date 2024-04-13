export function zeroFill(n:any, width:any){
  n = n + '';
  return n.length >=width ? n : new Array(width - n.length +1).join(String(0)) + n;
}


export function formatBytes (bytes:any, decimals = 2) {
  if (bytes === 0) return '0';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const v = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
  return  Math.round(v/5)*5  + ' '+ sizes[i]; 
}

export function gnbOpen () { 
  document.documentElement.scrollTop = 0;
  setTimeout(function(){
    document.body.classList.add('open-gnb');
  }, 300);
  (document.querySelector('.outer-wrap') as HTMLInputElement).classList.add('open-gnb');
  
  (document.querySelector('.gnb-wrap') as HTMLInputElement).style.display = 'block';
  (document.querySelector('.gnb-wrap .gnb-content') as HTMLInputElement).scrollTop = 0;
  
  var gnbWrap = document.querySelector('.gnb-wrap') as HTMLInputElement;
  gnbWrap.style.transition = 'right 300ms ease-in-out';
  gnbWrap.style.right = '0';
 }

 export function gnbClose () { 
  var gnbWrap = document.querySelector('.gnb-wrap') as HTMLInputElement;
  gnbWrap.style.transition = 'right 300ms ease-in-out';
  gnbWrap.style.right = '-100%';
  
  setTimeout(function() {
      gnbWrap.style.display = 'none';
      document.documentElement.classList.remove('open-gnb');
      document.body.classList.remove('open-gnb');
      (document.querySelector('.outer-wrap') as HTMLInputElement).classList.remove('open-gnb');
  }, 300);
 }