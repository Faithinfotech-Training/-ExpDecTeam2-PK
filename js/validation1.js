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


function checkPhone(idEle) {

  phoneObj = document.getElementById(idEle);

  phoneObj.classList.remove("is-invalid");

  value = phoneObj.value;

  console.log(value);

  if (value == "") {

    console.log("Phone is a mandatory field");

  }



  if (value.match(/[^0-9]/g)) {

    phoneObj.classList.add("is-invalid");

  }



  if (value.length != 10) {

    phoneObj.classList.add("is-invalid");

  }

}