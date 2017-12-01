var pitcher_names = [ "George Mikan*", "Paul Arizin*", "Neil Johnston*", "Bob Pettit*", "George Yardley*", "Wilt Chamberlain*", "Rick Barry*", "Dave Bing*", "Elvin Hayes*", "Kareem Abdul-Jabbar*", "Tiny Archibald*", "Bob McAdoo*", "Pete Maravich*", "George Gervin*", "Adrian Dantley*", "Alex English*", "Michael Jordan*", "David Robinson*", "Shaquille O'Neal*", "Jerry Stackhouse", "Paul Pierce", "Kobe Bryant", "Kevin Garnett", "Allen Iverson*", "Dwyane Wade", "Kevin Durant", "James Harden", "Russell Westbrook", "Axel Toupane", "Alex Groza", "Bob Cousy*", "Dolph Schayes*", "Jack Twyman*", "Elgin Baylor*", "Walt Bellamy*", "Oscar Robertson*", "Jerry West*", "Earl Monroe*", "John Havlicek*", "David Thompson*", "World B.", "Moses Malone*", "Kiki Vandeweghe", "Mark Aguirre", "Larry Bird*", "Dominique Wilkins*", "Karl Malone*", "Vince Carter", "Tim Duncan", "Tracy McGrady", "Peja Stojakovic", "LeBron James", "Carmelo Anthony", "Stephen Curry", "Frankie Brian", "Ed Macauley*", "Billy Cunningham*", "Spencer Haywood*", "Julius Erving*", "Dale Ellis", "Patrick Ewing*", "Chris Mullin*", "Hakeem Olajuwon*", "Glen Rice", "Antoine Walker", "Amar'e Stoudemire", "Gilbert Arenas", "Isaiah Thomas", "Max Zaslofsky", "Joe Fulks*", "Clyde Lovellette*", "Sam Jones*", "Bob Rule", "Gail Goodrich*", "Randy Smith", "Billy Knight", "Marques Johnson", "Tom Chambers", "Mitch Richmond*", "Shareef Abdur-Rahim", "Dirk Nowitzki", "Derrick Rose", "Kevin Love", "Anthony Davis", "Bob Davies*", "Ray Felix", "Cliff Hagan*", "Hal Greer*", "Lou Hudson", "Bob Love", "Charlie Scott", "George McGinnis", "Paul Westphal", "Reggie Theus", "Bernard King*", "Purvis Short", "Charles Barkley*", "Clyde Drexler*", "Jamal Mashburn", "Latrell Sprewell", "Gary Payton*", "Michael Redd", "Blake Griffin", "Damian Lillard", "Karl-Anthony Towns", "Bill Sharman*", "Vern Mikkelsen*", "Gene Shue", "Richie Guerin*", "Bailey Howell*", "Connie Hawkins*", "Bob Lanier*", "Rudy Tomjanovich", "Fred Brown", "Walter Davis", "Artis Gilmore*", "Dan Issel*", "Mike Mitchell", "Gus Williams", "Reggie Miller*", "Tim Hardaway", "Juwan Howard", "Michael Finley", "Richard Jefferson", "Antawn Jamison", "Klay Thompson", "Carl Braun", "Larry Foust", "Jack Nichols", "Kenny Sears", "Willie Naulls", "Willis Reed*", "Dick Barnett", "Walt Hazzard", "Geoff Petrie", "Sidney Wicks", "Calvin Murphy*", "Joe Barry", "Anfernee Hardaway", "Kendall Gill", "Antonio McDyess", "Grant Hill", "Ben Gordon", "Chris Paul", "LaMarcus Aldridge", "Paul George", "DeMar DeRozan", "Kenny Sailors", "Ralph Beard", "Bobby Wanzer*", "Tom Heinsohn*", "Jerry Lucas*", "Ron Boone", "Terry Cummings", "Eddie Johnson", "Jeff Malone", "Kevin McHale*", "Vin Baker", "Allan Houston", "Ray Allen", "Baron Davis", "Brandon Roy", "Zach Randolph", "Monta Ellis", "Brandon Jennings", "Jim Pollard*", "Arnie Risen*", "Terry Dischinger", "Zelmo Beaty*", "Lenny Wilkens*", "Tom Van", "Austin Carr", "John Drew", "Otis Birdsong", "Jamaal Wilkes*", "Isiah Thomas*", "Rolando Blackman", "Larry Johnson", "Glenn Robinson", "Stephon Marbury", "Chris Webber", "Jason Richardson", "Chris Bosh", "Kevin Martin", "Kyrie Irving", "Fred Schaus", "Dick Garmaker", "Don Ohl", "Rudy LaRusso", "Don Kojis", "Flynn Robinson", "Archie Clark", "Fred Carter", "Jim Paxson", "Magic Johnson*", "Scottie Pippen*", "Joe Dumars*", "Clifford Robinson", "Joe Johnson", "Danny Granger", "Stephen Jackson", "Josh Smith", "DeMarcus Cousins", "Dike Eddleman", "Harry Gallatin*", "Maurice Stokes*", "Red Kerr", "Kevin Loughery", "Phil Chenier", "Phil Smith", "Truck Robinson", "Kelly Tripucka", "Calvin Natt", "Xavier McDaniel", "Byron Scott", "Tony Campbell", "Reggie Lewis", "Danny Manning", "Jalen Rose", "Elton Brand", "Al Jefferson", "David Lee", "Rudy Gay", "Andrew Wiggins", "Fred Scolari", "Leo Barnhorst", "Gus Johnson*", "Eddie Miles", "Chet Walker*", "John Williamson", "Larry Kenon", "Ron Harper", "Otis Thorpe", "Jim Jackson", "Dana Barros", "Alonzo Mourning*", "Sam Cassell", "Carlos Boozer", "Dwight Howard", "Deron Williams", "Kemba Walker", "Kawhi Leonard", "Vince Boryla", "Joe Graboski", "Paul Seymour", "Lee Shaffer", "Bob Boozer", "Jeff Mullins", "Dick Van", "Doug Collins", "Bill Cartwright", "Ralph Sampson*", "Hersey Hawkins", "Drazen Petrovic*", "Cedric Ceballos", "Jermaine O'Neal", "Shawn Marion", "Gordon Hayward", "C.J. McCollum", "Dick Mehen", "Ray Scott", "Adrian Smith", "Joe Caldwell", "Jo Jo", "Cazzie Russell", "Walt Frazier*", "Mike Newlin", "Derek Smith", "Michael Adams", "Ricky Pierce", "Derrick Coleman", "Pau Gasol", "Giannis Antetokounmpo", "Don Barksdale*", "Bill Russell*", "Johnny Green", "Guy Rodgers*", "Ray Williams", "Darrell Griffith", "Jay Vincent", "Sidney Moncrief", "Orlando Woolridge", "Kevin Johnson", "Kenny Anderson", "Tom Gugliotta", "Mike Bibby", "Aaron Brooks", "Brook Lopez", "John Wall", "Kyle Lowry", "Ed Sadowski", "Jim Baechtold", "Jack George", "Woody Sauldsberry", "Wayne Embry*", "Jimmy Walker", "Chuck Person", "Nick Anderson", "Kevin Willis", "Steve Francis", "Eddy Curry", "Jamal Crawford", "J.R. Smith", "Nikola Vucevic", "Jimmy Butler", "Paul Hoffman", "George Ratkovicz", "George King", "Slater Martin*", "Chuck Share", "Larry Costello", "Dave DeBusschere*", "Jack Marin", "Dave Cowens*", "Bob Dandridge", "Freeman Williams", "Wayman Tisdale", "James Worthy*", "Jeff Hornacek", "Keith Van", "Cuttino Mobley", "David West", "Goran Dragic", "Red Rocha", "Frank Ramsey*", "Len Chappell", "Clem Haskins", "Stu Lantz", "Mychal Thompson", "Roy Hinson", "Alvin Robertson", "Brad Daugherty", "Detlef Schrempf", "Corey Maggette", "Tony Parker", "Marc Gasol", "Vern Gardner", "Nat Clifton*", "Ed Conlin", "Tom Gola*", "Nate Thurmond*", "Neal Walk", "Jack Sikma", "Clark Kellogg", "Clarence Weatherspoon", "Damon Stoudamire", "Luol Deng", "Andre Iguodala", "Bradley Beal", "Belus Smawley", "Andy Phillip*", "Don Sunderlage", "Jack Coleman", "Dave Gambee", "Maurice Lucas", "Brian Winters", "Campy Russell", "Robert Parish*", "Jeff Ruland", "Thurl Bailey", "Mahmoud Abdul-Rauf", "Isaiah Rider", "Shawn Kemp", "Jason Terry", "Ricky Davis", "Richard Hamilton", "Mel Hutchins", "Phil Jordon", "Jim Barnes", "Dick Snyder", "Mickey Johnson", "Micheal Ray", "Herb Williams", "Terrell Brandon", "Wally Szczerbiak", "Mike James", "O.J. Mayo", "Eric Bledsoe", "Don Otten", "Stan Miasek", "Walter Dukes", "Jerry Sloan*", "Fred Hetzel", "Jon McGlocklin", "Bob Kauffman", "Alvan Adams", "Andrew Toney", "Antoine Carr", "Rod Strickland", "Steve Smith", "Jason Kidd", "Rasheed Wallace", "Leandro Barbosa", "Yao Ming*", "Jrue Holiday", "Reggie Jackson", "Devin Booker", "Ed Fleming", "Dick Ricketts", "Jim McMillian", "Dennis Johnson*", "Fat Lever", "Charles Smith", "Larry Nance", "Doug West", "Sean Elliott", "Rashard Lewis", "Hedo Turkoglu", "Tyreke Evans", "Andrew Bynum", "Thaddeus Young", "Mike Todorovich", "Connie Simmons", "Slick Leonard*", "Bill Bridges", "Tom Owens", "Sleepy Floyd", "Jerome Kersey", "George McCloud", "Joe Smith", "Michael Dickerson", "Andrea Bargnani", "Jack Kerris", "Eddie Miller", "Bucky Bockhorn", "Luke Jackson", "Cedric Maxwell", "Toby Knight", "Scott Wedman", "Derek Harper", "Christian Laettner", "Toni Kukoc", "Chauncey Billups", "Jeff Green", "Khris Middleton", "Bill Gabor", "Bill Tosheff", "Jack McMahon", "Whitey Skoog", "Charlie Tyra", "Bob Ferry", "M.L. Carr", "John Long", "Terry Porter", "Terry Mills", "Loy Vaught", "Corliss Williamson", "Nick Van", "Eddie Jones", "Mike Dunleavy", "Devin Harris", "Michael Beasley", "Victor Oladipo", "Max Morris", "George Senesky", "Dick Schnittker", "Hot Rod", "Tom Meschery", "Art Heyman", "Don May", "Don MacLean", "Rik Smits", "Steve Nash", "Al Harrington", "Manu Ginobili", "Wesley Matthews", "J.J. Redick", "Harry Boykoff", "Frank Selvy", "Bill McGill", "Howard Komives", "Leroy Ellis", "Greg Ballard", "Mike Woodson", "Willie Anderson", "Mehmet Okur", "Chris Kaman", "Arron Afflalo", "Paul Millsap", "Harrison Barnes", "Arnie Johnson", "Bob Houbregs*", "Jim Loscutoff", "Mike Riordan", "Ricky Sobers", "Gerald Wilkins", "Mookie Blaylock", "Kerry Kittles", "Ryan Anderson", "Markieff Morris", "Sonny Hertzberg", "Paul Walther", "Ernie Vandeweghe", "Dave Piontek", "Happy Hairston", "Wes Unseld*", "Johnny Davis", "Norm Nixon", "Larry Drew", "Cliff Robinson", "Reggie Williams", "Desmond Mason", "Josh Howard", "John Salmons", "Luis Scola", "Greg Monroe", "Jeff Teague", "John Logan", "Earl Lloyd*", "Rod Thorn", "Tyrone Corbin", "Dell Curry", "Dennis Scott", "Mo Williams", "Dorell Wright", "Lou Williams", "Bill Closs", "Noble Jorgensen", "Dick McGuire*", "Andy Johnson", "Connie Dierking", "Junior Bridgeman", "Buck Williams", "Armen Gilliam", "Doug Christie", "Larry Hughes", "Al Horford", "Andre Drummond", "Mike Conley", "Wah Wah", "Chuck Cooper", "Monk Meineke", "Wally Osterkorn", "Jack Stephens", "Guy Sparrow", "Paul Silas", "Eric Money", "Mike Gminski", "Terry Catledge", "Dan Majerle", "David Wesley", "Morris Peterson", "Gerald Green", "Dennis Schroder", "Don Boven", "Bob Harrison", "George Lee", "Wayne Hightower", "Don Nelson*", "Walt Wesley", "Bingo Smith", "Ken Norman", "Lionel Simmons", "John Starks", "Bison Dele", "Maurice Taylor", "Lamar Odom", "Brandon Knight", "Bob Brown", "Bob Lavoy", "Bill Calhoun", "Win Wilfong", "John Barnhill", "John Johnson", "Jim Chones", "Wilbur Holland", "James Silas", "Ron Brewer", "Dan Roundfield", "Quintin Dailey", "Mark Price", "John Stockton*", "Todd Day", "Darrell Armstrong", "Gerald Wallace", "Marcin Gortat", "Dillard Crocker", "Ralph Johnson", "Zeke Zawoluk", "Chuck Noble", "Richie Regan", "Ernie Beck", "Tom Sanders*", "Dave Stallworth", "Paul Neumann", "Jim Barnett", "Elmore Smith", "Lucius Allen", "Bill Laimbeer", "Kevin Duckworth", "Harvey Grant", "Tracy Murray", "Zydrunas Ilgauskas", "Caron Butler", "Derrick Favors", "Tobias Harris", "Bob Brannum", "Al Bianchi", "Archie Dees", "Tom Burleson", "Lewis Lloyd", "Pooh Richardson", "Andre Miller", "Carl Landry", "Ty Lawson", "Jordan Clarkson", "Odie Spears", "Lew Hitch", "Jim Palmer", "Al Attles", "Wali Jones", "Nate Williams", "Curtis Rowe", "Dave Greenwood", "Robert Reid", "Vernon Maxwell", "Blue Edwards", "Calbert Cheaney", "Matt Harpring", "Metta World", "Kirk Hinrich", "Evan Fournier", "Hassan Whiteside", "Leo Kubiak", "Chuck Mencel", "Larry Siegfried", "Bill Bradley*", "Billy Paultz", "Enes Kanter", "Al Roges", "Art Spoelstra", "Ron Sobie", "Al Butler", "Si Green", "Johnny Egan", "Lionel Hollins", "James Edwards", "Phil Ford", "Rodney McCray", "Kenny Smith", "Vlade Divac", "Rony Seikaly", "John Oldham", "Frank Kudelka", "Hub Reed", "Shellie McMillon", "Erwin Mueller", "Joe Ellis", "Jim Price", "Walter Berry", "Sarunas Marciulionis*", "Ron Mercer", "Gary Trent", "Kenyon Martin", "Bob Hopkins", "Tom Hawkins", "Reggie Harding", "John Block", "Norm Van", "Bobby Jones", "Kevin Grevey", "Michael Brooks", "Steve Johnson", "Danny Ainge", "Johnny Newman", "Bonzi Wells", "Andrei Kirilenko", "Marcus Thornton", "Nikola Jokic", "Togo Palazzi", "Charlie Hardnett", "Gar Heard", "Mike Bantom", "Lamond Murray", "Anthony Mason", "Mike Miller", "Eric Gordon", "Chandler Parsons", "Will Barton", "Bob Kinney", "Tom Marshall", "Ed Kalafat", "Billy Kenville", "Ralph Davis", "Ernie DiGregorio", "Tom Henderson", "Jim McElroy", "Swen Nater", "Scott Skiles", "Eric Murdock", "Derek Anderson", "Charlie Black", "Ralph O'Brien", "Jim Krebs", "Chico Vaughn", "Al Tucker", "Ron Williams", "Steve Mix", "Brian Taylor", "Kevin Porter", "John Lucas", "Albert King", "Darryl Dawkins", "Pervis Ellison", "Walt Williams", "Avery Bradley", "Kristaps Porzingis", "Bruce Hale", "Dick Rosenthal", "Curtis Perry", "Bill Walton*", "Maurice Cheeks", "Michael Cage", "Sherman Douglas", "Bryant Reeves", "Bobby Simmons", "Nate Robinson", "Serge Ibaka", "Walt Budko", "Bob Donham", "Irv Bemoras", "Med Park", "Johnny McCarthy", "K.C. Jones*", "Lonnie Shelton", "Kelvin Ransey", "Terry Teagle", "LaPhonso Ellis", "Dee Brown", "Wesley Person", "Brian Grant", "Charlie Villanueva", "Jordan Crawford", "Zach LaVine", "John Hargis", "Red Holzman*", "Don Henriksen", "Corky Devlin", "Barney Cable", "Dave Budd", "Jackie Moreland", "Darrall Imhoff", "John Tresvant", "Jim Washington", "Jim Davis", "Butch Beard", "Dave Robisch", "Paul Pressey", "Sam Perkins", "Ron Anderson", "B.J. Armstrong", "Jeff McInnis", "Donyell Marshall", "Tayshaun Prince", "Danilo Gallinari", "Jodie Meeks", "Rodney Hood", "Myles Turner", "Al Ferrari", "Joe Holup", "Fred Foster", "Sedale Threatt", "Stacey Augmon", "Arvydas Sabonis*", "D.J. Augustin", "Draymond Green", "Milo Komenich", "Ray Lumpp", "Stan McKenzie", "Slick Watts", "Kenny Carr", "Vinnie Johnson", "Chris Mills", "Brad Miller", "Michael Carter-Williams", "Wilson Chandler", "Marcus Morris", "Nicolas Batum", "Bob Harris", "Rollen Hans", "Lou Tsioropoulos", "Willie Jones", "Lloyd Neal", "Dino Radja", "Rodney Rogers", "Matt Geiger", "Drew Gooden", "Raymond Felton", "Nick Young", "Bob Carpenter", "Alex Hannum*", "Ed Mikan", "Pep Saul", "Gary Phillips", "Sam Lacey", "Rickey Green", "Charles Oakley", "Derrick McKey", "A.C. Green", "John Wallace", "Quentin Richardson", "Joe Holland", "Dick Farley", "Ernie Barrett", "Joe Roberts", "Jim Fox", "John Shumate", "Reggie King", "Benoit Benjamin", "Bryon Russell", "Brent Barry", "Kris Humphries", "Evan Turner", "Al Cervi*", "Danny Finn", "Dick Hemric", "Ben Warley", "Dave Meyers", "Sonny Parker", "Gene Banks", "Spud Webb", "Vinny Del", "Raja Bell", "Ruben Patterson", "Duane Klueh", "Cal Christensen", "Joe Strawder", "Earl Tatum", "Dennis Hopson", "Kevin Gamble", "Billy Owens", "Kurt Thomas", "Jeremy Lin", "Kentavious Caldwell-Pope", "Rudy Gobert", "Chick Reiser", "George Dempsey", "Jim King", "Clyde Lee", "Art Harris", "Mel Counts", "Kevin Kunnert", "Rich Kelley", "Al Wood", "Grant Long", "Shane Battier", "Rafer Alston", "Rodney Stuckey", "Jack Burmaster", "Don Rehfeldt", "Fred LaCour", "McCoy McLemore", "Ed Ratleff", "Jim Cleamons", "Jim Spanarkel", "Kyle Macy", "Allen Leavell", "Doc Rivers", "Rex Chapman", "Jay Humphries", "Jason Williams", "Antonio Davis", "Troy Hudson", "Marvin Williams", "Al Thornton", "Dion Waiters", "Bojan Bogdanovic", "Blackie Towery", "Bud Olsen", "Herm Gilliam", "Bruce Seals", "Richard Washington", "Marvin Webster", "Chris Ford", "Roger Phegley", "Danny Schayes", "Elden Campbell", "Rick Fox", "James Posey", "Chucky Atkins", "Roy Hibbert", "Greivis Vasquez", "Trevor Ariza", "Dave Minor", "Red Morrison", "Gene Conley", "Keith Erickson", "Phil Hubbard", "Lindsey Hunter", "Dikembe Mutombo*", "Jabari Parker", "Jack Toomay", "Don Lofgran", "Walt Davis", "Don Chaney", "Dwight Davis", "Eddie Jordan", "Dave Corzine", "Frank Brickowski", "Mark Jackson", "Alan Henderson", "Jamaal Magloire", "Emeka Okafor", "Derek Fisher", "J.J. Hickson", "George Hill", "D'Angelo Russell", "Mel Payton", "Mike Farmer", "Scott May", "Vern Fleming", "Steve Stipanovich", "Buck Johnson", "Micheal Williams", "Kevin Edwards", "Boris Diaw", "Gerald Henderson", "Kenneth Faried", "Brady Walker", "Kevin O'Shea", "Jack Turner", "Bob Burrow", "Bob McNeill", "Aaron James", "Jim Brewer", "Kermit Washington", "James Bailey", "Bryant Stith", "Othella Harrington", "Nenad Krstic", "Bobby Cook", "Warren Perkins", "Jim Holstein", "Rick Roberson", "John Mengelt", "Wil Jones", "Tom LaGarde", "Gheorghe Muresan", "Charlie Bell", "Nene Hilario", "Howie Shannon", "Johnny Macknowski", "Boo Ellis", "Bob Sims", "Toby Kimball", "Otto Moore", "Rick Adelman", "Phil Jackson*", "Howard Porter", "Roy Tarpley", "Sam Mitchell", "Bobby Phills", "Tim Thomas", "Troy Murphy", "Andres Nocioni", "Andray Blatche", "Beno Udrih", "Jared Dudley", "Alec Burks", "Otto Porter", "Johnny Cox", "Donnie Butcher", "Nick Weatherspoon", "Melvin Turpin", "Avery Johnson", "Raef LaFrentz", "Chris Wilcox", "Andrew Bogut", "Ersan Ilyasova", "Ed Leede", "Bob Weiss", "Ron Behagen", "Leonard Gray", "Robert Hawkins", "Terry Furlow", "Danny Ferry", "Isaac Austin", "Tony Delk", "Eric Snow", "Rashad McCants", "Rajon Rondo", "Lance Stephenson", "Jae Crowder", "Johnny Payak", "Dick Garrett", "Charles Johnson", "Ernie Grunfeld", "Darwin Cook", "Sidney Green", "Horace Grant", "Randy Foye", "Leo Mogus", "John Brisker", "Al Skinner", "Terry Tyler", "Darrell Walker", "Chris Morris", "Malik Sealy", "Chris Gatling", "Alvin Williams", "Jonny Flynn", "Ben McLemore", "Vern Hatton", "Swede Halbrook", "Horace Walker", "Gary Gregor", "Greg Smith", "Manny Leaks", "Mike Sojourner", "Mitch Kupchak", "George Johnson", "Tim McCormick", "Rod Higgins", "Eric Williams", "Shandon Anderson", "Travis Outlaw", "Ramon Sessions", "Jarrett Jack", "Taj Gibson", "Darren Collison", "Elfrid Payton", "Bones McKinney", "Al Masino", "Em Bryant", "George Trapp", "Bill Robinzine", "Bob Wilkerson", "John Williams", "Winston Garland", "Bob Sura", "Kenny Thomas", "Trey Burke", "Dario Saric", "Ed Peterson", "George Kaftan", "Jack Molinas", "Bob Peterson", "Phil Rollins", "John Warren", "Dale Schlueter", "Freddie Boyd", "Keith Herron", "Pat Cummings", "Voshon Lenard", "Kyle Korver", "Ronnie Brewer", "Howie Schultz", "Arnie Ferrin", "Nelson Bobb", "Bert Cook", "Don Adams", "John Gianelli", "Joe Meriweather", "Quinn Buckner", "Jerome Whitehead", "Randy Wittman", "Johnny Dawkins", "Earl Boykins", "T.J. Ford", "Corey Brewer", "Spencer Hawes", "Kleggie Hermsen", "Alfred McGuire*", "Gene Wiley", "Zaid Abdul-Aziz", "John Brown", "Louie Nelson", "Brad Davis", "Greg Anderson", "Ryan Gomes", "Nikola Pekovic", "DeAndre Jordan", "Gerry Calabrese", "Tom Boerwinkle", "John Hummer", "Dennis Awtrey", "LaSalle Thompson", "Jim Neal", "Jim Tucker", "Larry Staverman", "Cleveland Buckner", "Ron Reed", "Tommy Kron", "Ollie Johnson", "Geoff Huston", "Mitchell Wiggins", "Wayne Cooper", "Anthony Peeler", "P.J. Brown", "Primoz Brezec", "Hakim Warrick", "Jonas Valanciunas", "Ed Stanczak", "Jim Fritsche", "Bob Carney", "Steve Hamilton", "John Richter", "Joe Buckhalter", "Jerry Chambers", "Dave Sorenson", "Allan Bristow", "Rick Mahorn", "Brian Shaw", "Ronald Murray", "Anthony Parker", "Aaron Gordon", "Gene Rhodes", "Bill Thieben", "Lennie Rosenbluth", "Barry Clemens", "Ken Charles", "Bob Gross", "Ron Lee", "Billy Ray", "Johnny Moore", "Blair Rasmussen", "Gordan Giricek", "Marco Belinelli", "Bennie Swain", "Frank Johnson", "Erick Dampier", "Theo Ratliff", "Ron Livingstone", "Mark Workman", "Fred Christ", "Jack Parr", "John Rudometkin", "Larry Steele", "Bill Hanzlik", "John Bagley", "John Battle", "Tyrone Hill", "Tyrone Nesby", "Mark Blount", "Tyler Johnson", "Milt Schoon", "Boris Nachamkin", "Larry Friend", "Gary Alcorn", "Cleo Hill", "Paul Hogue", "Hank Finkel", "Larry McNeill", "Olden Polynice", "Jameer Nelson", "Kelenna Azubuike", "Tony Lavelli", "York Larese", "Bevo Nordmann", "Gary Hill", "Mike Davis", "Dick Gibbs", "Darnell Hillman", "Rick Robey", "Butch Carter", "Craig Ehlo", "Sam Bowie", "Danny Fortson", "Tristan Thompson", "Danny Green", "Bob Wilson", "Dick Groat", "Chuck Grigsby", "Larry Hennessy", "Bo Erias", "Joe Ruklick", "Lee Winfield", "George Thompson", "Mark Olberding", "Louis Orr", "Randy Breuer", "Travis Best", "Marc Jackson", "Smush Parker", "Francisco Garcia", "Joakim Noah", "Bob Feerick", "Jerry Fleishman", "Art Williams", "Dwight Jones", "Steve Hawes", "Kent Benson", "James Donaldson", "John Paxson", "Rumeal Robinson", "Bobby Jackson", "Vladimir Radmanovic", "Lee Nailon", "Luke Ridnour", "Robert Covington", "Ish Smith", "Red Owens", "Phil Martin", "Dick Duckett", "Howie Jolliff", "Pat Riley*", "George Wilson", "Cliff Meely", "Al Eberhard", "John Roche", "Jim Petersen", "Dennis Rodman*", "Otis Smith", "Kenny Gattison", "Marcus Fizer", "Juan Dixon", "Rasual Butler", "C.J. Miles", "Mirza Teletovic", "James Johnson", "John Mahnken", "Fred Diute", "Whitey Martin", "Clifford Ray", "Terry Dehere", "Damon Jones", "Anthony Morrow", "Derrick Williams", "Julius Randle", "Ariel Maughan", "Ken Murray", "Jesse Arnelle", "Bob Warlick", "Henry Bibby", "Brandon Bass", "Robin Lopez", "Tom Brennan", "Jackie Moore", "Gene Tormohlen", "John Trapp", "Matt Guokas", "Ralph Simpson", "Wes Matthews", "Rory Sparrow", "Jerry Reynolds", "Lorenzen Wright", "Tyson Chandler", "Ronnie MacGilvray", "Whitey Bell", "Tom Hoover", "Ron Bonham", "Jeff Wilkins", "Mike McGee", "Ledell Eackles", "Shawn Bradley", "Hubert Davis", "Aaron McKie", "Keon Clark", "Jose Calderon", "Jared Sullinger", "Dick Surhoff", "Bob Knight", "Chris Harris", "Mike Gale", "Mike O'Koren", "Chris Childs", "Eric Piatkowski", "DeShawn Stevenson", "Zaza Pachulia", "Willie Green", "Gary Harris", "T.J. Warren", "Dick O'Keefe", "Joe Smyth", "Herm Hedderick", "Dick Atha", "Gene Guarilia", "Howie Carl", "Dorie Murrey", "Steve Kuberski", "Larry Jones", "Michael Cooper", "Jerry Sichting", "Mike Sanders", "Larry Krystkowiak", "Jahlil Okafor", "Curly Armstrong", "Tony Jaros", "Jake Fendley", "Don Anielak", "Bob Anderegg", "Bud Koper", "Bill Buntin", "Bud Stallworth", "Charlie Criss", "Marcus Camby", "Pat Garrity", "Carlos Arroyo", "Jamaal Tinsley", "MarShon Brooks", "Sean Kilpatrick", "Carl McNulty", "Bob Williams", "Pat Dunn", "Ron Johnson", "Sam Stith", "Joe Bryant", "Kurt Nimphius", "Tony Brown", "Oliver Miller", "Aaron Williams", "Channing Frye", "Steven Adams", "Leo Klier", "Bob Lochmueller", "Skippy Whitaker", "Brendan McCann", "Mel Nowell", "Jay Arnette", "Don Ford", "Don Collins", "Lester Conner", "Alton Lister", "Harold Pressley", "Michael Olowokandi", "Rasho Nesterovic", "Adam Morrison", "Chink Crossin", "Joe Hutton", "Mike Kearns", "Bob Armstrong", "McCoy Ingram", "Bob Duffy", "John Thompson*", "Tom Boswell", "Jason Thompson", "JaVale McGee", "Tony Wroten", "Seth Curry", "Norm Swanson", "Johnny Horan", "Don Savage", "Ted Luckenbill", "Maury King", "Gerry Ward", "Bill Turner", "Leon Douglas", "Tim Perry", "Sean Rooks", "Greg Anthony", "Mario Elie", "Roger Mason", "Tommy Byrnes", "Jim Slaughter", "Ron Feiereisel", "Ron Shavlik", "Cal Ramsey", "Nick Mantis", "Freddie Crawford", "Shaler Halimon", "Larry Smith", "Terry Davis", "Erick Strickland", "Austin Croshere", "Dan Dickau", "DeMarre Carroll", "Joe Dolhon", "Alan Sawyer", "Ralph Polson", "Jim Luisi", "Norm Stewart", "Bob Wiesenhahn", "Barry Kramer", "Bill Melchionni", "Charlie Davis", "Donnie Freeman", "Greg Kelser", "Jim Thomas", "Rory White", "Darius Miles", "Josh Childress", "Austin Rivers", "Mal McMullen", "Dick Dickey", "Gary Bergen", "George Blaney", "Dean Meminger", "Billy McKinney", "Jon Sundvold", "Vitaly Potapenko", "Jason Caffey", "Juan Carlos", "Terrence Jones", "Cliff Barker", "Hal Uplinger", "John Barber", "Willie Norwood", "Corky Calhoun", "Darnell Valentine", "Craig Hodges", "Darrick Martin", "Speedy Claxton", "Martell Webster", "Donatas Motiejunas", "Kent Bazemore", "Frank Kaminsky", "Gene James", "Jack Kiley", "Bill Mlkvy", "Bob Santini", "Jim Ray", "Pickles Kennedy", "Dave Zeller", "Dan Swartz", "Kevin Restani", "Sly Williams", "Ronnie Lester", "Ben Poquette", "Kenny Walker", "Sharone Wright", "Bimbo Coles", "Brevin Knight", "Emmanuel Mudiay", "Buddy Hield"]; 
var npitchers = 1414;
var stat_id = "bball-9";


