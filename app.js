// console.log("hello world")
// console.log('hiii')

var a = 20
b = 10
c = a+b
d = c 

// console.log(a+b)
// console.log(d)

{
    const a = 10
    // console.log(a)
}

// console.log(a)

ad = [3,'a',"ad",7]
// ad[5]=23
// console.log(ad.length)
// console.log(ad[4])

for(i=0;i<ad.length;i++){
    // console.log(ad[i])
}

for(i in ad)
// console.log(ad[i])


// function abc(c,d){

    // console.log("abcde")
    // return "nnp"
     
    // t = c*d
    // return t

// }


// e = abc(10,20)
// console.log(e)

n = function(a,o)
{
    r = a+o
    return r
}

h = n(10,50)
// console.log(h)

e = (n)=>{
    return n*n
}

c = e(5)
// console.log(c)


ap = [10,20,30]
ap.forEach((data) => {
    // console.log(data)
    
});


// function xyz(n){
    n(123)
// }

function abc(data){
    // console.log(data)
}

// xyz(abc)



function xyz(n){
    n(123)
}

xyz((data) => {console.log(data)})



a ={
    enroll :101,
    name : "first",
    getName:function(){return this.name}
    }
//   a.name = "acrop"  //this will update the getName function also as name
  console.log(a.getName())





