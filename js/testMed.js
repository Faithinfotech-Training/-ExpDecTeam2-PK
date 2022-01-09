function checkTestMedTab(testOrMed){
    testNav=document.getElementById('testCheck');
    medNav=document.getElementById('medCheck');
    testObj=document.getElementById('testForm');
    medObj=document.getElementById('medForm');
    testHeaderObj=document.getElementById('testHeader');
    medHeaderObj=document.getElementById('medHeader');


    if(testOrMed=='test'){
        testNav.classList.add('active');
        medNav.classList.remove('active');
        testObj.classList.remove('d-none');
        medObj.classList.add('d-none');
        medHeaderObj.classList.remove('d-none');
        testHeaderObj.classList.add('d-none');
    }
    else
    {
        testNav.classList.remove('active');
        medNav.classList.add('active');
        testHeaderObj.classList.add('d-none');
        medHeaderObj.classList.remove('d-none');
        testObj.classList.add('d-none');
        medObj.classList.remove('d-none');
    }
}