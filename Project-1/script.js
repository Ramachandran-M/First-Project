function myfunc(event){
    event.preventDefault();
    var first_name=document.getElementById("first_name").value;
    var last_name=document.getElementById("last_name").value;
    var date_of_birth=document.getElementById("date_of_birth").value;
    var email=document.getElementById("e_mail").value;
    var mobile_number=document.getElementById("mobile_number").value;
    var address=document.getElementById("address").value;
    var license_number=document.getElementById("license_number").value;

    localStorage.setItem('ls_first_name',first_name);
    localStorage.setItem('ls_last_item',last_name);
    localStorage.setItem('ls_date_of_birth',date_of_birth);
    localStorage.setItem('ls_e_mail',e_mail)
    localStorage.setItem('ls_mobile_number',mobile_number);
    localStorage.setItem('ls_address',address);
    localStorage.setItem('ls_license_number',license_number);
}















































































