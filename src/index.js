import Fruits from './Fruits';
import {Choice, Remove} from './Helpers';

let fruit = Choice(Fruits);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let remaining = Remove(Fruits, fruit);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);
