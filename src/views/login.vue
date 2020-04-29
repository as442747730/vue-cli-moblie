<template>
  <section class="login">
    <div class="top">
      <div class="logo" />
      <div class="title">分布式绩效管理系统</div>
    </div>
    <div class="list">
      <van-form>
        <van-field
          v-model="loginForm.username"
          class="usern"
          name="validateUsername"
          left-icon="contact"
          placeholder="请输入账号"
          clearable
        />
        <van-field
          v-model="loginForm.password"
          class="usern"
          name="validatePassword"
          :type="passwordShow ? '' : 'password'"
          placeholder="请输入密码"
          left-icon="bag-o"
          :right-icon="passwordShow ? 'closed-eye' : 'eye-o' "
          clearable
          @click-right-icon="onClickIcon"
        />
        <div>
          <van-button :disabled="disabledtype" color="#f57a00" size="normal" clearable block round @click="loginBtn">登录</van-button>
        </div>
      </van-form>
      <!-- <div class="list2">
        <van-checkbox v-model="memory" >记住账号</van-checkbox>
      </div> -->
      <div class="ftlogo" />
    </div>
  </section>
</template>

<script>
import { validUsername } from '@/utils/validate'
// import { setRoleCode, setRoleName, setCorpDb, setSysdate } from '@/utils/auth'
// import { getRoleList } from '@/api/user'
import { Toast } from 'vant'
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      loginForm: {
        username: 'gzadmin',
        password: '123456'
      },
      passwordShow: false
    }
  },
  computed: {
    disabledtype () {
      return this.loginForm.username === '' || this.loginForm.password === ''
    }
  },
  created () {},
  mounted () {},
  methods: {
    onClickIcon () {
      this.passwordShow = !this.passwordShow
    },
    loginBtn () {
      let that = this
      if (
        !validUsername(this.loginForm.username) &&
        this.loginForm.password < 6
      ) {
        Toast.fail('请输入正确账号或密码')
      } else {
        console.log(this.$store, 2)
        this.$store
          .dispatch('user/login', this.loginForm)
          .then(response => {
            if (that.corps.length === 1) {
              that.corpSelect(that.corps[0].corpDb)
            } else {
              that.dialogVisibleCorp = true
            }
          })
          .catch(() => {
            this.loading = false
          })
        // this.login({
        //   username: this.username,
        //   password: this.password,
        //   memory: this.memory,
        //   $router: this.$router,
        //   $route: this.$route
        // })
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
