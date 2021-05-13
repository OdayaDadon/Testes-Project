import React, {useState} from 'react';


//מערך מוצרים
const allProducts=[
    {id:1, name: "banana", category: "food", price: 5},
    {id:2, name: "apple", category: "food", price: 7},
    {id:3, name: "computer", category: "electonics", price: 3999},
    {id:4, name: "board", category: "toys", price: 65},
    {id:5, name: "table", category: "fauter", price: 1600},
    {id:6, name: "boba", category: "toys", price: 120},
    {id:7, name: "bool", category: "toys", price: 15},
    {id:8, name: "chair", category: "fauter", price: 200},

    {id:9, name: "aaa", category: "food", price: 12},
    {id:10, name: "bbb", category: "food", price: 15},
    {id:11, name: "ccc", category: "food", price: 20},
    {id:12, name: "ddd", category: "food", price: 30}


]
function Products(props){

    //משתנה להצגת מוצרים זולים - כן או לא
    const [showZolProducts, setShowZolProducts]= useState(false);
    //פונקציה לשינוי ערך המשתנה הזה
    const setShowProducts= ()=>{   
        if(!showZolProducts)
            {
                setShowZolProducts(true);
                setTextOfButton('הצג את כל המוצרים');
            } 
            else{
                setShowZolProducts(false);
                setTextOfButton('הצג מוצרים זולים בלבד');
            }       
    };

    //ערך הטקסט שבכפתור הסינון
    const [textOfButton, setTextOfButton]= useState('הצג מוצרים זולים בלבד');

    //כל המוצרים בקטגוריה המבוקשת
    let result= allProducts.filter((p)=>p.category===props.categoryName);
    let count= result.length;
    console.log(result+"resultttttt");
    return(
        <div>
            <ul>{result.map(prod=> 
                //אם צריך להציג מוצרים זולים ואתה לא מוצר זול אז אל תעשה כלום
                {if(showZolProducts===true && prod.price>10 )
                    return;
                //אחרת תציג את המוצר
                return(
                <li>
                id: {prod.id},
                name: {prod.name},
                category: {prod.category},
                price: {prod.price}
                </li>)
                }
            )}
            </ul>
            {/* אם יש מעל 5 מוצרים שמוצגים תוצג על כך הודעה */}
            {count>5?<span>there are a lot of products from this category</span> : <span></span>}


         {/* האם להציג מוצרים זולים - כן או לא */}
        <div>
        <button onClick = {setShowProducts} value={textOfButton}>{textOfButton}</button>
        </div>

        </div>
    )
}
export default Products;