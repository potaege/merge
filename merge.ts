export function merge(collection_1: number[] ,collection_2: number[], collection_3: number[]) : number[] {
    
    const result: number[] = [];

    let index_arry1 = 0;
    let index_arry2 = collection_2.length - 1;
    let index_arry3 = 0;

    while (index_arry1 < collection_1.length || index_arry2 >= 0 || index_arry3 < collection_3.length) {
        
        let min_loop: number = Infinity;
        
        if (index_arry1 < collection_1.length) {
            min_loop = collection_1[index_arry1];
        }
        if (index_arry2 >= 0 && min_loop >collection_2[index_arry2]) {
            min_loop = collection_2[index_arry2]

        }
        if (index_arry3 < collection_3.length && min_loop > collection_3[index_arry3]) {
            min_loop = collection_3[index_arry3]

        }

        if (index_arry1 < collection_1.length && min_loop === collection_1[index_arry1]) {
            result.push(collection_1[index_arry1]);
            index_arry1 += 1;
        }
        if (index_arry2 >= 0  && min_loop === collection_2[index_arry2]) {
            result.push(collection_2[index_arry2]);
            index_arry2 -= 1;
        }
        if (index_arry3 < collection_3.length && min_loop === collection_3[index_arry3]) {
            result.push(collection_3[index_arry3]);
            index_arry3 += 1;
        }
   
    }

    return result 
}