<template>
  <div class="login-page">
    <b-container>
      <b-row align-h="center">
        <b-col cols="12" md="9" sm="9" lg="6">
          <b-form class="px-5" @submit.prevent="onSubmit()">
            <h1 class="font-size-30 white-color mb-3">ورود</h1>
            <b-form-group invalid-feedback=" فرمت ایمیل وارد شده صحیح نیست ">
              <b-input
                type="email"
                placeholder="ایمیل"
                class="py-4"
                v-model="user.username"
                @focus="stausValidation.username = true"
                :state="IsEmailInputValid()"
              >
              </b-input>
            </b-form-group>
            <b-form-group invalid-feedback="رمز عبور خود را وارد نمایید">
              <b-input
                type="password"
                placeholder="رمز عبور"
                class="py-4"
                :state="IsPasswordInputValid()"
                v-model="user.password"
                @focus="stausValidation.password = true"
              >
              </b-input>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox v-model="user.isRemember" class="float-right">
                مرا به خاطر بسپار
              </b-form-checkbox>
            </b-form-group>
            <b-button class="py-2" type="submit"> ورود </b-button>
            <nuxt-link class="mt-3" to="/auth/forgetpassword"
              >رمز عبور خود را فراموش کرده اید ؟
            </nuxt-link>
            <nuxt-link class="mt-3" to="/auth/register"
              >حساب کاربری ندارید ؟ ثبت نام کنید
            </nuxt-link>
          </b-form>
          <div class="text-center mt-3">
            <nuxt-link to="/" class="font-size-18 back-to-index"
              >بازگشت به سایت</nuxt-link
            >
          </div>
          <div></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
        isRemember: true,
      },
      stausValidation: {
        username: null,
        password: null,
      },
    }
  },
  computed: {
    passwordValidation() {
      return this.user.password.length > 0
    },
    emailValidation() {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (this.user.username == '') return false
      if (re.test(this.user.username)) return true
      else return false
    },
    IsFormValid() {
      if (this.IsEmailInputValid() && this.IsPasswordInputValid()) return true
      else return false
    },
  },
  methods: {
    async onSubmit() {
      if (!this.IsFormValid) {
        this.$toast.show({
          message: 'اطلاعات فرم را به درستی وارد کنید',
          title: 'خطا',
          timeOut: 3000,
          classToast: 'bg-red-500 text-right',
          classTimeout: 'bg-gray-800 ',
          classTitle: 'text-white',
          classMessage: 'text-white',
          classClose: 'text-white',
        })
        return
      }

      await this.$store.dispatch('login', this.user)
      if (this.$store.state.auth.statusCode == 200) {
        // await this.$store.dispatch('decodeToken')
        this.$router.push('/')
      } else if (this.$store.state.auth.statusCode == 401) {
        this.$toast.show({
          message: 'کاربری با این ایمیل و رمز عبور وجود ندارد',
          type: 'danger',
          title: 'خطا',
          timeOut: 3000,
          classToast: 'bg-gray-100 text-right',
          classTimeout: 'bg-gray-800 ',
        })
      } else {
        this.$toast.show({
          message: 'خطایی رخ داده است بعدا وارد شوید',
          type: 'danger',
          title: 'خطا',
          timeOut: 3000,
          classToast: 'bg-gray-100 text-right',
          classTimeout: 'bg-gray-800 ',
        })
      }
    },
    IsEmailInputValid() {
      if (this.stausValidation.username == null) return null
      else return this.emailValidation
    },
    IsPasswordInputValid() {
      if (this.stausValidation.password == null) return
      else return this.passwordValidation
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('@/assets/css/auth.scss');
</style>