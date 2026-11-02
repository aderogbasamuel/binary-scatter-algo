export function textToBytes(text){
    return new Uint8Array(
        new TextEncoder().encode(text)
    )

}
export function bytesToText(bytes){
    return new TextDecoder().decode(bytes);
}