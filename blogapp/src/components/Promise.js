"use client";
export const Promise = () => {
    <div></div>
}

const a = [1,2,3,4,5].map((item) => ({
    id: item,
    name:`Item : ${item}`,

}));

// console.log(a);
// { id: 1, name: 'Item : 1' },
// { id: 2, name: 'Item : 2' },
// { id: 3, name: 'Item : 3' },
// { id: 4, name: 'Item : 4' },
// { id: 5, name: 'Item : 5' }

const k = [6,7,8,9,10].map(el => (
    {
      id: el,
        name:`Item : ${el}`,
    }
    ));

    console.log(k);
    console.log(k);
    output:
    [
        { id: 6, name: 'Item : 6' },
        { id: 7, name: 'Item : 7' },
        { id: 8, name: 'Item : 8' },
        { id: 9, name: 'Item : 9' },
        { id: 10, name: 'Item : 10' }
      ]
    
