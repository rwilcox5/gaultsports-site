function createBG(left_x,center_y,pitches,pitch_canvas,batter_name,pcn,event_name,chart_type,cwidth){
	pitch_initCanvas(pitch_canvas,batter_name,center_y,event_name,chart_type);
	var pci; var r = (cwidth-left_x)*10./(400-120);
	if (pitches.length<11){
		for (pci=0;pci<pitches.length;pci++){
			if (pitches[pci][0]==1){colors = [255,0,0];}
			else if (pitches[pci][0]==2){colors = [0,128,0];}
			else if (pitches[pci][0]==3){colors = [255,165,0];}
			else if (pitches[pci][0]==4){colors = [0,0,255];}
			else {colors = [0,0,0];}
			ocolors= [255-colors[0],255-colors[1],255-colors[2]];
			if (pitches[pci][1]==0){alpha=.3;}
			else {alpha = 1.0;}
			draw_balls(left_x+pci*2*(r+2),center_y,"rgba("+colors[0]+", "+colors[1]+", "+colors[2]+", "+alpha+")",pitches[pci][2],"rgba("+ocolors[0]+", "+ocolors[1]+", "+ocolors[2]+", 1.0)",pitches[pci][3],pitches[pci][4],pitches[pci][5],pcn,pitches[pci][6],pitches[pci][7],pitches[pci][8],r);
		}
	}	
	else{
		for (pci=0;pci<10;pci++){
			if (pitches[pci][0]==1){colors = [255,0,0];}
			else if (pitches[pci][0]==2){colors = [0,128,0];}
			else if (pitches[pci][0]==3){colors = [255,165,0];}
			else if (pitches[pci][0]==4){colors = [0,0,255];}
			else {colors = [0,0,0];}
			ocolors= [255-colors[0],255-colors[1],255-colors[2]];
			if (pitches[pci][1]==0){alpha=.3;}
			else {alpha = 1.0;}
			draw_balls(left_x+pci*2*(r+2),center_y,"rgba("+colors[0]+", "+colors[1]+", "+colors[2]+", "+alpha+")",pitches[pci][2],"rgba("+ocolors[0]+", "+ocolors[1]+", "+ocolors[2]+", 1.0)",pitches[pci][3],pitches[pci][4],pitches[pci][5],pcn,pitches[pci][6],pitches[pci][7],pitches[pci][8],r);
		}
		for (pci=10;pci<pitches.length;pci++){
			if (pitches[pci][0]==1){colors = [255,0,0];}
			else if (pitches[pci][0]==2){colors = [0,128,0];}
			else if (pitches[pci][0]==3){colors = [255,165,0];}
			else if (pitches[pci][0]==4){colors = [0,0,255];}
			else {colors = [0,0,0];}
			ocolors= [255-colors[0],255-colors[1],255-colors[2]];
			if (pitches[pci][1]==0){alpha=.3;}
			else {alpha = 1.0;}
			draw_balls(left_x+(pci-10)*2*(r+2),center_y+25,"rgba("+colors[0]+", "+colors[1]+", "+colors[2]+", "+alpha+")",pitches[pci][2],"rgba("+ocolors[0]+", "+ocolors[1]+", "+ocolors[2]+", 1.0)",pitches[pci][3],pitches[pci][4],pitches[pci][5],pcn,pitches[pci][6],pitches[pci][7],pitches[pci][8],r);
		}
	}

	
}

function pitch_initCanvas(pitch_canvas,batter_name,center_y,event_name,chart_type)
{

   if (!pitch_canvas.getContext)
   {
      return false;
   }

   pitch_context = pitch_canvas.getContext('2d');
   pitch_context.font = "12px sans-serif";
   pitch_context.lineWidth = 1;
   pitch_context.fillStyle = "black";
   if (chart_type=='game'){  pitch_context.fillText(batter_name,0,center_y+6);pitch_context.fillText(event_name,85,center_y+6);}
   else if (chart_type=='vb'){  pitch_context.fillText(event_name,0,center_y+6);}

   return true;
}

