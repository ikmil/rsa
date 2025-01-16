/*
 * @Author: your name
 * @Date: 2025-01-16 11:35:28
 * @LastEditors: your name
 * @LastEditTime: 2025-01-16 11:36:17
 * @Description: 
 * @FilePath: /rsa/server/api/decrypt.post.ts
 */
export default defineEventHandler(async (event) => {    
    const body  = await readBody(event)
    let {text,privkey} = body
    let result = {
        code:200,
        message:'',
        data:''
    }
    if(text&&privkey){
        let {decrypt} = aes()
        let decrypt_text = decrypt(text,privkey)
        result.data = decrypt_text
        result.message = '解密成功'
    }else{
        result.code=201
        result.message = '请填写正确参数'
    }
    return result
})