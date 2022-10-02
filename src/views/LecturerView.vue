<template>
  <div class="home">
    <lecturer-row :key="i.id" :id="i.id" :api_item="i" v-for="i in api.items" />
  </div>
</template>

<script>
import LecturerRow from "@/components/LecturerRow.vue";
export default {
  name: "HomeView",
  components: { LecturerRow },
  data() {
    return {
      api: {
        items: [],
        limit: 100,
        offset: 0,
        total: 0,
      },
    };
  },
  beforeMount() {
    fetch(
      `${process.env.VUE_APP_API_TIMETABLE}/timetable/lecturer/?limit=${this.api.limit}&offset=${this.api.offset}`
    ).then((data) => {
      data.json().then((data) => {
        this.api = data;
      });
    });
  },
};
</script>

<style>
/* FIXME: Отрубить как добавят маргин в навбар */
body {
  margin-top: 64px;
}
</style>
