
import {useI18n} from 'vue-i18n'
export const useT =  function(name:string){
    const {t,locale} = useI18n()
    return t(name)
}