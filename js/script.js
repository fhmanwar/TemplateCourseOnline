function regis() {
    var nim = document.getElementById('nim').value;
    var nama = document.getElementById('nama').value;
    var mail = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var pass1 = document.getElementById('pass1').value;
    var myclass = document.getElementById('class').value;
    var phone = document.getElementById('phone').value;

    console.log(nim);
    console.log(nama);
    console.log(mail);
    console.log(pass);
    console.log(pass1);
    console.log(myclass);
    console.log(phone);
    
    if (nama == "" ) {
        alert("Name must be fill");
    } else if (!IsNumber(nama)) {
        alert("Name must be letter only");
    } else if (mail == "") {
        alert("Email must be fill");
    } else if (!IsValidEmail(mail)) {
        alert("Invalid Email");
    } else if (nim == "") {
        alert("nim must be fill");
    } else if (pass == "" ) {
        alert("Password must be fill");
    } else if (pass.length < 8 || pass.length > 10) {
        alert("Password must be greater than 8 and max 10 character");
    } else if (pass1 == "" ) {
        alert("Confirm Password must be fill");
    } else if (pass1 !== pass ) {
        alert("Confirm Password Not match");
    } else if (myclass == '') {
        alert("Date must be fill");
    } else if (phone == '') {
        alert("Date must be fill");
    } else {
        alert("Success"); 
        window.setTimeout(function () {
            location.reload();
            window.location.href = "login.html";
        }, 500);
    }
}

function login() {
    var mail = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    console.log(mail);
    console.log(pass);
    // console.log(pass.length);

    if (mail == null || !IsValidEmail(mail)) {
        alert("Email Cannot contain space character whitespace and must be greater than 6 character"); 
    } else if (pass == null) {
        alert("Password must be fill ");
    } else if (pass.length < 8 || pass.length > 10) {
        alert("Password must be min 8 and max 10 char");
    } else if (mail == 'admin@mail.com' && pass == '12345678') {
        sessionStorage.setItem('session', mail);
        alert("Success");
        window.setTimeout(function () {
            location.reload();
            window.location.href = "index.html";
        }, 500);
    } else {
        alert("Email and Password is wrong");
    }
}

function logout() {
    sessionStorage.removeItem('session');
    window.location.href = "login.html";
}

function writeCookie(name,value,days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires=" + date.toGMTString();
            }else{
        expires = "";
    }
    console.log(expires);
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var i, c, ca, nameEQ = name + "=";
    ca = document.cookie.split(';');
    for(i=0;i < ca.length;i++) {
        c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return '';
}
// // ============ store cookie ============
// var session = 's234543245';
// writeCookie('sessionId', session, 1);
// // read cookie
// var session = readCookie('sessionId')

// // ============= use Session Storage ============
// // Save data to sessionStorage
// sessionStorage.setItem('session', 'tes');
// // Remove saved data from sessionStorage
// sessionStorage.removeItem('session');
// // Remove all saved data from sessionStorage
// sessionStorage.clear();
// // Read data to sessionStorage
// let data = sessionStorage.getItem('session');
// console.log(data);

function assignment() {
    alert("Success");
    window.setTimeout(function () {
        location.reload();
        window.location.href = "courseDetail.html";
    }, 500);
}

function validateForm() {
    // debugger;
    var nama = $('#name').val();
    var mail = $('#email').val();
    var msg = $('#msg').val();
    if (nama == "" ) {
        alert("Name must be fill");
    } else if (mail == "") {
        alert("Email must be fill");
    } else if (!IsValidEmail(mail)) {
        alert("Invalid Email");
    }  else if (msg == "") {
        alert("Comment must be fill");
    }else {
        alert("Success");
    }
}

function IsValidEmail(email) {
    //Check minimum valid length of an Email.
    if (email.length <= 2) {
        return false;
    }
    //If whether email has @ character.
    if (email.indexOf("@") == -1) {
        return false;
    }

    var parts = email.split("@");
    var dot = parts[1].indexOf(".");
    var len = parts[1].length;
    var dotSplits = parts[1].split(".");
    var dotCount = dotSplits.length - 1;

    //Check whether Dot is present, and that too minimum 1 character after @.
    if (dot == -1 || dot < 2 || dotCount > 2 ) {
        return false;
    }

    var list = new Array (
        "/", "!", "#", "$", "%", 
        "%", "^", "&", "*", "(", 
        ")", "+", "=", "-", "`", 
        "~", ";", "<", ">",  "?", 
        "[", "]", "{", "}", ",",
    );
    var llength = list.length;
    var symbol = parts[0];
    for (i = 0; i < symbol.length; i++) {
        for (j = 0; j < llength; j++) {
            if(symbol[i] == list[j]) {
                return false;
            }
        }        
    }

    //Check whether Dot is not the last character and dots are not repeated.
    for (var i = 0; i < dotSplits.length; i++) {
        if (dotSplits[i].length == 0) {
            return false;
        }
    }

    return true;
};

function IsNumber(string) {
    var numb = new Array (
        "1", "2", "3", "4", "5", 
        "6", "7", "8", "9", "0"
    );

    var llength = numb.length;
    for (i = 0; i < string.length; i++) {
        for (j = 0; j < llength; j++) {
            if(string[i] == numb[j]) {
                return false;
            }
        }        
    }
    return true;
}