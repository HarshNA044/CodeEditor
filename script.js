function codeboxhandler(buttontype) {
    document.getElementById("htmlbox").style.display="none";
    document.getElementById("cssbox").style.display="none";
    document.getElementById("jsbox").style.display="none";
    document.getElementById("htmlbutton").style.backgroundColor="white";
    document.getElementById("cssbutton").style.backgroundColor="white";
    document.getElementById("jsbutton").style.backgroundColor="white";

    if (buttontype=="htmlbutton") {
        document.getElementById("htmlbox").style.display="block";
        document.getElementById("htmlbutton").style.backgroundColor="yellow";
    }
    else if (buttontype=="cssbutton") {
        document.getElementById("cssbox").style.display="block";
        document.getElementById("cssbutton").style.backgroundColor="blue";
    }
    else {
        document.getElementById("jsbox").style.display="block";
        document.getElementById("jsbutton").style.backgroundColor="red";
    }
}

function runcode() {
    const htmlcode=document.getElementById('htmlcode').value;
    const csscode=document.getElementById('csscode').value;
        const jscode=document.getElementById('jscode').value;

const fullcode=htmlcode+"<style>"+csscode+"</style>"+"<script>"+jscode+"</script>";
    document.getElementById('outputbox').srcdoc=fullcode;
}
