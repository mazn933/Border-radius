const dv=document.querySelector('.box-0')
const rightborder=document.querySelector('.right');
const leftborder=document.querySelector('.left');
const bottomleft=document.querySelector('.bottomleft');
const bottomright=document.querySelector('.bottomright');
const box=document.querySelector('.box');
const clear=document.querySelector('.clear');
const inp=document.querySelectorAll('input')

const cl=document.querySelectorAll('.cl')


const btn=document.querySelector('.btn');
const cp=document.querySelector('.cp')



var right;

right= dv.style.borderRadius;

btn.addEventListener('click',function(){
   var val=rightborder.value;
   var valleft=leftborder.value;
   var valbtmleft=bottomleft.value;
   var valbtmright=bottomright.value;

   vall=val.toString();
   valy=valleft.toString();
   valbtl=valbtmleft.toString();
   valbtlright=valbtmright.toString();

   if(vall===''){vall='0'}
   if(valy===''){valy='0'}
   if(valbtl===''){valbtl='0'}
   if(valbtlright===''){valbtlright='0'}

   dv.style.borderRadius=vall+'px'+" "+valy+"px"+" "+valbtl+'px'+" "+valbtlright+'px';
   box.value=vall+'px'+" "+valy+"px"+" "+valbtl+'px'+" "+valbtlright+'px'
})

cp.addEventListener('click',function(){
box.select();
document.execCommand("copy");

});

clear.addEventListener('click',function(){
inp.forEach(el =>{
    el.value="";
    dv.style.borderRadius="";
})
})