/* 站点数据库db.js开始 */ 
function initArray(){ /* 定义数组初始化函数 */ 
this.length=initArray.arguments.length; 
for(var i=0;i<this.length;i++) this[i]=initArray.arguments[i]; 
} 
/* 定义待搜索的页面的标题，没有先后顺序，应将待搜索的页面都列出 */ 
var titles=new initArray('页面标题1','页面标题2'); 
/* 这些页面的详细说明，位置应该与它们的标题一致 */ 
var descriptions=new initArray('详细说明1','详细说明2'); 
/* 待搜索页面的地址，建议使用在你站点上的相对地址，位置也应与标题、说明相一致 */ 
var URLs=new initArray('cankeyyin.github.com','cankeyyin.github.com/web_articles/'); 
/* 站点数据库db.js结束 */ 