#!/bin/bash

python createquestions.py --title "TripleLog - Sports and Data Analysis" --onload "createQuestions()" --style ../assets/css/awesomplete.css --base mlb/base/questions-base.html --output mlb/questions/questions.html --stat_id "blank"
