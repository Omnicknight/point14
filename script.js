const arr = [
    {
        id: 1,
        name: 'String',
        address: {
            street: 'Kanatna',
            bulding: '22',
        },
    },
    {
        id: 2,
        name: 'String 2',
        address: {
            street: 'Kanatna',
            bulding: '24',
        },
    },
    {
        id: 3,
    },
];

const emptyObject = {};

[arr[0], arr[2]] = [arr[2], arr[0]];

console.log(arr);

// [emptyObject.first, emptyObject.second, emptyObject.third] = arr;

// console.log(emptyObject);

// const log = ({
//     address: {street, bulding},
//     id,
//     name: anotherName = '',}) => {
//     console.log(anotherName, bulding);
// };

// log(obj);

// const { id, ...rest } = obj;

// console.log(rest);