function draw_lines(center_x,center_y){
	pitch_context.beginPath();
	pitch_context.moveTo(center_x-10,center_y);
    pitch_context.lineTo(center_x-10,center_y-400);
    pitch_context.moveTo(center_x+10,center_y);
    pitch_context.lineTo(center_x+10,center_y-400);
    pitch_context.stroke();
}


function write_text(age,row){
	pitch_context.textAlign = "center";
	pitch_context.fillText(age, center_x, center_y-20*row);

}
pitch_balls = [[],[],[],[],[],[],[],[],[]];
function draw_balls(center_x, center_y,color,swing,outlinecolor,loc_x,loc_y,lenab,pcn,move_x,move_y,velocity,r){

	pitch_context.beginPath();
	pitch_context.arc(center_x,center_y,r,0,2*Math.PI);
	pitch_context.fillStyle = color;
	pitch_context.fill();	
	pitch_context.closePath();

	if (swing==1){
	pitch_context.lineWidth = 1;
	pitch_context.strokeStyle = "white";
	pitch_context.beginPath();
	pitch_context.arc(center_x,center_y,r,0,2*Math.PI);
	pitch_context.stroke();	
	pitch_context.closePath();
	pitch_context.lineWidth = 1;
	pitch_context.strokeStyle = "black";
	pitch_context.beginPath();
	pitch_context.arc(center_x,center_y,r+1,0,2*Math.PI);
	pitch_context.stroke();	
	pitch_context.closePath();
	}

	pitch_context.strokeStyle = "rgba(255,255,255, 1.0)";
	pitch_context.lineWidth = 1;

	pitch_context.beginPath();
	pitch_context.arc(center_x-r,center_y+r,r,-Math.PI/2,0);
	pitch_context.stroke();

	pitch_context.beginPath();
	pitch_context.arc(center_x+r,center_y-r,r,Math.PI/2,Math.PI);
	pitch_context.stroke();

	pitch_balls[pcn].push([center_x,center_y,loc_x,loc_y,color,swing,outlinecolor,0,lenab,move_x,move_y,velocity]);


}



function getPCN(elementName){
	if (elementName=='pitch_canvas1'){return 0;}
	if (elementName=='pitch_canvas2'){return 1;}
	if (elementName=='pitch_canvas3'){return 2;}
	if (elementName=='pitch_canvas4'){return 3;}
	if (elementName=='pitch_canvas5'){return 4;}
	if (elementName=='pitch_canvas6'){return 5;}
	if (elementName=='pitch_canvas7'){return 6;}
	if (elementName=='pitch_canvas8'){return 7;}
	if (elementName=='pitch_canvas9'){return 8;}
}

function map_click_gif(ev)
{

   var x;
   var y;

   if (ev.offsetX || ev.offsetX == 0) 
   {
      x = ev.offsetX;
      y = ev.offsetY;
   }
   else if (ev.layerX || ev.layerX == 0)
   {
     x = ev.layerX;
     y = ev.layerY;
   }
   pcn = getPCN(ev.target.id);

   for (pbi=0;pbi<pitch_balls[pcn].length;pbi++){
   	if (Math.pow(x-pitch_balls[pcn][pbi][0],2)+Math.pow(y-pitch_balls[pcn][pbi][1],2)<144){
   		if (pitch_balls[pcn][pbi][7]==0){
   			gif_context = gif_canvas.getContext('2d');
   			var encoder = new GIFEncoder();
			encoder.setRepeat(1); //auto-loop
			encoder.setDelay(800);
			gif_canvas.width = 222;
			gif_canvas.height = 222;
			encoder.setSize(222,222);
			encoder.start();

			gif_context.fillStyle = "rgb(255,255,255)";  
			gif_context.fillRect(0,0,222,222);
			gif_context.strokeStyle = "black";
			gif_context.beginPath();
			gif_context.moveTo(51,51);
			gif_context.lineTo(171,51);
			gif_context.lineTo(171,171);
			gif_context.lineTo(51,171);
			gif_context.lineTo(51,51);
			gif_context.stroke();
			gif_context.closePath();
			for (ab_i=0;ab_i<pitch_balls[pcn][pbi][8];ab_i++){
				draw_loc_gif(pitch_balls[pcn][pbi+ab_i][2]*2+11,pitch_balls[pcn][pbi+ab_i][3]*2+11,pitch_balls[pcn][pbi+ab_i][4],pitch_balls[pcn][pbi+ab_i][5],pitch_balls[pcn][pbi+ab_i][6],pitch_balls[pcn][pbi+ab_i][9],pitch_balls[pcn][pbi+ab_i][10],pitch_balls[pcn][pbi+ab_i][11]);
   				encoder.addFrame(gif_context);
   			}


			encoder.finish();
			document.getElementById('image').src = 'data:image/gif;base64,'+encode64(encoder.stream().getData());
   		}
   	}
   }
}

