<template>
  <router-view></router-view>
  <div
      class="cart-footer"
      v-if="!cart?.length"
  >
    <div class="cart-footer__img">
    </div>
    <div class="cart-footer__info">
      <div class="cart-footer__info-title">Бесплатная доставка от 600 ₽ · 25–35 мин</div>
      <div class="cart-footer__info-subtitle">Подробные условия</div>
    </div>
    <svg class="cart-footer__info-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#9E9B98"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm.5 7a.5.5 0 0 1-.5-.5V10a.5.5 0 0 0-.5-.5H10v1h.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5H10v1h4v-1h-.5Z" fill="currentColor"></path></svg>
  </div>
  <div
      class="cart-footer__payment"
      v-if="cart?.length"
  >
    <div class="cart-footer__payment-info">
      <div class="cart-footer__img"></div>
      <div class="cart-footer__payment-info-container">
        <div class="cart-footer__payment-info-title">Доставка 167₽</div>
        <div class="cart-footer__payment-info-subtitle">До бесплатной доставки 1₽</div>
      </div>
      <svg class="cart-footer__payment-info-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#9E9B98"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm.5 7a.5.5 0 0 1-.5-.5V10a.5.5 0 0 0-.5-.5H10v1h.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5H10v1h4v-1h-.5Z" fill="currentColor"></path></svg>
    </div>
    <div
        class="cart-footer__payment-action"
        v-if="cart.length"
        @click="acceptYourOrder"
    >
        <span>Верно, к оплате</span>
      <span>{{ totalPriceInCart }} ₽</span>
    </div>
  </div>
</template>

<script lang="ts">

import {
  computed
} from "vue";
import store from "@/store";
import router from "@/router";
import {TCartProduct} from "@/store/modules/cart/types";

export default {
  name: 'CartFooter',
  setup() {
    const cart = computed<TCartProduct[]>(() => store.getters['cart/cart']);

    const totalPriceInCart = computed<number>(() => store.getters["cart/totalPriceInCart"]);

    const acceptYourOrder = () => {
      const isAuthUser = JSON.parse(localStorage.getItem('isAuth') as string);
      if (isAuthUser) {
        router.push('/offer')
      } else {
        router.push('/sign')
      }
    }

    return {
      cart,
      totalPriceInCart,
      acceptYourOrder,
    }
  }
}

</script>

<style lang="scss" src="./styles.scss"></style>