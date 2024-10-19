
const dsa=document.getElementById('dsa');
const oops=document.getElementById('oops');
const py=document.getElementById('python');

dsa.style.display= "block";
oops.style.display= "none";
python.style.display= "none";

const dsaItems= document.getElementById('dsaList');
const oopsItems= document.getElementById('oopsList');
const pythonItems= document.getElementById('pythonList');


//make a function???
dsaItems.style.display="block";
oopsItems.style.display="none";
pythonItems.style.display="none";



function onDsa()
{
    dsa.style.display= "block";
    oops.style.display= "none";
    python.style.display= "none";
    dsaItems.style.display="block";
    oopsItems.style.display="none";
    pythonItems.style.display="none";
}

function onOops()
{
    dsa.style.display= "none";
    oops.style.display= "block";
    python.style.display= "none";
    dsaItems.style.display="none";
    oopsItems.style.display="block";
    pythonItems.style.display="none";

}

function onPython()
{
    dsa.style.display= "none";
    oops.style.display= "none";
    python.style.display= "block";
    dsaItems.style.display="none";
    oopsItems.style.display="none";
    pythonItems.style.display="block";


}

const dsaH =document.getElementById('dsaHead');
const oopsH =document.getElementById('oopsHead');
const pythonH =document.getElementById('pythonHead');


dsaH.onclick = onDsa;
oopsH.onclick = onOops;
pythonH.onclick = onPython;