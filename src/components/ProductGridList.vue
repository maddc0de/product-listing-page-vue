<template>
  <section>
    <p>{{ products.length }} Results</p>
    <ul>
      <li v-for="product in products" :key="product.name" class="product-grid-item">
        <ProductGridItem :product="product"/>
      </li>
    </ul>
  </section>
</template>

<script>
import ProductGridItem from './ProductGridItem.vue';
export default {
  name: 'ProductGridList',
  components: {
    ProductGridItem
  },
  props: {
    products: { type: Array, required: true }
  }
};
</script>

<!-- <style scoped>
ul.products-grid {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}

.product-grid-item {
  background: #ddebe8;
  min-width: 300px;
  margin: 10px;
}

</style> -->