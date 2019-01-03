<template>
  <b-col col lg="4" class="mb-2">
    <b-card :title="product.name"
            :img-src="product.images[0].src"
            :img-alt="product.images[0].alt"
            img-top
            tag="article">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>