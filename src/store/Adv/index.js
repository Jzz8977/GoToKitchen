import axios from "axios"
const state = {
    marketAdvList:[]
}

const mutations = {
    SET_MARK_ADV_LIST(state,marketAdvList){
        state.marketAdvList = marketAdvList;
    }
    
}

const actions = {
    getMarketAdvList({commit,rootState},params){
        axios.get("/getMarketAdvList",{
            params
        }).then(data=>{
            commit("SET_GUESS_YOUR_LIKE",data.advList)
        })
    }
    
}
export default{
    state,
    mutations,
    actions
}