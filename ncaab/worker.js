allteams = ["albany-ny","mass-lowell","vermont","hartford","new-hampshire","umbc","binghamton","maine","stony-brook","cincinnati","uconn","smu","temple","tulane","ucf","wichita-st","houston","east-carolina","memphis","south-fla","tulsa","davidson","saint-louis","duquesne","massachusetts","rhode-island","saint-josephs","st-bonaventure","george-mason","la-salle","vcu","dayton","george-washington","richmond","fordham","duke","florida-st","louisville","miami-fl","north-carolina","north-carolina-st","notre-dame","syracuse","virginia","boston-college","clemson","virginia-tech","georgia-tech","pittsburgh","wake-forest","fgcu","lipscomb","stetson","usc-upstate","njit","jacksonville","kennesaw-st","north-florida","baylor","kansas","kansas-st","oklahoma","tcu","texas","texas-tech","oklahoma-st","west-virginia","iowa-st","creighton","georgetown","seton-hall","st-johns-ny","villanova","xavier","butler","providence","marquette","depaul","portland-st","montana","idaho","montana-st","weber-st","north-dakota","eastern-wash","northern-colo","sacramento-st","southern-utah","idaho-st","northern-ariz","radford","charleston-so","liberty","campbell","unc-asheville","winthrop","gardner-webb","high-point","presbyterian","longwood","illinois","maryland","minnesota","ohio-st","purdue","rutgers","penn-st","michigan","nebraska","michigan-st","iowa","northwestern","indiana","wisconsin","hawaii","uc-davis","cal-poly","long-beach-st","uc-santa-barbara","uc-irvine","cal-st-fullerton","uc-riverside","cal-st-northridge","towson","col-of-charleston","unc-wilmington","delaware","hofstra","elon","northeastern","william-mary","drexel","james-madison","louisiana-tech","old-dominion","middle-tenn","southern-miss","western-ky","uab","utsa","charlotte","fla-atlantic","marshall","north-texas","fiu","rice","utep","milwaukee","northern-ky","detroit","ill-chicago","oakland","youngstown-st","green-bay","iupui","cleveland-st","wright-st","brown","penn","dartmouth","harvard","yale","columbia","cornell","princeton","rider","fairfield","manhattan","monmouth","canisius","niagara","saint-peters","iona","quinnipiac","marist","siena","akron","eastern-mich","kent-st","toledo","bowling-green","buffalo","miami-oh","central-mich","northern-ill","ohio","western-mich","ball-st","nc-at","morgan-st","nc-central","savannah-st","bethune-cookman","umes","delaware-st","florida-am","hampton","coppin-st","howard","norfolk-st","south-carolina-st","evansville","loyola-chicago","valparaiso","bradley","drake","uni","southern-ill","missouri-st","illinois-st","indiana-st","air-force","nevada","unlv","wyoming","boise-st","san-diego-st","fresno-st","new-mexico","colorado-st","utah-st","san-jose-st","wagner","fairleigh-dickinson","saint-francis-pa","central-conn-st","liu-brooklyn","st-francis-brooklyn","mt-st-marys","robert-morris","sacred-heart","bryant","belmont","jacksonville-st","tennessee-tech","murray-st","eastern-ky","southeast-mo-st","morehead-st","siu-edwardsville","tennessee-st","austin-peay","eastern-ill","ut-martin","arizona","arizona-st","colorado","oregon","southern-california","utah","washington-st","ucla","oregon-st","stanford","washington","california","army","lehigh","colgate","holy-cross","navy","loyola-maryland","bucknell","american","boston-u","lafayette","alabama","arkansas","florida","georgia","lsu","mississippi-st","tennessee","texas-am","kentucky","south-carolina","auburn","missouri","ole-miss","vanderbilt","unc-greensboro","mercer","citadel","wofford","chattanooga","east-tenn-st","furman","vmi","samford","western-caro","incarnate-word","stephen-f-austin","lamar","sam-houston-st","abilene-christian","central-ark","nicholls-st","mcneese-st","southeastern-la","am-corpus-chris","houston-baptist","new-orleans","northwestern-st","jackson-st","prairie-view","alabama-am","alabama-st","alcorn","ark-pine-bluff","grambling","mississippi-val","southern-u","texas-southern","western-ill","south-dakota","ipfw","south-dakota-st","denver","north-dakota-st","oral-roberts","neb-omaha","ga-southern","texas-arlington","georgia-st","appalachian-st","coastal-caro","la-lafayette","south-ala","arkansas-st","troy","la-monroe","texas-st","ualr","gonzaga","st-marys-ca","san-diego","byu","loyola-marymount","portland","san-francisco","santa-clara","pepperdine","pacific","grand-canyon","new-mexico-st","utrgv","utah-valley","bakersfield","seattle","umkc","chicago-st"];
allconfs = [["America East",0,9,0],["American Athletic Conference",9,21,0],["Atlantic 10",21,35,0],["Atlantic Coast",35,50,0],["Atlantic Sun",50,58,0],["Big 12",58,68,0],["Big East",68,78,0],["Big Sky",78,90,0],["Big South",90,100,0],["Big Ten",100,114,0],["Big West",114,123,0],["Colonial Athletic",123,133,0],["Conference USA",133,147,0],["Horizon",147,157,0],["Ivy League",157,165,0],["Metro Atlantic Athletic",165,176,0],["Mid-American",176,188,0],["Mid-Eastern",188,201,0],["Missouri Valley",201,211,0],["Mountain West",211,222,0],["Northeast",222,232,0],["Ohio Valley",232,244,0],["Pac-12",244,256,0],["Patriot League",256,266,0],["Southeastern",266,280,0],["Southern",280,290,0],["Southland",290,303,0],["Southwestern Athletic",303,313,0],["Summit League",313,321,0],["Sun Belt",321,333,0],["West Coast",333,343,0],["Western Athletic",343,351,0]]

