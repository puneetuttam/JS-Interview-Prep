function memoizeOne(fn){
    const map=new Map();
    return function(...args){
        const key=args.join("_")
        if(map.has(key)){
            console.log("fetching....")
            return map.get(key)
        }
        else{
            const res=fn(...args)
            map.set(key,res)
            return res;
            
        }
    }
}


const add=(a,b)=>(a+b);
const memoizedAdd=memoizeOne(add);
console.log(memoizedAdd(1,3));
console.log(memoizedAdd(1,3));
console.log(memoizedAdd(1,3));
console.log(memoizedAdd(1,3));