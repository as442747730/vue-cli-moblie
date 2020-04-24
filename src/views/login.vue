<template>
  <section class="login">
    <div class="top">您好，请登录</div>
    <div class="list">
        <van-field
          class="usern"
          v-model="username"
          left-icon="contact"
          placeholder="请输入账号"
          clearable
        />
        <van-field
          class="usern"
          v-model="password"
          :type="passwordShow ? '' : 'password'"
          placeholder="请输入密码"
          left-icon="bag-o"
          :right-icon="passwordShow ? 'closed-eye' : 'eye-o' "
          @click-right-icon ="onClickIcon"
          clearable
        />
      <div class="list2">
        <van-checkbox v-model="memory" >记住账号</van-checkbox>
      </div>
      <div>
        <van-button @click="loginBtn" :disabled="disabledtype" color="#f57a00" size="normal" clearable >登录</van-button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { Toast } from 'vant';
import { getCook, setCook, removeCook } from 'utils/auth'
export default {
    name: 'login',
    data() {
        return {
            username: getCook.getUserName('username') ? getCook.getUserName('username') : '',
            // username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
            password: '',
            passwordShow: false,
            memory: true
        };
    },
    components: {},
    created() {},
    mounted() {},
    computed: {
        disabledtype () {
            return this.username === '' || this.password === ''
        }
    },
    methods: {
        ...mapActions('login', ['login']),
        onClickIcon() {
            this.passwordShow = !this.passwordShow
        },
        loginBtn() {
            if (this.username === '' || this.password === '') {
                Toast({
                    message: '请输入账号或密码',
                    position: 'middle',
                    duration: 2000
                });
            } else {
                this.login({
                    username: this.username,
                    password: this.password,
                    memory: this.memory
                });
            }
        }
    }
};
</script>
<style scoped lang="scss">
.login {
  .top {
    @include line-height(220px, 220px);
    font-size: 20px;
    padding-left: 45px;
    text-align: left;
  }
  .list {
    margin: 0 45px 8px 45px;
  }
  .list2 {
    margin: 8px 0 0 16px;
    font-size: 12px;
  }
}
</style>
