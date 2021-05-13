import React from 'react'
import { render} from '@testing-library/react';

//imports
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import Products from "./Products";


/*

יש לכתוב את הבדיקות הבאות:
רינדור של הקומפוננטה פעמיים - פעם אחת עם קטגוריה שבה מוצרים רבים, ופעם אחת עם
קטגוריה שבה מעט מוצרים, יש לבדוק כל פעם שההודעה מופיעה / לא מופיעה.
יש לבדוק שנוצרו אלמנטים של מוצרים כמספר הפריטים שהיו אמורים להופיע כל פעם

3 .אתגר: יש להוסיף בדיקה שכפתור זה עובד כראוי.

*/


//test 1
//בדיקה שמבצעת רינדור של הקומפוננטה
//עם קטגוריה של מוצרים רבים
//בדיקה שההודעה המתאימה מופיעה
test('renders the Products components first time', () => {
    const {getByText}= render(<Products categoryName="food"/>);
    //הפעלת הבדיקה
    expect (getByText('there are a lot of products from this category')).toBeInTheDocument();
});


//test 2
//בדיקה שמבצעת רינדור של הקומפוננטה
//עם קטגוריה של מוצרים מעטים
//בדיקה שההודעה המתאימה לא מופיעה
test('renders the Products components second time', () => {
    const {container}= render(<Products categoryName="electonics"/>);
    const message= screen.queryByText('there are a lot of products from this category');
    //הפעלת הבדיקה
    expect(message).toBeNull();
})


//test 3
//בדיקה שמבצעת רינדור של הקומפוננטה
//עם קטגוריה כלשהי
//בדיקה שמופיעים בדום כל האלמנטים שצריכים להיות
test('renders the Products components three time', () => {
    const {container}= render(<Products categoryName="toys"/>);
    //הפעלת הבדיקה
    expect(container.querySelectorAll('li').length===3);
})