let outTxt = memMRC = memOpTwo =
memOpOne = op = currCm = prevCm =
toOut = '';
let isOn = replaceAll = false;

window.onload = () => {
  const out = doc[get]('#out');
  out.style.fontSize = (out.clientHeight*.85) + 'px';
}

const calcIn = function calculator_input(val){
  console.log(memOpOne, memOpTwo);

  switch(val){
    case 'ON/CE':
      toOut = '0';
      isOn = replaceAll = true;
      op = outTxt = memOpOne = memOpOne = '';
      break;
    case 'OFF':
      outTxt = toOut = '';
      isOn = false;
      replaceAll = true;
      break;
  }

  if(isOn)
    switch(val){
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        toOut = val;
        prevCm = currCm;
        currCm = 'num';
        break;
      case 'DEC':
        prevCm = currCm;
        currCm = 'num';
        toOut = '.';
        break;
      case 'ADD':
      case 'SUB':
      case 'MUL':
      case 'DIV':
      case 'MOD':
        memOpOne = outTxt;
        prevCm = currCm;
        currCm = 'op';
        op = val;
        break;
      case 'SQRT':
        toOut = Math.sqrt(parseFloat(outTxt));
        prevCm = currCm;
        currCm = 'op';
      case 'EVAL':
        prevCm = currCm;
        currCm = 'eval';
        if(prevCm !== 'eval')
          memOpTwo = outTxt;
        switch(op){
          case 'ADD':
            toOut = parseFloat(memOpOne) +
                    parseFloat(memOpTwo);
            break;
          case 'SUB':
            toOut = parseFloat(memOpOne) -
                    parseFloat(memOpTwo);
            break;
          case 'MUL':
            toOut = parseFloat(memOpOne) *
                    parseFloat(memOpTwo);
            break;
          case 'DIV':
            toOut = parseFloat(memOpOne) /
                    parseFloat(memOpTwo);
            break;
          case 'MOD':
            toOut = parseFloat(memOpOne) %
                    parseFloat(memOpTwo);
            break;
          default:
            toOut = '0';
            break;
        }
        memOpOne = toOut;
        break;
    }

  if(outTxt === '0') replaceAll = true;
  else replaceAll = false;

  if(prevCm === 'op' && currCm === 'num')
    replaceAll = true;

  if(currCm === 'eval') replaceAll = true;

  if(replaceAll/*outTxt === '0' && toOut !== '.' || op === 'EVAL' || op !== ''*/){
    outTxt = toOut;
  }else{
    outTxt += toOut;

  }
  out.textContent = outTxt;toOut = '';
}
