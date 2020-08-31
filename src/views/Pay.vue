<template>
  <div class="pay">
    <div class="pay-container" :style="{backgroundImage:'url('+backgroundImg+')'}">
      <div class="pay-container-left">
        <img class="pay-container-left-intro" :src="introImg" />
      </div>
      <div class="pay-container-right">
        <h3>付费提示</h3>
        <div class="pay-container-right-text">{{introText}}</div>
        <div class="pay-container-right-btn" @click="pay">支付{{amount}}元</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introImg: require("@/assets/pics/demo.png"),
      introText: "购买产品激活码\n一次激活\n终身使用",
      amount: 48,
      backgroundImg: require("@/assets/pics/background.jpg")
    };
  },
  created() {
    // window.location.replace(this.payUrl)
  },
  methods: {
    pay() {
      this.$https.payOrder().then(res => {
        if (res.code == 0) {
          let url = res.data
          window.location.replace(url);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.pay {
  &-container {
    padding: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &-left {
      &-intro {
        filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.6));
        width: 500px;
      }
    }

    &-right {
      display: flex;
      align-items: center;
      flex-direction: column;

      &-btn {
        margin: 30px auto;
        width: 300px;
        height: 60px;
        line-height: 60px;
        background: #b6c5f2;
        border-radius: 50px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>