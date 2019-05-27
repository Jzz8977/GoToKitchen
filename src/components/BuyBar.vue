<template>
  <div class="buy">
    <div class="buy-left">
      <em></em>
      全选
    </div>
    <div class="buy-right">
      <div class="buy-right-computed">
        <span>合计：￥0</span>
        <i>不含邮费</i>
      </div>
      <a href="javascript:;">结算{0}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "buy-bar"
};
</script>

<style lang="scss" scoped>
.buy {
  border-top: 1px solid #ccc;
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.2rem;
  .buy-left {
    align-self: center;
    font-size: 0.2rem;
    em {
      display: inline-block;
      width: 0.15rem;
      height: 0.15rem;
      border-radius: 50%;
      background: #fff;
      border: 1px solid red;
    }
  }
  .buy-right {
      align-self: center;
      width: 50%;
      height: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0.08rem;
    justify-content: space-between;
    .buy-right-computed{
        span{
            color:#f86b50;
        }
        i{
            font-style: normal;
            color:#ccc;
        }
    }
    a{
        font-size: 0.2rem;
        color:#fff;
        text-align: center;
        line-height: 0.4rem;
        display: inline-block;
        width: 1.35rem;
        height: .45rem;
        background: #f8664f;
    }
  }
}
</style>