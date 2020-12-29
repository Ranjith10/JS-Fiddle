//* Adding myMap method to prototype

Array.prototype.myMap = function(callback) {
    const resultArray = []
    for(let i=0; i< this.length; i++) {
        resultArray.push(callback(this[i], i))
    }
    return resultArray    
}

let resultArr = [1,2,3,4,5].map((number, index) => ((number*10)-2))

console.log({resultArr})

let playerProfile = [
	{
  	name: 'player1',
    role: 'batsman',
  },
  {
  	name: 'player2',
    role: 'bowler',
  },
  {
  	name: 'player3',
    role: 'batsman',
  },
  {
  	name: 'player4',
    role: 'batsman',
  },
  {
  	name: 'player5',
    role: 'keeper',
  }
  
]

let activePlayers = playerProfile.myMap((player, index) => {
	player['status']= 'active'
  return player
})
console.log({activePlayers})