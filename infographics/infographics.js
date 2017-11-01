
function createInfographic(){
	document.getElementById('canvas_spot').innerHTML = '<canvas id="info_canvas" width="686" height="940" style="position:relative; border: 1px;"></canvas>';
  	info_canvas = document.getElementById('info_canvas');
	info_context = info_canvas.getContext('2d');
	colors = ['#002D62','#FEC325','#00afea','#dddbdd']
	draw_BG();
	draw_pic();
	draw_title('Trevor Hoffman', 'CLOSER - San Diego Padres');
	draw_summary(['Over an 18 year career, Trevor Hoffman', 'recorded 601 saves. Known for his dominant', 'change-up.']);
	draw_skills();
	draw_records(400);
	draw_charts(500);
	draw_timeline(400);
	draw_testimonials(800);

}

function draw_BG(){
	info_context.fillStyle = colors[3];
    	info_context.fillRect(0,0,686,940);
	info_context.beginPath();
	info_context.arc(590,100,95,0,2*Math.PI);
	info_context.fillStyle = colors[2];
	info_context.fill();	
	info_context.closePath();
	info_context.fillStyle = colors[2];
	info_context.fillRect(0,25,636,135);
	info_context.fillStyle = colors[0];
	info_context.fillRect(0,35,636,115);
	
	info_context.beginPath();
	info_context.arc(590,100,85,0,2*Math.PI);
	info_context.fillStyle = colors[0];
	info_context.fill();	
	info_context.closePath();
	info_context.beginPath();
	info_context.arc(590,100,75,0,2*Math.PI);
	info_context.fillStyle = colors[3];
	info_context.fill();	
	info_context.closePath();
	info_context.beginPath();
	info_context.arc(590+75,100-75,75,Math.PI/2,Math.PI);
	info_context.strokeStyle = "red";
	info_context.lineWidth = 3;
	info_context.stroke();	
	info_context.closePath();
	info_context.beginPath();
	info_context.arc(590-75,100+75,75,-Math.PI/2,0);
	info_context.strokeStyle = "red";
	info_context.lineWidth = 3;
	info_context.stroke();	
	info_context.closePath();
	info_context.lineWidth = 1;
	info_context.beginPath();
	info_context.moveTo(343,200);
	info_context.lineTo(343,900);
	info_context.stroke();
	info_context.closePath();
}
function draw_pic(){
  var img = new Image();
  img.onload = function() {
    info_context.drawImage(img, 530, 25);
  };
  img.src = 'hoffman.png';
}
function draw_title(name,position){
	info_context.font = '60px Arial';
	info_context.fillStyle = colors[1];
	info_context.fillText(name,10,90);
	info_context.font = '28px Arial';
	info_context.fillStyle = colors[2];
	info_context.fillText(position,10,135);
}
function draw_sectionBG(section_title,start_x,start_y,end_x){
	info_context.fillStyle = colors[0];
	info_context.beginPath();
	info_context.arc(start_x,start_y+17,17,0,2*Math.PI);
	info_context.fill();
	info_context.closePath();
	info_context.beginPath();
	info_context.arc(end_x,start_y+17,17,0,2*Math.PI);
	info_context.fill();
	info_context.closePath();
	info_context.beginPath();
	info_context.moveTo(start_x,start_y);
	info_context.lineTo(start_x,start_y+34);
	info_context.lineTo(end_x,start_y+34);
	info_context.lineTo(end_x,start_y);
	info_context.lineTo(start_x,start_y);
	info_context.fill();
	info_context.closePath();
	info_context.font = '20px Arial';
	info_context.fillStyle = colors[1];
	info_context.fillText(section_title,start_x-5,start_y+24);
}

function draw_summary(career_summary){
	draw_sectionBG('CAREER SUMMARY',30,170,212);
	info_context.fillStyle = colors[0];
	info_context.font = '16px Arial';
	for (i=0;i<career_summary.length;i++){
	info_context.fillText(career_summary[i],20,230+20*i);
	}
}
function draw_one_skill(name,x,y,name_color,rating){
	info_context.font = '16px Arial';
	info_context.fillStyle = colors[name_color];
	info_context.fillText(name,x,y);
	info_context.fillStyle = colors[2];
	info_context.fillRect(550,y-16,100,16);
	info_context.fillStyle = colors[0];
	info_context.fillRect(550,y-16,rating,16);
}

function draw_skills(){
	draw_sectionBG('STATS',378,190,436);

	draw_one_skill('SAVES',368,250,0,50);
	draw_one_skill('STRIKEOUTS',368,270,2,70);
	draw_one_skill('WALKS',368,290,0,90);
	draw_one_skill('HITS',368,310,2,40);
	draw_one_skill('ERA',368,330,0,60);
	draw_one_skill('WAR',368,350,2,70);
}

function draw_records(start_y){
	draw_sectionBG('RECORDS',378,start_y,466);
	info_context.font = '16px Arial';
	info_context.fillStyle = colors[0];
	info_context.fillText('Career Saves Leader in NL',368,start_y+60);
	info_context.fillText('Highest K/9 for RP in MLB',368,start_y+80);
}
function draw_charts(start_y){
	draw_sectionBG('CHARTS',378,start_y,451);
	info_context.font = '16px Arial';
	info_context.fillStyle = colors[0];
	info_context.fillText('Cumulative WAR chart here',368,start_y+60);
	info_context.fillText('Saves by year compared to NL/MLB leaders chart here',368,start_y+120);
}
function draw_one_year(start_y,year,year_text){
	x = 45;
	info_context.fillStyle = colors[0];
	info_context.beginPath();
	info_context.arc(x,start_y,11,0,2*Math.PI);
	info_context.fill();
	info_context.closePath();
	info_context.fillStyle = colors[3];
	info_context.beginPath();
	info_context.arc(x,start_y,8,0,2*Math.PI);
	info_context.fill();
	info_context.closePath();
	info_context.strokeStyle = "red";
	info_context.lineWidth = 2;
	info_context.beginPath();
	info_context.arc(x+8,start_y-8,8,Math.PI/2,Math.PI);
	info_context.stroke();
	info_context.closePath();
	info_context.beginPath();
	info_context.arc(x-8,start_y+8,8,-Math.PI/2,0);
	info_context.stroke();
	info_context.closePath();
	info_context.strokeStyle = "black";
	info_context.fillStyle = colors[0];
	info_context.font = '12px Arial';
	info_context.fillText(year,5,start_y+4);
	info_context.fillText(year_text,65,start_y+4);

}
function draw_timeline(start_y){
	info_context.fillStyle = colors[0];
	info_context.fillRect(43,start_y+30,4,290)
	draw_sectionBG('CAREER TIMELINE',30,start_y,212);
	draw_one_year(start_y+55,'2006','Retires');
	draw_one_year(start_y+85,'2005');
	draw_one_year(start_y+115,'2004');
	draw_one_year(start_y+145,'2003');
	draw_one_year(start_y+175,'2002');
	draw_one_year(start_y+205,'2001');
	draw_one_year(start_y+235,'2000');
	draw_one_year(start_y+265,'1999');
	draw_one_year(start_y+295,'1998');
	draw_one_year(start_y+325,'1997','Debut');
}
function draw_testimonials(start_y){
	draw_sectionBG('TESTIMONIALS',30,start_y,172);
	info_context.font = '16px Arial';
	info_context.fillStyle = colors[0];
	info_context.fillText('He is good!',25,start_y+60);
}
