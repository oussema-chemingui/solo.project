function TeleComfort(){
var teleComfort={};
teleComfort.IPTV=[{orcaProPlus:[],id:0},{orcaPlus:[],id:1},{ESIPTV:[],id:2},{AVIPTV:[],id:3},{SSTV:[],id:4},{alphaIPTV:[],id:5}];
teleComfort.sharing=[{forever:[],id:6},{gShare:[],id:7},{funcam:[],id:8}];
teleComfort.beinSports=[{oneYear:[],id:9},{sixMonths:[],id:10},{threeMonths:[],id:11}];
teleComfort.sell=sell;
teleComfort.removeMoney=removeMoney;
teleComfort.addMoney=addMoney;
teleComfort.users= [];
teleComfort.addUser=addUser;
teleComfort.sold=[];
teleComfort.generateCode=generateCode;
teleComfort.addCode=addCode;
teleComfort.removeCode=removeCode;
return teleComfort
}
var generateCode = function (max){
    var code=''
    for (var i=0;i<max;i++){
        code=code+ Math.floor(Math.random() * Math.floor(max));
    }
    return code
}

var  addCode = function(nbCode,max,id){
    if(this.IPTV[0].id===id){
        for(var i=0;i<nbCode;i++){
            this.IPTV[0].orcaProPlus.push(this.generateCode(max))
    }
}
    else if(this.IPTV[1].id===id){
        for(var i=0;i<nbCode;i++){
            this.IPTV[1].orcaPlus.push(this.generateCode(max))
    }
} 
    else if(this.IPTV[2].id===id){
        for(var i=0;i<nbCode;i++){
            this.IPTV[2].ESIPTV.push(this.generateCode(max))
    }
}
    else if(this.IPTV[3].id===id){
        for(var i=0;i<nbCode;i++){
            this.IPTV[3].AVIPTV.push(this.generateCode(max))
    }
} 
    else if(this.IPTV[4].id===id){
        for(var i=0;i<nbCode;i++){
            this.IPTV[4].SSTV.push(this.generateCode(max))
    }
} 
    else if(this.IPTV[5].id===id){
        for(var i=0;i<nbCode;i++){
            this.IPTV[5].alphaIPTV.push(this.generateCode(max))
    }
} 
    else if(this.sharing[0].id===id){
        for(var i=0;i<nbCode;i++){
            this.sharing[0].forever.push(this.generateCode(max))
    }
} 
    else if(this.sharing[1].id===id){
        for(var i=0;i<nbCode;i++){
            this.sharing[1].gShare.push(this.generateCode(max))
    }
}
    else if(this.sharing[2].id===id){
        for(var i=0;i<nbCode;i++){
            this.sharing[2].funcam.push(this.generateCode(max))
    }
}
    else if(this.beinSports[0].id===id){
        for(var i=0;i<nbCode;i++){
            this.beinSports[0].oneYear.push(this.generateCode(max))
    }
}
    else if(this.beinSports[1].id===id){
        for(var i=0;i<nbCode;i++){
            this.beinSports[1].sixMonths.push(this.generateCode(max))
    }
}
    else if(this.beinSports[2].id===id){
        for(var i=0;i<nbCode;i++){
            this.beinSports[2].sixMonths.push(this.generateCode(max))
    }
}
    
}

var removeCode = function(array,nbCode){

    for(var i=0;i<nbCode;i++){
        this.sold.push(array[array.length-1])
        array.pop()
    }
    return array
}

var addUser= function (name,password,email,number){
    this.users.push({
        Name:name,
        Password:password,
        Email:email,
        Number:number, 
        ID:this.users.length,
        Money:0   
    })
    return this.users
}

var addMoney= function (money,id){
    this.users[id].Money = this.users[id].Money + money
    return this.users[id].Money
}

var removeMoney= function (money,id){
    this.users[id].Money = this.users[id].Money - money
}

var sell = function (nbCode,id){
  
if(this.IPTV[0].id===id){
    this.removeCode(this.IPTV[0].orcaProPlus,nbCode)
    for(var i=0;i<nbCode;i++){
        this.removeMoney(30,id)
}
}if(this.IPTV[1].id===id){
    this.removeCode(this.IPTV[1].orcaPlus,nbCode)
    for(var i=0;i<nbCode;i++){
        this.removeMoney(25,id)
}
}
if(this.IPTV[2].id===id){
    this.removeCode(this.IPTV[2].ESIPTV,nbCode)
    for(var i=0;i<nbCode;i++){
        this.removeMoney(25,id)
}
}
if(this.IPTV[3].id===id){
    this.removeCode(this.IPTV[3].AVIPTV,nbCode)
    for(var i=0;i<nbCode;i++){
        this.removeMoney(20,id)
}
}
if(this.IPTV[4].id===id){
    this.removeCode(this.IPTV[4].SSTV,nbCode)
    for(var i=0;i<nbCode;i++){
        this.removeMoney(25,id)
}
}
if(this.IPTV[5].id===id){
    this.removeCode(this.IPTV[5].alphaIPTV,nbCode)
    for(var i=0;i<nbCode;i++){
        this.removeMoney(20,id)
}
}
if(this.sharing[0].id===id){
    this.removeCode(this.sharing[0].forever,nbCode)
    for(var i=0;i<nbCode;i++){
        this.removeMoney(30,id)
}
}
if(this.sharing[1].id===id){
    this.removeCode(this.sharing[1].gShare,nbCode)
    for(var i=0;i<nbCode;i++){
        this.removeMoney(25,id)
}
}
if(this.sharing[2].id===id){
    this.removeCode(this.sharing[2].funcam,nbCode)
    for(var i=0;i<nbCode;i++){
        this.removeMoney(20,id)
}
}
if(this.beinSports[0].id===id){
    this.removeCode(this.beinSports[0].oneYear,nbCode)
    for(var i=0;i<nbCode;i++){
        this.removeMoney(500,id)
}
}
if(this.beinSports[1].id===id){
    this.removeCode(this.beinSports[0].sixMonths,nbCode)
    for(var i=0;i<nbCode;i++){
        this.removeMoney(250,id)
}
}
if(this.beinSports[2].id===id){
    this.removeCode(this.beinSports[0].threeMonths,nbCode)
    for(var i=0;i<nbCode;i++){
        this.removeMoney(130,id)
}
}
        
    }









/*
localStorage.setItem(users)
localStorage.getItem(users)
JSON.stringify()
JSON.parse()  */
