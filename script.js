let name="报名未开始";

const target=(()=> {
      const c=document.getElementsByClassName("el-button")
      for (let i = 0; i < c.length; i++) {
        const ele=c[i];
        console.log(ele)
        for (const v of ele.children){
          if(v.innerHTML==="报名未开始"||v.innerHTML==="报名"){
            name=v.innerHTML;
            return ele;
          }
        }
      }
      return c;
    }
)();
const start=(()=>{
  const d=document.getElementsByClassName("text-[14px] text-[#666]")[0] // 报名时间 日期
  const t=document.getElementsByClassName("text-[24px] text-[#242424] font-bold")[0] // 报名时间
  const time=new Date(d.innerHTML+' '+t.innerHTML);
  return time.getTime();
})()
let cd=-1;
setInterval(()=>{
  const now=new Date().getTime();
  if(now>=start&&now >= cd){
    cd=now+3000;
    console.log("时间到，开始点击!")
    target.click();
  }
  console.log("剩余时间: "+Math.floor((start-now)/1000)+"s")
},110)
