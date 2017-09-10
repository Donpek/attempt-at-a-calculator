const Calc = () => {
  let outTxt =
      secondNum =
      firstNum =
      operation =
      currInput =
      prevInput =
      toOut = '';
  let memory = '0';
  let isOn =
      replaceAll =
      replaceAllOverride = false;
  let outDiv, out, M;

  window.onload = () => {
    outDiv = doc[get]('#calc>.out');
    M = doc[get]('#calc>.out>.M-icon');
    out = doc[get]('#calc>.out>.val');
    out.style.fontSize = outDiv.clientHeight+'px';
  }//onload

  /*
    TO-DO:
    - floating-point rounding handling
  */
  return function calculator_input(val){
    switch (val) {
      case 'ON/CE':
        toOut = '0';
        isOn = true;
        operation = outTxt =
        firstNum = secondNum = '';
        break;
      case 'OFF':
        outTxt = memory = '';
        M.style.visibility = 'hidden';
        isOn = false;
        break;
    }//switch

    if(isOn){
      prevInput = currInput;
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
          currInput = 'num';
          break;
        case 'DEC':
          currInput = 'num';
          if(outTxt === '0' ||
             prevInput !== 'num'){
            toOut = '0.';
            replaceAllOverride = true;}
          else if(outTxt.indexOf('.') === -1)
            toOut = '.';
          break;
        case 'ADD':
        case 'SUB':
        case 'MUL':
        case 'DIV':
        case 'MOD':
          firstNum = outTxt;
          currInput = 'operation';
          operation = val;
          break;
        case 'SQRT':
          toOut = (Math.sqrt(
                    parseFloat(outTxt))
                  ).toString();
          replaceAllOverride = true;
          break;
        case 'EVAL':
          currInput = 'eval';
          if(prevInput !== 'eval')
            secondNum = outTxt;
          switch(operation){
            case 'ADD':
              toOut = (parseFloat(firstNum) +
                      parseFloat(secondNum)
                      ).toString();
              break;
            case 'SUB':
              toOut = (parseFloat(firstNum) -
                      parseFloat(secondNum)
                      ).toString();
              break;
            case 'MUL':
              toOut = (parseFloat(firstNum) *
                      parseFloat(secondNum)
                      ).toString();
              break;
            case 'DIV':
              toOut = (parseFloat(firstNum) /
                      parseFloat(secondNum)
                      ).toString();
              break;
            case 'MOD':
              toOut = (parseFloat(firstNum) %
                      parseFloat(secondNum)
                      ).toString();
              break;
            default:
              toOut = '0';
              break;
          }//switch
          firstNum = toOut;
          break;
        case 'M+':
          currInput = 'operation';
          memory = outTxt;
          M.style.visibility = 'visible';
          break;
        case 'M-':
          currInput = 'operation';
          memory = '0';
          M.style.visibility = 'hidden';
          break;
        case 'MRC':
          replaceAllOverride = true;
          toOut = memory;
          break;
      }//switch
    }//if

    if(outTxt === '0' &&
       currInput !== 'operation')
      replaceAll = true;
    else if(outTxt !== '0')
      replaceAll = false;

    if(prevInput === 'operation' &&
       currInput === 'num' ||
       currInput === 'eval')
      replaceAll = true;

    if(currInput !== 'eval' &&
       prevInput === 'eval')
      replaceAll = false;

    if(replaceAllOverride){
      replaceAll = true;
      replaceAllOverride = false;}

    if(replaceAll)
      outTxt = toOut;
    else
      outTxt += toOut;

    toOut = '';
    out.textContent = outTxt;
  }//calcIn();
}//Calc()
