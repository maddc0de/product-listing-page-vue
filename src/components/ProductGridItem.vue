<template>
  <div>
    <img class="product-image" :src="product.image" />
    <p class="product-name">
      <span> {{ product.brand }}</span>
      {{ product.name }}
    </p>
    <p class="product-price"> 
      £{{ product.price }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProductGridItem',
  props: {
    product: { type: Object }
  }
}
</script>

<style scoped>


.product-image {
  width: 100%;
}
</style>
