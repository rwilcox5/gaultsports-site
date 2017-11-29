top25 = [["Oklahoma","Big 12",97.1967210751,2,[19,21,24,24,23,23,14,17,16,18,21,23,23,25]],["Clemson","ACC",97.0425945274,1,[21,23,23,23,24,24,24,18,17,20,22,22,22,24]],["Auburn","SEC",95.6828491744,4,[14,13,12,10,12,13,15,4,6,10,15,20,20,23]],["Wisconsin","Big Ten",95.4665587532,3,[17,17,16,18,16,16,18,21,21,21,20,21,21,22]],["Georgia","SEC",92.5809196756,6,[11,11,14,15,19,21,23,24,23,24,24,19,19,21]],["Alabama","SEC",92.5797749254,5,[25,25,25,25,25,25,25,25,25,25,25,25,25,20]],["Miami (FL)","ACC",90.8909742767,7,[8,10,7,9,13,14,16,19,18,17,19,24,24,19]],["Ohio State","Big Ten",90.6953920387,8,[24,24,15,16,15,15,17,20,19,23,12,17,17,18]],["TCU","Big 12",89.9710655796,10,[0,3,8,11,17,18,20,22,22,16,18,16,16,17]],["UCF","American",89.5730800526,12,[0,0,0,0,0,5,4,8,10,11,14,15,15,16]],["Penn State","Big Ten",88.868480819,9,[20,22,21,22,22,22,22,23,24,19,11,12,13,15]],["USC","Pac-12",88.6412249371,11,[22,20,22,21,20,12,13,14,5,9,10,13,14,14]],["Stanford","Pac-12",87.549040161,14,[12,12,6,0,0,0,3,5,7,8,0,7,8,13]],["Washington","Pac-12",86.9853505769,13,[18,19,19,17,21,20,21,12,13,13,17,8,9,12]],["Memphis","American",86.4646250842,16,[0,0,0,0,0,0,0,0,2,4,7,9,10,11]],["Notre Dame","Ind.",85.8808331246,15,[0,2,0,2,6,6,11,16,20,22,23,18,18,10]],["LSU","SEC",85.8431853234,17,[13,14,17,0,0,0,0,0,0,3,0,2,6,9]],["Michigan State","Big Ten",85.4733610607,19,[0,0,0,0,0,0,9,11,11,2,16,6,7,8]],["Northwestern","Big Ten",84.9564311498,20,[0,0,0,0,0,0,0,0,0,0,0,1,4,7]],["Oklahoma State","Big 12",84.9174817693,18,[16,15,18,20,11,10,10,15,14,14,13,14,5,6]],["Washington State","Pac-12",83.2917195851,21,[2,6,5,8,10,17,19,7,9,1,6,10,11,5]],["Virginia Tech","ACC",83.2453395733,22,[5,8,11,13,14,11,12,13,15,15,9,0,1,4]],["Mississippi State","SEC",82.4533060567,24,[0,0,1,12,4,0,1,0,1,6,8,11,12,3]],["North Carolina State","ACC",82.0636311407,26,[0,0,0,0,0,2,6,10,12,7,4,5,0,2]],["Michigan","Big Ten",81.0348806874,31,[15,18,20,19,18,19,5,6,0,0,2,4,0,1]]];

function getPoll(nrows){
	var table = document.getElementById("pollTable");
      var ii = 0;
      for (i=1;i<nrows+1;i++){
        table.insertRow(i); 
        if (i%2==1){table.rows[i].style.background = "rgba(230, 235, 237, 0.25)";}
        else {table.rows[i].style.background = "rgba(255, 255, 255, 0.25)";}
        table.rows[i].style.border = "solid 1px rgba(210, 215, 217, 0.75)";
        table.rows[i].style.borderWidth = "1px 0px 1px 0px";
        table.rows[i].insertCell(0); table.rows[i].cells[0].innerHTML = i;
        table.rows[i].insertCell(1); table.rows[i].cells[1].innerHTML = top25[i-1][0];
        table.rows[i].insertCell(2); table.rows[i].cells[2].innerHTML = top25[i-1][1];
        table.rows[i].insertCell(3); table.rows[i].cells[3].innerHTML = top25[i-1][2].toFixed(1);
        if (26-top25[i-1][4][top25[i-1][4].length-2]<26){table.rows[i].insertCell(4); table.rows[i].cells[4].innerHTML = 26-top25[i-1][4][top25[i-1][4].length-2];}
        else {table.rows[i].insertCell(4); table.rows[i].cells[4].innerHTML = 'NR';}
        table.rows[i].insertCell(5); table.rows[i].cells[5].innerHTML = '<canvas id="team'+i+'" width="60" height="20"></canvas>';
        table.rows[i].insertCell(6); table.rows[i].cells[6].innerHTML = top25[i-1][3];
        sparkline('team'+i, top25[i-1][4], true);


      }
}

