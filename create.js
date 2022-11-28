var is_visible = false;

function see()
{
    var input = document.getElementById("psw");
    var see = document.getElementById("see");

    if(is_visible)
    {
        input.type = 'psw';
        is_visible = false;
        see.style.color='gray';
    }
    else
    {
        input.type = 'text';
        is_visible = true;
        see.style.color='#262626';
    }

}

function check()
{
    var input = document.getElementById("psw").value;
    var input1 = document.getElementById("psw1").value;

    input=input.trim();
    document.getElementById("psw").value=input;
    document.getElementById("count").innerText="Length : " + input.length;
    if(input.length>=8)
    {
        document.getElementById("check0").style.color="green";
    }
    else
    {
       document.getElementById("check0").style.color="red";
       return false;
       alert('Please make sure that your password length is at least 8 characters.')
    }

    if(input.length<=32)
    {
        document.getElementById("check1").style.color="green";
    }
    else
    {
       document.getElementById("check1").style.color="red";
       return false;
       alert('Please make sure that your password length no more than 32 characters.');
    }

    if(input.match(/[0-9]/i))
    {
        document.getElementById("check2").style.color="green";
    }
    else
    {
       document.getElementById("check2").style.color="red";
       return false;
       alert('Please make sure that your password contains a numerical value.')
    }

    if(input.match(/[^A-Za-z0-9-' ']/i))
    {
        document.getElementById("check3").style.color="green";
    }
    else
    {
       document.getElementById("check3").style.color="red";
       return false;
       alert('Please make sure that your ppassword contains a special character.')
    }
    if(input==input1)
    {
        document.getElementById("check4").style.color="green";
    }
    else
    {
       document.getElementById("check4").style.color="red";
       return false;
       alert('Please make sure that you re-entered your password correctly.')
    }

}
