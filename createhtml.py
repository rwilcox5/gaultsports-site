import argparse

parser = argparse.ArgumentParser() 
parser.add_argument('--scripts', nargs='*')
parser.add_argument('--style', nargs='*')
parser.add_argument('--title')
parser.add_argument('--onload', nargs='*')
parser.add_argument('--output')
parser.add_argument('--base')

args = parser.parse_args()
#args is Namespace(details=['asdf', 'a', 'a'], quickly=False, t='4', v=True)
scripts = args.scripts
style = args.style
title = args.title
outputfile = args.output
onload = args.onload
basefile = args.base

f = open('base/header.html','r')
filedata = f.read()
f.close()
newdata = filedata.replace("<title></title>","<title>"+title+"</title>")
if style is not None:
	for i in style:
		newdata = newdata.replace("</head>",'<link rel="stylesheet" href="'+i+'" />\n</head>')
if scripts is not None:
	for i in scripts:
		newdata = newdata.replace("</head>",'<script src="'+i+'"></script>\n</head>')
if onload is not None:
	for i in onload:
		newdata = newdata.replace('<body onload="','<body onload="'+i+';')


f = open(basefile,'r')
filedata = f.read()
f.close()
newdata += filedata

f = open('base/footer.html','r')
filedata = f.read()
f.close()
newdata += filedata

f = open(outputfile,'w')
f.write(newdata)
f.close()