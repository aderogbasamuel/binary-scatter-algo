export function scatter(data, permutation){
    const result = new Uint8Array(data.length);
    for( let i=0; i<data.length; i++ ){
        result[permutation[i]]=data[i];

    }
    return result;
}