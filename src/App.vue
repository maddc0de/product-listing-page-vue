<template>
  <div class="app" ref="app-container">
    <FilterToolbar :brands="listBrands" @updateAvailableFilter="showAvailableOnly" @updateSelectedBrandsFilter="showSelectedBrandsOnly"/>
    <DropDownMenu />
    <ProductGridList :products="filterProducts" />
  </div>
</template>

<script>
import products from './data/products.json';
import FilterToolbar from './components/FilterToolbar.vue';
import DropDownMenu from './components/DropDownMenu.vue';
import ProductGridList from './components/ProductGridList.vue';

export default {
  name: 'App',
  components: {
    FilterToolbar,
    DropDownMenu,
    ProductGridList
  },
  data() {
    return {
      products,
      availableOnly: false,
      selectedBrands: []
    };
  },
  methods: {
    showAvailableOnly(isActive) {
      this.availableOnly = isActive;
    },

    showSelectedBrandsOnly(brands) {
      this.selectedBrands = brands
    }
  },
  computed: {
    listBrands() {
      let brands = [...new Set(this.products.map(product => product.brand))];
      return brands;
    },
  
    filterProducts() {
      let filteredProducts = this.products;

      if (this.availableOnly) {
        filteredProducts = this.products.filter(product => product.isAvailable)
      };

      if (this.selectedBrands.length > 0) {
        filteredProducts = this.products.filter(product => this.selectedBrands.includes(product.brand))
      };

      return filteredProducts;
    },


  }
};
</script>

<style>
.app {
  max-width: 1024px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #606569;
}

.link {
  color: #3a7f71;
}
</style>
