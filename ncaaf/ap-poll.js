top25 = [["Clemson","ACC",97.2650728543,1,[21,23,23,24,24,24,24,17,17,19,21,21,21,25,25]],["Georgia","SEC",96.6222998918,3,[11,11,13,15,18,21,22,23,23,24,24,19,19,20,24]],["Oklahoma","Big 12",96.5896616157,2,[19,21,24,23,23,22,13,19,16,18,20,22,22,23,23]],["Alabama","SEC",94.7728832108,4,[25,25,25,25,25,25,25,25,25,25,25,25,25,21,22]],["Ohio State","Big Ten",94.6489956164,5,[24,24,19,16,16,16,17,20,20,23,15,18,18,19,21]],["Wisconsin","Big Ten",92.6157838538,6,[17,17,16,18,17,17,19,21,21,22,22,23,23,24,20]],["Auburn","SEC",92.1533213111,7,[14,13,11,12,13,14,16,4,7,10,16,20,20,22,19]],["USC","Pac-12",90.8701943306,8,[22,20,21,21,20,11,14,14,4,9,10,12,13,14,18]],["Penn State","Big Ten",90.8017076182,9,[20,22,22,22,22,23,23,24,24,20,11,14,15,18,17]],["UCF","American",90.6178145725,10,[0,0,0,0,6,10,6,8,11,12,13,13,14,15,16]],["Washington","Pac-12",88.8478928378,12,[18,19,18,17,21,20,21,15,14,14,17,11,12,13,15]],["TCU","Big 12",88.5178603588,13,[0,3,7,11,15,18,20,22,22,17,18,15,16,16,14]],["Miami (FL)","ACC",88.0588995409,11,[8,10,8,10,11,13,15,18,18,15,19,24,24,17,13]],["Notre Dame","Ind.",87.0936493231,14,[0,2,0,0,3,5,8,13,19,21,23,17,17,12,12]],["LSU","SEC",87.023564896,16,[13,14,15,4,0,0,0,0,5,8,2,6,9,11,11]],["Oklahoma State","Big 12",86.1970860572,17,[16,15,17,20,12,12,12,16,15,16,12,16,7,8,10]],["Michigan State","Big Ten",86.0184432165,18,[0,0,0,0,0,0,9,11,12,3,14,5,6,7,9]],["Stanford","Pac-12",85.7998128784,15,[12,12,6,0,0,0,3,5,6,5,0,4,4,9,8]],["Memphis","American",85.5129445866,19,[0,0,0,0,0,0,0,0,0,4,7,9,10,10,7]],["Northwestern","Big Ten",85.4939344795,20,[0,0,0,0,0,0,0,0,0,0,0,3,5,6,6]],["Washington State","Pac-12",83.3113925993,21,[2,6,5,8,10,15,18,6,10,0,6,10,11,5,5]],["Virginia Tech","ACC",83.2780902981,22,[5,8,9,13,14,9,11,12,13,13,9,0,0,4,4]],["Michigan","Big Ten",82.4521116988,30,[15,18,20,19,19,19,10,10,3,1,5,7,2,3,3]],["Boise State","Mountain West",82.1031792291,25,[0,0,0,0,0,0,0,0,0,0,0,0,3,0,2]],["Iowa","Big Ten",81.6408057133,53,[0,0,1,0,0,0,1,2,0,0,4,0,0,2,1]]];

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

