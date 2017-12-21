python createhtml.py --title "Custom QB Ratings by TripleLog - Sports and Data Analysis" --base nfl/base/custom-QB-rating-base.html --output nfl/custom-QB-rating.html
python createhtml.py --title "Weighted AP College Football Poll by TripleLog - Sports and Data Analysis" --onload "getPoll(25)" --base ncaaf/base/ap-poll-base.html --output ncaaf/ap-poll.html
python createhtml.py --title "Recruiting Rankings for College Football Teams Unbiased by TripleLog - Sports and Data Analysis" --onload "getRecs(25)" --base ncaaf/base/recruiting-base.html --output ncaaf/recruiting.html
python createhtml.py --title "Pitch Chart Visualizations by TripleLog - Sports and Data Analysis" --style ../assets/css/awesomplete.css --scripts ../mlb/load-pitch-charts.js ../assets/js/awesomplete.js --onload "setSelect()" --base mlb/base/pitch-charts-base.html --output mlb/pitch-charts.html
python createhtml.py --title "Pitch Chart Visualizations by TripleLog - Sports and Data Analysis" --style ../assets/css/awesomplete.css --scripts ../mlb/load-pitch-charts-vb.js ../assets/js/awesomplete.js --onload "setSelect()" --base mlb/base/pitch-charts-vb-base.html --output mlb/pitch-charts-vb.html
python createhtml.py --title "Olympic Weighted Medal Rankings by TripleLog - Sports and Data Analysis" --onload "map_main({'base1':255,'base2':255,'base3':255,'max1':0,'max2':0,'max3':0})" --base olympics/base/map-base.html --output olympics/map.html
python createhtml.py --title "TripleLog - Sports and Data Analysis" --onload "getPoll(10)" "getRecs(10)" --base base/index-base.html --output index.html
python createhtml.py --title "Quizzes to Test Your Sports Knowledge by TripleLog - Sports and Data Analysis" --base mlb/base/create-mlb-quiz-base.html --output mlb/create-mlb-quiz.html
python createhtml.py --title "Quizzes to Test Your Sports Knowledge by TripleLog - Sports and Data Analysis" --base mlb/base/create-20-questions-base.html --output mlb/create-20-questions.html
python createhtml.py --title "Parlay Advantages by TripleLog - Sports and Data Analysis" --base nfl/future/nfl-parlays-base.html --output nfl/nfl-parlays.html
python createhtml.py --title "Custom QB Ratings by TripleLog - Sports and Data Analysis" --base ncaab/base/custom-NCAAB-rpi-base.html --output ncaab/custom-NCAAB-rpi.html
python createhtml.py --title "Custom QB Ratings by TripleLog - Sports and Data Analysis" --base ncaab/base/custom-NCAAB-bracket-base.html --output ncaab/custom-NCAAB-bracket.html
python createhtml.py --title "Custom QB Ratings by TripleLog - Sports and Data Analysis" --base ncaab/base/dab-base.html --output ncaab/dab.html
python createhtml.py --title "Custom QB Ratings by TripleLog - Sports and Data Analysis" --style ../assets/css/solitaire.css --base nhl/base/solitaire-base.html --output nhl/solitaire.html
python createhtml.py --title "Custom QB Ratings by TripleLog - Sports and Data Analysis" --style ../assets/css/chess.css --base mlb/base/chess-base.html --output mlb/chess.html
python createhtml.py --title "Custom QB Ratings by TripleLog - Sports and Data Analysis" --style ../assets/css/sudoku.css --base mlb/base/sudoku-base.html --output mlb/sudoku.html
python createhtml.py --title "Custom QB Ratings by TripleLog - Sports and Data Analysis" --style ../assets/css/magic-square.css --base mlb/base/magic-base.html --output mlb/magic.html
python createhtml.py --title "Custom QB Ratings by TripleLog - Sports and Data Analysis" --base mlb/base/simulator-base.html --output mlb/simulator.html
python createhtml.py --title "Custom QB Ratings by TripleLog - Sports and Data Analysis" --style ../assets/css/nouislider.min.css --onload "map_main()" --base birthplaces/base/map-base.html --output birthplaces/map.html


