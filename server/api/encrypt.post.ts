/*
 * @Author: your name
 * @Date: 2025-01-16 09:32:59
 * @LastEditors: your name
 * @LastEditTime: 2025-01-16 11:28:14
 * @Description: 
 * @FilePath: /rsa/server/api/encrypt.post.ts
 */
export default defineEventHandler(async (event) => {    
    const body  = await readBody(event)
    let {text,pubkey} = body
    let result = {
        code:200,
        message:'',
        data:''
    }
    if(text&&pubkey){
        let {encrypt} = aes()
        let encrypt_text = encrypt(text,pubkey)
        result.data = encrypt_text
        result.message = '加密成功'
    }else{
        result.code=201
        result.message = '请填写正确参数'
    }
    return result
})