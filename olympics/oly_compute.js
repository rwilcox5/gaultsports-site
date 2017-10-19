function loadModule(filename) {
  return fetch(filename)
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => {
      const imports = {
        env: {
          memoryBase: 0,
          tableBase: 0,
          memory: new WebAssembly.Memory({
            initial: 1024
          }),
          table: new WebAssembly.Table({
            initial: 0,
            element: 'anyfunc'
          })
        }
      };
      
      return new WebAssembly.instantiate(module, imports);
    });
}

function runRating(){
loadModule('oly_compute.wasm').then(instance => {
      const makeCount = instance.exports._makeCount;
      const sendValue = instance.exports._sendValue;
      const sendGold = instance.exports._sendGold;

      wAqua = document.getElementById('wAqua').value;
      wAth = document.getElementById('wAth').value;
      wTeam = document.getElementById('wTeam').value;
      wCombat = document.getElementById('wCombat').value;
      wWeapons = document.getElementById('wWeapons').value;
      wRaquet = document.getElementById('wRaquet').value;
      wRiding = document.getElementById('wRiding').value;
      wGym = document.getElementById('wGym').value;
      wMultiple = document.getElementById('wMultiple').value;
      wWater = document.getElementById('wWater').value;
      console.log(makeCount(wAqua,wAth,wTeam,wCombat,wWeapons,wRaquet,wRiding,wGym,wMultiple,wWater));
      console.log(26,sendValue(26));
      console.log(92,sendValue(92));
      console.log(94,sendValue(94));
      console.log(88,sendValue(88));
      console.log(91,sendValue(91));
      map_main({'BOL':{'points':255-sendValue(0),'gold':sendGold(0),'silver':2,'bronze':1},'TKM':{'points':255-sendValue(1),'gold':sendGold(1),'silver':2,'bronze':1},'YEM':{'points':255-sendValue(2),'gold':sendGold(2),'silver':2,'bronze':1},'SLB':{'points':255-sendValue(3),'gold':sendGold(3),'silver':2,'bronze':1},'TLS':{'points':255-sendValue(4),'gold':sendGold(4),'silver':2,'bronze':1},'PSX':{'points':255-sendValue(5),'gold':sendGold(5),'silver':2,'bronze':1},'BIH':{'points':255-sendValue(6),'gold':sendGold(6),'silver':2,'bronze':1},'ALB':{'points':255-sendValue(7),'gold':sendGold(7),'silver':2,'bronze':1},'SLV':{'points':255-sendValue(8),'gold':sendGold(8),'silver':2,'bronze':1},'BTN':{'points':255-sendValue(9),'gold':sendGold(9),'silver':2,'bronze':1},'BGD':{'points':255-sendValue(10),'gold':sendGold(10),'silver':2,'bronze':1},'OMN':{'points':255-sendValue(11),'gold':sendGold(11),'silver':2,'bronze':1},'LAO':{'points':255-sendValue(12),'gold':sendGold(12),'silver':2,'bronze':1},'KHM':{'points':255-sendValue(13),'gold':sendGold(13),'silver':2,'bronze':1},'GNQ':{'points':255-sendValue(14),'gold':sendGold(14),'silver':2,'bronze':1},'GNB':{'points':255-sendValue(15),'gold':sendGold(15),'silver':2,'bronze':1},'PNG':{'points':255-sendValue(16),'gold':sendGold(16),'silver':2,'bronze':1},'JOR':{'points':255-sendValue(17),'gold':sendGold(17),'silver':2,'bronze':1},'GIN':{'points':255-sendValue(18),'gold':sendGold(18),'silver':2,'bronze':1},'MRT':{'points':255-sendValue(19),'gold':sendGold(19),'silver':2,'bronze':1},'LVA':{'points':255-sendValue(20),'gold':sendGold(20),'silver':2,'bronze':1},'TGO':{'points':255-sendValue(21),'gold':sendGold(21),'silver':2,'bronze':1},'TWN':{'points':255-sendValue(22),'gold':sendGold(22),'silver':2,'bronze':1},'BHS':{'points':255-sendValue(23),'gold':sendGold(23),'silver':2,'bronze':1},'PRI':{'points':255-sendValue(24),'gold':sendGold(24),'silver':2,'bronze':1},'PHL':{'points':255-sendValue(25),'gold':sendGold(25),'silver':2,'bronze':1},'RUS':{'points':255-sendValue(26),'gold':sendGold(26),'silver':2,'bronze':1},'CZE':{'points':255-sendValue(27),'gold':sendGold(27),'silver':2,'bronze':1},'SRB':{'points':255-sendValue(28),'gold':sendGold(28),'silver':2,'bronze':1},'DEU':{'points':255-sendValue(29),'gold':sendGold(29),'silver':2,'bronze':1},'JAM':{'points':255-sendValue(30),'gold':sendGold(30),'silver':2,'bronze':1},'AUS':{'points':255-sendValue(31),'gold':sendGold(31),'silver':2,'bronze':1},'SAU':{'points':255-sendValue(32),'gold':sendGold(32),'silver':2,'bronze':1},'KWT':{'points':255-sendValue(33),'gold':sendGold(33),'silver':2,'bronze':1},'NPL':{'points':255-sendValue(34),'gold':sendGold(34),'silver':2,'bronze':1},'MNG':{'points':255-sendValue(35),'gold':sendGold(35),'silver':2,'bronze':1},'MDG':{'points':255-sendValue(36),'gold':sendGold(36),'silver':2,'bronze':1},'LSO':{'points':255-sendValue(37),'gold':sendGold(37),'silver':2,'bronze':1},'VNM':{'points':255-sendValue(38),'gold':sendGold(38),'silver':2,'bronze':1},'VUT':{'points':255-sendValue(39),'gold':sendGold(39),'silver':2,'bronze':1},'LBN':{'points':255-sendValue(40),'gold':sendGold(40),'silver':2,'bronze':1},'NIC':{'points':255-sendValue(41),'gold':sendGold(41),'silver':2,'bronze':1},'BLZ':{'points':255-sendValue(42),'gold':sendGold(42),'silver':2,'bronze':1},'SVN':{'points':255-sendValue(43),'gold':sendGold(43),'silver':2,'bronze':1},'LKA':{'points':255-sendValue(44),'gold':sendGold(44),'silver':2,'bronze':1},'HND':{'points':255-sendValue(45),'gold':sendGold(45),'silver':2,'bronze':1},'MMR':{'points':255-sendValue(46),'gold':sendGold(46),'silver':2,'bronze':1},'MYS':{'points':255-sendValue(47),'gold':sendGold(47),'silver':2,'bronze':1},'IDN':{'points':255-sendValue(48),'gold':sendGold(48),'silver':2,'bronze':1},'IRN':{'points':255-sendValue(49),'gold':sendGold(49),'silver':2,'bronze':1},'FJI':{'points':255-sendValue(50),'gold':sendGold(50),'silver':2,'bronze':1},'HRV':{'points':255-sendValue(51),'gold':sendGold(51),'silver':2,'bronze':1},'GTM':{'points':255-sendValue(52),'gold':sendGold(52),'silver':2,'bronze':1},'HTI':{'points':255-sendValue(53),'gold':sendGold(53),'silver':2,'bronze':1},'URY':{'points':255-sendValue(54),'gold':sendGold(54),'silver':2,'bronze':1},'SDN':{'points':255-sendValue(55),'gold':sendGold(55),'silver':2,'bronze':1},'SWZ':{'points':255-sendValue(56),'gold':sendGold(56),'silver':2,'bronze':1},'NER':{'points':255-sendValue(57),'gold':sendGold(57),'silver':2,'bronze':1},'NGA':{'points':255-sendValue(58),'gold':sendGold(58),'silver':2,'bronze':1},'GMB':{'points':255-sendValue(59),'gold':sendGold(59),'silver':2,'bronze':1},'SLE':{'points':255-sendValue(60),'gold':sendGold(60),'silver':2,'bronze':1},'SOM':{'points':255-sendValue(61),'gold':sendGold(61),'silver':2,'bronze':1},'TCD':{'points':255-sendValue(62),'gold':sendGold(62),'silver':2,'bronze':1},'CHL':{'points':255-sendValue(63),'gold':sendGold(63),'silver':2,'bronze':1},'CRI':{'points':255-sendValue(64),'gold':sendGold(64),'silver':2,'bronze':1},'BFA':{'points':255-sendValue(65),'gold':sendGold(65),'silver':2,'bronze':1},'BGR':{'points':255-sendValue(66),'gold':sendGold(66),'silver':2,'bronze':1},'BEN':{'points':255-sendValue(67),'gold':sendGold(67),'silver':2,'bronze':1},'ZWE':{'points':255-sendValue(68),'gold':sendGold(68),'silver':2,'bronze':1},'ZMB':{'points':255-sendValue(69),'gold':sendGold(69),'silver':2,'bronze':1},'ARE':{'points':255-sendValue(70),'gold':sendGold(70),'silver':2,'bronze':1},'CHE':{'points':255-sendValue(71),'gold':sendGold(71),'silver':2,'bronze':1},'ZAF':{'points':255-sendValue(72),'gold':sendGold(72),'silver':2,'bronze':1},'RWA':{'points':255-sendValue(73),'gold':sendGold(73),'silver':2,'bronze':1},'PRY':{'points':255-sendValue(74),'gold':sendGold(74),'silver':2,'bronze':1},'PRT':{'points':255-sendValue(75),'gold':sendGold(75),'silver':2,'bronze':1},'LBY':{'points':255-sendValue(76),'gold':sendGold(76),'silver':2,'bronze':1},'LBR':{'points':255-sendValue(77),'gold':sendGold(77),'silver':2,'bronze':1},'MLI':{'points':255-sendValue(78),'gold':sendGold(78),'silver':2,'bronze':1},'MWI':{'points':255-sendValue(79),'gold':sendGold(79),'silver':2,'bronze':1},'DZA':{'points':255-sendValue(80),'gold':sendGold(80),'silver':2,'bronze':1},'CAF':{'points':255-sendValue(81),'gold':sendGold(81),'silver':2,'bronze':1},'AGO':{'points':255-sendValue(82),'gold':sendGold(82),'silver':2,'bronze':1},'BWA':{'points':255-sendValue(83),'gold':sendGold(83),'silver':2,'bronze':1},'COD':{'points':255-sendValue(84),'gold':sendGold(84),'silver':2,'bronze':1},'COG':{'points':255-sendValue(85),'gold':sendGold(85),'silver':2,'bronze':1},'TZA':{'points':255-sendValue(86),'gold':sendGold(86),'silver':2,'bronze':1},'NLD':{'points':255-sendValue(87),'gold':sendGold(87),'silver':2,'bronze':1},'GRC':{'points':255-sendValue(88),'gold':sendGold(88),'silver':2,'bronze':1},'DNK':{'points':255-sendValue(89),'gold':sendGold(89),'silver':2,'bronze':1},'HUN':{'points':255-sendValue(90),'gold':sendGold(90),'silver':2,'bronze':1},'AUT':{'points':255-sendValue(91),'gold':sendGold(91),'silver':2,'bronze':1},'USA':{'points':255-sendValue(92),'gold':sendGold(92),'silver':2,'bronze':1},'GBR':{'points':255-sendValue(93),'gold':sendGold(93),'silver':2,'bronze':1},'FRA':{'points':255-sendValue(94),'gold':sendGold(94),'silver':2,'bronze':1},'BEL':{'points':255-sendValue(95),'gold':sendGold(95),'silver':2,'bronze':1},'IND':{'points':255-sendValue(96),'gold':sendGold(96),'silver':2,'bronze':1},'CAN':{'points':255-sendValue(97),'gold':sendGold(97),'silver':2,'bronze':1},'SWE':{'points':255-sendValue(98),'gold':sendGold(98),'silver':2,'bronze':1},'NOR':{'points':255-sendValue(99),'gold':sendGold(99),'silver':2,'bronze':1},'ESP':{'points':255-sendValue(100),'gold':sendGold(100),'silver':2,'bronze':1},'ITA':{'points':255-sendValue(101),'gold':sendGold(101),'silver':2,'bronze':1},'CUB':{'points':255-sendValue(102),'gold':sendGold(102),'silver':2,'bronze':1},'FIN':{'points':255-sendValue(103),'gold':sendGold(103),'silver':2,'bronze':1},'EST':{'points':255-sendValue(104),'gold':sendGold(104),'silver':2,'bronze':1},'NZL':{'points':255-sendValue(105),'gold':sendGold(105),'silver':2,'bronze':1},'BRA':{'points':255-sendValue(106),'gold':sendGold(106),'silver':2,'bronze':1},'JPN':{'points':255-sendValue(107),'gold':sendGold(107),'silver':2,'bronze':1},'LUX':{'points':255-sendValue(108),'gold':sendGold(108),'silver':2,'bronze':1},'ARG':{'points':255-sendValue(109),'gold':sendGold(109),'silver':2,'bronze':1},'POL':{'points':255-sendValue(110),'gold':sendGold(110),'silver':2,'bronze':1},'ROU':{'points':255-sendValue(111),'gold':sendGold(111),'silver':2,'bronze':1},'EGY':{'points':255-sendValue(112),'gold':sendGold(112),'silver':2,'bronze':1},'IRL':{'points':255-sendValue(113),'gold':sendGold(113),'silver':2,'bronze':1},'MEX':{'points':255-sendValue(114),'gold':sendGold(114),'silver':2,'bronze':1},'TUR':{'points':255-sendValue(115),'gold':sendGold(115),'silver':2,'bronze':1},'PAN':{'points':255-sendValue(116),'gold':sendGold(116),'silver':2,'bronze':1},'KOR':{'points':255-sendValue(117),'gold':sendGold(117),'silver':2,'bronze':1},'PER':{'points':255-sendValue(118),'gold':sendGold(118),'silver':2,'bronze':1},'VEN':{'points':255-sendValue(119),'gold':sendGold(119),'silver':2,'bronze':1},'ISL':{'points':255-sendValue(120),'gold':sendGold(120),'silver':2,'bronze':1},'PAK':{'points':255-sendValue(121),'gold':sendGold(121),'silver':2,'bronze':1},'ETH':{'points':255-sendValue(122),'gold':sendGold(122),'silver':2,'bronze':1},'MAR':{'points':255-sendValue(123),'gold':sendGold(123),'silver':2,'bronze':1},'GHA':{'points':255-sendValue(124),'gold':sendGold(124),'silver':2,'bronze':1},'IRQ':{'points':255-sendValue(125),'gold':sendGold(125),'silver':2,'bronze':1},'TUN':{'points':255-sendValue(126),'gold':sendGold(126),'silver':2,'bronze':1},'KEN':{'points':255-sendValue(127),'gold':sendGold(127),'silver':2,'bronze':1},'UGA':{'points':255-sendValue(128),'gold':sendGold(128),'silver':2,'bronze':1},'CMR':{'points':255-sendValue(129),'gold':sendGold(129),'silver':2,'bronze':1},'PRK':{'points':255-sendValue(130),'gold':sendGold(130),'silver':2,'bronze':1},'COL':{'points':255-sendValue(131),'gold':sendGold(131),'silver':2,'bronze':1},'THA':{'points':255-sendValue(132),'gold':sendGold(132),'silver':2,'bronze':1},'GUY':{'points':255-sendValue(133),'gold':sendGold(133),'silver':2,'bronze':1},'CHN':{'points':255-sendValue(134),'gold':sendGold(134),'silver':2,'bronze':1},'CIV':{'points':255-sendValue(135),'gold':sendGold(135),'silver':2,'bronze':1},'DOM':{'points':255-sendValue(136),'gold':sendGold(136),'silver':2,'bronze':1},'SYR':{'points':255-sendValue(137),'gold':sendGold(137),'silver':2,'bronze':1},'SUR':{'points':255-sendValue(138),'gold':sendGold(138),'silver':2,'bronze':1},'SEN':{'points':255-sendValue(139),'gold':sendGold(139),'silver':2,'bronze':1},'DJI':{'points':255-sendValue(140),'gold':sendGold(140),'silver':2,'bronze':1},'NAM':{'points':255-sendValue(141),'gold':sendGold(141),'silver':2,'bronze':1},'QAT':{'points':255-sendValue(142),'gold':sendGold(142),'silver':2,'bronze':1},'LTU':{'points':255-sendValue(143),'gold':sendGold(143),'silver':2,'bronze':1},'ISR':{'points':255-sendValue(144),'gold':sendGold(144),'silver':2,'bronze':1},'UKR':{'points':255-sendValue(145),'gold':sendGold(145),'silver':2,'bronze':1},'ECU':{'points':255-sendValue(146),'gold':sendGold(146),'silver':2,'bronze':1},'BDI':{'points':255-sendValue(147),'gold':sendGold(147),'silver':2,'bronze':1},'MOZ':{'points':255-sendValue(148),'gold':sendGold(148),'silver':2,'bronze':1},'BLR':{'points':255-sendValue(149),'gold':sendGold(149),'silver':2,'bronze':1},'KAZ':{'points':255-sendValue(150),'gold':sendGold(150),'silver':2,'bronze':1},'UZB':{'points':255-sendValue(151),'gold':sendGold(151),'silver':2,'bronze':1},'SVK':{'points':255-sendValue(152),'gold':sendGold(152),'silver':2,'bronze':1},'MDA':{'points':255-sendValue(153),'gold':sendGold(153),'silver':2,'bronze':1},'GEO':{'points':255-sendValue(154),'gold':sendGold(154),'silver':2,'bronze':1},'ARM':{'points':255-sendValue(155),'gold':sendGold(155),'silver':2,'bronze':1},'AZE':{'points':255-sendValue(156),'gold':sendGold(156),'silver':2,'bronze':1},'KGZ':{'points':255-sendValue(157),'gold':sendGold(157),'silver':2,'bronze':1},'MKD':{'points':255-sendValue(158),'gold':sendGold(158),'silver':2,'bronze':1},'ERI':{'points':255-sendValue(159),'gold':sendGold(159),'silver':2,'bronze':1},'TJK':{'points':255-sendValue(160),'gold':sendGold(160),'silver':2,'bronze':1},'AFG':{'points':255-sendValue(161),'gold':sendGold(161),'silver':2,'bronze':1},'BRN':{'points':255-sendValue(162),'gold':sendGold(162),'silver':2,'bronze':1},'TTO':{'points':255-sendValue(163),'gold':sendGold(163),'silver':2,'bronze':1},'MNE':{'points':255-sendValue(164),'gold':sendGold(164),'silver':2,'bronze':1},'CYP':{'points':255-sendValue(165),'gold':sendGold(165),'silver':2,'bronze':1},'GAB':{'points':255-sendValue(166),'gold':4,'silver':2,'bronze':1}});


});
}

function myDefault(){
  document.getElementById('wAqua').value = 15;
  document.getElementById('wAth').value = 20;
  document.getElementById('wTeam').value = 15;
  document.getElementById('wCombat').value = 10;
  document.getElementById('wWeapons').value = 5;
  document.getElementById('wRaquet').value = 5;
  document.getElementById('wRiding').value = 5;
  document.getElementById('wGym').value = 10;
  document.getElementById('wMultiple').value = 5;
  document.getElementById('wWater').value = 10;
}


function editField(chgField,chgSport){
  document.getElementById('editWeapons').style.display = "none";
  document.getElementById('editCombat').style.display = "none";
  document.getElementById('editTeam').style.display = "none";
  document.getElementById('editAthletics').style.display = "none";
  document.getElementById('editAquatics').style.display = "none";

  document.getElementById('editSwimming').style.display = "none";
  document.getElementById('editSprints').style.display = "none";
  document.getElementById('editField').style.display = "none";
  document.getElementById('editFencing').style.display = "none";
  document.getElementById('editArchery').style.display = "none";
  document.getElementById(chgField).style.display = "block";
  document.getElementById(chgSport).style.display = "block";

}

