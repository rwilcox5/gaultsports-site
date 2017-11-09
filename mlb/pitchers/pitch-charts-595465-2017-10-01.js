var allpitches = [111,61,45,-5.819619507093122,10.484182651526211,93.7,111,73,73,-2.8017472621824475,8.643560456611024,92.4,100,0,44,-3.1328260707067956,7.882178661022044,93.0,110,33,58,-4.239241153560622,10.591330169448758,94.6,110,79,62,1.6198204768505153,8.803969361110498,91.1,100,0,75,-4.277331779332478,9.1956666662124,93.7,111,90,27,1.609776061711663,8.87631033846688,91.8,100,34,10,-2.9785756914405477,10.788393395365084,94.6,111,27,46,-3.442060909145825,12.98020894246867,94.5,111,81,58,-0.19564649663451184,4.664143395880098,90.6,110,49,28,-5.39504249054803,9.871755266849792,93.3,111,71,49,-0.47369199871020773,6.559496943267604,90.4,100,49,0,-0.14452300750904495,4.455843054745587,90.2,100,31,2,-1.4414794133139461,9.054031861997192,93.5,111,47,33,1.3286858142105251,6.115768595556785,90.2,211,81,91,4.29467017993978,-1.2219156075659239,81.1,111,100,52,1.481488817487177,8.102382557496057,90.9,111,32,56,-2.873779260529844,8.642333145508552,92.9,100,100,58,1.2896378300946072,6.590086290621008,91.4,111,44,42,-5.155217252297708,5.374468820172252,93.1,210,8,53,6.186912194228098,-0.9666561709272453,82.4,111,25,61,-6.23607323604268,7.367337894459986,93.5,111,35,36,-3.8238748234674897,9.718745496532174,94.8];
var allabs = [0,3,605119,6,4,20,500743,6,10,2,400085,6,20,3,543829,6,23,0,0,0];
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