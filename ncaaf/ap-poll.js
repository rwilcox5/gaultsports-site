top25 = [["Alabama","SEC",98.9846682091,1,[25,25,25,25,25,25,25,25,25,25,25]],["Georgia","SEC",97.5459453748,2,[11,11,14,15,18,20,23,24,23,24,24]],["Notre Dame","Ind.",95.5779260596,3,[0,2,0,1,6,6,11,16,19,22,23]],["Clemson","ACC",93.0798360576,4,[21,23,23,23,24,24,24,18,17,19,22]],["Wisconsin","Big Ten",92.7613963111,6,[17,17,16,18,17,16,18,21,21,21,21]],["Oklahoma","Big 12",92.4515241524,5,[19,21,24,24,23,23,14,17,16,18,20]],["Miami (FL)","ACC",92.0675284595,7,[8,10,7,9,13,14,16,19,18,17,19]],["TCU","Big 12",91.3066844181,8,[0,3,8,11,16,18,20,22,22,16,18]],["Washington","Pac-12",89.9126219868,9,[18,19,19,17,21,21,21,12,13,13,17]],["Michigan State","Big Ten",88.2338003114,13,[0,0,0,0,0,0,9,10,11,2,16]],["Ohio State","Big Ten",88.0675849436,11,[24,24,15,16,15,15,17,20,20,23,15]],["Auburn","SEC",88.027285366,10,[14,13,12,10,12,13,15,4,6,10,14]],["UCF","The American",87.9085933124,14,[0,0,0,0,0,5,4,8,10,11,13]],["Oklahoma State","Big 12",86.9568445636,12,[16,15,18,20,11,10,10,15,14,14,12]],["Penn State","Big Ten",86.7133156122,16,[20,22,21,22,22,22,22,23,24,20,11]],["USC","Pac-12",86.386374821,15,[22,20,22,21,20,11,13,13,5,9,10]],["Virginia Tech","ACC",86.1137903581,17,[5,8,11,13,14,12,12,14,15,15,9]],["Mississippi State","SEC",85.7922367136,18,[0,0,1,12,3,0,1,0,1,6,8]],["Memphis","The American",84.5841682124,20,[0,0,0,0,0,0,0,0,3,4,7]],["Washington State","Pac-12",83.8563012491,19,[2,6,5,8,10,17,19,7,9,0,6]],["Iowa State","Big 12",83.5201406868,24,[0,0,0,0,0,0,0,0,4,12,5]],["North Carolina State","ACC",82.6327564204,27,[0,0,0,0,0,2,7,11,12,7,4]],["Michigan","Big Ten",82.2831038818,21,[15,18,20,19,19,19,5,6,0,1,3]],["West Virginia","Big 12",81.9429882674,23,[4,0,0,0,1,1,0,3,2,0,2]],["Iowa","Big Ten",81.9353869106,25,[0,0,0,0,0,0,0,0,0,0,1]]];

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

