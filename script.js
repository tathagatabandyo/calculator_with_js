var v,u,c,a,b,befor=0,after=0,z,oa,os,om,od,bo,bv,od1;
let o;
v=document.querySelector("input[name=an]").value="";
z=v.substring(befor,after);


function n(ele) {
    v=document.querySelector("input[name=an]").value;
    if((v.includes("Syntax ERROR"))==true) { 
        document.querySelector("input[name=an]").setAttribute("style","text-align:left;");
        cle();
    }
    v=document.querySelector("input[name=an]").value += ele;
    document.querySelector("input[name=an]").setAttribute("style","background:#f368e070;color:#eee;");

    document.querySelector("input[value='.']").style.background="";

    after=v.length;

}

function na(ele) {

    v=document.querySelector("input[name=an]").value;
    if((v.includes("Syntax ERROR"))==true) {
        document.querySelector("input[name=an]").setAttribute("style","text-align:left;");
        cle();
    }

    document.querySelector("input[value='.']").style.background="";

    v=document.querySelector("input[name=an]").value += ele;
    befor=v.length;
    after=v.length;
        
    c=0;
}

function np(point) {
    v=document.querySelector("input[name=an]").value;
    if((v.includes("Syntax ERROR"))==true) {
        document.querySelector("input[name=an]").setAttribute("style","text-align:left;");
        cle();
    }
    a=v.includes(".");
    
    if(v.includes("+")==true || v.includes("-")==true || v.includes("*")==true || v.includes("/")==true) {
        z=v.substring(befor,after);
        b=z.includes(".");
    } 

    if(v.includes(".")==false || c==0 || b==false)
    {   
        v = document.querySelector("input[name=an]").value +=point;
        after=v.length;
        z=v.substring(befor,after);
        c=1;
        b=true;
        
    }
    else {
        document.querySelector("input[value='.']").style.background="rgba(255, 0, 0, 0.692)";
    }
}


//Calculate
function ev() { 
    document.querySelector("input[value='.']").style.background="";

    oa=v.endsWith("+");
    os=v.endsWith("-");
    om=v.endsWith("*");
    od=v.endsWith("/");
    od1=v.endsWith(".");
    if(oa==true || os==true || om==true || od==true || od1==true) {
        document.querySelector("input[name=an]").setAttribute("style","text-align:center;");
        v=document.querySelector("input[name=an]").value="Syntax ERROR";
    }

    else {
        var val=document.querySelector("input[name=an]").value;
        var h;
        var x=eval(val);

        var chack=val.includes(".");

        

        if(chack==false) {
            document.querySelector("input[name=an]").value=x;
        }
        else {
            var h=x.toPrecision(5);
            document.querySelector("input[name=an]").value=h;
        }
        
        // console.log(h);
        v=document.querySelector("input[name=an]").value;
        document.querySelector("input[name=an]").setAttribute("style","background:pink;color:#16a085;");
        // pointr();
    }

    c=1;
}

//one char Clear
function cl() {
    document.querySelector("input[value='.']").style.background="";
    // if(v.endsWith("+")==true || v.endsWith("-")==true || v.endsWith("*")==true || v.endsWith("/")==true) {
    //     b==true;
    // } 
    var u=v.length;
    o = v.substring(0,(u- 1));
    
    v=document.querySelector("input[name=an]").value=o; 
    z=v.substring(befor,after);
    // a=v.includes(".");
    
    // if(b==true) {
    //     b=true;
    // }
    // else {
    //     z=v.substring(befor,after);
    //     b=z.includes(".");
    // }

    // console.log("a = "+a);
    // console.log("z = "+z);
    // console.log("b = "+b);
    // if((a==false || b==false)){
    //     c=0;
    // }

    // a=v.includes(".");
    
    // z=v.substring(befor,after);

    // b=z.includes(".");


    // if(a==false || b==false) {
    //     c=0;
    // }

}



//All clear
function cle()
{   
    // poincl();
    document.querySelector("input[name=an]").style.background="";
    document.querySelector("input[name=an]").value="";
    document.querySelector("input[value='.']").style.background="";
}


// function poincl() {
//     a=v.includes(".");
    
//     z=v.substring(befor,after);

//     b=z.includes(".");

//     // console.log("a = "+a);
//     // console.log("z = "+z);
//     // console.log("b = "+b);
//     if((a==false || b==false)||(a==true && b==true)) {
//         c=0;
//     }
// }

// function pointr() {
//     a=v.includes(".");
    
//     z=v.substring(befor,after);

//     b=z.includes(".");

//     console.log("a = "+a);
//     console.log("z = "+z);
//     console.log("b = "+b);
//     if((a==false || b==false)){
//         c=0;
//     }
// }

