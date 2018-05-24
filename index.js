// let color(color_one, color_two){
//   this.color_one = color_one
//   this.color_two = color_two
// }

const colorRange = (a, b) => {

  // private props
  setColorA(a);
  setColorB(b);
  var vecA = convertStringToDecVec(colorA)
  var vecB = convertStringToDecVec(colorB)
  var percent = 0;
  var leadingHash = False

  // private methods
  function gradientDescent(percent){
    outputColor = {}
    for (let color in this.aVec){
      //gets color at a certain percentage of the distance between the two input colors
      let moveDir = (this.bVec[color] - this.aVec[color])/Math.abs(this.bVec[color] - this.aVec[color])
      outputColor[color] = Math.abs(percent * (this.bVec[color]-this.aVec[color])) + moveDir * this.aVec[color]
    }
    return outputColor;
  }

  function convertStringToDecVec (color_hex){
    r = color_hex.substring(0, 2);
    g = color_hex.substring(2, 4);
    b = color_hex.substring(4);
    return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
  }

  function convertHexVecToDec(color_vector){
    colorDec = [];
    for (color in color_vector){
      colorDec.append(parseInt(color, 16));
    }
    return colorDec;
  }

  // function convertDecVecToHex(color_vector){
  //   colorHex = []
  //   for(color in color_vector){
  //     colorHex.append(color_vector[color].toString(16));
  //   }
  // }

  function convertVecToString(colorVec){
    colorString = ""
    for( let color in colorVec ){
      colorString += colorVec[color];
    }
    return colorString;
  }

  // public
  function setColorA(a) {
    if(a.includes("#")){
      this.leadingHash = true;
    }
    this.colorA = a.replace("#", "");
  }

  function setColorB(b){
    if(b.includes("#")){
      this.leadingHash = true;
    }
    this.colorB = b.replace("#", "");
  }

  function getColorAt(p) {
    colorVec = gradientDescent(p);
    colorString = "";
    if(leadingHash){
      colorString = "#";
    }
    colorString += convertVecToString(colorVec)
  }

  function getColorA() {
    return colorA;
  }

  function getColorB() {
    return colorB;
  }

  // public methods
  return {
    getColorA,
    getColorB,
    getColorAt
  }
}

module.exports = colorRange;
