const clients = ['Ann', 'John', 'User'];
const balances = [1400, 87, -6];
const client = 'John';
const amount = 50;

export const withdraw = (clients, balances, client, amount) => {

    if (balances[clients.indexOf(client)] < amount) {
        return -1;
    } else {
        return balances[clients.indexOf(client)] - amount;
    }
}
withdraw(clients, balances, client, amount);


const arr = [1, 2, 3, 4, 5, 6, 7];

export function reverseArray (arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const copy = arr.slice();

    const result = copy.reverse();
    return result;
}
reverseArray(arr);

const obj = {
  'John Doe': 19, 
  Tom: 17, 
  Bob: 18,
};

export const getAdults = obj => {
   let obj2 = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      obj2[key] = obj[key];
    }
  }
  return obj2;
};
console.log(getAdults(obj));