<template>
  <section class="login">
    <div class="top">您好，请登录</div>
    <div class="list">
      <van-cell-group>
        <van-field
          v-model="username"
          left-icon="contact"
          placeholder="请输入账号"
          clearable
        />
        <van-field
          v-model="password"
          :type="passwordShow ? '' : 'password'"
          placeholder="请输入密码"
          left-icon="bag-o"
          :right-icon="passwordShow ? 'closed-eye' : 'eye-o' "
          @click-right-icon ="onClickIcon"
          clearable
        />
      </van-cell-group>
    </div>
    <van-button @click="loginBtn" :disabled="disabledtype" color="#f57a00" size="normal" clearable >登录</van-button>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { Toast } from 'vant';
export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: '',
            passwordShow: false,
            disabledtype: true
        };
    },
    components: {},
    created() {},
    mounted() {},
    watch: {
        'username': function(newVal) {
            this.disabledtype = this.username === ''
        },
        'password': function(newVal) {
            this.disabledtype = this.password === ''
        }
    },
    methods: {
        ...mapActions('login', ['login']),
        onClickIcon() {
            this.passwordShow = !this.passwordShow
        },
        loginBtn() {
            if (this.username === '1' || this.password === '1') {
                Toast({
                    message: '请输入账号或密码',
                    position: 'middle',
                    duration: 2000
                });
            } else {
                this.login({
                    username: this.username,
                    password: this.password,
                    $router: this.$router,
                    $route: this.$route
                });
            }
        }
    }
};
</script>
<style scoped lang="scss">
.login {
  .top {
    @include line-height(345px, 345px);
    font-size: 60px;
    padding-left: 45px;
    text-align: left;
  }
  .list {
    height: 100px;
    margin: 0 45px 4px 45px;
  }
  /deep/ .van-field {
    font-size: 30px;
    line-height: 42px;
  }
}
</style>
