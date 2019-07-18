 function BoardMember(name, homeState, training){
   this.name = name
   this.homeState = homeState
   this.training = training

   BoardMember.prototype.veto = function(){
     return 'No, I must disagree'
   }
   BoardMember.prototype.approve = function(){
     return 'You can do that!'
   }
   BoardMember.prototype.doCharity = function(){
     return "I like to help people."
   }

   BoardMember.prototype.releasePressStatement = function(){
     return "You will see great things from Scuber."
   }

   BoardMember.prototype.sayHi = function(){
     return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
   }
 }
 
/*
describe('boardMembers', function() {
  let polishedBoardMember;
  let backSlappingGene;
  before(() => {
    polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")
    backSlappingGene = new BoardMember("Mr. Gene", "Delaware", "business")
  })

  describe('boardMember Constructor Function', function() {
    it('can create a BoardMember with a name, home state, and training', function() {
      expect(polishedBoardMember).to.be.an.instanceof(BoardMember)
      expect(polishedBoardMember.name).to.equal("Mr. Polished")
      expect(polishedBoardMember.homeState).to.equal("New York")
      expect(polishedBoardMember.training).to.equal("law")
    })
  })

  describe('veto()', function() {
    it('returns "No, I must disagree"', function() {
      expect(polishedBoardMember.veto()).to.equal("No, I must disagree")
      expect(backSlappingGene.veto()).to.equal("No, I must disagree")
      expect(backSlappingGene.veto).to.equal(polishedBoardMember.veto)
    })
  })

  describe('approve()', function() {
    it('returns "You can do that!"', function() {
      expect(polishedBoardMember.approve()).to.equal("You can do that!")
      expect(backSlappingGene.approve()).to.equal("You can do that!")
      expect(backSlappingGene.approve).to.equal(polishedBoardMember.approve)
    })
  })

  describe('doCharity()', function() {
    it('returns "I like to help people."', function() {
      expect(polishedBoardMember.doCharity()).to.equal("I like to help people.")
      expect(backSlappingGene.doCharity()).to.equal("I like to help people.")
      expect(backSlappingGene.doCharity).to.equal(polishedBoardMember.doCharity)
    })
  })

  describe('releasePressStatement()', function() {
    it('returns "You will see great things from Scuber."', function() {
      expect(polishedBoardMember.releasePressStatement()).to.equal("You will see great things from Scuber.")
      expect(backSlappingGene.releasePressStatement()).to.equal("You will see great things from Scuber.")
      expect(backSlappingGene.releasePressStatement).to.equal(polishedBoardMember.releasePressStatement)
    })
  })

  describe('sayHi()', function() {
    it('returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>."', function() {
      expect(polishedBoardMember.sayHi()).to.equal("Hi, my name is Mr. Polished. I am from New York, and I was trained in law.")
      expect(backSlappingGene.sayHi()).to.equal("Hi, my name is Mr. Gene. I am from Delaware, and I was trained in business.")
      expect(backSlappingGene.sayHi).to.equal(polishedBoardMember.sayHi)
    })
  })
})


// mocha.suite.suites[0].suites[0].tests[0]
*/