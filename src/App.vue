<template>
  <div class="max-w-[1300px] mx-auto md:px-10 text-plp-grey" ref="app-container">
    <FilterToolbar :brands="listBrands" @updateAvailableFilter="showAvailableOnly" @updateSelectedBrandsFilter="showSelectedBrandsOnly"/>
    <DropDownMenu @updateSortingOrder="showInOrderSelected"/>
    <ProductGridList :products="sortProducts" />
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
      selectedBrands: [],
      selectedOrder: 'relevance'
    };
  },
  methods: {
    showAvailableOnly(isActive) {
      this.availableOnly = isActive;
    },

    showSelectedBrandsOnly(brands) {
      this.selectedBrands = brands;
    },

    showInOrderSelected(order) {
      this.selectedOrder = order;
    },

    sortRelevance(a, b){
      if (a.isAvailable === b.isAvailable) {
        return a.rank - b.rank;
      }
      return a.isAvailable ? -1 : 1;
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

    sortProducts() {
      const sortFunctions = {
        "price-descending": ((a, b) => b.price - a.price),
        "price-ascending": ((a, b) => a.price - b.price),
        "relevance": this.sortRelevance
      }

      const selectedSortFunction = sortFunctions[this.selectedOrder];   
      const sortedProducts = [...this.filterProducts].sort(selectedSortFunction)

      return sortedProducts;
    }
  }
};
</script>

<!-- <style>
.app {
  max-width: 1024px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style> -->
