teams = ['Heading','Penn State','Texas','Ohio State','Miami (FL)','Oregon','Tennessee','Florida State','Oklahoma','UCLA','Mississippi State','Notre Dame','TCU','Texas A&M','Florida','LSU','Baylor','Minnesota','Maryland','Georgia','Oklahoma State','Virginia Tech','Washington','Michigan State','Louisville','Michigan','South Florida','USC','Navy','Clemson','Kentucky','South Carolina','Wisconsin','Houston','Auburn','Alabama','North Carolina State','West Virginia','Northwestern','California','Duke','Virginia','Texas Tech','Army','Purdue','Brigham Young','North Carolina','Vanderbilt','Cincinnati','Georgia Tech','Rutgers','Nebraska','Boston College','Indiana','Colorado','Pittsburgh','Washington State','Temple','Southern Methodist','Missouri','Arkansas','Iowa','Western Kentucky','Syracuse','Iowa State','Illinois','Arizona State','Wake Forest','East Carolina','Appalachian State','Texas-San Antonio','Northern Illinois','Mississippi','Kansas','San Diego State','Rice','Western Michigan','Arkansas State','Memphis','Connecticut','UCF','Arizona','Tulane','Boise State','Colorado State','Louisiana Tech','Kansas State','Harvard','Toledo','Oregon State','Tulsa','Texas State','Utah','Bowling Green','Florida International','Fresno State','UAB','North Texas','Nevada','Southern Miss','Princeton'];
conferences = ['Heading','Big 10','Big 12','Big 10','ACC','Pac 12','SEC','ACC','Big 12','Pac 12','SEC','Ind.','Big 12','SEC','SEC','SEC','Big 12','Big 10','Big 10','SEC','Big 12','ACC','Pac 12','Big 10','ACC','Big 10','American','Pac 12','American','ACC','SEC','SEC','Big 10','American','SEC','SEC','ACC','Big 12','Big 10','Pac 12','ACC','ACC','Big 12','Ind.','Big 10','Ind.','ACC','SEC','American','ACC','Big 10','Big 10','ACC','Big 10','Pac 12','ACC','Pac 12','American','American','SEC','SEC','Big 10','Conf USA','ACC','Big 12','Big 10','Pac 12','ACC','American','Sun Belt','Conf USA','MAC','SEC','Big 12','M. West','Conf USA','MAC','Sun Belt','American','American','American','Pac 12','American','M. West','M. West','Conf USA','Big 12','FCS','MAC','Pac 12','American','Sun Belt','Pac 12','MAC','Conf USA','M. West','Conf USA','Conf USA','M. West','Conf USA','FCS'];
commits = ['Heading',23,18,18,19,22,23,18,19,23,25,16,19,16,17,18,18,23,20,14,18,19,12,18,19,14,25,11,59,11,18,18,19,22,13,11,18,17,15,16,15,18,19,59,22,20,11,14,19,15,19,10,20,15,17,14,17,21,19,13,11,13,19,15,16,14,13,15,19,22,17,20,8,10,12,14,17,17,16,16,13,12,15,11,14,12,9,13,13,9,11,16,5,10,8,11,8,13,12,10,6];
ratings = ['Heading',2895,2807,2767,2757,2704,2694,2649,2597,2585,2574,2552,2523,2518,2505,2465,2451,2450,2442,2430,2427,2422,2421,2414,2401,2398,2387,2385,2385,2384,2383,2380,2377,2345,2344,2330,2314,2309,2304,2293,2274,2271,2264,2264,2264,2260,2254,2245,2240,2235,2230,2220,2219,2212,2203,2193,2193,2191,2182,2179,2172,2153,2146,2133,2124,2107,2091,2090,2085,2082,2071,2033,2008,2005,2000,1970,1964,1960,1959,1954,1953,1953,1949,1946,1937,1929,1927,1911,1879,1825,1823,1806,1794,1759,1753,1747,1734,1731,1721,1717,1685];

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

