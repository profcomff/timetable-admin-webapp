<template>
  <form>
    <div class="row fast-card input-group flex-nowrap">
      <span class="input-group-text col-id">{{ id }}</span>
      <input
        type="text"
        class="form-control"
        v-model="current_api_item.first_name"
        placeholder="Имя"
        aria-label="Lecturer's firstname"
      />
      <input
        type="text"
        class="form-control"
        v-model="current_api_item.middle_name"
        placeholder="Отчество"
        aria-label="Lecturer's middlename"
      />
      <input
        type="text"
        class="form-control"
        v-model="current_api_item.last_name"
        placeholder="Фамилия"
        aria-label="Lecturer's lastname"
      />
      <input
        type="button"
        class="form-control material-symbols-sharp btn-success col-btn"
        :value="!show_more ? 'arrow_drop_down' : 'arrow_drop_up'"
        @click.prevent="show_more = !show_more"
      />
      <input
        type="submit"
        class="form-control material-symbols-sharp btn-success col-btn"
        value="done"
        @click.prevent="submit"
        :disabled="!changed"
      />
      <input
        type="reset"
        class="form-control material-symbols-sharp btn-danger col-btn"
        value="undo"
        @click.prevent="reset"
        :disabled="!changed"
      />
    </div>
    <div v-if="show_more" class="row details-card">
      <div class="card-body">
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Имя</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              v-model="current_api_item.first_name"
              placeholder="Имя"
              aria-label="Lecturer's firstname"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Отчество</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              v-model="current_api_item.middle_name"
              placeholder="Отчество"
              aria-label="Lecturer's middlename"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Фамилия</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              v-model="current_api_item.last_name"
              placeholder="Фамилия"
              aria-label="Lecturer's lastname"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Описание</label>
          <div class="col-sm-10">
            <v-md-editor
              v-model="current_api_item.description"
              height="400px"
              mode="edit"
              left-toolbar="h bold italic strikethrough | quote ul ol link code"
              right-toolbar="preview"
            ></v-md-editor>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "LecturerRow",
  props: {
    id: Number,
    api_item: Object,
  },
  data() {
    return {
      show_more: false,
      current_api_item: undefined,
      default_api_item: undefined,
    };
  },
  computed: {
    changed() {
      return (
        this.current_api_item.first_name != this.default_api_item.first_name ||
        this.current_api_item.middle_name !=
          this.default_api_item.middle_name ||
        this.current_api_item.last_name != this.default_api_item.last_name ||
        this.current_api_item.description != this.default_api_item.description
      );
    },
  },
  methods: {
    submit() {
      console.log(
        this.current_api_item.first_name,
        this.default_api_item.first_name
      );
      console.log(
        this.current_api_item.middle_name,
        this.default_api_item.middle_name
      );
      console.log(
        this.current_api_item.last_name,
        this.default_api_item.last_name
      );
      console.log(
        this.current_api_item.description,
        this.default_api_item.description
      );
    },
    reset() {
      this.current_api_item = { ...this.default_api_item };
    },
  },
  beforeMount() {
    this.default_api_item = this.api_item;
    if (
      this.default_api_item.description === undefined ||
      this.default_api_item.description === null
    ) {
      this.default_api_item.description = "";
    }
    this.current_api_item = { ...this.default_api_item };
  },
};
</script>

<style scoped>
.row {
  margin: 0 auto;
  padding: 4px 12px;
}

.details-card {
  margin: 0px 12px 12px 12px;
  padding: 4px 12px;
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);
  border-radius: var(--bs-border-radius);
}

.col-id {
  max-width: 60px;
}

.col-btn {
  max-width: 60px;
}
</style>
