<template>
  <div class="result-container">
    <div class="result-wrap">
      <!-- <img class="result-bg" src="@/assets/images/result-background.png" /> -->
      <div class="back-button" @click="backToRobot">
        <img src="@/assets/images/back.png" />
      </div>
      <div class="result-greet">
        <div class="greet-text">
          <div v-for="(item, index) in greetText" :key=index>{{item}}</div>
        </div>
      </div>
      <div class="result-visit">
        <div class="visit-title">你对这里充满了好奇</div>
        <div class="visit-text">
          <div class="visit-item" v-for="(item, index) in visitText" :key=index>
            <div class="visit-line" v-for="(line, index) in item" :key=index>
              {{line}}
            </div>
          </div>
        </div>
      </div>
      <div class="result-background_footer">
          <img src="@/assets/images/result-background_footer.png" alt="探索完成">
      </div>
      <!-- <div class="result-complete">
              <img class="complete-title" src="@/assets/images/complete.png">
              <div class="complete-content">
                  <div class="complete-item" v-for="(item, index) in completeText" :key=index>
                      {{item}}
                  </div>
              </div>
              <img class="complete-present" src="@/assets/images/present.png" />
          </div>
          -->
      <div class="toolbars">
        <div  style="height: 100%">
          <!-- <transition
            name="van-slide-right"
            :duration="{ enter: 800, leave: 800 }"
          >
            <img
              style="width: 85%"
              :class="{ xiaotian: true, rotate: resultRobotLogoShow }"
              src="@/assets/images/result_robot.png"
              alt="小天机器人logo"
              v-if="resultRobotLogoShow"
            />
          </transition> -->
          <transition
            name="van-slide-right"
            :duration="{ enter: 800, leave: 800 }"
          >
            <img
              src="@/assets/images/result_robot_logo.png"
              alt="小天机器人logo"
              style="top: 1px"
            />
          </transition>
        </div>
        <span @click="formModelShow()"></span>
      </div>
      <ResultForm />
    </div>
  </div>
</template>
<script>
import ResultForm from "./components/ResultForm";
import { axiosGet } from "../../utils/http.js";
import API from "../../utils/api";
import { parseTime } from "../../utils/index";
import { Notify } from 'vant'
// const ResultForm = () => import('./components/ResultForm')
export default {
  name: "Result",
  components: {
    ResultForm,
  },
  data() {
    return {
      receivedData: [],
      greetText: [ '亲爱的', '2020年11月03日10点02分你来到会场', '你知道，无论什么时候', '我都在等待与你相遇，一起去探索5G+AI的世界'],
      visitText: [["10点02分", "我们到达了C区域，探寻了个人区域，感受到了个人魅力"], ["10点02分", "我们到达了H区域，探寻了家庭区域，感受到了家庭魅力"], ["10点02分", "我们到达了B区域，探寻了政企区域，感受到了政企魅力"], ["10点03分", "我们到达了N区域，探寻了新兴区域，感受到了新兴魅力"]],
      resultRobotLogoShow: true,
      num: 3,
      Timer: null,
    };
  },
  created() {
    this.getBasicInfo();
    this.getName();
    console.log(parseTime(), 'parseTime')
  },
  methods: {
    handleGreetText() {
      this.greetText= this.receivedData[0].split('\n')
    },
    handleVisitText() { 
      this.visitText = []     
      let text = this.receivedData[1].split('\n')
      for(let i = 0, len = text.length; i < len; i += 2){
　　　　this.visitText.push(text.slice(i, i+2));
　　   }
    },
    getBasicInfo() {
      // 从后段获取month...
      const url = API.port8085.getGift;
      const userId = localStorage.getItem("userId");
      axiosGet(url, { userId: userId })
        .then((res) => {
          if (res.code === 200 && res.data !== undefined) {
            this.receivedData = res.data
            this.handleGreetText()
            this.handleVisitText()
          } else {
            console.log(res.msg); // 报错
          }
        })
        .catch((error) => {
          console.log(error);
          if(error.code === 'ECONNABORTED' || error.message === 'Network Error' || error.message.includes('timeout')){
            Notify('网络超时');
          }
          // 错误处理
        });
    },
    getName() {
      // 从微信获取名字
    },
    backToRobot() {
      this.$router.replace({ path: "/robotpage" });
    },
    formModelShow() {
      this.$store.commit("setFormModelShow", true);
    },
    resultRobotLogoShows() {
      if (this.resultRobotLogoShow) {
        this.resultRobotLogoShow = false;
        this.Timer = setInterval(() => {
          this.num--;
          if (this.num < 0) {
            this.resultRobotLogoShow = true;
            this.num = 3;
            clearInterval(this.Timer);
          }
        }, 1000);
      } else {
        clearInterval(this.Timer);
        this.resultRobotLogoShow = true;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.result-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: #063399;
  .result-wrap {
    background: url('../../assets/images/result-background.png') no-repeat;
    background-size: 100% auto;
  }
  .toolbars {
    position: fixed;
    top: 224px;
    right: 0;
    height: 120px;
    width: 60px;
    background-color: transparent;
    z-index: 3;
    margin-top: -25px;
    img {
      width: 65px;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
    }
    .rotate {
      transform: rotate(1deg);
      transform-origin: 0 450%;
    }
    span {
      position: absolute;
      bottom: -15%;
      right: 0;
      width: 100%;
      height: 25px;
      background: transparent;
      border: none;
      display: inline-block;
    }
  }
  z-index: 2;
  .result-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
  }
  .result-background_footer{
    width: 100%;
    margin-top: 20px;
    text-align: center;
    img{
      width: 80%;
      height: auto;
      margin: 0 auto;
    }
  }
  .back-button {
    position: absolute;
    top: 20px;
    left: 15px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .result-greet {
    margin-left: 34px;
    padding-top: 51px;
    width: 90%;
    .greet-text {
      color: #d0e1fa;
      font-size: 15px;
      font-family: SourceHanSansCN-Medium;
      line-height: 24px;
      margin-bottom: 4px;
    }
  }
  .result-visit {
    margin-top: 35px;
    margin-left: 34px;
    width: 72%;
    // margin-bottom: 15px;
    .visit-title {
      margin-bottom: 3px;
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      line-height: 24px;
      color: #d0e1fa;
    }
    .visit-item {
      font-size: 14px;
      color: #abd1ff;
      line-height: 20px;
      font-family: SourceHanSansCN-Regular;
      width: 272px;
      margin-top: 15px;
    }
  }
  // .result-complete {
  //     margin-top: 35px;
  //     margin-left: 33px;
  //     .complete-title {
  //         width: 95px;
  //         height: 23px;
  //         display: block;
  //     }
  //     .complete-content {
  //         float: left;
  //         .complete-item {
  //             font-family: SourceHanSansCN-Medium;
  //             font-size: 15px;
  //             color: #5a6ee1;
  //             line-height: 22px;
  //             height: 38px;
  //             width: 156px;
  //             padding-top: 18px;
  //         }
  //     }
  //     .complete-present {
  //         float: left;
  //         height: 153px;
  //         width: 107px;
  //         margin-left: 40px;
  //         margin-top: -35px;
  //     }
  // }
}
</style>
