import crypto from "node:crypto"

export function transform(data, key){
    const keyStream=crypto.createHash("sha256").update(key).digest();
    const result=new Uint8Array(data.length);

    for(let i=0; i<data.length; i++){
        result[i]=data[i]^(keyStream[i%keyStream.length]);
    }
    return result;
}