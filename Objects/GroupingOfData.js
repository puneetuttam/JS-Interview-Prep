const obj = [
    {
        key: "Sample1",
        data: "Data1",
    },
    {
        key: "Sample1",
        data: "Data1",
    },
    {
        key: "Sample1",
        data: "Data1",
    },
    {
        key: "Sample2",
        data: "Data2",
    },
    {
        key: "Sample3",
        data: "Data3",
    },
    {
        key: "Sample4",
        data: "Data4",
    },
];


const res={}

obj.forEach((item)=>{
    if(res[item.key]){
        res[item.key].push(item);

    }
    else{
        res[item.key]=[item];
    }
})

console.log(res)