function checkStaffTab(staffID){

    doctorObj=document.getElementById('DoctorCheck');
    otherObj=document.getElementById('OtherCheck');
    docHeaderObj=document.getElementById('doctorHeader');
    otherHeaderObj=document.getElementById('othersHeader');
    docSplObj=document.getElementById('DoctorSpecialization');
    otherRoleObj=document.getElementById('StaffRoles');

    if(staffID=='doctor'){
        doctorObj.classList.add('active');
        otherObj.classList.remove('active');
        docHeaderObj.classList.remove('d-none');
        otherHeaderObj.classList.add('d-none');
        docSplObj.classList.remove('d-none');
        otherRoleObj.classList.add('d-none');
    }
    else
    {
        doctorObj.classList.remove('active');
        otherObj.classList.add('active');
        docHeaderObj.classList.add('d-none');
        otherHeaderObj.classList.remove('d-none');
        docSplObj.classList.add('d-none');
        otherRoleObj.classList.remove('d-none');
    }
}