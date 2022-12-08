<script>
import Dashboardview from "../components/Dashboard.vue";
import Evaluation from "../components/Evaluation.vue";
export default {
  components: {
    Dashboardview,
    Evaluation,
  },
  data() {
    return {
      isDashboard: true,
      isEvaluation: false,
      isForum: false,
      isLogout: false,
    };
  },
  methods: {},
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
        @click="
          isDashboard = true;
          isEvaluation = false;
          isForum = false;
          isLogout = false;
        "
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
        @click="
          isDashboard = false;
          isEvaluation = true;
          isForum = false;
          isLogout = false;
        "
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
        @click="
          isDashboard = false;
          isEvaluation = false;
          isForum = true;
          isLogout = false;
        "
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
        @click="
          isDashboard = false;
          isEvaluation = false;
          isForum = false;
          isLogout = true;
        "
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
      <buttons
        class="flex flex-row justify-between bg-skin-white pl-4"
        @click="testmodal = true"
      >
        <p>Thursday /2022/12/08</p>
        <img src="image here" alt="image here" />
      </buttons>
      <Dashboardview v-if="isDashboard === true" />
      <Evaluation v-if="isEvaluation === true" />
    </div>
  </div>
</template>
