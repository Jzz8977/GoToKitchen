import page from './Market/page'
const commonCom = {
    page
}
export default {
    install(Vue){
        for(var key in commonCom){
            Vue.component(key,commonCom[key]);
        }
    }
}