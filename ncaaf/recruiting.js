teams = ['Heading','Penn State','Texas','Ohio State','Oregon','Miami (FL)','Oklahoma','Notre Dame','Florida State','Mississippi State','Georgia','Texas A&M','Auburn','Florida','Maryland','Virginia Tech','Louisville','TCU','UCLA','Baylor','Oklahoma State','LSU','Tennessee','Alabama','Minnesota','Michigan','Kentucky','Washington','Navy','West Virginia','Clemson','Michigan State','North Carolina State','South Florida','South Carolina','Army','Houston','Wisconsin','USC','Stanford','Vanderbilt','Northwestern','Rutgers','Washington State','Indiana','Virginia','California','North Carolina','Colorado','Duke','Georgia Tech','Cincinnati','Purdue','Boston College','Arizona State','Arkansas','Brigham Young','Texas Tech','Nebraska','Arizona','Western Kentucky','UCF','Iowa State','Southern Methodist','Pittsburgh','Iowa','Syracuse','Boise State','Temple','Texas-San Antonio','Wake Forest','Missouri','Illinois','Mississippi','Appalachian State','East Carolina','Colorado State','Connecticut','Western Michigan','Memphis','Kansas','Northern Illinois','Rice','San Diego State','Kansas State','Toledo','Utah','Oregon State','Texas State','Tulane','Harvard','Louisiana Tech','Nevada','Tulsa','Southern Miss','Arkansas State','Florida International','Georgia State','North Dakota State','James Madison','Fresno State'];
conferences = ['Heading','Big 10','Big 12','Big 10','Pac 12','ACC','Big 12','Ind.','ACC','SEC','SEC','SEC','SEC','SEC','Big 10','ACC','ACC','Big 12','Pac 12','Big 12','Big 12','SEC','SEC','SEC','Big 10','Big 10','SEC','Pac 12','American','Big 12','ACC','Big 10','ACC','American','SEC','Ind.','American','Big 10','Pac 12','Pac 12','SEC','Big 10','Big 10','Pac 12','Big 10','ACC','Pac 12','ACC','Pac 12','ACC','ACC','American','Big 10','ACC','Pac 12','SEC','Ind.','Big 12','Big 10','Pac 12','Conf USA','American','Big 12','American','ACC','Big 10','ACC','M. West','American','Conf USA','ACC','SEC','Big 10','SEC','Sun Belt','American','M. West','American','MAC','American','Big 12','MAC','Conf USA','M. West','Big 12','MAC','Pac 12','Pac 12','Sun Belt','American','FCS','Conf USA','M. West','American','Conf USA','Sun Belt','Conf USA','Sun Belt','FCS','FCS','M. West'];
commits = ['Heading',22,18,18,23,18,20,19,18,27,16,16,17,18,21,21,22,19,19,19,20,18,16,12,23,15,19,12,60,19,11,18,20,25,18,69,22,19,10,10,15,15,19,20,19,19,16,12,18,15,16,19,21,21,16,12,19,17,10,17,20,18,16,19,13,13,14,15,19,17,15,11,14,10,23,20,18,19,18,18,10,20,14,14,11,16,8,13,20,15,14,11,17,12,12,15,9,13,12,11,12];
ratings = ['Heading',2810,2784,2779,2758,2730,2665,2641,2641,2621,2580,2555,2549,2548,2503,2496,2487,2483,2472,2458,2455,2441,2439,2424,2420,2414,2409,2403,2402,2382,2378,2378,2371,2371,2360,2355,2336,2332,2328,2323,2316,2295,2293,2290,2286,2286,2280,2279,2264,2254,2251,2249,2246,2243,2230,2221,2217,2214,2200,2197,2189,2187,2177,2175,2151,2134,2128,2116,2106,2103,2093,2084,2083,2083,2081,2078,2058,2046,2044,2038,2020,2016,2003,2002,1997,1991,1951,1944,1939,1938,1905,1886,1880,1856,1846,1835,1834,1822,1818,1790,1777];
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

