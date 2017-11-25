top25 = [["Alabama","SEC",98.8714543427,1,[25,25,25,25,25,25,25,25,25,25,25,25,25]],["Miami (FL)","ACC",97.2453964928,2,[8,10,7,9,13,14,16,19,18,17,19,24,24]],["Oklahoma","Big 12",95.1615200421,3,[19,21,24,24,23,23,14,17,16,18,21,23,23]],["Clemson","ACC",94.6893842309,4,[21,23,23,23,24,24,24,18,17,19,22,22,22]],["Wisconsin","Big Ten",93.7297148253,5,[17,17,16,18,17,16,18,21,21,21,20,21,21]],["Auburn","SEC",92.7460609355,6,[14,13,12,10,12,13,15,4,6,10,15,20,20]],["Georgia","SEC",91.1005110949,7,[11,11,14,15,18,20,23,24,23,24,24,19,19]],["Notre Dame","Ind.",90.5854268141,9,[0,2,0,1,6,6,11,16,19,22,23,18,18]],["Ohio State","Big Ten",89.9648551851,8,[24,24,15,16,15,15,17,20,20,23,12,17,17]],["TCU","Big 12",89.4846768316,10,[0,3,8,11,16,18,20,22,22,16,18,16,16]],["UCF","American",88.8906902229,13,[0,0,0,0,0,5,4,8,10,11,14,15,15]],["USC","Pac-12",88.1647085196,11,[22,20,22,21,20,11,13,13,5,9,10,13,14]],["Penn State","Big Ten",87.9739015652,12,[20,22,21,22,22,22,22,23,24,20,11,12,13]],["Mississippi State","SEC",86.3765451026,16,[0,0,1,12,3,0,1,0,1,6,8,11,12]],["Washington State","Pac-12",86.3407517987,14,[2,6,5,8,10,17,19,7,9,0,6,10,11]],["Memphis","American",85.7630860632,17,[0,0,0,0,0,0,0,0,3,4,7,9,10]],["Washington","Pac-12",85.5534417971,15,[18,19,19,17,21,21,21,12,13,13,17,8,9]],["Stanford","Pac-12",85.0109948912,20,[12,12,6,0,0,0,3,5,7,8,0,7,8]],["Michigan State","Big Ten",84.6580108229,21,[0,0,0,0,0,0,9,10,11,2,16,6,7]],["Oklahoma State","Big 12",83.9993379834,18,[16,15,18,20,11,10,10,15,14,14,13,14,6]],["LSU","SEC",83.9596166918,19,[13,14,17,0,0,0,0,0,0,3,0,2,5]],["Northwestern","Big Ten",83.7451810215,23,[0,0,0,0,0,0,0,0,0,0,0,0,4]],["Boise State","Mountain West",82.6284424001,25,[0,0,0,0,0,0,0,0,0,0,0,0,3]],["Virginia Tech","ACC",82.3330925592,24,[5,8,11,13,14,12,12,14,15,15,9,1,2]],["South Florida","American",82.214274392,22,[7,5,0,2,8,9,6,9,8,0,0,0,1]]];

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

