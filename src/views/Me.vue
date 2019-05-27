<template>
  <div class="me">
    <div class="title">开始准备好好吃饭</div>
    <div class="content">
      <p>好好吃饭用心生活，比什么都幸福，保存你最喜欢的美食</p>
      <p>分享你的三餐，关注厨房里的达人。</p>
    </div>
    <div class="weixin">使用微信登录</div>
    <div class="phone">手机登录注册</div>
  </div>
</template>

<script>
export default {
  name: "me"
};
</script>

<style lang="scss" scoped>
.me {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 30%;
}
.title {
  font-size: 30px;
}
.content {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.weixin {
  width: 85%;
  height: 30px;
  background: green;
  line-height: 30px;
  text-align: center;
  color: white;
  font-weight: bold;
  border-radius: 5px;
}
.phone {
  width: 85%;
  height: 30px;
  background: rgb(250, 33, 33);
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  color: white;
  border-radius: 5px;
}
</style>