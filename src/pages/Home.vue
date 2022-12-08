<script>
export default {
  components: {},
  data() {
    return {
      isDashboard: true,
      isEvaluation: false,
      isForum: false,
      isLogout: false,
    };
  },
};
</script>

<template>
  <div
    class="grid md:grid-cols-[200px_auto] sm:grid-cols-[120px_auto] min-h-screen"
  >
    <div class="flex flex-col bg-skin-gray h-full">
      <div class="text-center rounded-br-3xl">
        <h1 class="rounded-br-3xl bg-skin-white p-4">TES</h1>
      </div>
      <button
        :class="{
          activebg: isDashboard,
          notactivebg: !isDashboard,
        }"
      >
        <div
          class="bg-skin-white rounded-3xl p-3 border-4"
          :class="{ active: isDashboard, notactive: !isDashboard }"
        >
          <h1>Dashboard</h1>
        </div>
      </button>
      <button
        :class="{
          activebg: isEvaluation,
          notactivebg: !isEvaluation,
        }"
      >
        <div
          class="bg-skin-white rounded-3xl p-3 border-4"
          :class="{ active: isEvaluation, notactive: !isEvaluation }"
        >
          <h1>Evaluation</h1>
        </div>
      </button>
      <button
        :class="{
          activebg: isForum,
          notactivebg: !isForum,
        }"
      >
        <div
          class="bg-skin-white rounded-3xl p-3 border-4"
          :class="{ active: isForum, notactive: !isForum }"
        >
          <h1>Forum</h1>
        </div>
      </button>
      <button
        :class="{
          activebg: isLogout,
          notactivebg: !isLogout,
        }"
      >
        <div
          class="bg-skin-white rounded-3xl p-3 border-4"
          :class="{ active: isLogout, notactive: !isLogout }"
        >
          <h1>Logout</h1>
        </div>
      </button>
      <div class="h-full bg-skin-white"></div>
    </div>

    <div class="bg-skin-gray flex flex-col gap-5">
      <div class="flex flex-row justify-between bg-skin-white pl-4">
        <p>Thursday /2022/12/08</p>
        <img src="image here" alt="image here" />
      </div>
      <div class="flex flex-col pl-4">
        <h1 class="text-3xl"><b>Dashboard</b></h1>
        <p>Dashboard</p>
      </div>
      <div class="flex flex-row gap-6 flex-wrap pl-4">
        <div
          class="flex flex-row bg-skin-white rounded-lg p-3 mb:w-[200px] sm:w-[350px]"
        >
          <div class="m-2 p-2 bg-skin-gray rounded-lg">
            <img src="" alt="icon here" />
          </div>
          <div class="flex flex-col">
            <p>1020</p>
            <p>Total Student enrolled</p>
          </div>
        </div>
        <div
          class="flex flex-row bg-skin-white rounded-lg p-3 mb:w-[200px] sm:w-[350px]"
        >
          <div class="m-2 p-2 bg-skin-gray rounded-lg">
            <img src="" alt="icon here" />
          </div>
          <div class="flex flex-col">
            <p>1823</p>
            <p>Total Teacher Evaluation</p>
          </div>
        </div>
        <div
          class="flex flex-row bg-skin-white rounded-lg p-3 mb:w-[200px] sm:w-[350px]"
        >
          <div class="m-2 p-2 bg-skin-gray rounded-lg">
            <img src="" alt="icon here" />
          </div>
          <div class="flex flex-col">
            <p>182</p>
            <p>Evalutaion Pending</p>
          </div>
        </div>
      </div>
      <div class="flex flex-row flex-wrap">
        <div class="bg-skin-white p-4 rounded-lg m-4 flex flex-col">
          <h1><b>Rank Teacher insert here</b></h1>
          <div
            class="grid mb:grid-cols-[320px_auto] sm:grid-cols-[350px_auto] md:grid-cols-[400px_auto] lg:grid-cols-[600px_auto]"
          >
            <h1>Professor</h1>
            <h1>Status</h1>
          </div>
          <div class="h-[1px] bg-skin-gray"></div>
          <div
            class="grid mb:grid-cols-[320px_auto] sm:grid-cols-[350px_auto] md:grid-cols-[400px_auto] lg:grid-cols-[600px_auto]"
          >
            <div class="flex flex-row gap-2">
              <img src="" alt="img" />
              <h1>Professor</h1>
            </div>
            <div class="bg-skin-blue rounded-full px-3">
              <h1>Status</h1>
            </div>
            <div class="flex flex-row gap-2">
              <img src="" alt="img" />
              <h1>Professor</h1>
            </div>

            <div class="bg-skin-yellow rounded-full px-3">
              <h1>Status</h1>
            </div>
            <div class="flex flex-row gap-2">
              <img src="" alt="img" />
              <h1>Professor</h1>
            </div>

            <div class="bg-skin-orange rounded-full px-3">
              <h1>Status</h1>
            </div>
          </div>
        </div>
        <div class="bg-skin-white m-4 p-4 rounded-lg">
          <img src="" alt="nigga here" />
        </div>
      </div>
    </div>
  </div>
</template>
