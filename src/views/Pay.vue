<template>
  <div class="pay">
    <div class="pay-container">
      <div class="pay-container-left">
        <img class="pay-container-left-intro" :src="introImg"/>
      </div>
      <div class="pay-container-right">
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
      payUrl: "https://openapi.alipaydev.com/gateway.do?app_id=2021000116662908&biz_content=%7B%22subject%22%3A%22123%22%2C%22out_trade_no%22%3A%2220161112%22%2C%22total_amount%22%3A0.01%2C%22product_code%22%3A%22FAST_INSTANT_TRADE_PAY%22%7D&charset=utf-8&method=alipay.trade.page.pay&notify_url=https%3A%2F%2Fexample.com%2Fnotify&return_url=https%3A%2F%2Fexample.com&sign_type=RSA2&timestamp=2020-08-05+04%3A19%3A58&version=1.0&sign=YY8Rr%2B%2B%2FrpW5dz%2FiH5twjfD2LR%2FNxS08TH%2B8kbjuCynRevf9Z96fdnDBm1Eb%2BpNlRlKecq8fYMmLBU%2FQe%2FPqqmIkPinMNKlTYTDuHKAeCX8kUDrEncrC3eosWdeuLQP5r6FwiC9jgNpcQyFG%2BheHSe1GR51zAVWNpJwEhgUPVbL5NLJ8uewumZqYGpjxuNMgGYNmgHjHjbeDvfrXBE%2FfoYK3SgPQInSNFWJG9jRHytsUGQ%2BqLhv6kA4sfYcGQJjXBCw4m93FhWhIzERLhP3ZTr0Wpsp46GNbpD8rAu3Q3QKxRcfpoXQ55iy14m%2FVKClNCPxOTvpkjVbpVQWJ00%2BXkw%3D%3D",
      introImg: require("@/assets/pics/lifetimes.png"),
      introText: "这是一段占位符这是一段占位符这是一段占位符这是一段占位符这是一段占位符这是一段占位符这是一段占位符",
      amount: 48
    }
  },
  created() {
    // this.$https.payOrder().then(res=>{
    //   console.log(res)
    // })
    // window.location.replace(this.payUrl)
  },
  methods: {
    pay() {
      window.location.replace(this.payUrl)
    }
  }
}
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
      }
    }
  }
}
</style>