function update(){
	var day=document.getElementById("day");
	var month=document.getElementById("month");
	var year=document.getElementById("year");
	var opt;
	for (i=1;i<=31;i++){
		opt=document.createElement("option");
		opt.text=i;
		day.add(opt);
	}
	for (i=1;i<=12;i++){
		opt=document.createElement("option");
		opt.text=i;
		month.add(opt);
	}
	for (i=1980;i<=2018;i++){
		opt=document.createElement("option");
		opt.text=i;
		year.add(opt);
	}
}

function validate(){
	var name=document.getElementById("name");
	var phone=document.getElementById("phone");
	var email=document.getElementById("email");
	var pass=document.getElementById("pass");
	var c_pass=document.getElementById("c_pass");
	var result=document.getElementById("result");
	var text;
	//result.innerHTML="abcd";
	//alert("test");

	/*if(name.value=="" | phone.value=="")
		text="Please enter valid information";
	else
		text="Updated";
	result.setVisibility=true;
	result.innerHtml=text;*/
}