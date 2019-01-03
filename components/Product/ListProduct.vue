<template>
  <b-card-group deck>
    <CardProduct v-for="product in products" :key="product.id" :product="product"/>
  </b-card-group>
</template>

<script>
import CardProduct from '~/components/Product/CardProduct'

export default {
  components: {
    CardProduct
  },
  props: {
    products: Array
  }
}
</script>