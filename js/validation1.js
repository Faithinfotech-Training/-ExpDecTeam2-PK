function checkName(idEle) {
  nameObj = document.getElementById(idEle);
  nameObj.classList.remove("is-invalid");
  value = nameObj.value;
  nameObj.setAttribute("title", "")
  console.log(value);
  if (value == "") {
    console.log("Name is a mandatory field");
  }
  let pattern = /[^a-z A-Z]/g;
  let result = value.match(pattern);
  console.log(result);
  if (result){
    nameObj.classList.add("is-invalid");
    nameObj.setAttribute("title", "Name Should Have Alphabets Only");
  } 
}

function checkDOB(idEle) {

  dateObj = document.getElementById(idEle);

  dateObj.classList.remove("is-invalid");

  value = dateObj.value;

  console.log(value);

  if (value == "") {

    console.log("DOB is a mandatory field");

  }

  let today=new Date();

  let compDay=new Date(value);

  console.log(today);

  if (today<=compDay) {

    dateObj.classList.add("is-invalid");

  }



}