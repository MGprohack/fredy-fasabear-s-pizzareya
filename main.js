var menuarray=[];
function addtomenu(){
    item1=document.getElementById("item").value;
    menuarray.push(item1);
    document.getElementById("item").value="";
}
function showmenu(){

    document.getElementById ("output").innerHTML=menuarray;
} 