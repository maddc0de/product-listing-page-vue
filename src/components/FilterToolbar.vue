<template>
  <div class="filters-toolbar">
    <label for="available" class="filter-checkbox">
      <input type="checkbox" id="available" v-model="availableOnly">
      Available only
    </label>
    <label v-for="brand in brands" :for="brand" :key="brand" class="filter-checkbox">
      <input type="checkbox" :id="brand" :value="brand" v-model="selectedBrands"/>
      {{ brand }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'FilterToolbar',
  props: { 
    brands: { type: Array }
  },
  data() {
    return {
      availableOnly: false,
      selectedBrands: []
    }
  },
  watch: {
    availableOnly(isActive) {
      this.$emit("updateAvailableFilter", isActive);
    },

    selectedBrands() {
      this.$emit('updateSelectedBrandsFilter', this.selectedBrands)
    }
  }
};
</script>

<style scoped>
.filter-checkbox {
  margin-right: 20px;
}
</style>