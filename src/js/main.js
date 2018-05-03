var app = angular.module('webApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/home.htm",
        controller : 'main as ctrl'
    })
    .when("/portfolio", {
        templateUrl : "partials/portfolio.htm",
        controller : 'main as ctrl'
    })
	.when("/portfolio1", {
        templateUrl : "partials/portfolio1.htm",
        controller : 'portfolio1 as ctrl'
    })
	.when("/portfolio2", {
        templateUrl : "partials/portfolio2.htm",
        controller : 'portfolio2 as ctrl'
	})
	.when("/team", {
        templateUrl : "partials/team.htm",
        controller : 'team as ctrl'
	})
	.when("/contact", {
        templateUrl : "partials/contact.htm",
        controller : 'main as ctrl'
	})
	.when("/signIn", {
        templateUrl : "partials/signIn.htm",
        controller : 'main as ctrl'
    })
});

app.controller('portfolio1', function($scope, $http) {
	var vm = this,
		img = ["default1.jpg", "default2.jpg", "default3.jpg", "default4.jpg", "default1.jpg", "default2.jpg", "default3.jpg", "default4.jpg", "default1.jpg", "default2.jpg", "default3.jpg", "default4.jpg"];

	//finds images and gives a path based on page
	vm.images = convertImagePath(img);
	
	vm.openModal = function(image) {
		vm.title = image.name;
		vm.modalImg = image.path;
	};
});

app.controller('portfolio2', function($scope, $http) {
	var vm = this,
		img = ["default1.jpg", "default1.jpg", "default1.jpg", "default1.jpg"];

	//finds images and gives a path based on page
	vm.images = convertImagePath(img);
});

