top25 = [["Alabama","SEC",97.998530417,1,[25,25,25,25,25,25,25,25,25,25,25,25,25,20,22,25]],["Georgia","SEC",96.7591716345,2,[11,11,13,15,19,21,23,24,23,24,24,19,19,21,23,24]],["Oklahoma","Big 12",95.4855991488,3,[19,21,24,23,23,23,14,17,16,18,21,23,23,25,24,23]],["UCF","American",93.8808253848,6,[0,0,0,0,0,5,4,8,10,11,14,15,15,16,17,22]],["Clemson","ACC",93.6028989139,4,[21,23,23,24,24,24,24,18,17,20,22,22,22,24,25,21]],["Ohio State","Big Ten",93.1483715011,5,[24,24,18,16,15,15,17,20,19,23,12,17,17,18,21,20]],["Wisconsin","Big Ten",91.6933092134,7,[17,17,16,17,16,16,18,21,21,21,20,21,21,22,19,19]],["Penn State","Big Ten",90.6589677063,8,[20,22,21,22,22,22,22,23,24,19,11,12,13,15,16,18]],["TCU","Big 12",89.9631523494,9,[0,3,6,10,17,18,20,22,22,16,18,16,16,17,14,17]],["Auburn","SEC",89.6402180444,10,[14,13,11,11,13,13,15,4,6,10,15,20,20,23,20,16]],["Notre Dame","Ind.",88.3118795313,11,[0,2,0,0,4,6,11,16,20,22,23,18,18,10,11,15]],["USC","Pac-12",87.6692849098,12,[22,20,22,21,21,12,13,14,5,9,10,13,14,14,18,14]],["Michigan State","Big Ten",87.5415491265,15,[0,0,0,0,0,0,9,11,11,2,16,6,7,8,9,13]],["Miami (FL)","ACC",87.1807999597,13,[8,10,9,12,12,14,16,19,18,17,19,24,24,19,15,12]],["Oklahoma State","Big 12",86.898805434,14,[16,15,17,20,11,10,10,15,14,14,13,14,5,6,6,11]],["Northwestern","Big Ten",86.1658676152,17,[0,0,0,0,0,0,0,0,0,0,0,1,4,7,7,10]],["Washington","Pac-12",86.1243301123,16,[18,19,20,19,20,20,21,12,13,13,17,8,9,12,13,9]],["Mississippi State","SEC",84.6903695447,19,[0,0,0,9,2,0,1,0,1,6,8,11,12,3,3,8]],["Stanford","Pac-12",84.6116131463,20,[12,12,7,0,0,0,3,5,7,8,0,7,8,13,12,7]],["LSU","SEC",84.2551733817,18,[13,14,14,1,1,0,0,0,0,3,0,2,6,9,10,6]],["North Carolina State","ACC",83.4889540014,23,[0,0,0,0,0,2,6,10,12,7,4,5,0,2,2,5]],["Boise State","Mountain West",82.6559186981,22,[0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,4]],["Memphis","American",82.5879155936,25,[0,0,0,0,0,0,0,0,2,4,7,9,10,11,8,3]],["South Florida","American",82.4751910996,21,[7,5,4,5,8,9,7,9,8,0,0,0,2,0,0,2]],["Virginia Tech","ACC",81.8168756313,24,[5,8,10,13,14,11,12,13,15,15,9,0,1,4,5,1]]];

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

