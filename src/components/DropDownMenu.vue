<template>
  <label class="sorting-dropdownmenu">
    <select class="dropdown-select" @change="sortOrder" v-model="selectedOrder">
      <option disabled selected value="">Sort by:</option>
      <option value="price-ascending">Price: High to Low</option>
      <option value="price-descending">Price: Low to High</option>
      <option value="relevance">Relevance</option>
    </select>
  </label>
</template>

<script>
export default {
  name: 'DropDownMenu',
  data() {
    return {
      selectedOrder: 'relevance'
    }
  },
  methods: {
    sortOrder() {
      this.$emit('updateSortingOrder', this.selectedOrder)
    }
  }
}
</script>

<style scoped>
.sorting-dropdownmenu {
  display: flex;
  justify-content: center;
}
</style>