function genRPI(wRec,wOpp,wOppOpp,hAdv,allplayed,cteamwp,cteamopp,cteamadjwp){
  teamoppwp=[];teamoppoppwp=[];var teamrpi=[]; var teamwp=[]; var teamopp = []; var teamadjwp = [];
  for (idx=0;idx<allplayed.length;idx++){
          i = allplayed[idx];
          wins = 0;
          games = 0;
          cwins = 0;
          cgames = 0;
          opponents = [];
          adjwins = 0;
          adjgames = 0;
          
          
          for (iidx=1;iidx<i.length/4;iidx++){
                  
                  ii = [i[iidx*4-3],i[iidx*4-2],i[iidx*4-1],i[iidx*4]];

                    games += 1;
                    if (ii[0][1]=='c' && ii[2]>ii[3]){cwins += 1; cgames +=1;}
                    else if (ii[0][1]=='c' && ii[3]>ii[2]){cgames +=1;}
                    if (ii[0][0]=='@'){

                              if (ii[2]>ii[3]){adjwins +=1.0+hAdv; adjgames +=1.0+hAdv; opponents.push([ii[1],0]); wins +=1;}
                              else {adjgames +=1.0-hAdv; opponents.push([ii[1],1]);}
                            
                    }
                    else if (ii[0][0]=='v'){

                              if (ii[2]>ii[3]){adjwins +=1.0; adjgames += 1.0; opponents.push([ii[1],0]); wins +=1;}
                              else {adjgames += 1.0; opponents.push([ii[1],1]);}
                            
                    }
                    else{

                              if (ii[2]>ii[3]){adjwins +=1.0-hAdv; adjgames += 1.0-hAdv; opponents.push([ii[1],0]); wins +=1;}
                              else {adjgames += 1.0+hAdv; opponents.push([ii[1],1]);}
                            
                    }
          }
          teamwp.push([idx,cteamwp[idx][1]+wins,cteamwp[idx][2]+games,cteamwp[idx][3]+cwins,cteamwp[idx][4]+cgames]);
          teamopp.push([idx,cteamopp[idx][1].concat(opponents)]);
          teamadjwp.push([idx,cteamadjwp[idx][1]+adjwins,cteamadjwp[idx][2]+adjgames]);

  }


  for (idx=0;idx<teamopp.length;idx++){
          i = teamopp[idx];
          oppwp = 0.;
          opptot = 0.;
          for (iidx=0;iidx<i[1].length;iidx++){
                  ii = i[1][iidx];
                          iii = teamwp[ii[0]];
                                  if (iii[2]>1){
                                            oppwp += (iii[1]-ii[1])*1./(iii[2]-1.);
                                            opptot += 1.;

                                  }


          }
          if (opptot>0){teamoppwp.push([i[0],oppwp*1./opptot]);}
          else {teamoppwp.push([i[0]]);}
  }

  for (idx=0;idx<teamopp.length;idx++){
          i = teamopp[idx];
          oppwp = 0.;
          opptot = 0.;
          for (iidx=0;iidx<i[1].length;iidx++){
                  ii = i[1][iidx];
                          iii = teamoppwp[ii[0]];
                                if (iii.length>1){
                                  oppwp += iii[1];
                                  opptot += 1.;
                                }

          }
          if (opptot>0){teamoppoppwp.push([i[0],oppwp*1./opptot]);}
          else {teamoppoppwp.push([i[0]]);}
  } 

  for (i=0;i<teamwp.length;i++){
          tname = teamwp[i][0];
          teamopp = -1;
          teamoppopp = -1;

          if (teamoppwp[i].length>1){teamopp=teamoppwp[i][1];}

          if (teamoppoppwp[i].length>1){teamoppopp=teamoppoppwp[i][1];}

          if (teamopp != -1 && teamoppopp != -1){
                  teamrpi.push([tname,(teamadjwp[i][1]/teamadjwp[i][2]*wRec+teamopp*wOpp+teamoppopp*wOppOpp)*(1./(wRec+wOpp+wOppOpp)),(teamopp*wOpp+teamoppopp*wOppOpp)*(1./(wOpp+wOppOpp)),teamadjwp[i][1]/teamadjwp[i][2],teamopp,teamoppopp,teamwp[i][1],teamwp[i][2],teamwp[i][3],teamwp[i][4]])
          }
          else {teamrpi.push([tname,0.0,0.0,0,0,0,0,0,0,0]);}
  }

  return teamrpi;
}
function playgame(ateam,hteam,teamrpi,allplayed,confgame){
          arpi = teamrpi[ateam][1];
          hrpi = teamrpi[hteam][1];
          var winner = 0;
          phwin = (hrpi-hrpi*arpi)/(arpi+hrpi-2*arpi*hrpi);
          if (Math.random()<phwin){
            if (confgame==1){
              allplayed[ateam].push('@c',hteam,3,4);
              allplayed[hteam].push('hc',ateam,4,3);
            }
            else{
              allplayed[ateam].push('@n',hteam,3,4);
              allplayed[hteam].push('hn',ateam,4,3);
            }
            winner = hteam;
          }
          else{
            if (confgame==1){
              allplayed[ateam].push('@c',hteam,4,3);
              allplayed[hteam].push('hc',ateam,3,4);
            }
            else{
              allplayed[ateam].push('@n',hteam,4,3);
              allplayed[hteam].push('hn',ateam,3,4);
            }
            winner = ateam;
          }
  return allplayed,winner;
}
function runThis(teamrpi,baseplayed,alltoplay,teamwp,teamopp,teamadjwp){
  var endrpi;
  var sumrpi = [];
  var confwinsb = [];
  for (i=0;i<teamrpi.length;i++){sumrpi.push([i,0.,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); confwinsb.push(teamrpi[i][8]);}
  Object.freeze(teamwp); Object.freeze(teamadjwp); Object.freeze(teamopp); Object.freeze(confwinsb);
  for (i=0;i<teamrpi.length;i++){Object.freeze(teamopp[i][1]);Object.freeze(teamwp[i]);Object.freeze(teamadjwp[i]);}

  for (runi=0;runi<500;runi++){
     var allplayed = [];
     var confwins = confwinsb.slice();

    
    for (i=0;i<teamrpi.length;i++){allplayed.push([i]);}

    for (i=0;i<alltoplay.length/3;i++){
          ateam = alltoplay[i*3]%10000;
          hteam = alltoplay[i*3+1]%10000;
          cgame = alltoplay[i*3+2];
          allplayed,winner = playgame(ateam,hteam,teamrpi,allplayed,cgame);
          if (cgame==1){confwins[winner]+=1;}

    }
    
    conf15 = [3];
    for (i=3;i<4;i++){
      var confteams = [];
      for (ii=allconfs[i][1];ii<allconfs[i][2];ii++){
        confteams.push([ii,confwins[ii]]);
      }
      unsorted = true;
      while (unsorted){
              unsorted = false;
              for (ci=0;ci<confteams.length-1;ci++){
                      if (confteams[ci][1]<confteams[ci+1][1]){
                              holdrpi = confteams[ci];
                              confteams[ci]=confteams[ci+1];
                              confteams[ci+1]=holdrpi;
                              unsorted = true;
                      }
              }
      }
      allplayed,winner14 = playgame(confteams[14][0],confteams[9][0],teamrpi,allplayed,0);
      allplayed,winner13 = playgame(confteams[13][0],confteams[10][0],teamrpi,allplayed,0);
      allplayed,winner12 = playgame(confteams[12][0],confteams[11][0],teamrpi,allplayed,0);
      allplayed,winner11 = playgame(winner12,confteams[4][0],teamrpi,allplayed,0);
      allplayed,winner10 = playgame(winner13,confteams[5][0],teamrpi,allplayed,0);
      allplayed,winner9 = playgame(winner14,confteams[6][0],teamrpi,allplayed,0);
      allplayed,winner8 = playgame(confteams[8][0],confteams[7][0],teamrpi,allplayed,0);
      allplayed,winner7 = playgame(winner11,confteams[3][0],teamrpi,allplayed,0);
      allplayed,winner6 = playgame(winner10,confteams[2][0],teamrpi,allplayed,0);
      allplayed,winner5 = playgame(winner9,confteams[1][0],teamrpi,allplayed,0);
      allplayed,winner4 = playgame(winner8,confteams[0][0],teamrpi,allplayed,0);
      allplayed,winner3 = playgame(winner6,winner5,teamrpi,allplayed,0);
      allplayed,winner2 = playgame(winner7,winner4,teamrpi,allplayed,0);
      allplayed,winner1 = playgame(winner3,winner2,teamrpi,allplayed,0);
      allconfs[i][3]=winner1;
    }  
    conf14 = [2,9,24];
    for (iii=0;iii<3;iii++){
      i = conf14[iii];
      var confteams = [];
      for (ii=allconfs[i][1];ii<allconfs[i][2];ii++){
        confteams.push([ii,confwins[ii]]);
      }
      unsorted = true;
      while (unsorted){
              unsorted = false;
              for (ci=0;ci<confteams.length-1;ci++){
                      if (confteams[ci][1]<confteams[ci+1][1]){
                              holdrpi = confteams[ci];
                              confteams[ci]=confteams[ci+1];
                              confteams[ci+1]=holdrpi;
                              unsorted = true;
                      }
              }
      }

      allplayed,winner13 = playgame(confteams[13][0],confteams[10][0],teamrpi,allplayed,0);
      allplayed,winner12 = playgame(confteams[12][0],confteams[11][0],teamrpi,allplayed,0);
      allplayed,winner11 = playgame(winner12,confteams[4][0],teamrpi,allplayed,0);
      allplayed,winner10 = playgame(winner13,confteams[5][0],teamrpi,allplayed,0);
      allplayed,winner9 = playgame(confteams[9][0],confteams[6][0],teamrpi,allplayed,0);
      allplayed,winner8 = playgame(confteams[8][0],confteams[7][0],teamrpi,allplayed,0);
      allplayed,winner7 = playgame(winner11,confteams[3][0],teamrpi,allplayed,0);
      allplayed,winner6 = playgame(winner10,confteams[2][0],teamrpi,allplayed,0);
      allplayed,winner5 = playgame(winner9,confteams[1][0],teamrpi,allplayed,0);
      allplayed,winner4 = playgame(winner8,confteams[0][0],teamrpi,allplayed,0);
      allplayed,winner3 = playgame(winner6,winner5,teamrpi,allplayed,0);
      allplayed,winner2 = playgame(winner7,winner4,teamrpi,allplayed,0);
      allplayed,winner1 = playgame(winner3,winner2,teamrpi,allplayed,0);
      allconfs[i][3]=winner1;
    }
    conf12 = [12,16,17,22,29];
    for (iii=0;iii<5;iii++){
      i = conf12[iii];
      var confteams = [];
      for (ii=allconfs[i][1];ii<allconfs[i][2];ii++){
        confteams.push([ii,confwins[ii]]);
      }
      unsorted = true;
      while (unsorted){
              unsorted = false;
              for (ci=0;ci<confteams.length-1;ci++){
                      if (confteams[ci][1]<confteams[ci+1][1]){
                              holdrpi = confteams[ci];
                              confteams[ci]=confteams[ci+1];
                              confteams[ci+1]=holdrpi;
                              unsorted = true;
                      }
              }
      }

      allplayed,winner11 = playgame(confteams[11][0],confteams[4][0],teamrpi,allplayed,0);
      allplayed,winner10 = playgame(confteams[10][0],confteams[5][0],teamrpi,allplayed,0);
      allplayed,winner9 = playgame(confteams[9][0],confteams[6][0],teamrpi,allplayed,0);
      allplayed,winner8 = playgame(confteams[8][0],confteams[7][0],teamrpi,allplayed,0);
      allplayed,winner7 = playgame(winner11,confteams[3][0],teamrpi,allplayed,0);
      allplayed,winner6 = playgame(winner10,confteams[2][0],teamrpi,allplayed,0);
      allplayed,winner5 = playgame(winner9,confteams[1][0],teamrpi,allplayed,0);
      allplayed,winner4 = playgame(winner8,confteams[0][0],teamrpi,allplayed,0);
      allplayed,winner3 = playgame(winner6,winner5,teamrpi,allplayed,0);
      allplayed,winner2 = playgame(winner7,winner4,teamrpi,allplayed,0);
      allplayed,winner1 = playgame(winner3,winner2,teamrpi,allplayed,0);
      allconfs[i][3]=winner1;
    }
    conf11 = [1,7,15,19];
    for (iii=0;iii<4;iii++){
      i = conf11[iii];
      var confteams = [];
      for (ii=allconfs[i][1];ii<allconfs[i][2];ii++){
        confteams.push([ii,confwins[ii]]);
      }
      unsorted = true;
      while (unsorted){
              unsorted = false;
              for (ci=0;ci<confteams.length-1;ci++){
                      if (confteams[ci][1]<confteams[ci+1][1]){
                              holdrpi = confteams[ci];
                              confteams[ci]=confteams[ci+1];
                              confteams[ci+1]=holdrpi;
                              unsorted = true;
                      }
              }
      }
      allplayed,winner10 = playgame(confteams[10][0],confteams[5][0],teamrpi,allplayed,0);
      allplayed,winner9 = playgame(confteams[9][0],confteams[6][0],teamrpi,allplayed,0);
      allplayed,winner8 = playgame(confteams[8][0],confteams[7][0],teamrpi,allplayed,0);
      allplayed,winner7 = playgame(winner11,confteams[3][0],teamrpi,allplayed,0);
      allplayed,winner6 = playgame(winner10,confteams[2][0],teamrpi,allplayed,0);
      allplayed,winner5 = playgame(winner9,confteams[1][0],teamrpi,allplayed,0);
      allplayed,winner4 = playgame(winner8,confteams[0][0],teamrpi,allplayed,0);
      allplayed,winner3 = playgame(winner6,winner5,teamrpi,allplayed,0);
      allplayed,winner2 = playgame(winner7,winner4,teamrpi,allplayed,0);
      allplayed,winner1 = playgame(winner3,winner2,teamrpi,allplayed,0);
      allconfs[i][3]=winner1;
    }
    conf10 = [5,6,8,11,13,18,23,25,30];
    for (iii=0;iii<9;iii++){
      i = conf10[iii];
      var confteams = [];
      for (ii=allconfs[i][1];ii<allconfs[i][2];ii++){
        confteams.push([ii,confwins[ii]]);
      }
      unsorted = true;
      while (unsorted){
              unsorted = false;
              for (ci=0;ci<confteams.length-1;ci++){
                      if (confteams[ci][1]<confteams[ci+1][1]){
                              holdrpi = confteams[ci];
                              confteams[ci]=confteams[ci+1];
                              confteams[ci+1]=holdrpi;
                              unsorted = true;
                      }
              }
      }


      allplayed,winner9 = playgame(confteams[9][0],confteams[6][0],teamrpi,allplayed,0);
      allplayed,winner8 = playgame(confteams[8][0],confteams[7][0],teamrpi,allplayed,0);
      allplayed,winner7 = playgame(confteams[4][0],confteams[3][0],teamrpi,allplayed,0);
      allplayed,winner6 = playgame(confteams[5][0],confteams[2][0],teamrpi,allplayed,0);
      allplayed,winner5 = playgame(winner9,confteams[1][0],teamrpi,allplayed,0);
      allplayed,winner4 = playgame(winner8,confteams[0][0],teamrpi,allplayed,0);
      allplayed,winner3 = playgame(winner6,winner5,teamrpi,allplayed,0);
      allplayed,winner2 = playgame(winner7,winner4,teamrpi,allplayed,0);
      allplayed,winner1 = playgame(winner3,winner2,teamrpi,allplayed,0);
      allconfs[i][3]=winner1;
    }
    conf8 = [0,4,10,20,21,27,28];
    for (iii=0;iii<7;iii++){
      i = conf8[iii];
      var confteams = [];
      for (ii=allconfs[i][1];ii<allconfs[i][2];ii++){
        confteams.push([ii,confwins[ii]]);
      }
      unsorted = true;
      while (unsorted){
              unsorted = false;
              for (ci=0;ci<confteams.length-1;ci++){
                      if (confteams[ci][1]<confteams[ci+1][1]){
                              holdrpi = confteams[ci];
                              confteams[ci]=confteams[ci+1];
                              confteams[ci+1]=holdrpi;
                              unsorted = true;
                      }
              }
      }

      allplayed,winner7 = playgame(confteams[4][0],confteams[3][0],teamrpi,allplayed,0);
      allplayed,winner6 = playgame(confteams[5][0],confteams[2][0],teamrpi,allplayed,0);
      allplayed,winner5 = playgame(confteams[6][0],confteams[1][0],teamrpi,allplayed,0);
      allplayed,winner4 = playgame(confteams[7][0],confteams[0][0],teamrpi,allplayed,0);
      allplayed,winner3 = playgame(winner6,winner5,teamrpi,allplayed,0);
      allplayed,winner2 = playgame(winner7,winner4,teamrpi,allplayed,0);
      allplayed,winner1 = playgame(winner3,winner2,teamrpi,allplayed,0);
      allconfs[i][3]=winner1;
    }
    conf8special = [26];
    for (iii=0;iii<1;iii++){
      i = conf8special[iii];
      var confteams = [];
      for (ii=allconfs[i][1];ii<allconfs[i][2];ii++){
        confteams.push([ii,confwins[ii]]);
      }
      unsorted = true;
      while (unsorted){
              unsorted = false;
              for (ci=0;ci<confteams.length-1;ci++){
                      if (confteams[ci][1]<confteams[ci+1][1]){
                              holdrpi = confteams[ci];
                              confteams[ci]=confteams[ci+1];
                              confteams[ci+1]=holdrpi;
                              unsorted = true;
                      }
              }
      }

      allplayed,winner7 = playgame(confteams[6][0],confteams[5][0],teamrpi,allplayed,0);
      allplayed,winner6 = playgame(confteams[7][0],confteams[4][0],teamrpi,allplayed,0);

      allplayed,winner5 = playgame(winner6,confteams[3][0],teamrpi,allplayed,0);
      allplayed,winner4 = playgame(winner7,confteams[2][0],teamrpi,allplayed,0);

      allplayed,winner3 = playgame(winner5,confteams[0][0],teamrpi,allplayed,0);
      allplayed,winner2 = playgame(winner4,confteams[1][0],teamrpi,allplayed,0);

      allplayed,winner1 = playgame(winner3,winner2,teamrpi,allplayed,0);
      allconfs[i][3]=winner1;
    }
    conf7 = [31];
    for (iii=0;iii<1;iii++){
      i = conf7[iii];
      var confteams = [];
      for (ii=allconfs[i][1];ii<allconfs[i][2];ii++){
        confteams.push([ii,confwins[ii]]);
      }
      unsorted = true;
      while (unsorted){
              unsorted = false;
              for (ci=0;ci<confteams.length-1;ci++){
                      if (confteams[ci][1]<confteams[ci+1][1]){
                              holdrpi = confteams[ci];
                              confteams[ci]=confteams[ci+1];
                              confteams[ci+1]=holdrpi;
                              unsorted = true;
                      }
              }
      }

      allplayed,winner6 = playgame(confteams[4][0],confteams[3][0],teamrpi,allplayed,0);
      allplayed,winner5 = playgame(confteams[5][0],confteams[2][0],teamrpi,allplayed,0);
      allplayed,winner4 = playgame(confteams[6][0],confteams[1][0],teamrpi,allplayed,0);
      allplayed,winner3 = playgame(winner6,confteams[0][0],teamrpi,allplayed,0);
      allplayed,winner2 = playgame(winner5,winner4,teamrpi,allplayed,0);
      allplayed,winner1 = playgame(winner3,winner2,teamrpi,allplayed,0);
      allconfs[i][3]=winner1;
    }
    conf4 = [14];
    for (iii=0;iii<1;iii++){
      i = conf4[iii];
      var confteams = [];
      for (ii=allconfs[i][1];ii<allconfs[i][2];ii++){
        confteams.push([ii,confwins[ii]]);
      }
      unsorted = true;
      while (unsorted){
              unsorted = false;
              for (ci=0;ci<confteams.length-1;ci++){
                      if (confteams[ci][1]<confteams[ci+1][1]){
                              holdrpi = confteams[ci];
                              confteams[ci]=confteams[ci+1];
                              confteams[ci+1]=holdrpi;
                              unsorted = true;
                      }
              }
      }


      allplayed,winner3 = playgame(confteams[2][0],confteams[1][0],teamrpi,allplayed,0);
      allplayed,winner2 = playgame(confteams[3][0],confteams[0][0],teamrpi,allplayed,0);
      allplayed,winner1 = playgame(winner3,winner2,teamrpi,allplayed,0);
      allconfs[i][3]=winner1;
    }

    allchamps = [];
    for (i=0;i<allconfs.length;i++){sumrpi[allconfs[i][3]][6]+=1; allchamps.push(allconfs[i][3]);}

    endrpi = genRPI(.25,.5,.25,.4, allplayed, teamwp, teamopp, teamadjwp);
    for (i=0;i<endrpi.length;i++){sumrpi[i][1]+=endrpi[i][1];sumrpi[i][2]+=endrpi[i][6];sumrpi[i][3]+=endrpi[i][7]-endrpi[i][6];sumrpi[i][4]+=endrpi[i][8];sumrpi[i][5]+=endrpi[i][9]-endrpi[i][8];}
    

    natlarge = 68+4-allchamps.length;
    topbubblerpi = [];
    for (i=0;i<natlarge;i++){topbubblerpi.push([-1,0]);}
    for (i=0;i<endrpi.length;i++){
      if (allchamps.indexOf(i)==-1){
        for (ii=0;ii<natlarge;ii++){
          if (endrpi[i][1]>topbubblerpi[ii][1] || topbubblerpi[ii][0]==-1){
            for (iii=natlarge-1;iii>ii;iii--){topbubblerpi[iii]=topbubblerpi[iii-1];}
            topbubblerpi[ii]=[endrpi[i][0],endrpi[i][1]];
            break;
          }

        }
      }
    }
    first4out = topbubblerpi.slice(natlarge-4,natlarge);
    last4in = topbubblerpi.slice(natlarge-8,natlarge-4);
    topbubblerpi = topbubblerpi.slice(0,natlarge-8);

    for (i=0;i<allchamps.length;i++){
      addteam = true;
      for (ii=0;ii<topbubblerpi.length;ii++){
        if (endrpi[allchamps[i]][1]>topbubblerpi[ii][1]){
          topbubblerpi.splice(ii,0,[allchamps[i],endrpi[allchamps[i]][1]]); addteam = false; break;
        }
      }
      if (addteam){topbubblerpi.push([allchamps[i],endrpi[allchamps[i]][1]]);}
    }
    for (i=0;i<11;i++){
      for (ii=0;ii<4;ii++){
        sumrpi[topbubblerpi[i*4+ii][0]][7+i]+=1;
      }
    }
    for (i=11;i<12;i++){
      for (ii=0;ii<2;ii++){
        sumrpi[topbubblerpi[i*4+ii][0]][7+i]+=1;
      }
    }
    for (i=12;i<15;i++){
      for (ii=0;ii<4;ii++){
        sumrpi[topbubblerpi[i*4+ii-2][0]][7+i]+=1;
      }
    }
    for (i=15;i<16;i++){
      for (ii=0;ii<2;ii++){
        sumrpi[topbubblerpi[i*4+ii-2][0]][7+i]+=1;
      }
    }
    for (i=15;i<16;i++){
      for (ii=0;ii<4;ii++){
        sumrpi[topbubblerpi[i*4+ii][0]][8+i]+=1;
      }
    }
    for (i=0;i<4;i++){sumrpi[last4in[i][0]][24]+=1;}
    for (i=0;i<4;i++){sumrpi[first4out[i][0]][25]+=1;}

    winners = [];
    for (i=0;i<68;i++){winners.push(0);}
    allplayed,winners[67] = playgame(last4in[2][0],last4in[1][0],teamrpi,allplayed,0);
    allplayed,winners[66] = playgame(last4in[3][0],last4in[0][0],teamrpi,allplayed,0);
    allplayed,winners[65] = playgame(topbubblerpi[62][0],topbubblerpi[61][0],teamrpi,allplayed,0);
    allplayed,winners[64] = playgame(topbubblerpi[63][0],topbubblerpi[60][0],teamrpi,allplayed,0);

    allplayed,winners[49] = playgame(winners[67],topbubblerpi[17][0],teamrpi,allplayed,0);
    allplayed,winners[48] = playgame(winners[66],topbubblerpi[16][0],teamrpi,allplayed,0);
    allplayed,winners[33] = playgame(winners[65],topbubblerpi[1][0],teamrpi,allplayed,0);
    allplayed,winners[32] = playgame(winners[64],topbubblerpi[0][0],teamrpi,allplayed,0);



    for (i=0;i<32;i++){
      if (i!=0 && i!=1 && i!=16 &&i!=17){
        if (i<16){
          allplayed,winners[32+i] = playgame(topbubblerpi[61-i][0],topbubblerpi[i][0],teamrpi,allplayed,0);
        }
        else{
          allplayed,winners[32+i] = playgame(topbubblerpi[63-i][0],topbubblerpi[i][0],teamrpi,allplayed,0);
        }
      }
      sumrpi[winners[32+i]][26]+=1;
    }

    for (i=0;i<16;i++){      allplayed,winners[16+i] = playgame(winners[63-i],winners[32+i],teamrpi,allplayed,0); sumrpi[winners[16+i]][27]+=1;   }
    for (i=0;i<8;i++){      allplayed,winners[8+i] = playgame(winners[31-i],winners[16+i],teamrpi,allplayed,0); sumrpi[winners[8+i]][28]+=1;   }
    for (i=0;i<4;i++){      allplayed,winners[4+i] = playgame(winners[15-i],winners[8+i],teamrpi,allplayed,0);  sumrpi[winners[4+i]][29]+=1;  }
    for (i=0;i<2;i++){      allplayed,winners[2+i] = playgame(winners[7-i],winners[4+i],teamrpi,allplayed,0);  sumrpi[winners[2+i]][30]+=1;  }
    allplayed,winners[1] = playgame(winners[3],winners[2],teamrpi,allplayed,0);sumrpi[winners[1]][31]+=1;
    for (i=1;i<68;i++){sumrpi[winners[i]][2]+=1;}
    for (i=0;i<64;i++){sumrpi[topbubblerpi[i][0]][3]+=1;}
    for (i=0;i<4;i++){sumrpi[last4in[i][0]][3]+=1;}
    sumrpi[winners[1]][2]-=1;



  }
  return sumrpi;
}

onmessage = function(e) {console.log(Date.now()); var sumrpi = runThis(e.data[0],e.data[1],e.data[2],e.data[3],e.data[4],e.data[5]); console.log(Date.now()); 
    postMessage(sumrpi); 
};
        