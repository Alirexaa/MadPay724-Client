<template>
  <div>
    <nav class="p-2 bg-purple-300">
      <ul class="flex items-center cursor-pointer" @click="toggleDropDown()">
        <li class="relative">
          <a class="flex items-center">
            <img
              class="rounded-full w-10 border-2 border-solid border-gray-100"
              src="~/static/img/portrait/small/avatar-s-1.jpg"
              alt=""
            />
            <h3 class="white-color mr-2">علیرضا بلوچی</h3>
          </a>
          <ul
            class="absolute z-10 bg-purple-100 text-center p-4 mt-2 space-y-2 rounded-b-lg"
            v-show="showDrowpDown"
          >
            <li>
              <nuxt-link
                to="profile"
                class="text-purple-500 hover:text-gray-800"
                >پروفایل</nuxt-link
              >
            </li>
            <li>
              <a class="text-purple-500 hover:text-purple-800"
                >تغییر رمز عبور</a
              >
            </li>
            <li>
              <a class="text-purple-500 hover:text-purple-800">تنظیمات</a>
            </li>
            <li>
              <a class="text-purple-500 hover:text-purple-800" @click="logout()"
                >خروج</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      showDrowpDown: false,
    }
  },
  methods: {
    toggleDropDown() {
      this.showDrowpDown = !this.showDrowpDown
    },
    logout() {
      debugger
      this.$router.push('/auth/login')
      this.$store.dispatch('logout')
      this.$toast.show({
        message: 'شما خارج شدید!',
        type: 'warning',
        title: 'پیغام',
        timeOut: 3000,
        classToast: 'bg-red-400 text-right',
        classTimeout: 'bg-gray-800 ',
        classMessage: 'text-white',
      })
    },
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>