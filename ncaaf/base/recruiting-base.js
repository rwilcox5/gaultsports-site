
flairconv = ['Air Force','airforce','Akron','akron','Alabama','alabama','Appalachian State','appalachianstate','Arizona','arizona','Arizona State','arizonastate','Arkansas','arkansas','Arkansas State','arkansasstate','Army','army','Auburn','auburn','Ball State','ballstate','Baylor','baylor','Boise State','boisestate','Boston College','bostoncollege','Bowling Green','bowlinggreen','Brigham Young','byu','Buffalo','buffalo','California','california','Central Michigan','centralmichigan','Charlotte','charlotte','Cincinnati','cincinnati','Clemson','clemson','Coastal Carolina','coastalcarolina','Colorado','colorado','Colorado State','coloradostate','Connecticut','connecticut','Duke','duke','East Carolina','eastcarolina','Eastern Michigan','easternmichigan','Florida Atlantic','fau','Florida','florida','Florida International','fiu','Florida State','floridastate','Fresno State','fresnostate','Georgia','georgia','Georgia Southern','georgiasouthern','Georgia State','georgiastate','Georgia Tech','georgiatech','Hawaii','hawaii','Houston','houston','Idaho','idaho','Illinois','illinois','Indiana','indiana','Iowa','iowa','Iowa State','iowastate','Kansas','kansas','Kansas State','kansasstate','Kent State','kentstate','Kentucky','kentucky','Louisiana-Lafayette','louisiana','Louisiana-Monroe','ulm','Louisiana Tech','louisianatech','Louisville','louisville','LSU','lsu','Marshall','marshall','Maryland','maryland','Massachusetts','umass','Memphis','memphis','Miami (FL)','miami','Miami (OH)','miamioh','Michigan','michigan','Michigan State','michiganstate','Middle Tennessee State','middletennessee','Minnesota','minnesota','Mississippi','olemiss','Mississippi State','mississippistate','Missouri','missouri','Navy','navy','Nebraska','nebraska','Nevada','nevada','New Mexico','newmexico','New Mexico State','newmexicostate','North Carolina','northcarolina','North Carolina State','ncstate','Northern Illinois','northernillinois','North Texas','northtexas','Northwestern','northwestern','Notre Dame','notredame','Ohio','ohio','Ohio State','ohiostate','Oklahoma','oklahoma','Oklahoma State','oklahomastate','Old Dominion','olddominion','Oregon','oregon','Oregon State','oregonstate','Penn State','pennstate','Pittsburgh','pittsburgh','Purdue','purdue','Rice','rice','Rutgers','rutgers','San Diego State','sandiegostate','San Jose State','anjosestate','South Alabama','southalabama','South Carolina','southcarolina','Southern Methodist','smu','Southern Miss','southernmiss','South Florida','usf','Stanford','stanford','Syracuse','syracuse','TCU','tcu','Temple','temple','Tennessee','tennessee','Texas A&M','texasam','Texas-San Antonio','utsa','Texas State','texasstate','Texas Tech','texastech','Texas','texas','Toledo','toledo','Troy','troy','Tulane','tulane','Tulsa','tulsa','UAB','uab','UCF','ucf','UCLA','ucla','UNLV','unlv','USC','usc','Utah State','utahstate','Utah','utah','UTEP','utep','Vanderbilt','vanderbilt','Virginia Tech','virginiatech','Virginia','virginia','Wake Forest','wakeforest','Washington State','washingtonstate','Washington','washington','Western Kentucky','wku','Western Michigan','westernmichigan','West Virginia','westvirginia','Wisconsin','wisconsin','Wyoming','wyoming'];
flairconf = ['ACC','acc','SEC','sec','Big 10','bigten','Big 12','big12','Ind.','indep','Pac 12','pac12','MAC','mac','Sun Belt','sunbelt','M. West','mwc','American','aac','Conf USA','cusa'];
function getRecs(nrows){
	var table = document.getElementById("recTable");
      for (i=1;i<nrows+1;i++){
        table.insertRow(i); 
        if (i%2==1){table.rows[i].style.background = "rgba(230, 235, 237, 0.25)";}
        else {table.rows[i].style.background = "rgba(255, 255, 255, 0.25)";}
        table.rows[i].style.border = "solid 1px rgba(210, 215, 217, 0.75)";
        table.rows[i].style.borderWidth = "1px 0px 1px 0px";

        table.rows[i].insertCell(0); table.rows[i].cells[0].innerHTML = i;
        table.rows[i].insertCell(1); table.rows[i].cells[1].innerHTML = teams[i];
        table.rows[i].insertCell(2); table.rows[i].cells[2].innerHTML = conferences[i];
        table.rows[i].insertCell(3); table.rows[i].cells[3].innerHTML = commits[i];
        table.rows[i].insertCell(4); table.rows[i].cells[4].innerHTML = ratings[i];

      }
}

function getflair(teamname){
  for (teami=0;teami<flairconv.length/2;teami++){
    if (teamname==flairconv[teami*2]){return "["+teamname+"]"+"(#f/"+flairconv[teami*2+1]+") ";}
  }
}
function confflair(confname){
  for (confi=0;confi<flairconf.length/2;confi++){
    if (confname==flairconf[confi*2]){return "["+confname+"]"+"(#l/"+flairconf[confi*2+1]+") ";}
  }
}
function markdownRecs(nrows){
  var mdown = '|Rank|School|Conf|Commits|Rating|<br>|---:|---|---|---:|---:|'
  for (i=1;i<nrows+1;i++){
     mdown+='<br>|';
     mdown += i.toString();
     mdown+='|';
     mdown+= getflair(teams[i]);
     mdown +=teams[i];
     mdown+='|';
     mdown+= confflair(conferences[i]);
     mdown +=conferences[i];
     mdown+='|';
     mdown +=commits[i].toString();
     mdown+='|';
     mdown +=ratings[i].toString();
     mdown+='|';
  }
  var markdown = document.getElementById("markdown_spot");
  markdown.innerHTML = mdown;
}

