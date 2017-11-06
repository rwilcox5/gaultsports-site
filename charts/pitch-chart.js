function createBG(left_x,center_y,pitches,pitch_canvas,batter_name,pcn){
	pitch_initCanvas(pitch_canvas,batter_name,center_y);
	var pci;
	for (pci=0;pci<pitches.length;pci++){
		if (pitches[pci][0]==1){colors = [255,0,0];}
		else if (pitches[pci][0]==2){colors = [0,128,0];}
		else if (pitches[pci][0]==3){colors = [255,165,0];}
		else if (pitches[pci][0]==4){colors = [0,0,255];}
		else {colors = [0,0,0];}
		ocolors= [255-colors[0],255-colors[1],255-colors[2]];
		if (pitches[pci][1]==0){alpha=.3;}
		else {alpha = 1.0;}


		draw_balls(left_x+pci*25,center_y,"rgba("+colors[0]+", "+colors[1]+", "+colors[2]+", "+alpha+")",pitches[pci][2],"rgba("+ocolors[0]+", "+ocolors[1]+", "+ocolors[2]+", 1.0)",pitches[pci][3],pitches[pci][4],pitches[pci][5],pcn);

	}
	

	
}

function pitch_initCanvas(pitch_canvas,batter_name,center_y)
{
   

   if (!pitch_canvas.getContext)
   {
      return false;
   }

   pitch_context = pitch_canvas.getContext('2d');
   pitch_context.font = "bold 16px sans-serif";
   pitch_context.lineWidth = 1;
   pitch_context.fillStyle = "black";
   pitch_context.fillText(batter_name,0,center_y);

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
pitch_balls = [[],[],[]];
function draw_balls(center_x, center_y,color,swing,outlinecolor,loc_x,loc_y,lenab,pcn){
	
	pitch_context.beginPath();
	pitch_context.arc(center_x,center_y,10,0,2*Math.PI);
	pitch_context.fillStyle = color;
	pitch_context.fill();	
	pitch_context.closePath();

	if (swing==1){
	pitch_context.lineWidth = 1;
	pitch_context.strokeStyle = "white";
	pitch_context.beginPath();
	pitch_context.arc(center_x,center_y,10,0,2*Math.PI);
	pitch_context.stroke();	
	pitch_context.closePath();
	pitch_context.lineWidth = 1;
	pitch_context.strokeStyle = "black";
	pitch_context.beginPath();
	pitch_context.arc(center_x,center_y,11,0,2*Math.PI);
	pitch_context.stroke();	
	pitch_context.closePath();
	}

	pitch_context.strokeStyle = "rgba(255,255,255, 1.0)";
	pitch_context.lineWidth = 1;

	pitch_context.beginPath();
	pitch_context.arc(center_x-9,center_y+9,10,-Math.PI/2,0);
	pitch_context.stroke();

	pitch_context.beginPath();
	pitch_context.arc(center_x+9,center_y-9,10,Math.PI/2,Math.PI);
	pitch_context.stroke();

	pitch_balls[pcn].push([center_x,center_y,loc_x,loc_y,color,swing,outlinecolor,0,lenab]);


}

function draw_data(){
	data_context = data_canvas.getContext('2d');
	data_context.beginPath();
	data_context.moveTo(40,40);
	data_context.lineTo(160,40);
	data_context.lineTo(160,160);
	data_context.lineTo(40,160);
	data_context.lineTo(40,40);
	data_context.stroke();
	data_context.closePath();
}

function map_mousemove(ev)
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


   for (pbi=0;pbi<pitch_balls.length;pbi++){
   	if (Math.pow(x-pitch_balls[pbi][0],2)+Math.pow(y-pitch_balls[pbi][1],2)<144){
   		if (pitch_balls[pbi][7]==0){
   			draw_loc(pitch_balls[pbi][2]*2,pitch_balls[pbi][3]*2,pitch_balls[pbi][4],pitch_balls[pbi][5],pitch_balls[pbi][6]);
   			pitch_balls[pbi][7]=1;
   		}
   	}
   }
}

function draw_loc(center_x, center_y,color,swing,outlinecolor){
	
	data_context.beginPath();
	data_context.arc(center_x,center_y,10,0,2*Math.PI);
	data_context.fillStyle = color;
	data_context.fill();	
	data_context.closePath();

	if (swing==1){
	data_context.lineWidth = 1;
	data_context.strokeStyle = "white";
	data_context.beginPath();
	data_context.arc(center_x,center_y,10,0,2*Math.PI);
	data_context.stroke();	
	data_context.closePath();
	data_context.lineWidth = 1;
	data_context.strokeStyle = "black";
	data_context.beginPath();
	data_context.arc(center_x,center_y,11,0,2*Math.PI);
	data_context.stroke();	
	data_context.closePath();
	}

	data_context.strokeStyle = "rgba(255,255,255, 1.0)";
	data_context.lineWidth = 1;

	data_context.beginPath();
	data_context.arc(center_x-9,center_y+9,10,-Math.PI/2,0);
	data_context.stroke();

	data_context.beginPath();
	data_context.arc(center_x+9,center_y-9,10,Math.PI/2,Math.PI);
	data_context.stroke();

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
   pcn = getPCN(ev.srcElement.id);

   for (pbi=0;pbi<pitch_balls[pcn].length;pbi++){
   	if (Math.pow(x-pitch_balls[pcn][pbi][0],2)+Math.pow(y-pitch_balls[pcn][pbi][1],2)<144){
   		if (pitch_balls[pcn][pbi][7]==0){
   			gif_context = gif_canvas.getContext('2d');
   			var encoder = new GIFEncoder();
			encoder.setRepeat(1); //auto-loop
			encoder.setDelay(1000);
			gif_canvas.width = 200;
			gif_canvas.height = 200;
			encoder.setSize(200,200);
			encoder.start();

			gif_context.fillStyle = "rgb(255,255,255)";  
			gif_context.fillRect(0,0,200,200);
			gif_context.strokeStyle = "black";
			gif_context.beginPath();
			gif_context.moveTo(40,40);
			gif_context.lineTo(160,40);
			gif_context.lineTo(160,160);
			gif_context.lineTo(40,160);
			gif_context.lineTo(40,40);
			gif_context.stroke();
			gif_context.closePath();
			for (ab_i=0;ab_i<pitch_balls[pcn][pbi][8];ab_i++){
				draw_loc_gif(pitch_balls[pcn][pbi+ab_i][2]*2,pitch_balls[pcn][pbi+ab_i][3]*2,pitch_balls[pcn][pbi+ab_i][4],pitch_balls[pcn][pbi+ab_i][5],pitch_balls[pcn][pbi+ab_i][6]);
   				encoder.addFrame(gif_context);
   			}


			encoder.finish();
			document.getElementById('image').src = 'data:image/gif;base64,'+encode64(encoder.stream().getData());
   		}
   	}
   }
}

function draw_loc_gif(center_x, center_y,color,swing,outlinecolor){

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