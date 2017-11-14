python createhtml.py --title "Custom QB Ratings by TripleLog - Sports and Data Analysis" --base nfl/base/custom-QB-rating-base.html --output nfl/custom-QB-rating.html
python createhtml.py --title "Weighted AP College Football Poll by TripleLog - Sports and Data Analysis" --onload "getPoll(25)" --base ncaaf/base/ap-poll-base.html --output ncaaf/ap-poll.html
python createhtml.py --title "Recruiting Rankings for College Football Teams Unbiased by TripleLog - Sports and Data Analysis" --onload "getRecs(25)" --base ncaaf/base/recruiting-base.html --output ncaaf/recruiting.html
python createhtml.py --title "Pitch Chart Visualizations by TripleLog - Sports and Data Analysis" --style ../assets/css/awesomplete.css --scripts ../mlb/load-pitch-charts.js ../assets/js/awesomplete.js --onload "setSelect()" --base mlb/base/pitch-charts-base.html --output mlb/pitch-charts.html
python createhtml.py --title "Pitch Chart Visualizations by TripleLog - Sports and Data Analysis" --style ../assets/css/awesomplete.css --scripts ../mlb/load-pitch-charts-vb.js ../assets/js/awesomplete.js --onload "setSelect()" --base mlb/base/pitch-charts-vb-base.html --output mlb/pitch-charts-vb.html
python createhtml.py --title "Olympic Weighted Medal Rankings by TripleLog - Sports and Data Analysis" --onload "map_main({'base1':255,'base2':255,'base3':255,'max1':0,'max2':0,'max3':0})" --base olympics/base/map-base.html --output olympics/map.html
python createhtml.py --title "TripleLog - Sports and Data Analysis" --onload "getPoll(10)" "getRecs(10)" --base base/index-base.html --output index.html
python createhtml.py --title "Quizzes to Test Your Sports Knowledge by TripleLog - Sports and Data Analysis" --base mlb/base/mlb-quiz-base.html --output mlb/mlb-quiz.html

