var allpitches = [310,84,45,3.059685058241124,3.223522476428964,86.8,100,92,50,-7.9207414900117925,11.485045596376716,96.3,311,70,35,1.803210241307412,-0.2866380442202232,86.7,111,100,32,1.5679329477732118,6.7381336901131075,90.0,111,19,26,-6.761551877459304,9.739500047109816,96.4,411,34,74,-7.606962527549724,4.11835095323214,83.5,111,63,34,-7.259744945459736,9.591913566910403,97.3,111,100,41,-6.3421170327566525,11.848638575800237,98.1,111,66,16,-6.606116033153365,11.0305800048816,98.2,110,13,42,-5.551683492238524,7.871477153938487,96.9,100,82,56,-8.196434908480883,10.546453223155524,96.5,411,50,77,-9.72633153942834,3.082615810375188,84.2,100,100,48,1.6527110507187839,5.338161300541332,88.5,111,56,30,-5.8078993646965795,10.470918941381749,96.0,111,46,31,-4.8214399637811,12.80324175343056,96.8,411,12,47,-11.44328399449872,0.17666976164132642,85.4,100,82,21,-0.3480653163173712,6.7506897043278125,88.4,100,0,7,-4.045599575287584,13.647429832185601,96.1,500,50,100,,,,500,50,100,,,,111,71,7,-8.214964723441488,10.856950789207032,95.7,311,66,52,3.99019196266152,2.197774328884716,85.4,311,64,87,3.3596467145352955,4.893846959824884,85.8,110,62,67,-7.563320061897791,11.215896753781895,95.2,100,96,0,-0.2490114541252188,6.076354160162472,88.2,111,97,55,-3.7509724324368605,10.03325503097682,90.2,100,0,18,-6.93691479334272,9.996032985112045,95.5,111,49,46,-8.447809651794552,10.284648359868696,95.1,100,100,75,-1.314902204812092,7.380606374061491,89.4,111,5,27,-5.09835896556528,10.268002242380351,96.2];
var allabs = [0,2,592178,5,3,2,519203,5,6,20,575929,5,9,20,450314,5,15,21,608365,5,16,15,518792,5,20,3,595879,5,23,17,600303,5,26,16,445055,5,29,2,592178,5,30,0,0,0];
var num_abs = 10;
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