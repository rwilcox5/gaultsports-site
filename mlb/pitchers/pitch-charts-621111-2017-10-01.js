var allpitches = [100,57,92,-2.885805124929864,11.07342906303139,96.7,111,31,58,-1.950639863570423,12.771996854322085,97.6,200,100,10,5.80529437721946,-6.546807821544535,80.7,111,41,36,-4.207761879222112,6.336693330478909,97.3,200,78,84,2.9444192550568253,-5.857071846403818,83.7,100,100,47,-2.32838084137207,8.156328125575808,98.0,110,71,71,-3.4063736135452967,9.100593865471065,97.6,111,45,12,-2.067426343860479,10.188919503337363,97.5,200,31,99,2.5112435091653618,-2.9668440459047987,87.7,100,100,0,-2.8475226609450304,12.460196126712143,97.7,111,43,14,-1.3197425184759335,11.150355270319732,98.2,200,100,20,6.9232452380765,-6.13068956895282,83.1,100,13,0,1.7489961127723195,11.582330769323143,97.1,111,52,19,-1.4265378570047051,10.129487082862855,97.8,111,70,46,-2.1609478108556504,10.959379530644833,98.1,111,59,48,-3.749679199982057,7.010972098668947,97.5,111,31,26,-1.3732933751197536,10.129891395374848,97.3,111,44,30,-1.2956766884761715,11.295495316454216,98.4,111,57,6,3.621408664116977,12.191281373575482,97.2,211,57,25,5.812459780008176,-5.773558348715859,83.3,100,0,0,-1.942761057537039,10.289369208505702,98.1,211,26,68,3.9670150680829055,-6.2125280647056815,84.7];
var allabs = [0,20,452672,8,2,14,547172,8,9,2,642162,8,16,2,506560,8,22,0,0,0];
var num_abs = 4;
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