import argparse

parser = argparse.ArgumentParser() 
parser.add_argument('--scripts', nargs='*')
parser.add_argument('--style', nargs='*')
parser.add_argument('--title')
parser.add_argument('--onload', nargs='*')
parser.add_argument('--output')
parser.add_argument('--base')
parser.add_argument('--stat_id')


args = parser.parse_args()
#args is Namespace(details=['asdf', 'a', 'a'], quickly=False, t='4', v=True)
scripts = args.scripts
style = args.style
title = args.title
outputfile = args.output
onload = args.onload
basefile = args.base
stat_id = args.stat_id


f = open('base/header.html','r')
filedata = f.read()
f.close()
newdata = filedata.replace("<title></title>","<title>"+title+"</title>")
newdata = newdata.replace("</head>",'<script src="../assets/js/awesomplete.js"></script>\n<script src="load-answers.js"></script>\n</head>')
if style is not None:
	for i in style:
		newdata = newdata.replace("</head>",'<link rel="stylesheet" href="'+i+'" />\n</head>')
if scripts is not None:
	for i in scripts:
		newdata = newdata.replace("</head>",'<script>'+i+'</script>\n</head>')
if onload is not None:
	for i in onload:
		newdata = newdata.replace('<body onload="','<body onload="'+i+';')

f = open(basefile,'r')
filedata = f.read()
f.close()
newdata += filedata.replace("stat_id-place",stat_id).replace('show-ad-top','<div width="100%" style="display:block;"><img src="../assets/img/728x90.jpg" width="728" height="90" class="mhide topbanner" /><img src="../assets/img/728x90.jpg" width="468" height="60" class="mshowb xshide topbanner" /></div>').replace('show-ad-left','<div width="100%" style="display:block;"><img src="../assets/img/728x90.jpg" width="468" height="60" class="mshowb xshide topbanner" /></div><section class="banner">                    <div class="row">                           <div class="2u lhide"><img src="../assets/img/160x600.jpg" width="160" height="600" /></div><div class="8u 9u$(large) 12u$(medium)">').replace('show-ad-right','<div class="2u lhide"><img src="../assets/img/160x600.jpg" width="160" height="600" /></div><div class="3u mhide lshow"><img src="../assets/img/160x600.jpg" width="160" height="600" /></div>')


f = open('base/footer.html','r')
filedata = f.read()
f.close()
newdata += filedata

f = open(outputfile,'w')
f.write(newdata.replace('../','../../'))
f.close()