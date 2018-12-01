function validate(form_id, email, tel, name, surname) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var phone = /^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;
  /* var firstname = /^[a-zA-Zа-яёА-ЯЁ\s\-]+$/; пробовал сделать фио через регулярные выражения, но понял, что это бред.*/
  var address = document.forms[form_id].elements[email].value;
  var addphone = document.forms[form_id].elements[tel].value;
  var addfirstname = document.forms[form_id].elements[name].value;
  var addsurname = document.forms[form_id].elements[surname].value;
  var buttoncheck = document.getElementById("btn_click");
  if (
    reg.test(address) == false ||
    phone.test(addphone) == false ||
    addfirstname == "" ||
    addsurname == ""
  ) {
    alert("Введённые данные некорректны!!!");
    buttoncheck.setAttribute("disabled", "true");
    buttoncheck.style.cssText = "background: red;";
    return false;
  }
}
