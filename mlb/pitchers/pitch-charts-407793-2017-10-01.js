var allpitches = [110,44,44,-1.556186286156888,3.3410326523648757,85.7,111,20,55,-9.254232395577493,5.382289024649196,92.8,100,100,50,0.4561000687650324,1.5523476785857202,85.3,111,21,21,-3.130155390035112,7.824236943297768,89.2,111,54,76,-12.710958379900319,5.657847409705488,93.5,100,76,100,0.30021215222823483,2.636129692673844,84.4,100,94,87,-1.509527546989692,3.9220157344932,86.7,110,16,59,2.5853418351913677,-0.008473210619102185,83.7,200,58,99,3.9186534833539923,-0.5241789467948987,77.3,111,42,37,-10.507498732841135,2.288974629356448,92.1,110,78,77,-5.355664262858004,7.953712845458291,92.6,100,100,66,-6.240553591573284,8.624386235750448,92.6,111,0,35,-9.340935293437092,5.438256753790992,91.1,100,5,10,4.00129733887989,4.765694308418798,82.3,111,40,44,0.6439829154455436,2.532587257455336,85.3,100,96,100,-0.6653803852913388,3.6407270787451322,86.2,100,75,83,-0.44386340293212356,3.1322047461266997,84.5,100,0,40,-10.811830143682236,4.4929913418435845,91.2,111,70,55,-3.6156046341642956,8.63663973742386,91.8,111,35,42,-13.56090476230236,1.33349372802792,92.6,111,61,62,0.1514489383932168,3.452626762909596,85.3];
var allabs = [0,3,446359,4,8,21,458015,4,10,21,594807,4,15,2,553993,4,20,2,571697,4,21,0,0,0];
var num_abs = 5;
var nabsc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var returnabs = [];
for (i=0;i<200;i++){returnabs.push(0);}
function getData(){
var i; var iii = 0; var iiii;
for (i=0;i<num_abs;i++){
if (iii<100){
if (2==2){
returnabs[2*iii]=i*4;returnabs[2*iii+1]=i*4+4;for (iiii=allabs[i*4+3];iiii<30;iiii++){        nabsc[iiii]+=1;}
iii++;}}}
return iii;}
function sendAb(i){
return allabs[returnabs[2*i+1]]-allabs[returnabs[2*i]];
}
function sendAge(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6];
}
function sendX(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+1];
}
function sendY(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+2];
}
function sendXM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+3];
}
function sendYM(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+4];
}
function sendVel(i, ii){
        var firstp = allabs[returnabs[2*i]];
        return allpitches[(firstp+ii)*6+5];
}
function sendInn(i){
        return nabsc[i];
}
function sendBatter(i){
        var abn = returnabs[2*i];
        return allabs[abn+2];
}
function sendEvent(i){var abn = returnabs[2*i]; return allabs[abn+1];}