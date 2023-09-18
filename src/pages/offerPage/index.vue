<template>
  <div class="main-wrapper">
    <div class="offer__header">
      <div class="offer_header-action-to-back">
        <router-link to="/" class="header__action-to-back-router"><img src="https://yastatic.net/s3/eda-front/www/assets/desktop.back.f12112a002a623ccef71.svg" class="header__action-to-back-img">
        Назад</router-link>
      </div>
      <div class="header__logo">
        <img class="header__logo-img" src="https://avatars.mds.yandex.net/get-bunker/994123/62e784df90b806d5d740ef444a393b528f3226bc/svg">
      </div>
      <div class="header__profile">
<!--        картинка профиля после авторизации-->
      </div>
    </div>
    <div class="content">
      <h1 class="content__title">Вкусно и точка</h1>
      <div class="content__columns">
        <div class="content__left-columns">
          <div class="content__left-column-delivery-settings">
            <h2 class="content__left-column-delivery-settings-title">Условия доставки</h2>
            <div class="content__left-column-delivery-settings-actions">
            <div class="content__left-column-select-delivery-to-you" @click="changeMethodOfDelivery" :class="{active:delivery}">
              <h2 class="content__left-column-select-delivery-to-you-title">Доставка</h2>
              <span>109 ₽</span>
            </div>
            <div class="content__left-column-select-delivery-for-other" @click="changeMethodOfDelivery" :class="{active:!delivery}">
              <h2 class="content__left-column-select-delivery-for-other-title">Заказ другому</h2>
              <span>109 ₽</span>
            </div>
            </div>
            <div class="content__left-column-select-address">
              <img src="https://yastatic.net/s3/eda-front/www/assets/desktop.home.43bb9d03ab149cbcdd5f.svg" style="margin: -1px 6px 0 -1px">
              <span>улица Российская</span>
              <span style="margin-left: 4px">47</span>
              <img src="https://yastatic.net/s3/eda-front/www/assets/desktop.chevron.64415662ec95ae82661f.svg" class="content__left-column-select-address-img">
            </div>
            <div class="content__left-column-select-custom-address-input-for-other">
              <input class="content__left-column-select-custom-address-input" style="margin-right: 10px" placeholder="Кв./офис">
              <input class="content__left-column-select-custom-address-input" style="margin-right: 10px" placeholder="Домофон">
              <input class="content__left-column-select-custom-address-input" style="margin-right: 10px" placeholder="Подъезд">
              <input class="content__left-column-select-custom-address-input" placeholder="Этаж">
            </div>
            <input class="content__left-column-select-comment-input" placeholder="Комментарий к заказу">
            <div class="content__left-column-select-custom-address-input-for-other" v-if="!delivery">
              <input class="content__left-column-select-custom-address-input" style="margin-right: 10px" placeholder="Имя получателя">
              <input class="content__left-column-select-custom-address-input" placeholder="Номер телефона получателя">
            </div>
          </div>
          <div class="content__left-column-cart">
            <div class="content__left-column-cart-header">
              <h2>Ваш заказ</h2>
              <div class="content__left-column-cart-header-action">
                <img src="https://yastatic.net/s3/eda-front/www/assets/desktop.trash.e4a122e26252ac568700.svg" class="content__left-column-cart-header-action-img">
                <router-link to="/shop" style="text-decoration: none;"><span @click="removeFromCart" class="cart__action-to-clear-cart">Очистить корзину</span></router-link>
              </div>
            </div>
            <div class="content__left-column-cart-list">
              <div class="content__left-column-cart-product" v-for="product in cart" :key="product.id">
                <div class="content__left-column-cart-product-info">
                  <img class="content__left-column-cart-product-info-img" :src="productsWithId[product.id].image">
                <span>{{ productsWithId[product.id].title }}</span>
                  <div class="content__left-column-cart-product-info-rate">Рейтинг: {{ productsWithId[product.id].rating.rate }}</div>
                </div>
                <div class="content__left-column-cart-product-actions">
                  <div class="content__left-column-cart-product-action-minus" @click="removeProductOneFromCart(product.id)"></div>
                  <div class="content__left-column-cart-product-action-span">{{ product.quantity }}</div>
                  <div class="content__left-column-cart-product-action-plus" @click="addToCart(product.id)"></div>
                  <div class="content__left-column-cart-product-price">{{ (productsWithId[product.id].price * product.quantity).toFixed(0)}} ₽</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="content__right-column">
          <div class="content__right-column-header">
          <h2 class="content__right-column-header-title">Способ оплаты</h2>
          <div class="content__right-column-select-method-of-pay">
            <div class="content__right-column-select-method-of-pay-bank">
              <span>СПБ</span>
            </div>
            <div class="content__right-column-select-method-of-pay-edit">
              Изменить
            </div>
          </div>
          </div>
          <div class="content__right-column-order-info">
            <h2 class="content__right-column-order-info-title">Итого</h2>
            <div class="content__right-column-order-info-total-price">
              Стоимость товаров
              <span>{{ totalSumm.toFixed(0) }} ₽</span>
            </div>
            <div class="content__right-column-order-info-total-price-delivery">
              Доставка
              <span>0 ₽</span>
            </div>
            <div class="content__right-column-order-info-total-price-service">
              Работа сервиса
              <span>81 ₽</span>
            </div>
            <div class="content__right-column-order-info-action-to-pay">
              <router-link to="" class="action__pay" @click="mackingOrder()"><div>Оплатить</div></router-link>
              <span class="action-span">108 ₽</span>
            </div>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, ref} from "vue";
import store from "@/store";

export default {
  name: 'offerPage',
  setup() {
    const delivery = ref('false');

    const cart = computed(() => store.getters['cart/cart']);

    const productsWithId = computed(() => store.getters['products/productsWithID']);

    const totalSumm = computed(() => store.getters['cart/totalPriceInCart']);

    const mackingOrder = () => {
      const userId = JSON.parse(localStorage.getItem("isAuth"));
      const orders = {
        ID: userId.userIsAuth,
        productsInOrder: cart.value
      }
      const ordersFromUsers = localStorage.getItem("Orders") ? JSON.parse(localStorage.getItem("Orders")) : [];
      ordersFromUsers.push(orders);
      localStorage.setItem('Orders', JSON.stringify(ordersFromUsers));
    };
    const changeMethodOfDelivery = () => {
      delivery.value = !delivery.value;
    };
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
      removeProductOneFromCart,
      changeMethodOfDelivery,
      delivery,
      mackingOrder
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped>

</style>