app.controller('team', function($scope, $http) {
    var vm = this,
        team = [
            {
                name: "Person A",
                path: "img/default3.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                name: "Person B",
                path: "img/default3.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "Person C",
                path: "img/default3.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
        ];

	//finds images and gives a path based on page
    vm.team = team;

    vm.dropModal = function(image) {
        if (vm.teamName == undefined) {
            vm.teamName = image.name;
            vm.teamDesc = image.desc;
        }
        else {
            vm.teamName = null;
            vm.teamDesc = null;
        }
        
    };
});

//converts a ton of images to the correct path
function convertImagePath(img){
	var imgPath = []
	angular.forEach(img, function(item, idx){
		imgPath.push({"name":item, "path":getImagePath(item)});
	})
	return imgPath;
};

//get image path
function getImagePath(imageName){
	return "img/" + imageName;	
};




class Student {
    constructor(name, ID) {
        this.name = name;
        this.ID = ID;
    }
}
var Scott = new Student("Scott", 1);
var Kathleen = new Student("Kathleen", 2);
var Marissa = new Student("Marissa", 3);
var Bao = new Student("Bao", 4)
var Luke = new Student("Luke", 5);
var Cyrus = new Student("Cyrus", 6);
var Jessica = new Student("Jessica", 7);
var Megan = new Student("Megan", 8);
var Parker = new Student("Parker", 9);
var John = new Student("John", 10);
var Cooper = new Student("Cooper", 11);
var Gideon = new Student("Gideon", 12);
var Andrew = new Student("Andrew", 13);
var Pete = new Student("Pete", 14);
var Anne = new Student("Anne", 15);
var Chad = new Student("Chad", 16);
var Kristen = new Student("Kristen", 17);
var Ji = new Student("Ji", 18);
var Alex = new Student("Alex", 19);
var Michael = new Student("Michael", 20);
var Elisha = new Student("Elisha", 21);
var Drew = new Student("Drew", 22);
var Daniel = new Student("Daniel", 23);
var James = new Student("James", 24);
var Tanner = new Student("Tanner", 25);
var Thomas = new Student("Thomas", 26);
var Hunter = new Student("Hunter", 27);
var Theo = new Student("Theo", 28);
var Stuart = new Student("Stuart", 29);
var Teri = new Student("Teri", 30);
var students = [Scott, Kathleen, Marissa, Bao, Luke, Cyrus, Jessica, Megan, Parker, John,
                Cooper, Gideon, Andrew, Pete, Anne, Chad, Kristen, Ji, Alex, Michael,
                Elisha, Drew, Daniel, James, Tanner, Thomas, Hunter, Theo, Stuart, Teri];

                
class BadPair {
    constructor(student1, student2) {
        this.student1 = student1;
        this.student2 = student2;
    }
}
var Pair1 = new BadPair(Parker, John);
var Pair2 = new BadPair(Scott, Alex);
var Pair3 = new BadPair(Ji, Michael);
var Pair4 = new BadPair(Thomas, Drew);
var Pair5 = new BadPair(Elisha, Tanner);
var Pair6 = new BadPair(Kristen, Kathleen);
var Pair7 = new BadPair(Cooper, Chad);
var Pair8 = new BadPair(Jessica, Marissa);
var Pair9 = new BadPair(Daniel, Bao);
var BadPairs = [Pair1, Pair2, Pair3, Pair4, Pair5, Pair6, Pair7, Pair8, Pair9];


//gives a random student from the array 'students'
function rand(students)
{
    var x = Math.floor((Math.random() * students.length) + 1);
    var xName;
    for (var k = 0; k < students.length; k++)
    {
        if (students[k].ID == x)
        {
            xName = students[k].name;
        }
    }


    var disp = document.getElementById('display1');
    disp.innerHTML = xName;
}


//gives pairs from the array 'students'
//doesn't make a pair that is a documented bad pair
//prints the extra student if there is an odd number of students
function pair(students)
{
    var student1 = 0;
    var student2 = 0;
    var extra = new Array();
    var evenly_divided = true;
    var pairs = new Array();
    var used = new Array();
    var length = students.length;
 
    if (students.length % 2 != 0)
    {
        evenly_divided = false;
        var rand = Math.floor((Math.random() * students.length));
        extra.push(students[rand]);
        students.splice(rand, 1);
        used.push(extra[0].ID);
    }
    while (used.length-extra.length != students.length)
    { 
        student1 = Math.floor((Math.random() * length) + 1);
        student2 = Math.floor((Math.random() * length) + 1);

        if(student1 != student2 && !used.includes(student1) && !used.includes(student2) && GoodPair(student1, student2))
        {
            console.log("yes");
            var student1name, student2name;
            for (var k = 0; k < students.length; k++)
            {
                if (students[k].ID == student1)
                {
                    student1name = students[k].name;
                }
                if (students[k].ID == student2)
                {
                    student2name = students[k].name;
                }  
            }
            used.push(student1);
            used.push(student2);

            pairs.push(student1name + " and " + student2name);
            console.log(pairs);
        }        
    }
    var x = "";
    for (var i = 0; i < pairs.length; i++)
    {
        x += pairs[i];
        x += "<br>";
    }
    if (!evenly_divided)
    {
        x += extra[0].name;
        students.push(extra[0]);
    }

    var disp = document.getElementById("display2");
    disp.innerHTML = x;
}


//gives groups of size 'students_per_group' from the array 'students'
//prints the extra students if the groups don't divide evenly
//prints the number of bad pairs that are present
function group(students_per_group, students)
{
    var usedStudents = new Array();
    var num_of_groups = students.length / students_per_group;

    var groups = new Array();
    var groupsName = new Array();
    var length = students.length;
    var evenly_divided = true;
    var extra = new Array();

    while(students.length % students_per_group != 0)
    {
        evenly_divided = false;
        var rand = Math.floor((Math.random() * students.length));
        extra.push(students[rand]);
        usedStudents.push(students[rand].ID);
        students.splice(rand, 1);
    }

    while (usedStudents.length - extra.length != students.length)
    {
        var oneGroup = new Array();
        for (var i = 0; i < students_per_group; i++)
        {
            oneGroup[i] = Math.floor((Math.random() * length) + 1);
        }
        if(!check(oneGroup) && isUsed(oneGroup, usedStudents))
        {
            for (var i = 0; i < students_per_group; i++)
            {
                usedStudents.push(oneGroup[i]);
                groups.push(oneGroup[i]);
            }
            for (var k = 0; k < students.length; k++)
            {
                for (var j = 0; j < oneGroup.length; j++)
                {
                    if (students[k].ID == oneGroup[j])
                    {
                        groupsName.push(students[k].name);
                    }    
                }
            }    
        }
    }

    var x = "", it = 0, bad_pair_count = 0, tempGroup = new Array();
    for (var i = 1; i <= num_of_groups; i++)
    {
        for (var j = 1; j <= students_per_group; j++)
        {
            x += groupsName[it];
            tempGroup.push(groups[it]);
            if (j != students_per_group)
            {
                x += ",";
            }
            if (j == students_per_group)
            {
                for (var t = 0; t < tempGroup.length; t++)
                {
                    for (var c = 0; c < tempGroup.length; c++)
                    {
                        if (!GoodPair(tempGroup[t], tempGroup[c]))
                        {
                            bad_pair_count++;
                        }
                    }
                }
            }
            x += " ";
            it++;
            if (tempGroup.length == students_per_group)
            {
                tempGroup = [];
            }
        }
        x += "<br>";
    }

    if (!evenly_divided)
    {
        x += "<br>";
        x += "Extra Students: ";
    }
    while((!evenly_divided) && extra.length > 0)
    {
        students.push(extra[extra.length - 1]);
        x += extra.pop().name;
        if (extra.length != 0)
        {
            x += ", ";
        }
    }

    x += "<br>";
    x += "Bad Pairs: ";
    x += bad_pair_count;
    
    var disp = document.getElementById('display3');
    disp.innerHTML = x;
}


//checks an array to see if there are any repeating values
//returns true if there are no repeating values
function check (array)
{
    var foundRepeatingValue = false;
    var newList = [];
    for(var i = 0; i < array.length; i++){
        var thisValue = array[i];
        if(i > 0)
        {
            if(newList.indexOf(thisValue) > -1)
            {
                foundRepeatingValue = true;
                return true;
            }
       } 
       newList.push(thisValue);
    } 
    return false;
}


//checks to see if any item in the baseArray is in the usedArray
//returns true if there is no instances of previously used items
function isUsed(baseArray, usedArray)
{
    for (var i = 0; i < baseArray.length; i++)
    {
        if (usedArray.includes(baseArray[i]))
        {
            return false;
        }
    }
    return true;
}


//checks to see if two students are a good pair
//refers to the students by their ID numbers not their names
//returns true if the two students are a good pair
function GoodPair(student1, student2)
{
    for (var i = 0; i < BadPairs.length; i++)
    {
        if (BadPairs[i].student1.ID == student1 && BadPairs[i].student2.ID == student2)
        {
            return false;
        }
    }
    return true;
}