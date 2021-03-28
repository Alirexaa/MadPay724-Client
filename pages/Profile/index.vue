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
              <b-tab title=" تغییر عکس پروفایل" active>
                <form @submit.prevent="changeUserProfileImage()">
                  <b-form-group label="انتخاب عکس:" label-cols-sm="2">
                    <b-form-file
                      id="file-default"
                      placeholder="عکسی را انتخاب یا درگ کنید"
                      class="text-center"
                      required
                      choose-label="عکسی را"
                      browse-text="انتخاب عکس"
                      accept="image/x-png,image/jpeg"
                      v-model="profileImage"
                    ></b-form-file>
                  </b-form-group>
                  <button class="btn btn-success" type="submit">
                    تغییر عکس پروفایل
                  </button>
                </form>
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
                  <button class="btn btn-success" type="submit">
                    ذخیره تغییرات
                  </button>
                </form>
              </b-tab>
              <b-tab title="تغییر رمز عبور">
                <h3 class="border-bottom pb-2 mb-2">تغییر رمز عبور</h3>

                <form class="flex flex-col items-center">
                  <div>
                    <label for="oldPassword"> رمز عبور فعلی :</label>
                    <input
                      type="password"
                      id="oldPassword"
                      placeholder="رمز عبور فعلی"
                      class="border-2 px-4 py-2 m-2 focus:border-blue-300"
                    />
                  </div>
                  <div>
                    <label for="newPassword">رمز عبور جدید :</label>
                    <input
                      type="password"
                      id="newPassword"
                      placeholder="رمز عبور جدید"
                      class="border-2 px-4 py-2 m-2 focus:border-blue-300"
                    />
                  </div>
                  <div>
                    <label for="confirmNewPassword"
                      >تکرار رمز عبور جدید :</label
                    >
                    <input
                      type="password"
                      id="confirmNewPassword"
                      placeholder="تکرار رمز عبور جدید"
                      class="border-2 px-4 py-2 m-2 focus:border-blue-300"
                    />
                  </div>
                  <button class="btn btn-success" type="submit">
                    تغییر رمز
                  </button>
                </form>
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
      profileImage: null,
    }
  },
  async created() {
    // let decodedToken = null
    // let userId = null
    // if (process.client) {
    //   decodedToken = this.$decodeTokenService.decode(localStorage['token'])
    //   if (decodedToken != null) {
    //     userId = decodedToken.nameid
    //     this.user = await this.$userService.getUser(
    //       userId,
    //       localStorage['token']
    //     )
    //     this.user.userId = userId
    //     console.log(this.user)
    //   }
    // }
  },

  methods: {
    updateUserInfo() {
      this.$userService.updateUserInfo(
        this.user.userId,
        this.user,
        localStorage['token']
      )
    },
    changeUserProfileImage() {
      if (this.profileImage) {
        let userId = JSON.parse(localStorage['userInfo']).userId

        this.$uploadService.updateProfilePhoto(
          userId,
          this.profileImage,
          localStorage['token']
        )
      } else {
        this.$toast.show({
          message: 'عکس خود را انتخاب کنید',
          type: 'warning',
          title: 'توجه!',
          timeOut: 5000,
          classToast: 'bg-yellow-200 text-right',
          classTimeout: 'bg-gray-800 ',
        })
      }
    },
  },
}
</script>

<style>
</style>