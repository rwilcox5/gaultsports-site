var allpitches = [111,0,53,-9.82684310403447,11.408941231472173,94.8,110,23,49,-10.697930946358957,7.471083363160908,94.5,200,100,100,10.87862716147497,1.6130648058708608,85.0,211,56,51,4.271434305276788,2.670267747487289,84.8,111,53,39,-9.100028908948792,11.318239013560218,94.5,100,0,11,-4.400167976867464,10.821179843386254,95.7,411,50,46,-10.368091670760464,7.008957151675823,84.5,111,0,52,-9.00032207422388,10.443557249679667,96.5,211,50,36,8.945555685192815,-0.7745905510476354,83.9,211,38,60,9.981508270156436,-0.4924438791346052,82.8,111,47,51,-6.361281456918874,13.264006309770977,96.1,200,57,99,6.96865404739709,1.5128417627474144,83.2,111,38,80,-10.86357905309689,10.79164162783227,95.2,111,13,70,-8.829744525818242,10.392192238129628,95.7,211,100,100,8.214066517305543,0.3164641007696361,84.5,100,16,15,-4.274605816345252,11.20063236066121,96.5,111,27,35,-7.193226306726207,14.3326255487239,97.0,100,0,31,-7.658521384598735,10.453550338898145,96.4,100,0,21,-5.286475920232908,13.433056030371137,96.6,111,14,32,-10.470530419289993,11.100663245895117,96.3,210,16,38,8.788405133371326,1.9641719280416092,82.5,111,10,17,-5.065556433021245,12.728707499533495,95.5,211,79,49,9.32894447066586,4.4923274394688635,83.0,211,50,97,8.493026215376846,-4.0716431961418165,82.1,211,82,81,11.025715941659728,0.9422611440201222,83.3,200,0,67,8.875108085782077,-0.5856388848795855,80.2,111,38,18,-6.605496851232574,12.041908830093089,93.6,100,98,51,-10.012346662277498,9.42998469800148,95.0,100,94,63,-10.4756144575944,12.074239845692638,95.2,110,49,73,-13.245279967118073,9.238311535899019,96.1,200,95,93,8.265435229248455,3.3899095357886404,83.9,110,73,50,-13.866870174391991,7.535231256543843,95.5,111,55,36,-13.855676401273346,7.3974964768942115,95.9,211,100,88,9.125431974482549,0.8649124355056306,85.2,110,53,48,-12.144609009337062,8.071310700453832,95.4,411,24,50,-8.80211279953032,8.670425626508573,86.3,211,55,78,10.080591407425404,2.969631552470998,85.2,211,59,56,7.791975687081816,3.164930269853004,82.9,211,55,66,8.024253667931987,2.7611138493754552,84.0,100,0,65,-10.037718707897517,9.97050211448331,94.7,110,7,48,-8.507349234537545,8.650119397619232,94.2,100,43,86,-11.271728612112529,7.241953591386883,94.9,110,67,73,-12.063460045840717,6.716083416171493,95.2,211,78,87,6.84148484322688,1.0465524102842487,84.9,100,0,56,-11.206917372786137,8.115931394377515,96.6,400,84,100,-9.977119611618729,6.607879001271796,85.7,110,56,72,-12.852850165937491,7.093322731473943,95.1,211,66,87,8.557635282809112,1.2465308076213333,82.8,211,22,71,9.98839642566779,3.597005496915469,84.7,211,76,51,8.449406570781065,6.298406674972549,83.9,100,0,65,-10.572240077339451,10.485453874897255,93.8,211,31,32,9.918012705681804,0.6936390339438565,82.0,110,19,30,-3.847908928446711,14.58856768516993,96.2,411,0,32,-9.8252887522899,9.591428108788357,85.3,200,95,94,5.082791568115091,0.5721604378642311,84.7,100,89,50,-6.41729646478764,9.697028564090587,94.7,200,84,88,3.9476215733934623,-1.8667689227413031,84.3,411,8,56,-10.369344066892051,8.627470779170633,86.2,111,59,48,-11.72403267490623,6.627724455814065,95.4];
var allabs = [0,21,596142,3,4,3,544369,3,11,3,516770,3,15,20,595885,3,20,20,543305,3,25,2,453056,3,27,3,453943,4,34,20,458731,4,37,23,592450,4,39,2,596142,4,44,2,544369,4,49,2,516770,5,52,3,595885,5,58,2,543305,5,59,0,0,0];
var num_abs = 14;
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