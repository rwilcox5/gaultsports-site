var allpitches = [311,84,68,1.728340519769052,3.477135148061508,86.1,100,76,7,-1.306008443050092,10.259379967899491,94.6,300,100,57,1.1982407567692837,-0.2792704921464084,86.1,111,91,15,-1.1931202086808477,10.433930591681053,94.0,311,44,87,1.76440948075482,0.09658973759481625,85.5,311,73,85,1.649181575253252,-2.551434653493372,85.8,200,0,66,3.248953000623408,-6.79956019629996,78.6,311,26,80,1.5154464620501638,-2.7130929766397758,85.7,311,88,88,1.8605894197286639,-0.8729667582958248,86.2,300,6,100,2.041298016575328,-1.7297900575593719,85.6,311,26,67,1.1877111369504734,-0.4776081688808904,85.8,310,40,71,1.998890447457276,-3.1412108833916883,86.0,300,3,100,0.7605940709044272,-0.8884276046737825,85.2,111,53,68,1.024361402811007,10.303545975575243,95.3,311,73,58,2.874963436204908,-2.865456851997108,85.7,500,50,100,,,,500,50,100,,,,500,50,100,,,,500,50,100,,,,111,22,37,1.230353909041896,8.764222519122661,93.1,311,54,100,1.1029555552655868,-1.048986552319325,84.8,311,68,71,2.0693487138344397,-0.7291781155936944,85.7];
var allabs = [0,2,502110,8,6,20,571875,8,11,22,572041,8,15,15,518614,8,19,20,425772,8,20,2,592273,8,22,0,0,0];
var num_abs = 6;
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