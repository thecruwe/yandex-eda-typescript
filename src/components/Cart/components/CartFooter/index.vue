<template>
  <router-view></router-view>
    <div
        class="cart__footer"
        v-if="!cart?.length"
    >
        <div class="cart__footer__bottom-img">
        </div>
        <div class="cart__footer-info">
            <div class="cart__footer-info-title">Бесплатная доставка от 600 ₽ · 25–35 мин</div>
            <div class="cart__footer-info-subtitle">Подробные условия</div>
        </div>
        <svg class="cart__footer-info-svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#9E9B98"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm.5 7a.5.5 0 0 1-.5-.5V10a.5.5 0 0 0-.5-.5H10v1h.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5H10v1h4v-1h-.5Z" fill="currentColor"></path></svg>
    </div>
    <div
        class="cart__footer-price"
        v-if="cart?.length"
    >
        <div class="cart__footer-price-info">
            <div class="cart__footer-price-bottom-img">            
            </div>
            <div class="cart__footer-price-info-text">
                <div class="cart__footer-price-info-title">Доставка 167₽</div>
                <div class="cart__footer-price-info-subtitle">До бесплатной доставки 1₽</div>
            </div>
        <svg class="cart__footer-info-svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#9E9B98"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm.5 7a.5.5 0 0 1-.5-.5V10a.5.5 0 0 0-.5-.5H10v1h.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5H10v1h4v-1h-.5Z" fill="currentColor"></path></svg>
        </div>
        <div
            class="cart__footer-price-action"
            v-if="cart.length"
        >
            <router-link to="/offer" class="cart__footer-price-action-to-pay"><span>Верно, к оплате</span></router-link>
            <span>{{ totalSumm.toFixed(0) }}₽</span>
        </div>
    </div>
</template>

<script>

import {
  computed
} from "vue";
import store from "@/store";

export default {
  name: 'CartFooter',

  setup() {
    const cart = computed(() => store.getters['cart/cart']);

    const totalSumm = computed(() => store.getters["cart/totalPriceInCart"]);

    return {
      cart,
      totalSumm
    }
  }
}

</script>

<style lang="scss" src="./styles.scss"></style>