<template>
  <div>
    <img :src="product.image" />
    <p>
      <span> {{ product.brand }}</span>
      {{ product.name }}
    </p>
    <p> 
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

<!-- <style scoped>
.product-image {
  width: 100%;
}
</style> -->
