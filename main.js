let final = `
    let me = {
        name: 'uchihasatoshi',
        birth: new Date(1993.12),
        gender: 'male',
        jobTitle: 'Front-end Engineer',
        everday: {
            work: function(){
                wakeUp()
                openQQ()
                answerQuestions()
                haveLunch()
                develop()
                haveDinner()
                speech()
                playGames()
                goToBed()
            }
        },
        works: [
            { name: 'blog', url: 'animepc.me'}
            { name: 'page', url: 'jirengu.com'}
        ]
    }
`
 let n = 0
  
  var id = setInterval(function(){
    console.log(n)
    if(n===final.length){
      clearInterval(id)
    }
    n+=1
    code.innerHTML = final.substring(0,n)

  }, 50)