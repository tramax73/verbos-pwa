function myFFC()
{
  focusedFormControl='';

    var e,i=0;
    while(e=document.getElementsByTagName('INPUT')[i++])
    {
      if(e.type=='text')e.onfocus=function()
      {
        focusedFormControl=this
      }
    }
    i=0;
    while(e=document.getElementsByTagName('TEXTAREA')[i++])
    {
      if(e.type=='textarea')e.onfocus=function()
      {
        focusedFormControl=this
      }
    }

}

/**
 * [inserisce il carattere spagnolo]
 * @param  {[type]} x [description]
 * @return {[type]}   [description]
 */
function insertChar(x)
  {
    c=String.fromCharCode(x);
    if(focusedFormControl)
    {
      if(document.selection)
      {
        focusedFormControl.focus();
        sel=document.selection.createRange();
        sel.text=c;
      }
      else if(focusedFormControl.selectionStart||focusedFormControl.selectionStart=='0')
      {
        var startPos=focusedFormControl.selectionStart;
        var endPos=focusedFormControl.selectionEnd;
        focusedFormControl.value=focusedFormControl.value.substring(0,startPos)+c+focusedFormControl.value.substring(endPos,focusedFormControl.value.length);
      }
      else{focusedFormControl.value+=c;
        }
      }
      else
      {
        alert("Seleccione un cuadro de texto para insertar caracteres especiales..");
      }
    }

/**
 * [compute description]
 * @param  {[type]} form [description]
 * @return {[type]}      [description]
 */
function compute(form)
  {
    grade=count=0;
    while(form.Word[count].value!="")
    {
      if(form.Word[count].value.charAt(form.Word[count].value.length-1)!="*")
      {
        if(form.Word[count].value==form.Wordb[count].value)
        {
          grade++;
        }
        else
        {
          form.Word[count].value=(form.Wordb[count].value+" *"+form.Word[count].value+"*");
        }
      }
      count++;
      form.result.value=(grade+" / "+count);
      if(count==form.Word.length)break;
    }
    while(count!=form.Word.length)
    {
      form.Word[count].value=(form.Wordb[count].value+" **");count++;
    }
  }

/**
 * [validate description]
 * @param  {[type]} Student [description]
 * @param  {[type]} correct [description]
 * @return {[type]}         [description]
 */
function validate(Student,correct)
  {
    var studentAnswer=Student.value;
    var correctAnswer=correct.value;
    result="";
    for(var c=0;c<correctAnswer.length;c++)
    {
      var CorrectX=correctAnswer.charAt(c);
      var StudentX=studentAnswer.charAt(c);
      if(CorrectX==StudentX)
      {
        result=result+CorrectX;
      }
      else
      {
        result=result+"=";
      }
    }
    Student.value=result;
  }

/**
 * [DoPopup description]
 * @param       {[type]} text [description]
 * @constructor
 */
function DoPopup(text)
  {
    height=50;width=210;var xheight=0;var xwidth=0;
    if(Number(navigator.appVersion.charAt(0))>=4)
    {
      xheight=screen.height/3-25;xwidth=screen.width/2-105;
    }
    photoWin=open("","Photo","height="+height+",width="+width+",scrollbars=no,screenX="+xwidth+",screenY="+xheight);
    photoWin.document.writeln("<html><head><title>Pop-up Window</title></head>");
    photoWin.document.writeln("<body bgcolor=white onblur='window.close()'>");
    photoWin.document.writeln("<center>");
    photoWin.document.writeln("<p><br> ");
    photoWin.document.writeln(text);
    photoWin.document.writeln("</center>");
    photoWin.document.writeln("</body></html>");
    photoWin.document.close();
  }


//How to create an array containing 1…N
function build(len) {
    var remaining = [...Array(len).keys()],
    res = [],
    candidate,
    n, sz, sel;

  for (n = 0; n < len; n++) {
    candidate = remaining.filter(function(v) {
      return v != n + 1 && (!n || Math.abs(res[n - 1] - v) != 1);
    });
    if (!(sz = candidate.length)) {
      return false;
    }
    res.push(sel = candidate[(Math.random() * sz) | 0]);
    remaining.splice(remaining.indexOf(sel), 1);
  }
  return res;
}
//document.write(jsonData[0].s1+'<br/>');
//document.write(jsonData.length+'<br/>');

function updateVerbos(n) {


  contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';

  while ((list = build(jsonData.length)) === false) {};
    //document.write(list.join(' '));
    //document.write(list);
    list.forEach((item, i) => {
    if (i < n)
      {
        contentDiv.innerHTML += '<p>';
        contentDiv.innerHTML += jsonData[item].verb + '&nbsp;';

        contentDiv.innerHTML += '<input type="Text" name="Word" onclick="0" size="10">';
        contentDiv.innerHTML += '<input type="hidden" name="Wordb" onclick="0" value="' + jsonData[item].s1 + '">';

        contentDiv.innerHTML += '<input type="Text" name="Word" onclick="0" size="10">';
        contentDiv.innerHTML += '<input type="hidden" name="Wordb" onclick="0" value="' + jsonData[item].s2 + '">';

        contentDiv.innerHTML += '<input type="Text" name="Word" onclick="0" size="10">';
        contentDiv.innerHTML += '<input type="hidden" name="Wordb" onclick="0" value="' + jsonData[item].s3 + '">';

        contentDiv.innerHTML += '<input type="Text" name="Word" onclick="0" size="10">';
        contentDiv.innerHTML += '<input type="hidden" name="Wordb" onclick="0" value="' + jsonData[item].p1 + '">';

        contentDiv.innerHTML += '<input type="Text" name="Word" onclick="0" size="10">';
        contentDiv.innerHTML += '<input type="hidden" name="Wordb" onclick="0" value="' + jsonData[item].p2 + '">';

        contentDiv.innerHTML += '<input type="Text" name="Word" onclick="0" size="10">';
        contentDiv.innerHTML += '<input type="hidden" name="Wordb" onclick="0" value="' + jsonData[item].p3 + '">';
        contentDiv.innerHTML += '</p>';
        }

      });

    contentDiv.innerHTML += '<input type="button" value="CORREGIR" onclick="compute(this.form)">';
    contentDiv.innerHTML += '<input value="reajustar" type="reset">';
    contentDiv.innerHTML += 'Score: <input type="text" name="result" size="10" value="">';

    contentDiv = document.getElementById('bottom-bar');
    contentDiv.innerHTML = '';
    contentDiv.innerHTML += '<input type="button" id="bReload" value="de inicio" onclick="location.reload()">';
    contentDiv.innerHTML += '<input type="button" id="bRegen" value="regenerar" onclick="'+'updateVerbos('.concat(n).concat(')')+'">';

    myFFC();
  }
