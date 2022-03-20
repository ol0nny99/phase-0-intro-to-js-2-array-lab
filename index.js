// Write your solution here!

const cats = (['Milo', 'Otis', 'Garfield']);

  function destructivelyAppendCat(string) {
      cats.push('Ralph')
  }

  function destructivelyPrependCat(string){
   cats.unshift('Bob')   
  }

  function destructivelyRemoveLastCat(string){
      cats.pop(string)
  }

  function destructivelyRemoveFirstCat(string) {
      cats.shift(string)
  }


  
function appendCat(name){
 const NewCat = [...cats, name]
 return NewCat
}

function  prependCat(name){
    const NewCat = [name, ...cats]
    return NewCat
}

function  removeLastCat(){
    const NewCat = cats.slice(0,2)
    return NewCat
}

function removeFirstCat(){
    const NewCat = cats.slice(1)
    return NewCat
    
}