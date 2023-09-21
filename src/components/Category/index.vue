<template>
    <div
        class="category"
        v-for="category in categories"
        :key="category.name"
    >
        <h2 class="category__title">{{ category.name }}</h2>
        <div class="category__products-list">
            <product
                v-for="productId in category.products"
                :key="productId"
                :productId='productId'
            />
        </div>
    </div>
</template>

<script>

import product from '@/components/Product';
import store from '@/store';
import {
  onMounted,
  computed,
} from 'vue';
export default {
  name: 'Category',
  components: { product },

  setup() {
    const categories = computed(() => store.getters['categories/categoriesWithProducts']);

    onMounted(() => {
      store.dispatch('categories/fetchCategories');
      store.dispatch('products/fetchProducts');
    })

    return {
      categories,
      product
    }
  }
}
</script>

<style lang="scss" src="./styles.scss"></style>
