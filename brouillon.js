function generateCode (max){
    var code=''
    for (var i=0;i<max;i++){
        code=code+ Math.floor(Math.random() * Math.floor(max));
    }
    return code
}

function addCode(nbCode,max){

    var array=[];
    for(var i=0;i<nbCode;i++){
        array.push(generatCode(max))
    }
return array
}

function removeCode(array,nbCode){

    for(var i=0;i<nbCode;i++){
        sold.push(array[array.length-1])
        array.pop()
    }
    return array
}

function each(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i);
        }
    } else {
        for (var key in coll) {
            func(coll[key], key);
        }
    }
}

function map(coll, f) {
    var acc = [];
    if (!Array.isArray(coll)) {
        acc = {};
    }
    each(coll, function(element, key) {
        acc[key] = f(element, key);
    });
    return acc;
}

function each(coll, func) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                func(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                func(coll[key], key); 
          } 
    } 
}


function filter(array,predicate){
var acc=[];
each(array,function(element,i){
 if (predicate(element)){
acc.push(element);
 }
});
return acc;}


function addCode(nbCode,max,id){
    return filter (this.IPTV,function(elem,i){
        return this.IPTV[i].id===id
    });
}