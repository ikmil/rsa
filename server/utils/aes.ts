import crypto from 'crypto'
export default function aes() {
    const createKey = ()=>{
        const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
              modulusLength: 2048,
                publicKeyEncoding: {
                    type: 'spki',
                    format: 'pem'
                },
                privateKeyEncoding: {
                    type: 'pkcs8',
                    format: 'pem'
                }
        });
        return {publicKey, privateKey}
    }
    // 加密方法
    const encrypt = (message: string, publicKey: string): string => {
        const buffer = Buffer.from(message, 'utf8')
        const encrypted = crypto.publicEncrypt(
            {
                key: publicKey,
                padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
                oaepHash: 'sha256'
            },
            buffer
        )
        return encrypted.toString('base64')
    }

    // 解密方法
    const decrypt = (encryptedMessage: string, privateKey: string): string => {
        const buffer = Buffer.from(encryptedMessage, 'base64')
        const decrypted = crypto.privateDecrypt(
            {
                key: privateKey,
                padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
                oaepHash: 'sha256'
            },
            buffer
        )
        return decrypted.toString('utf8')
    }
    return {createKey, encrypt, decrypt}
}