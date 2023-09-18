<template>
    <div class="product">
        <img
            class="product__picture"
            :src="product.image"
        >
        <span class="product__price">{{ product.price.toFixed(0) }} ₽</span>
        <div class="product__title">{{ product.title }}</div>
        <div class="product__weight">Рейтинг: {{ product.rating.rate }}</div>
        <div
            class="product__action"
            v-if="!quantity"
            @click="addToCart"
        >
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="product__action-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6a1 1 0 0 0-1 1v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7a1 1 0 0 0-1-1Z" fill="currentColor"></path></svg>
            <span class="product__action-title">Добавить</span>
        </div>
        <div
            class="product__actions"
            v-else
        >
            <div
                class="product__actions-minus"
                @click="removeProductOneFromCart(productId)"
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 12a1 1 0 0 0 1 1h10a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1Z" fill="currentColor"></path></svg>
            </div>
            <div class="product__actions-span">{{ quantity }}</div>
            <div
                class="product__actions-plus"
                @click="addToCart"
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6a1 1 0 0 0-1 1v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7a1 1 0 0 0-1-1Z" fill="currentColor"></path></svg>
            </div>
        </div>
    </div>
</template>

<script>
import {
  computed,
} from 'vue';
import store from '@/store';

export default {
  name: 'CardProduct',
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const product = computed(() => productsWithId.value[props.productId]);

    const productsWithId = computed(() => store.getters['products/productsWithID']);

    const cart = computed(() => store.getters["cart/cart"]);

    const quantity = computed(() => store.getters["cart/productsInCart"][props.productId]);

    const addToCart = () => { //
        store.commit('cart/ADD_TO_CART', props.productId);
    };

    const removeProductOneFromCart = (elementID) => {
      store.commit('cart/REMOVE_PRODUCT_ONE_FROM_CART', elementID);
    };

    return {
      productsWithId,
      cart,
      product,
      addToCart,
      removeProductOneFromCart,
      quantity,
    };
  },
};
</script>

<style lang="scss" src="./styles.scss"></style>