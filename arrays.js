//// Filter /////////////////////
var articles =[
    {name:"Bread", price:200},
    {name:"Milk", price:150},
    {name:"Cheese", price:300},
    {name:"Butter", price:100},
    {name:"Coffee", price:250},
    {name:"Tea", price:100},
]
var articlesFilters = articles.filter(function(articles){
    return articles.price >= 200;

})
console.log(articlesFilters);


//// Map /////////////////////

var articles =[
    {name:"Bread", price:200},
    {name:"Milk", price:150},
    {name:"Cheese", price:300},
    {name:"Butter", price:100},
    {name:"Coffee", price:250},
    {name:"Tea", price:100},
]
var articlesMap = articles.map(function(articles){
    return articles.name;

}   );
console.log(articlesMap);

var searchArticle=articles.find(function(article){
    return article.name === "Bread"
})

articles.forEach(function(article){
    console.log(article.name)
});
var articlesCheap = articles.some(function(article){
    return article.price <= 200;
})
