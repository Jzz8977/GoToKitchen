import axios from "axios"
const state = {
    isLoading:true,
    isCartBar:false,
    guessYourLikeList:[],//猜你喜欢集合
    tasteList:[],//尝鲜集合
    newList:[],//上新集合
    classicList:[],//经典集合
    goodsTypeList:[], //商品种类集合
    goods:{},
    cartList:[]
}

const mutations = {
    SET_LAZY_LOADING_RUN(state,bool){
        state.isLoading = bool;
      },
    SET_GUESS_YOUR_LIKE_LIST(state,guessYourLikeList){
        state.guessYourLikeList=state.guessYourLikeList.concat(guessYourLikeList);
    },
    SET_TASTE_LIST(state,tasteList){
        state.tasteList = tasteList;
    },
    SET_NEW_LIST(state,newList){
        state.newList = newList;
    },
    SET_CLASSIC_LIST(state,classicList){
        state.classicList = classicList;
    },
    SET_GOODS_TYPE_LIST(state,goodsTypeList){
        state.goodsTypeList = goodsTypeList;
    },
    SET_GOODS(state,goods){
        state.goods = goods[0]
        console.log(state.goods)
    },
    SET_CART_LIST(state,id){
        if(state.carList.indexOf(id)===-1){
            state.cartList.push(id);
        }
    }
}

const actions = {
    getGuessYourLikeList({commit,rootState},params){
        axios.get("getGoodsList",{
            params
        }).then(data=>{
            commit("SET_GUESS_YOUR_LIKE_LIST",data.goodsList)
        })
    },
    
    getTasteList({commit,rootState},params){
        axios.get("getGoodsList",{
            params
        }).then(data=>{
            commit("SET_TASTE_LIST",data.goodsList)
        })
    },
    getNewList({commit,rootState},params){
        axios.get("getGoodsList",{
            params
        }).then(data=>{
            commit("SET_NEW_LIST",data.goodsList)
        })
    },
    getClassicList({commit,rootState},params){
        axios.get("getGoodsList",{
            params
        }).then(data=>{
            commit("SET_CLASSIC_LIST",data.goodsList)
        })
    },
    getGuessYourLikeList({commit,rootState},params){
        params.limitNum = 6;
        axios.get("getGoodsList",{
            params
        }).then(data=>{
            console.log(data,4444444444444444)
            commit("SET_GUESS_YOUR_LIKE_LIST",data.goodsList)
        })
    },
    getGoodsTypeList({commit,rootState},params){
        axios.get("getGoodsTypeList").then(data=>{
            commit("SET_GOODS_TYPE_LIST",data.goodsTypeList);
        })
    }
}
export default{
    state,
    mutations,
    actions
}