<template>
  <section class="login">
    <div class="top">
      <div class="logo" />
      <div class="title">分布式绩效管理系统</div>
    </div>
    <div class="list">
      <van-field
        v-model="username"
        class="usern"
        left-icon="contact"
        placeholder="请输入账号"
        clearable
      />
      <van-field
        v-model="password"
        class="usern"
        :type="passwordShow ? '' : 'password'"
        placeholder="请输入密码"
        left-icon="bag-o"
        :right-icon="passwordShow ? 'closed-eye' : 'eye-o' "
        clearable
        @click-right-icon="onClickIcon"
      />
      <!-- <div class="list2">
        <van-checkbox v-model="memory" >记住账号</van-checkbox>
      </div> -->
      <div>
        <van-button :disabled="disabledtype" color="#f57a00" size="normal" clearable block round @click="loginBtn">登录</van-button>
      </div>
      <div class="ftlogo" />
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import { Toast } from 'vant'
import { getCook, setCook, removeCook } from 'utils/auth'
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      username: getCook.getUserName('username') ? getCook.getUserName('username') : '',
      // username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
      password: '',
      passwordShow: false,
      memory: true
    }
  },
  computed: {
    disabledtype () {
      return this.username === '' || this.password === ''
    }
  },
  created () {},
  mounted () {},
  methods: {
    ...mapActions('login', ['login']),
    onClickIcon () {
      this.passwordShow = !this.passwordShow
    },
    loginBtn () {
      if (this.username === '' || this.password === '') {
        Toast({
          message: '请输入账号或密码',
          position: 'middle',
          duration: 2000
        })
      } else {
        this.login({
          username: this.username,
          password: this.password,
          memory: this.memory,
          $router: this.$router,
          $route: this.$route
        })
      }
    }
  }
}
</script>
<style scoped lang="scss">
.login {
  .top {
    height: 240px;
    padding-top: 100px;
    box-sizing: border-box;
    .logo {
      width: 170px;
      height: 40px;
      margin: 0 auto;
      background: url('~assets/img/loginLogo@2x.png') no-repeat center/contain;
    }
    .title {
      width:170px;
      height:26px;
      padding-top: 10px;
      margin: 0 auto;
      font-size:18px;
      line-height:24px;
      color:rgba(210,60,8,1);
    }
  }
  .list {
    margin: 0 38px;
    /deep/ .van-cell {
      height:46px;
      padding: 10px 16px 12px 16px;
      background:rgba(246,246,246,1);
      .van-field__body {
        input::-webkit-input-placeholder {
          /* WebKit browsers */
          color: #FF782D;
        }
        input:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: #FF782D;
        }
        input::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #FF782D;
        }
        input::-ms-input-placeholder {
          /* Internet Explorer 10+ */
          color: #FF782D;
        }
      }
    }
    .usern {
      margin-bottom: 10px;
    }
  }
  .list2 {
    margin: 8px 0 0 16px;
    font-size: 12px;
  }
}
</style>