var nrows = parseInt(getQueryVariable('nrows'));
if (nrows==0){nrows = 20;}
if (nrows>100){nrows = 100;}
var startYear = parseInt(getQueryVariable('start'));
var endYear = parseInt(getQueryVariable('end'));
var urlyears = parseInt(getURLyears());
var urlend = urlyears%1000;
var urlstart = (urlyears-urlend)/1000;
urlend = (urlend-50)*20;
urlstart = (urlstart-50)*20;
var wlp = window.location.pathname; 
var moveLocation = false;
if (endYear==0){endYear=urlend;}
if (startYear==0){startYear=urlstart;}
if (startYear<urlstart || startYear > urlstart+20){wlp = wlp.replace('-'+(urlstart/20+50).toString(),'-'+(Math.trunc(startYear/20)+50).toString()); moveLocation = true;}
if (endYear<urlend-20 || endYear > urlend){wlp = wlp.replace((urlend/20+50).toString()+'.',(Math.trunc(endYear/20)+51).toString()+'.'); moveLocation = true;}
if (moveLocation){window.location = wlp+window.location.search;}

var base_str = document.getElementById('question_str').innerHTML;
if (endYear >= 2017){
document.getElementById('question_str').innerHTML = base_str+'since '+startYear.toString()+'?';
}
else{
document.getElementById('question_str').innerHTML = base_str+'between '+startYear.toString()+' and '+endYear.toString()+'?';	
}

