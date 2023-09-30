<template>
  <div class="inline">
    <label class="absolute right-10 mt-2">
      <select @change="sortOrder" v-model="selectedOrder">
        <option disabled selected value="">Sort by:</option>
        <option value="price-descending">Price: High to Low</option>
        <option value="price-ascending">Price: Low to High</option>
        <option value="relevance">Relevance</option>
      </select>
    </label>
  </div>
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