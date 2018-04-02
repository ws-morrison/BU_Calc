'use strict';

var NETT_CONST = 100;

var BREAD_UNIT = {
  NON_GRAIN: 10,
  GRAIN: 12
};


var calcBlock = document.querySelector('.calc');
var inputCarbs = calcBlock.querySelector('#carbs');
var inputNett = calcBlock.querySelector('#nett');
var calcBtnSubmit = calcBlock.querySelector('.calc__btn--submit');
var calcOutput = calcBlock.querySelector('.calc__output');
var calcBtnReset = calcBlock.querySelector('.calc__btn--reset');


var carbsCalc = function (carbsInProduct, nettInProduct) {
  var result = (carbsInProduct / NETT_CONST) * (nettInProduct / BREAD_UNIT.NON_GRAIN);
  return result.toFixed(1);
};

var setResult = function () {
  var param1 = inputCarbs.value;
  var param2 = inputNett.value;
  calcOutput.value = carbsCalc(param1, param2) + ' ХЕ';
};

var resetResult = function () {
  inputCarbs.value = null;
  inputNett.value = null;
  calcOutput.value = '0.0 ХЕ';
};

inputCarbs.addEventListener('input', setResult);
inputNett.addEventListener('input', setResult);
calcBtnReset.addEventListener('click', resetResult);