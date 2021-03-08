<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="card text-right m-2 white-color">
        <div class="card-body bg-gray-600 flex justify-between">
          <div>
            <div class="card-title">مجموع <strong>فروش</strong></div>
            <div class="card-text">6,399</div>
          </div>
          <div>
            <b-icon-bag class="text-6xl text-white float-left"></b-icon-bag>
          </div>
        </div>
        <div class="card-footer bg-gray-700 text-white">
          <b-icon-caret-down-fill></b-icon-caret-down-fill>
          ۱۳ درصد کاهش فروش
        </div>
      </div>
      <div class="card text-right m-2 text-white">
        <div class="card-body bg-green-300 flex justify-between">
          <div>
            <div class="card-title">مجموع <strong>بازدید کنندگان</strong></div>
            <div class="card-text">25,300</div>
          </div>
          <div class="text-6xl"><b-icon-globe></b-icon-globe></div>
        </div>
        <div class="card-footer bg-green-400">
          <b-icon-caret-up-fill></b-icon-caret-up-fill>
          ۳۷ درصد افزایش ترافیک
        </div>
      </div>

      <div class="card text-right m-2 text-white">
        <div>
          <div class="card-body bg-red-400 flex justify-between">
            <div>
              <div class="card-title">برآیند <strong>درآمد</strong></div>
              <div class="card-text">70,389 تومان</div>
            </div>
            <div class="text-6xl">
              <b-icon-cash></b-icon-cash>
            </div>
          </div>

          <div class="card-footer bg-red-500">
            <b-icon-caret-up-fill></b-icon-caret-up-fill>
            ۷ درصد افزایش درآمد
          </div>
        </div>
      </div>
      <div class="card text-right m-2 text-white">
        <div class="card-body bg-blue-400 flex justify-between">
          <div>
            <div class="card-title">مجموع <strong>کاربران</strong></div>
            <div class="card-text">25,300</div>
          </div>
          <div class="text-6xl">
            <b-icon-people-fill></b-icon-people-fill>
          </div>
        </div>

        <div class="card-footer bg-blue-500">۷ درصد افزایش کاربران</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>