var dataArray = [];
	
function createAnswers(){
	answer_spot = document.getElementById('answer_spot');
	for (i=0;i<nrows;i++){
		dataArray.push({'year':2017,'team':'','answer':'','number':0,'points':6});
	}

	for (i=0;i<rawDataArray.length/4;i++){
		if (rawDataArray[i*4+2]>=startYear && rawDataArray[i*4+2]<=endYear){
	        for (ii=0;ii<nrows;ii++){
	            if (rawDataArray[i*4+3]>dataArray[ii]['number']){
	                for (iii=0;iii<nrows-1-ii;iii++){
	                        dataArray[nrows-1-iii]['year']=dataArray[nrows-1-iii-1]['year'];
	                        dataArray[nrows-1-iii]['answer']=dataArray[nrows-1-iii-1]['answer'];
	                        dataArray[nrows-1-iii]['team']=dataArray[nrows-1-iii-1]['team'];
	                        dataArray[nrows-1-iii]['number']=dataArray[nrows-1-iii-1]['number'];
	                }
	                dataArray[ii]['year']=rawDataArray[i*4+2];
	                dataArray[ii]['team']=rawDataArray[i*4+1];
	                dataArray[ii]['number']=rawDataArray[i*4+3];
	                dataArray[ii]['answer']=rawDataArray[i*4];
	                break
	            }
	        }
    	}
    }	

	var answer_str = '';
	answer_str += '<div class="6u mhide"><div class="row"><div class="2u">Year</div><div class="2u">Team</div><div class="2u" id="stat_spota"></div><div class="6u">Name</div></div>';
	for (i=0;i<nrows/2;i++){
	answer_str += '<div class="row"><div class="2u" id="year'+i.toString()+'"><button class="button small" onclick="getYear('+i.toString()+');">Year</button></div><div class="2u" id="team'+i.toString()+'"><button class="button small" onclick="getTeam('+i.toString()+');">Team</div><div class="2u">'+dataArray[i].number.toString()+'</div><div class="6u" id="answer'+i.toString()+'">-------------------------</div></div>';
	}
	answer_str += '</div><div class="6u mhide"><div class="row"><div class="2u">Year</div><div class="2u">Team</div><div class="2u" id="stat_spotb"></div><div class="6u">Name</div></div>';
	for (i=nrows/2;i<nrows;i++){
	answer_str += '<div class="row"><div class="2u" id="year'+i.toString()+'"><button class="button small" onclick="getYear('+i.toString()+');">Year</button></div><div class="2u" id="team'+i.toString()+'"><button class="button small" onclick="getTeam('+i.toString()+');">Team</div><div class="2u">'+dataArray[i].number.toString()+'</div><div class="6u" id="answer'+i.toString()+'">-------------------------</div></div>';
	}
	answer_str += '</div>';
	answer_str += '<div class="12u mshow"><div class="row"><div class="2u">Year</div><div class="2u">Team</div><div class="2u" id="stat_spota"></div><div class="6u">Name</div></div>';
	for (i=0;i<nrows;i++){
	answer_str += '<div class="row"><div class="2u" id="year'+i.toString()+'"><button class="button small" onclick="getYear('+i.toString()+');">Year</button></div><div class="2u" id="team'+i.toString()+'"><button class="button small" onclick="getTeam('+i.toString()+');">Team</div><div class="2u">'+dataArray[i].number.toString()+'</div><div class="6u" id="answer'+i.toString()+'">-------------------------</div></div>';
	}
	answer_str += '</div>';

	answer_str += '<div class="12u"><button class="button-primary" onclick="showAnswers();">Show Answers</button></div>';
	answer_spot.innerHTML = answer_str;
	var spot_str = '';
	if (stat_id=='bball-9'){spot_str = 'Points';}
	document.getElementById('stat_spota').innerHTML = spot_str; document.getElementById('stat_spotb').innerHTML = spot_str;

	var input_ids = document.getElementById("answer");

	// Show label but insert value into the input:
	  var id_list = [];
	  for (i=0;i<npitchers;i++) {id_list.push(pitcher_names[i]);}
	new Awesomplete(input_ids, {
	  autoFirst: true,
	  sort: false,
	  list: id_list,

	});

	answer_input = document.getElementById('answer');
	answer_input.addEventListener('awesomplete-selectcomplete',setAnswer);

}

