
function calci(){
    var a=parseInt(document.getElementById("h").value);
    var b=parseInt(document.getElementById("we").value);
    a=a/100
    a=a*a
    bmi=a/b
    document.getElementById("bv").textContent=(bmi).toFixed(1);

    if(bmi<16)
    {
        document.getElementById("bt").textContent="Severe Thinness";
    }
    else if(bmi>=16 && bmi<17)
    {
        document.getElementById("bt").textContent="Moderate Thinness";
    }
    else if(bmi>=17 && bmi<18.5)
    {
        document.getElementById("bt").textContent="Mild Thinness";
    }
    else if(bmi>=18.5 && bmi<25)
    {
        document.getElementById("bt").textContent="Normal";
        
    }
    else if(bmi>=25 && bmi<30)
    {
        document.getElementById("bt").textContent="Over weight";
    }
    else if(bmi>=30 && bmi<35)
    {
        document.getElementById("bt").textContent="Obese class I";

    }
    else if(bmi>=35 && bmi<40)
    {
        document.getElementById("bt").textContent="Obese class II";
    }
    else
    {
        document.getElementById("bt").textContent="Obese class III";
    }


}
