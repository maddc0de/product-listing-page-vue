<template>
  <div class="hover:text-indigo-500 hover:border hover:border-indigo-500 border border-transparent">
    <img :src="product.image" />
    <p class="p-2 font-semibold">
      <span> {{ product.brand }}</span>
      {{ product.name }}
    </p>
    <p class="pl-2 pb-2 font-bold"> 
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
