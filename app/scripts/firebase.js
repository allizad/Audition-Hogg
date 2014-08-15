//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
// include these in .html: <script src="https://cdn.firebase.com/v0/firebase.js"></script>
// <script src="https://cdn.firebase.com/libs/angularfire/0.5.0-rc1/angularfire.js"></script>
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//


var db = new Firebase('https://mkshackathon.firebaseio.com'),
    postings = db.child('postings'),
    allPostings = postings.child('all'), //CHANGE CHILD TO allPostings too

    status = postings.child('status'),
    approved = status.child('approved'),
    pending = status.child('pending'),
    rejected = status.child('rejected');

//create nomination from form
// NEED TO ATTACH EACH VALUE TO A PART OF THE FORM
// FIGURE OUT ID CREATION/IMPLEMENTATION
// anyone can use this method 
var createPosting = function() {
	var data = {
		$id: {  // HOW TO MAKE ID?????
			play: "I'm a play",
			company: "Company",
			status: 'pending',  //is string a good call? pending: true? but then how would you simply do active: true??
			date_start: "DATE", //figure out format of date picker
			date_end: "DATE",  // ^^
			contact: {
				name: "NAME",
				email: "EMAIL"
			},
			description: "HODOR HODOR HODOR HODOR HODOR", // max character count?
			equity: false, //initialize as false? would rather have radio button coordinate to true/false
			paid: false    // ^^
		}
	}

	var posting = allPostings.push() // pushes new entry into allPostings table
	posting.setWithPriority(data, data.$id.date_start) // organizes entries based on start date. FIGURE OUT ID HERE TOO
}

//change status of nomination and move to those tables (??)
//FIGURE OUT ADMIN AUTHORIZATION FIRST, THEN INCORPORATE INTO FOLLOWING:
//(only authorized users can use this method, so should it be somewhere else?)
var statusChange = function(id, oldStatus, newStatus) {
	status.child(oldStatus).child(id).remove() // removes entry from the old status table/view
	status.child(newStatus).child(id).set(true) // will this add the info to the new status (approved) table/view???
}

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////USER USER USER USER USER /////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

//CREATE NEW USER (from https://www.firebase.com/docs/web/guide/simple-login/password.html)
//****Attach to signup form****
//Won't log in too, just create
auth.createUser(email, password, function(error, user) {
  if (error === null) {
    console.log("User created successfully:", user);
  } else {
    console.log("Error creating user:", error);
  }
});

//LOG IN USER (from url above)
//****Connect to Log In form****
auth.login('password', {
  email: '<email@domain.com>',
  password: '<password>'
});

//User logic???
var Users = {
	rolls: "user",
}

thisUser = new User
users[firebaseid] = thisUser  //firebaseid == userID in Firebase platform


//ACTUAL WAY TO CREATE USER (http://www.ng-newsletter.com/posts/back-end-with-firebase.html)
auth.createUser(email, password, function(error, user) {
  if (!error) {
    console.log('User Id: ' + user.id + ', Email: ' + user.email);
  }
});

//ACTUAL WAY TO LOGOUT ("")
<span ng-show="auth.user">
  {{auth.user.name}} | <a href="#" ng-click="auth.$logout()">Logout</a>
</span>

//ACTUAL WAY TO LOGIN ("")
<a href="#" 
    ng-hide="auth.user" 
    ng-click="auth.$login('persona')">Login</a>



/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////    ANGULAR       ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////





