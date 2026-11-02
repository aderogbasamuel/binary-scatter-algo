export function unscatter(data,permutation){
    const result= new Uint8Array(data.length);
    for(let i=0; i< permutation.length; i++){
        result[i]=data[permutation[i]];
    }
    return result;
}