<template>
  <section class="py-5">
    <p class="text-xs">{{ products.length }} Results</p>
    <ul class="grid gap-4 md:grid-cols-3 sm:grid-cols-2 place-items-center">
      <li v-for="product in products" :key="product.name" class="bg-plp-secondary">
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