let check=function(){
        let x=10;
        let myclosure=function(a){
                return x*a;;
        }
        return myclosure;
					//      console.log(a);//innner function outer function ke data ko contain krta hain
					//      inner();
        };
let y=check();
console.log(y(20));




