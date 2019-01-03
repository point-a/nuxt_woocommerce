<template>
  <section class="container">
    <ListProduct :products="$store.state.products"/>
  </section>
</template>

<script>
import ListProduct from '~/components/Product/ListProduct'

export default {
  components: {
    ListProduct
  }
}
</script>
