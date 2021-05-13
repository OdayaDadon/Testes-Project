import React, {useState, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">

      <h1>שיעורי בית של אודיה</h1>

      
      {/* 
         .יש ליצור קומפוננטה המציגה רשימת מוצרים, הקומפוננטה מקבלת מערך של מוצרים, המכילים שם,
          קטגוריה, ומחיר. בנוסף, הקומפוננטה מקבלת קטגוריה נבחרת, ומציגה רק את המוצרים מהקטגוריה
          הנבחרת.
          אם יש יותר מ5 מוצרים מקטגוריה ספציפית, מופיעה הודעה: בקטגוריה זו מוצרים רבים


          יש אפשרות להוסיף כפתור "הסתר פריטים שמחירם יקר", בעת לחיצה על הכפתור הזה מוסתרים
          מוצרים שמחירם גבוה מ X
       */}
      <Products categoryName="food"/>

    </div>
  );
}

export default App;



//התקנות:

//:בשביל הניווט באתר
//npm install react-router-dom

//:עיצובים
//npm install @material-ui/core

//:התקנה של ספריית קריאות
//npm i axios

//משגיח
// כלומר משגיח, הספריה mobx
// תדאג לרנדר את הקומפוננטה בכל שינוי
//npm install mobx