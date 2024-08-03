function Insertion(arr) {
    let n = arr.length;
    //started from 1 becuse we spoused first element sorted
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j > 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
let array = [5, 3, 4, 2, 1];
Insertion(array);
console.log(Insertion(array));
//O(n^2)
//o(n)in best so we use it when data almost sorted.
