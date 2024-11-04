


function create_label(tagname,atname,attival,content){
    var label = document.createElement(tagname);
    label.setAttribute(atname,attival);
    label.innerHTML = content;
    return label ;

};

function create_input(tagname,atname,attival,attiname2,attival2){
    var input = document.createElement(tagname);
    input.setAttribute(atname,attival);
    input.setAttribute(attiname2,attival2);
    return input;
};

function breaktag(){
    var br = document.createElement("br");
    return br;
};
 
function tabletr(){
  var tr = document.createElement("tr");
  return tr;
};

function tabletd(){
    var td = document.createElement("td");
    return td ;
};
var heading = document.createElement("h1");
heading.innerHTML = "SignUp Form";

var fdiv = document.createElement("div");
fdiv.className = "inP";
var firstl = create_label("label","for","fistn","FirstName");
var firsti = create_input("input","type","text","id","fistn");
var fstbr = breaktag();
fdiv.append(firstl,firsti,fstbr);

var sdiv = document.createElement("div");
sdiv.className = "inP";
var secondl= create_label("label","for","secn","SecondName");
var secondi = create_input("input","type","text","id","secn");
var secbr = breaktag();
sdiv.append(secondl,secondi,secbr);

var ediv = document.createElement("div");
ediv.className = "inP";
var emailL = create_label("label","for","emil","Email");
var emaili = create_input("input","type","email","id","emil");
var ebr = breaktag();
ediv.append(emailL,emaili,ebr);

var adiv = document.createElement("div");
adiv.className = "inP";
var addressl = create_label("label","for","adress","Address");
var addressi = create_input("input","type","text","id","adress");
var adbr = breaktag();
adiv.append(addressl,addressi,adbr);

var pdiv = document.createElement("div");
pdiv.className = "inP";
var pincodel = create_label("label","for","pin","Pincode");
var pincodei = create_input("input","type","text","id","pin");
var pinbr = breaktag();
pdiv.append(pincodel,pincodei,pinbr);

var rdiv = document.createElement("div");
rdiv.className = "inP";
var radiol1 = create_label("lable","for","m","male");
var radioi1 = document.createElement("input");
radioi1.setAttribute("type","radio");
radioi1.setAttribute("id","m");
radioi1.setAttribute("name","gender");
radioi1.setAttribute("value","male")
var radiol2 = create_label("label","for","f","female");
var radioi2 = document.createElement("input");
radioi2.setAttribute("type","radio");
radioi2.setAttribute("id","f");
radioi2.setAttribute("name","gender");
radioi2.setAttribute("value","female");

var radiobr = breaktag();
rdiv.append(radiol1,radioi1,radiol2,radioi2,radiobr);

var stdiv = document.createElement("div");
stdiv.className = "inP";
var statel = create_label("label","for","stat","State");
var statei = create_input("input","type","text","id","stat");
var statebr = breaktag();
stdiv.append(statel,statei,statebr);

var natdiv =document.createElement("div");
natdiv.className = "inP";
var nationalityl = create_label("label","for","nat","Nationality");
var nationalityi = create_input("input","type","text","id","nat");
var natbr = breaktag();
natdiv.append(nationalityl,nationalityi,natbr);

var maindiv = document.createElement("div");
maindiv.setAttribute("style","display:flex");

var mainrow = document.createElement("div");
mainrow.className = "row";

var inpdiv = document.createElement("div");
inpdiv.className = "divinp";

var buttondiv = document.createElement("div");
buttondiv.className = "divbutton";
var button1 = document .createElement("button");
button1.innerHTML= "signUp";
buttondiv.append(button1);

inpdiv.append(heading,fdiv,sdiv,ediv,adiv,pdiv,rdiv,stdiv,natdiv,buttondiv);
    
    maindiv.append(mainrow);
    mainrow.append(inpdiv);

    document.body.append(maindiv);

var tablediv = document.createElement("div");
tablediv.className = "displayform";
mainrow.append(tablediv);

var table = document.createElement("table");
table.className = "tab";

var headdiv = document.createElement("div");
var tabhead = document.createElement("h1");
tabhead.innerHTML = "Your Info:";
headdiv.append(tabhead);

var fntr = tabletr();
var f1td = tabletd();
f1td.innerHTML = "Firstname";
var f2td = tabletd();
 f2td.setAttribute("style","border:1px solid black;border-collapse:collapse; width:150px");
fntr.append(f1td,f2td);

var sectr = tabletr();
var sec1td = tabletd();
sec1td.innerHTML = "SecondName";
var sec2td = tabletd();
sec2td.setAttribute("style","border:1px solid black;border-collapse:collapse");
sectr.append(sec1td,sec2td);

var emtr = tabletr();
var em1td = tabletd();
em1td.innerHTML = "email";
var em2td = tabletd();
 em2td.setAttribute("style","border:1px solid black;border-collapse:collapse");
emtr.append(em1td,em2td);

var adtr = tabletr();
var ad1td = tabletd();
ad1td.innerHTML = "address";
var ad2td = tabletd();
 ad2td.setAttribute("style","border:1px solid black;border-collapse:collapse");
adtr.append(ad1td,ad2td);

var pintr = tabletr();
var pin1td = tabletd();
pin1td.innerHTML = "pincode";
var pin2td = tabletd();
pin2td.setAttribute("style","border:1px solid black;border-collapse:collapse");
pintr.append(pin1td,pin2td);

var ratr = tabletr();
var ra1td = tabletd();
ra1td.innerHTML = "Gender";
var ra2td = tabletd();
ra2td.setAttribute("style","border:1px solid black;border-collapse:collapse");
ratr.append(ra1td,ra2td);

var satr = tabletr();
var sa1td = tabletd();
sa1td.innerHTML = "State";
var sa2td = tabletd();
sa2td.setAttribute("style","border:1px solid black;border-collapse:collapse");
satr.append(sa1td,sa2td);

var Natr = tabletr();
var Na1td = tabletd();
Na1td.innerHTML = "Nationality";
var Na2td = tabletd();
Na2td.setAttribute("style","border:1px solid black;border-collapse:collapse");
Natr.append(Na1td,Na2td);

table.append(fntr,sectr,emtr,adtr,pintr,ratr,satr,Natr);
tablediv.append(headdiv,table);

function display(){
    var namef = document.getElementById("fistn").value ;
    var namel = document.getElementById("secn").value;
    var mail = document.getElementById("emil").value;
    var add = document.getElementById("adress").value;
    var pinc = document.getElementById("pin").value;
    var radios = document.getElementsByName("gender");
     var ladio; 
     for (var i = 0; i < radios.length; i++) { 
        if (radios[i].checked) {
             ladio = radios[i].value; 
             break;
             };
             };

    var stateid = document.getElementById("stat").value;
    var national = document.getElementById("nat").value;


    f2td.innerHTML = `${namef}`;
    sec2td.innerHTML=`${namel}`;
    em2td . innerHTML = `${mail}`;
    ad2td.innerHTML = `${add}`;
    pin2td.innerHTML = `${pinc}`;
    ra2td.innerHTML = `${ladio}`;
    sa2td.innerHTML = `${stateid}`;
    Na2td.innerHTML = `${national}`;
};

button1.addEventListener("click",display);