function draw_loc_gif(center_x, center_y,color,swing,outlinecolor,move_x,move_y,velocity){
	var cx_chg1; var cx_chg2; var y01; var y02;
	xi=-move_x*120.0/17.0;
	yi=(move_y-10.0)*120.0/17.0;
	y01 = (200*yi+Math.sqrt(40000*yi*yi-4*(yi*yi+xi*xi)*(10000-100*xi*xi)))/(2*(yi*yi+xi*xi));
	x0a=Math.sqrt((100-y01*y01));
	x0b=-Math.sqrt((100-y01*y01));
	if (Math.abs(y01/x0a+(xi-x0a)/(yi-y01))<Math.abs(y01/x0b+(xi-x0b)/(yi-y01))){cx_chg1=x0a;}
	else {cx_chg1=x0b;}
	xi=-move_x*120.0/17.0;
	yi=(move_y-10.0)*120.0/17.0;
	y02 = (200*yi-Math.sqrt(40000*yi*yi-4*(yi*yi+xi*xi)*(10000-100*xi*xi)))/(2*(yi*yi+xi*xi));
	x0a=Math.sqrt((100-y02*y02));
	x0b=-Math.sqrt((100-y02*y02));
	if (Math.abs(y02/x0a+(xi-x0a)/(yi-y02))<Math.abs(y02/x0b+(xi-x0b)/(yi-y02))){cx_chg2=x0a;}
	else {cx_chg2=x0b;}
	gif_context.beginPath();
	gif_context.moveTo(center_x-move_x*120.0/17.0,center_y+(move_y-10.0)*120.0/17.0);
	gif_context.lineTo(center_x+cx_chg1,center_y+y01);
	gif_context.lineTo(center_x+cx_chg2,center_y+y02);
	gif_context.lineTo(center_x-move_x*120.0/17.0,center_y+(move_y-10.0)*120.0/17.0);
	gif_context.fillStyle = "rgba(200,200,200,.5)";
	gif_context.fill();
	gif_context.closePath();

	gif_context.beginPath();
	gif_context.arc(center_x,center_y,10,0,2*Math.PI);
	gif_context.fillStyle = color;
	gif_context.fill();	
	gif_context.closePath();

	if (swing==1){
	gif_context.lineWidth = 1;
	gif_context.strokeStyle = "white";
	gif_context.beginPath();
	gif_context.arc(center_x,center_y,10,0,2*Math.PI);
	gif_context.stroke();	
	gif_context.closePath();
	gif_context.lineWidth = 1;
	gif_context.strokeStyle = "black";
	gif_context.beginPath();
	gif_context.arc(center_x,center_y,11,0,2*Math.PI);
	gif_context.stroke();	
	gif_context.closePath();
	}

	gif_context.strokeStyle = "rgba(255,255,255, 1.0)";
	gif_context.lineWidth = 1;

	gif_context.beginPath();
	gif_context.arc(center_x-9,center_y+9,10,-Math.PI/2,0);
	gif_context.stroke();

	gif_context.beginPath();
	gif_context.arc(center_x+9,center_y-9,10,Math.PI/2,Math.PI);
	gif_context.stroke();



}