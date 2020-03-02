import {writable, readable, derived, get} from 'svelte/store';

// store = writable(value: any)
// store = writable(value: any, (set: (value: any) => void) => () => void)
export const storeNum = writable(0);

export const storeNum2 = writable(100, (set) => {
    console.log('got a subscriber!!'); // 해당 상태를 최초로 구독하는 컴포넌트가 발생하면 호출
    return () => console.log('더 이상 해당 상태를 구독하는 곳이 없음!!');
});

// 하나이상의 상태값을 기반으로 다른 상태(기반으로 해서 연산 또는 가공)를 작성
export const storeNum3 = writable(1000);

// store = derived(a, callback: (a: any) => any)
// store = derived(a, callback: (a: any, set: (value: any) => void) => void | () => void, initial_value: any)
export const derivedStateNumDouble = derived(storeNum3, ($storeNum3) => {
    // 상태를 가져와서 해당 상태를 기반으로 한 다른상태 값을 반환
    // storeNum3 값이 변경이 될 때마다, 콜백이 실행
    return $storeNum3 * 2;
});

export const derivedStateNumDouble2 = derived(storeNum3, ($storeNum3, set) => {
    // 2번째 인자인 set을 지정하면 set 값을 반환해야한다
    set(Math.random() * 10); // 0 ~ 10 사이 무작위 부동소수점 셋팅
    // set((a = 100) => {
    //     alert(a);
    //     return null;
    // });
});

export const derivedStateNum = derived(storeNum3, ($storeNum3, set) => {
    // 2번째 인자인 set을 지정하면 set 값을 반환해야한다
    set(() => {
        console.log('derivedStateNum callback..');
    });
});

export const updatedValue = writable(2222);

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