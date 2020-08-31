<template>
  <div class="code">
    <div v-if="iconImg">
      <div class="content" v-if="isSuccess">
        <img class="icon" :src="iconImg" />
        <div class="desc">支付成功</div>
        <div class="finish" v-if="hotkeyCode"><div>{{hotkeyCode}}</div></div>
        <div class="finish" @click="getCode" v-else>完成支付({{countNum}})s后自动完成</div>
      </div>
      <div class="content" v-else>
        <img class="icon" :src="iconImg" />
        <div class="desc">支付失败</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImg: require("@/assets/pics/background.jpg"),
      checkData: {},
      fetchNum: 0,
      orderText: "",
      successImg: require("@/assets/pics/success.png"),
      failedImg: require("@/assets/pics/failed.png"),
      iconImg: "",
      isSuccess: false,
      countNum: 5,
      hotkeyCode: ""
    };
  },
  created() {
    let urls = this.UrlSearch();
    this.checkData = urls;
    let data = {
      orderNo: this.checkData["out_trade_no"]
    };
    window.setInterval(() => {
      if (this.fetchNum < 30) {
        setTimeout(this.orderCheck(data), 0);
      }
    }, 1000);
  },
  watch: {
    countNum(v) {
      if (v <= 0) {
        this.getCode();
      }
    }
  },
  methods: {
    UrlSearch() {
      var name, value;
      var str = location.href; //取得整个地址栏

      var num = str.indexOf("?");
      str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
      var arr = str.split("&"); //各个参数放到数组里
      var obj = {};
      for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
          name = arr[i].substring(0, num);
          value = arr[i].substr(num + 1);
          // this[name] = value;
          obj[name] = value;
        }
      }
      return obj;
    },
    orderCheck(data) {
      this.$https
        .orderCheck(data)
        .then(res => {
          if (res.code == 0) {
            this.hotkeyCode = res.data || '';
            this.isSuccess = true;
            this.iconImg = this.successImg;
            this.fetchNum = 30;
            if (!res.data) {
              this.countDown();
            }
          } else {
            this.iconImg = this.failedImg;
            this.isSuccess = false;
            this.fetchNum = 30;
          }
        })
        .catch(err => {
          this.iconImg = this.failedImg;
          this.isSuccess = false;
          this.fetchNum++;
        });
    },
    countDown() {
      if (this.countNum <= 0) return;
      this.countInterval = setInterval(() => {
        this.countNum -= 1;
        if (this.countNum <= 0) {
          clearInterval(this.countInterval);
        }
      }, 1000);
    },
    getCode() {
      clearInterval(this.countInterval);
      let data = {
        orderNo: this.checkData["out_trade_no"]
      };
      this.$https.getCode(data).then(res => {
        if (res.code == 0) {
          this.hotkeyCode = res.data;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.code {
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    padding: 50px;
    border: 1px solid #999;
    border-radius: 20px;
    .finish {
      width: 200px;
      height: 80px;
    }
  }
  .content {
    .icon {
      width: 80px;
      height: 80px;
    }
    .desc {
      margin: 20px 0;
    }
    .finish {
      // width: 100px;
      padding: 0 20px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #999;
      border-radius: 20px;
      cursor: pointer;
    }
  }
}
</style>