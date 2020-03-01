import {writable, readable, derived, get} from 'svelte/store';

// store = writable(value: any)
// store = writable(value: any, (set: (value: any) => void) => () => void)
export const storeNum = writable(0);

export const storeNum2 = writable(100, (set) => {
    console.log('got a subscriber!!'); // 해당 상태를 최초로 구독하는 컴포넌트가 발생하면 호출
    return () => console.log('더 이상 해당 상태를 구독하는 곳이 없음!!');
});

// storeNum.subscribe(num => {
//     console.log(num); // 0
// });

// storeNum.set(1); // 1
//
// storeNum.update(n => {
//     console.log(`update : ${n}`);
//     return n + 1
// }); // 2


// store = readable(value: any, (set: (value: any) => void) => () => void)
// 외부에서 이 스토어 상태값을 변경할 수 없음
export const storeString = readable('readable store', (set) => {
    set('readonly store value');
    return null;
});

// storeString.subscribe(value => {
//     console.log(value);
// });

// value: any = get(store)
// const getStoreString = get(storeString);
// console.log(getStoreString);