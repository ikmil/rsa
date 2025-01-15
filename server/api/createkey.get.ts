export default defineEventHandler((event) => {
    const query = getQuery(event)
    const {createKey} = aes()
    const { publicKey, privateKey } = createKey()
    return {
      code:200,
      publicKey,
      privateKey,
      message:'success'
    }
})