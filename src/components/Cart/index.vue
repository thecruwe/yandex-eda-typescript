<template>
    <div class="cart">
        <div class="cart__header">
            <h2 class="cart__header-title">Корзина</h2>
            <div
                class="cart__header-action-remove"
                v-if="cart.length"
                @click="removeFromCart"
            >
              Очистить
            </div>
        </div>
        <div class="cart__content" v-if="cart.length">
            <div
                class="cart__product-list"
                v-for="product in cart"
                :key="product.id"
            >
                <img
                    class="cart__product-img"
                    :src="productsWithId[product.id].image"
                >
                <div class="cart__product-info-container">
                    <span class="cart__product-title">{{ productsWithId[product.id].title }}</span>
                    <div class="cart__product-info">
                        <span class="cart__product-price">{{ productsWithId[product.id].price.toFixed(0) }} ₽</span>
                        <span class="cart__product-weight">{{ productsWithId[product.id].rating.rate }}</span>
                    </div>
                </div>
                <div class="cart__product-actions">
                        <div
                            class="cart__product-actions-minus"
                            @click="removeProductOneFromCart(product.id)"
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 12a1 1 0 0 0 1 1h10a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1Z" fill="currentColor"></path></svg>
                        </div>
                        <div class="cart__product-action-span">{{ product.quantity }}</div>
                        <div
                            class="cart__product-actions-plus"
                            @click="addToCart(product.id)"
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6a1 1 0 0 0-1 1v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7a1 1 0 0 0-1-1Z" fill="currentColor"></path></svg>
                        </div>
                </div>
            </div>
            <div class="cart__product-inner">
                    <span class="cart__product-inner-title">Работа сервиса</span>
                    <span class="cart__product-inner-price">48₽</span>
            </div>
        </div>
        <div
            class="cart__empty-block"
            v-if="!cart.length"
        >
            <img
                class="cart__empty-block-img"
                src="https://avatars.mds.yandex.net/get-bunker/61205/a11b38948b6d328e2f739d602fa36b15b2680ba8/svg"
            >
            <div class="cart__empty-block-title">В вашей корзине пока пусто</div>
        </div>
        <CartFooter />
    </div>
</template>

<script>

import CartFooter from "@/components/Cart/components/CartFooter";
import store from '@/store';
import {
  computed
} from "vue";

export default {
  name: 'Cart',
  components: { CartFooter },
  setup() {

    const cart = computed(() => store.getters['cart/cart']);

    const productsWithId = computed(() => store.getters['products/productsWithID']);

    const totalSumm = computed(() => store.getters['cart/totalPriceInCart']);
    const removeFromCart = () => {
      store.commit('cart/REMOVE_FROM_CART')
    };

    const addToCart = (elementID) => { //
      store.commit('cart/ADD_TO_CART', elementID);
    };

    const removeProductOneFromCart = (elementID) => {
      store.commit('cart/REMOVE_PRODUCT_ONE_FROM_CART', elementID);
    };

    return {
      cart,
      productsWithId,
      totalSumm,
      removeFromCart,
      addToCart,
      removeProductOneFromCart
    }
  }
}

</script>

<style lang="scss" src="./styles.scss"></style>
