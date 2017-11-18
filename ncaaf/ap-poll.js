top25 = [["Alabama","SEC",99.0114891173,1,[25,25,25,25,25,25,25,25,25,25,25,25]],["Miami (FL)","ACC",95.8289454988,2,[8,10,7,9,13,14,16,19,18,17,19,24]],["Clemson","ACC",94.2104626312,4,[21,23,23,23,24,24,24,18,17,19,22,23]],["Oklahoma","Big 12",94.2095326904,3,[19,21,24,24,23,23,14,17,16,18,20,22]],["Wisconsin","Big Ten",93.7292600357,5,[17,17,16,18,17,16,18,21,21,21,21,21]],["Georgia","SEC",92.2257945897,7,[11,11,14,15,18,20,23,24,23,24,24,20]],["Auburn","SEC",91.7354873053,6,[14,13,12,10,12,13,15,4,6,10,14,19]],["Notre Dame","Ind.",90.7446087908,9,[0,2,0,1,6,6,11,16,19,22,23,18]],["Ohio State","Big Ten",90.666822092,8,[24,24,15,16,15,15,17,20,20,23,15,17]],["TCU","Big 12",89.038462112,11,[0,3,8,11,16,18,20,22,22,16,18,16]],["UCF","American",88.5893705019,14,[0,0,0,0,0,5,4,8,10,11,13,15]],["Oklahoma State","Big 12",88.2296272955,10,[16,15,18,20,11,10,10,15,14,14,12,14]],["USC","Pac-12",87.7822038948,12,[22,20,22,21,20,11,13,13,5,9,10,13]],["Penn State","Big Ten",87.647396738,13,[20,22,21,22,22,22,22,23,24,20,11,12]],["Mississippi State","SEC",86.0334395156,17,[0,0,1,12,3,0,1,0,1,6,8,11]],["Washington State","Pac-12",85.447997318,15,[2,6,5,8,10,17,19,7,9,0,6,10]],["Washington","Pac-12",85.2347932751,16,[18,19,19,17,21,21,21,12,13,13,17,9]],["Memphis","American",85.0310251216,18,[0,0,0,0,0,0,0,0,3,4,7,8]],["Michigan State","Big Ten",84.1247249172,22,[0,0,0,0,0,0,9,10,11,2,16,7]],["Stanford","Pac-12",83.7973914268,20,[12,12,6,0,0,0,3,5,7,8,0,6]],["North Carolina State","ACC",83.3484708503,25,[0,0,0,0,0,2,7,11,12,7,4,5]],["Michigan","Big Ten",83.2782857182,19,[15,18,20,19,19,19,5,6,0,1,3,4]],["LSU","SEC",82.9613015662,21,[13,14,17,0,0,0,0,0,0,3,0,3]],["Virginia Tech","ACC",82.7525903925,26,[5,8,11,13,14,12,12,14,15,15,9,2]],["West Virginia","Big 12",82.6311466415,24,[4,0,0,0,1,1,0,3,2,0,2,1]]];

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

