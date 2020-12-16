document.write('<p>외부에서 실행한 자스민 <p></p>');

function myfunc(){
    for(var i=0 ; i < 100; i++)
    {
        document.write(i + ':'+'Hello <P></P>');
    }
};
myfunc();