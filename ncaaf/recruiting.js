teams = ['Heading','Penn State','Texas','Ohio State','Oregon','Miami (FL)','Florida State','Oklahoma','Notre Dame','Mississippi State','Georgia','Texas A&M','Florida','Tennessee','Maryland','Virginia Tech','TCU','UCLA','Louisville','Baylor','Oklahoma State','LSU','Kentucky','Auburn','Alabama','Minnesota','Michigan','Washington','Navy','USC','West Virginia','Michigan State','Clemson','North Carolina State','South Florida','South Carolina','Army','Houston','Wisconsin','Stanford','Vanderbilt','Northwestern','Rutgers','Washington State','Indiana','Virginia','North Carolina','California','Colorado','Duke','Georgia Tech','Cincinnati','Purdue','Texas Tech','Arkansas','UCF','Brigham Young','Nebraska','Western Kentucky','Arizona State','Boston College','Iowa State','Southern Methodist','Pittsburgh','Iowa','Syracuse','Boise State','Temple','Texas-San Antonio','Arizona','Wake Forest','Missouri','Mississippi','Appalachian State','Illinois','East Carolina','Western Michigan','Connecticut','Memphis','Colorado State','Kansas','Northern Illinois','Rice','San Diego State','Kansas State','Tulane','Toledo','Utah','Oregon State','Texas State','Harvard','Louisiana Tech','Nevada','Tulsa','Southern Miss','Florida International','Arkansas State','Georgia State','North Dakota State','James Madison','Fresno State'];
conferences = ['Heading','Big 10','Big 12','Big 10','Pac 12','ACC','ACC','Big 12','Ind.','SEC','SEC','SEC','SEC','SEC','Big 10','ACC','Big 12','Pac 12','ACC','Big 12','Big 12','SEC','SEC','SEC','SEC','Big 10','Big 10','Pac 12','American','Pac 12','Big 12','Big 10','ACC','ACC','American','SEC','Ind.','American','Big 10','Pac 12','SEC','Big 10','Big 10','Pac 12','Big 10','ACC','ACC','Pac 12','Pac 12','ACC','ACC','American','Big 10','Big 12','SEC','American','Ind.','Big 10','Conf USA','Pac 12','ACC','Big 12','American','ACC','Big 10','ACC','M. West','American','Conf USA','Pac 12','ACC','SEC','SEC','Sun Belt','Big 10','American','MAC','American','American','M. West','Big 12','MAC','Conf USA','M. West','Big 12','American','MAC','Pac 12','Pac 12','Sun Belt','FCS','Conf USA','M. West','American','Conf USA','Conf USA','Sun Belt','Sun Belt','FCS','FCS','M. West'];
commits = ['Heading',22,18,18,23,18,19,20,19,27,17,16,18,19,21,21,19,19,21,19,20,18,19,14,12,23,15,12,60,11,19,18,11,20,25,18,69,22,19,10,15,15,19,20,19,19,12,16,18,15,16,19,21,18,12,19,19,10,20,15,20,16,19,13,13,14,15,19,17,16,15,11,10,23,14,20,19,19,18,17,10,20,14,14,11,16,15,8,13,20,14,11,17,12,12,9,15,13,12,11,12];
ratings = ['Heading',2816,2787,2787,2763,2736,2693,2668,2648,2625,2623,2562,2554,2537,2509,2501,2487,2475,2464,2460,2458,2447,2428,2426,2425,2423,2419,2410,2402,2389,2386,2384,2382,2376,2374,2364,2353,2336,2335,2329,2322,2298,2294,2291,2288,2286,2286,2284,2265,2256,2256,2250,2247,2246,2227,2219,2217,2206,2194,2185,2183,2177,2166,2151,2137,2130,2114,2106,2105,2100,2096,2087,2085,2083,2083,2081,2077,2046,2041,2029,2021,2017,2002,1999,1996,1973,1968,1948,1944,1938,1905,1886,1876,1856,1849,1837,1834,1824,1817,1791,1773];
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

