//眼睛跟着鼠标动的js
$(function(){
	var left_eye=document.getElementById('left_eye');
	var right_eye=document.getElementById('right_eye');
	var box=document.getElementById('box');	
	var out_box=document.getElementById('header-img');

	document.onmousemove=function(ev){
		var ev=ev||window.event;
		var L1=42
		var T1=53
		var L2=92
		var T2=53
		var L=ev.clientX-out_box.offsetLeft;
		var T=ev.clientY-out_box.offsetTop;

		change(left_eye,L1,T1);
		change(right_eye,L2,T2);


		function change(obj,x,y){

			var left_L=Math.abs(L-obj.offsetLeft-10);
			var left_T=Math.abs(T-obj.offsetTop-10);

			var a=Math.atan(left_L/left_T);

			if (L>obj.offsetLeft&&T>obj.offsetTop){

				obj.style.left=x+5*Math.sin(a)+'px';
				obj.style.top=y+5*Math.cos(a)+'px';

			}else if(L>obj.offsetLeft&&T<obj.offsetTop){

				obj.style.left=x+5*Math.sin(a)+'px';
				obj.style.top=y-5*Math.cos(a)+'px';
			
			}else if(L<obj.offsetLeft&&T<obj.offsetTop){

				obj.style.left=x-5*Math.sin(a)+'px';
				obj.style.top=y-5*Math.cos(a)+'px';

			}else if(L-obj.offsetLeft<0&&T>obj.offsetTop){
				
				obj.style.left=x-5*Math.sin(a)+'px';
				obj.style.top=y+5*Math.cos(a)+'px';
			}
		}

	}
});