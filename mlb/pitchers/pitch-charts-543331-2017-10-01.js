var allpitches = [111,79,52,-7.911274764291772,8.500490079027248,91.4,110,71,63,-6.906390459757128,9.487397610199723,92.0,100,88,51,-5.921339224627568,9.209962364538317,91.7,300,92,100,-0.5083073907208611,2.636531444854491,86.5,100,54,10,-4.339953632867417,9.253141174607622,92.0,111,31,63,-7.623300137559689,7.396891997681285,92.0,200,85,29,3.331043412834326,-4.443050977356702,76.6,311,88,77,-0.6933229412654618,-0.11786593592786868,85.5,311,50,50,-0.759084060650589,0.30191502096774325,85.5,300,100,100,0.33575616988401136,0.101857588704969,85.0,100,100,60,-5.4474661635192945,7.436320358324238,92.9,311,87,63,-0.5933571207144002,0.22189743698635378,85.3,110,0,46,-4.934993770034522,6.695929759443597,92.6,111,52,55,-5.084805288201969,8.325416289360694,92.9];
var allabs = [0,2,460077,3,1,2,456715,3,6,20,593160,3,12,2,466320,3,14,0,0,0];
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