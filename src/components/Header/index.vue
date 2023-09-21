<template>
    <div class="header">
        <div class="header__logo">
            <a 
            href="https://eda.yandex.ru/moscow?shippingType=delivery"
            >
              <img src="https://avatars.mds.yandex.net/get-bunker/994123/62e784df90b806d5d740ef444a393b528f3226bc/svg">
            </a>
        </div>
        <div class="header__address">
            <div class="header__address-action">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="header__address-svg"><path d="M18.529 6.125a.5.5 0 0 0-.654-.654L3.307 11.565a.5.5 0 0 0-.307.461v.196a.5.5 0 0 0 .32.466l5.76 2.232 2.223 5.76a.5.5 0 0 0 .467.32h.195a.5.5 0 0 0 .461-.307L18.53 6.125Z" fill="currentColor"></path></svg>
                <span class="header__address-span">Укажите адрес доставки</span>
            </div>
        </div>
        <div class="header__language">
            <svg viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg" class="header__language-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10Zm.002 18a.21.21 0 0 0 .077-.024c.06-.027.164-.089.303-.22.288-.27.638-.755.976-1.506.584-1.297 1.013-3.128 1.118-5.25h-4.952c.105 2.122.534 3.953 1.118 5.25.338.75.688 1.236.976 1.507.139.13.243.192.303.22.05.022.072.023.078.023h.003Zm-3.024-.59c-.804-1.62-1.343-3.876-1.456-6.41h-3.46a8.009 8.009 0 0 0 4.916 6.41ZM4.562 11h3.46c.113-2.534.652-4.79 1.456-6.41A8.008 8.008 0 0 0 4.562 11Zm10.96 8.41A8.008 8.008 0 0 0 20.438 13h-3.46c-.113 2.534-.652 4.79-1.456 6.41ZM20.438 11a8.008 8.008 0 0 0-4.916-6.41c.804 1.62 1.343 3.876 1.456 6.41h3.46Zm-7.94-7a.211.211 0 0 0-.077.024c-.06.027-.164.089-.303.22-.288.27-.638.755-.976 1.506-.584 1.297-1.013 3.128-1.118 5.25h4.952c-.105-2.122-.534-3.953-1.118-5.25-.338-.75-.688-1.236-.976-1.507a1.176 1.176 0 0 0-.303-.22.206.206 0 0 0-.078-.023h-.003Z" fill="currentColor"></path></svg>
            <span class="header__language-span">Русский</span>
        </div>
        <div
            class="header__total"
            v-if="cart.length"
        >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="header__total-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m11 7.5 5.207-5.207A1 1 0 0 1 16.914 2H18.5l-4.125 5.5H23.5l-.288 1.295a1.22 1.22 0 0 1-1.19.955.488.488 0 0 0-.478.389l-1.713 8.267A2 2 0 0 1 17.872 20H6.128a2 2 0 0 1-1.958-1.594l-1.714-8.267a.488.488 0 0 0-.478-.389 1.22 1.22 0 0 1-1.19-.955L.5 7.5H11Zm-5.5 3h2.708l.542 7H7.012a.5.5 0 0 1-.494-.424L5.5 10.5Zm5.146 0h2.708l-.27 7h-2.167l-.271-7Zm7.854 0h-2.708l-.542 7h1.738a.5.5 0 0 0 .494-.424L18.5 10.5Z" fill="currentColor"></path></svg>
            <span>{{ totalSumm.toFixed(0) }} ₽</span>
        </div>
      <router-link to="/orders"
                   style="text-decoration: none"
      ><div
          class="header__orders"
          v-if="isAuth"
      >
        Ваши заказы
      </div></router-link>
      <div
          class="header__sign-in"
          @click="$router.push('/sign')"
          v-if="!isAuth"
      >
        Войти
      </div>
      <div
        class="header__sign-in"
        @click="leaveFromAcc"
        v-else>
        Выйти
      </div>
    </div>
</template>

<script>

import store from '@/store';
import {
  computed
} from "vue";
import router from "@/router";

export default {
  name: 'Header',
  setup() {
    const cart = computed(() => store.getters['cart/cart']);
    const totalSumm = computed(() => store.getters["cart/totalPriceInCart"]);
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));

    const leaveFromAcc = () => {
      localStorage.removeItem('isAuth');
      router.push('/mainPage')
    }

    return {
      cart,
      totalSumm,
      isAuth,
      leaveFromAcc
    }
  }
}

</script>

<style lang="scss" src="./styles.scss"></style>