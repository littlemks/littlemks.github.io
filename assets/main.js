var app=new Vue({el:"#app",data:{items:[],activeTag:"all",tags:["all","community","cafe","workingspace","startup","bisnis","media"]},mounted(){axios.get("https://api.sheety.co/3100379b-08d0-4ddb-99c2-73d4696472e5").then(t=>this.items=t.data)},computed:{filteredItems:function(){return"all"==this.activeTag?this.items:this.items.filter(t=>t.tag==this.activeTag)}},methods:{filter:function(t){console.log("called mmethod!"),this.activeTag=t}}});