function setAnswer(){
	answer = document.getElementById('answer').value;
	for (i=0;i<nrows;i++){
		if (dataArray[i].answer==answer && dataArray[i].points>0){
			document.getElementById('answer'+i.toString()).innerHTML=answer; 
			var points = parseInt(document.getElementById('points').innerHTML);
			points += dataArray[i].points;
			document.getElementById('points').innerHTML = points;
			dataArray[i].points = 0;
			break;
		}
	}
	document.getElementById('answer').value = '';
	var points = parseInt(document.getElementById('points').innerHTML);
	points -= 1;
	document.getElementById('points').innerHTML = points;
}

function getYear(answern){
	document.getElementById('year'+answern.toString()).innerHTML = dataArray[answern].year.toString();
	var points = parseInt(document.getElementById('points').innerHTML);
	points -= 1;
	document.getElementById('points').innerHTML = points;
}
function getTeam(answern){
	document.getElementById('team'+answern.toString()).innerHTML = dataArray[answern].team.toString();
	var points = parseInt(document.getElementById('points').innerHTML);
	points -= 2;
	document.getElementById('points').innerHTML = points;
}
function showAnswers(){
	for (i=0;i<nrows;i++){
		if (dataArray[i].points>0){
			document.getElementById('answer'+i.toString()).innerHTML='<span style="color:red;">'+dataArray[i].answer+'</span>'; 
			dataArray[i].points = 0;
		}
		document.getElementById('year'+i.toString()).innerHTML = dataArray[i].year.toString();
		document.getElementById('team'+i.toString()).innerHTML = dataArray[i].team.toString();
	}

}
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(0);
}
function getURLyears(){
		var vars = window.location.pathname.split("-");
		var yearshtml = vars[vars.length-1].split(".");
       return(yearshtml[0]);
}