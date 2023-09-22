// {name:'apple', price: 50}
// {name:'grape', price: 70}
// {name:'lime', price:60}
// {name:'barry', price:110}


// const cart = {
//     items:[],
//     getItems(){
//     return this.items;
//     },

//     add(product){
//      this.items.push(product);
//     },

//     remove(productName){
//         const {items} = this;
//         for(let i=0; i<this.items.length; i+=1){
//           const { name } = items[i];

//             if (productName === name){
//                 console.log(`Find product:`, productName);
//                 console.table(i);

//                 items.splice(i, 1);
//             }
//         }

//     },

//     clear ( ){
//         this.items = [ ];
//     },

//     countTotalPrice(){
//       const { items } = this;

//         let total = 0;
//         for (const { price } of items)
//         {
         
//             total += price;

//         }

//         return total;
//     }
// };


// console.table(cart.getItems());

// cart.add({name:'apple', price: 50 });
// cart.add({name:'grape', price: 70});
// cart.add({name:'lime', price:60});
// cart.add({name:'barry', price:110});

// console.table(cart.getItems());
// console.log(`Total:`, cart.countTotalPrice());

// cart.remove('apple'); 
// console.table(cart.getItems());


// cart.clear();
// console.table(cart.getItems());




// getItems - возвращает массив items. испольузем this;
// add(product) - передаем в items продукт из cart.add;
// remove - перебрать массив всех item, проверяем если это нужное нам имя продукта и удалить из массива по значению имени;
// cart.clear - возвращает пустой массив;
//  countTotalPrice - cчитает сумму всех продуктов, которые у нас имеются;