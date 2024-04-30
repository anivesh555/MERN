


module.exports.thisFunc = async (req, res)=>{




    // this keyword represent the current execution context (node or window)

    //  in function represent the object where it called 

    function g(){
        console.log(this,'break====>>>')
    }

    g()  // window obj will be this


    ob = {
        a:2,
        b:function(){
            console.log(this)
        },
        c:()=>{
            console.log('arroa','this in arrow with in object , this is global',this) // arrow function do not get bind  with the object 
        }


    }

    ob.b() // ob will be refereenced as this
    ob.c() // global will be refereenced as this
    console.log(this)
    // we can do like this 
    this.a = 132

    console.log(this.a,"this.a ====")
    res.sendStatus(200)

    function f(){
        console.log('funct this ==',this,"br",this.a) // this will be hoisted so might don't have a 
        function d(){
            console.log(this,'in d inside f ')
        }
        d()
    }
    f()
}

thistest = {
    c:"local",
    o:["have some string","a","ad"],
    b:function(){
        console.log(this.o,"anbovfe---")
        this.o.map(function(i,j){
            console.log(i,j,this.c,"also print local from above one")
        }, this )

        console.log("this with in a fucntion in an object",this,"=====" ,this.o)
    }
}