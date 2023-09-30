<template>
  <div class="flex flex-wrap mx-2">
    <div class="lg:w-1/6 sm:w-1/3">
      <label for="available">
        <input type="checkbox" id="available" v-model="availableOnly">
        Available only
      </label>
    </div>
    <div v-for="brand in brands" :for="brand" :key="brand" class="lg:w-1/6 sm:w-1/3">
      <label>
        <input type="checkbox" :id="brand" :value="brand" v-model="selectedBrands"/>
        {{ brand }}
      </label>
    </div>
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