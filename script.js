//your JS code here. If required.
const circle=document.querySelectorAll('.circle');
const progress=document.getElementById('progress');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
let curStep=1;

next.addEventListener('click',()=>{
	curStep++;
	if(curStep>circle.length){
		curStep=circle.length;
	}
	update();
})
prev.addEventListener('click',()=>{
	curStep--;
	if(curStep < 1){
		curStep=1;
	}
	update();
});
function update() {
	circle.forEach((cir,index)=>{
		if(index<curStep){
			cir.classList.add('active');
		}
		else{
			cir.classList.remove('active');
		}
	});
	progress.style.width=((curStep -1 )/(circle.length -1)*100+'%');
	prev.disabled=curStep===1;
	next.disabled=curStep===circle.length;
}
