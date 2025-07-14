Array.prototype.squareSum=function(){
 let list=this;
 return list.reduce((acc,val) =>acc + val**2 ,0)
 }

Array.prototype.evenOnly=function(){
 return this.filter((item) =>item%2===0 )
}


Array.prototype.cubeSum=function() {
 return this.reduce((acc,val) =>acc+ val**3 ,0 );
} 


Array.prototype.reverseSort = function () {
  return [...this].sort((a, b) => b - a);
};


Array.prototype.max=function(){
 return this.reduce((acc,val) =>acc>val ? acc : val )
}


String.prototype.capitalize=function(){
let split=this.split(' ')
return split.map((c,i) =>c.slice(0,1).toUpperCase()+ split[i].slice(1) ).join(' ')

}


String.prototype.reverseLettersOnly = function () {
  return this.split(' ').map(w => w.split('').reverse().join('')).join(' ');
};

String.prototype.reverseWordsOnly = function () {
  return this.split(' ').reverse().join(' ');
};

String.prototype.reverseComplex = function () {
  return this.split(' ').map(w => w.split('').reverse().join('')).reverse().join(' ');
};

 String.prototype.toSarcasm=function(){
  return this.split('').map((s ) =>Math.random() > .5 ? s.toUpperCase() : s.toLowerCase() ).join('')
  return this.split('').map((c,i) =>i%2!==0 ? c.toUpperCase() : c.toLowerCase() ).join('')
 }

String.prototype.letterCount=function(){
 return this.replace(/[^a-zA-Z]/g,'').length;
 
 return this.split('').filter((c) =>c!== ' ').length;
}

String.prototype.wordCount = function (type = 'all') {
  if (type === 'lettersOnly') {
    return this.replace(/[^A-Za-z]/g, ' ').split(' ').filter(w => w !== '').length;
  }
  return this.trim().split(/\s+/).filter(w => w !== '').length;
};

Array.prototype.shuffle=function(){
 return this.sort(() =>Math.random() -.5)
}


window.log=function(...value){
 console.log(...value);
}

Object.prototype.isEmpty=function(){
 return Object.keys(this).length===0;
}


Object.prototype.invert=function(){
 let result={}
 for (let key in this) {
  if(this.hasOwnProperty(key)){
   result[this[key]]=key;
  }
 }
 return result;
 
 
 
 
 let key=Object.keys(this);
 let value=Object.values(this)
let obj={}
for (var i = 0; i < key.length; i++) {
 obj[value[i]]=key[i]
}
 return obj;
}

Object.prototype.deepClon=function(){
 return JSON.parse(JSON.stringify(this))
}


Object.prototype.countValues=function (type){
 
 return Object.values(this).filter((val) =>typeof val ===type ).length;
 
 
 let c=0;
 for (var key in this) {
  if(typeof this[key]===type){
   c++;
  }
 }
 return c;
 
 /*
 switch (type) {
  case 'string':
   return Object.values(this).filter((val) => typeof val=='string').length;
   break;
  case 'number':
   return Object.values(this).filter((val) =>typeof val=='number' ).length;
   break;
  case 'boolean':
  return Object.values(this).filter((val) =>typeof val=='boolean' ).length;
   break;
  case 'object':
   return Object.values(this).filter((val) =>typeof val=='object' ).length;
   break;
  
  default:
   return Object.keys(this).length
 }
 */
}

Object.prototype.cleanFalsy=function(){
let result={}
for (let k in this) {
 if(this.hasOwnProperty(k) &&  this[k]){
  result[k]=this[k]
 }
}
 return result;
}

Object.prototype.findByType=function (...t){
let result={} 
 for (var k in this) {
 if(this.hasOwnProperty(k) && t.includes(typeof this[k])){
  result[k]=this[k]
 } 
 }
return result; 
 
}

