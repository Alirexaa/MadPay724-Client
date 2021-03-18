<template>
  <div class="text-right">
    <div class="grid grid-cols-3 gap-3 m-4">
      <div class="col-span-1">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">اطلاعات شخصی</h3>
          </div>
          <div class="card-body flex items-center justify-center">
            <img
              src="@/static/icon.png"
              class="rounded-full border-gray-700 border w-24"
            />
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div>
          <b-card no-body>
            <b-tabs card>
              <b-tab title="عکس پروفایل" active>
                <b-card-text> </b-card-text>
              </b-tab>
              <b-tab title="مشخصات کاربری">
                <form
                  id="personalInformation"
                  @submit.prevent="updateUserInfo()"
                >
                  <h3 class="border-bottom pb-2 mb-2">اطلاعات شخصی</h3>
                  <div class="flex flex-wrap">
                    <div class="flex flex-column">
                      <label for="name" class="mr-2"> نام :</label>
                      <input
                        type="text"
                        class="border-2 px-4 py-2 m-2 focus:border-blue-300"
                        id="name"
                      />
                    </div>
                    <div class="flex flex-column">
                      <label for="phoneNumber" class="mr-2">
                        شماره موبایل :</label
                      >
                      <input
                        type="text"
                        class="border-2 px-4 py-2 m-2 focus:border-blue-300"
                        id="phoneNumber"
                      />
                    </div>
                    <div class="flex flex-column">
                      <label for="gender" class="mr-2"> جنسیت :</label>
                      <select
                        class="border-2 px-4 py-2 m-2 focus:border-blue-300"
                        id="gender"
                      >
                        <option value="">مرد</option>
                        <option value="">زن</option>
                      </select>
                    </div>
                  </div>
                  <button class="btn btn-success" type="submit"></button>
                </form>
                <div id="addressInformation" class="mt-2">
                  <h3 class="border-bottom pb-2 mb-2">محل سکونت</h3>
                  <div class="flex flex-col">
                    <div class="flex flex-col">
                      <label for="city" class="mr-2"> شهر :</label>
                      <input
                        type="text"
                        class="border-2 px-4 py-2 m-2 focus:border-blue-300"
                        id="city"
                      />
                    </div>
                    <div class="flex flex-column">
                      <label for="address" class="mr-2"> آدرس :</label>
                      <textarea
                        type="text"
                        class="border-2 px-4 py-2 m-2 focus:border-blue-300"
                        id="address"
                      />
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab title="تغییر رمز عبور">
                <b-card-text></b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userId: null,
        name: null,
        address: null,
        city: null,
        phoneNumber: null,
        gender: null,
      },
    }
  },
  async created() {
    let decodedToken = null
    let userId = null
    if (process.client) {
      decodedToken = this.$decodeTokenService.decode(localStorage['token'])
      if (decodedToken != null) {
        userId = decodedToken.nameid
        this.user = await this.$userService.getUser(
          userId,
          localStorage['token']
        )
        this.user.userId = userId
        console.log(this.user)
      }
    }
  },

  methods: {
    updateUserInfo() {
      this.$userService.updateUserInfo(
        this.user.userId,
        this.user,
        localStorage['token']
      )
    },
  },
}
</script>

<style>
</style>