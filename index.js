 function BoardMember(name, homeState, training){
   this.name = name
   this.homeState = homeState
   this.training = training

   this.prototype.veto = function(){
     return 'No, I must disagree'
   }
   this.prototype.approve = function(){
     return 'You can do that!'
   }
   this.prototype.doCharity = function(){
     return "I like to help people."
   }

   this.prototype.releasePressStatement = function(){
     return "You will see great things from Scuber."
   }

   this.prototype.sayHi = function(){
     return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
   }
 }
