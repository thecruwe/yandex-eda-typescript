<template>
  <div class="checkout">
    <div class="checkout__header">
      <div
          class="header-action"
          @click="$router.push('/shop')"
      >
        <img
            src="https://yastatic.net/s3/eda-front/www/assets/desktop.back.f12112a002a623ccef71.svg"
            class="header-action__img"
            alt="Картинка кнопки назад"
        >
        Назад
      </div>
      <div class="header-logo">
        <img
            class="header-logo__img"
            src="https://avatars.mds.yandex.net/get-bunker/994123/62e784df90b806d5d740ef444a393b528f3226bc/svg"
            alt="Картинка логотипа ЯЕ"
        >
      </div>
      <div class="header-profile">
        <!--картинка профиля после авторизации в разработке-->
      </div>
    </div>
    <div class="checkout__wrapper">
      <div class="checkout__content">
        <h1 class="checkout__title">Вкусно и точка</h1>
        <div class="checkout__columns">
          <div class="checkout-left-columns">
            <div class="left-column__delivery-settings">
              <h2 class="delivery-settings__title">Условия доставки</h2>
              <div class="delivery-settings__actions">
                <div
                    class="delivery-settings-action"
                    @click="changeMethodOfDelivery"
                    :class="{active:delivery}"
                >
                  <h2 class="delivery-settings-action__title">Доставка</h2>
                  <span>109 ₽</span>
                </div>
                <div
                    class="delivery-settings-action"
                    @click="changeMethodOfDelivery"
                    :class="{active:!delivery}"
                >
                  <h2 class="delivery-settings-action__title">Заказ другому</h2>
                  <span>109 ₽</span>
                </div>
              </div>
              <div class="address">
                <img
                    src="https://yastatic.net/s3/eda-front/www/assets/desktop.home.43bb9d03ab149cbcdd5f.svg"
                    class="address-img-home"
                    alt="Картинка адреса"
                >
                <span class="address__street">улица Российская</span>
                <span class="address__number">47</span>
                <img
                    src="https://yastatic.net/s3/eda-front/www/assets/desktop.chevron.64415662ec95ae82661f.svg"
                    class="address-img-arrow"
                    alt="Картинка стрелки адреса"
                >
              </div>
              <div class="delivery-inputs">
                <input
                    class="delivery-input delivery-input_margin"
                    placeholder="Кв./офис"
                >
                <input
                    class="delivery-input delivery-input_margin"
                    placeholder="Домофон"
                >
                <input
                    class="delivery-input delivery-input_margin"
                    placeholder="Подъезд"
                >
                <input
                    class="delivery-input"
                    placeholder="Этаж"
                >
              </div>
              <input
                  class="delivery-input delivery-input_long"
                  placeholder="Комментарий к заказу"
              >
              <div
                  class="delivery-inputs"
                  v-if="!delivery"
              >
                <input
                    class="delivery-input delivery-input_margin"
                    placeholder="Имя получателя"
                >
                <input
                    class="delivery-input"
                    placeholder="Номер телефона получателя"
                >
              </div>
            </div>
            <div class="left-column-cart">
              <div class="left-column-cart__header">
                <h2>Ваш заказ</h2>
                <div
                    class="cart-clear-action"
                    @click="removeFromCart"
                >
                  <img
                      src="https://yastatic.net/s3/eda-front/www/assets/desktop.trash.e4a122e26252ac568700.svg"
                      alt="Картинка корзины"
                  >
                  <span class="cart-clear-action__span">Очистить корзину</span>
                </div>
              </div>
              <div class="cart-list">
                <div
                    class="cart-product"
                    v-for="product in cart"
                    :key="product.id"
                >
                  <div class="cart-product__info">
                    <img
                        class="cart-product__img"
                        :src="productsWithId[product.id].image"
                        alt="Картинка продукта"
                    >
                    <span class="cart-product__title">{{ productsWithId[product.id].title }}</span>
                    <div class="cart-product__rate">Рейтинг: {{ productsWithId[product.id].rating.rate }}</div>
                  </div>
                  <div class="cart-product__actions">
                    <div
                        class="product-action__minus"
                        @click="removeProductOneFromCart(product.id)"
                    >
                    </div>
                    <div class="product-action__span">{{ product.quantity }}</div>
                    <div
                        class="product-action__plus"
                        @click="addOneProductToCart(product.id)"
                    >
                    </div>
                    <div class="product__price">{{ (productsWithId[product.id].price * product.quantity).toFixed(0) }} ₽</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="checkout-right-column">
            <div class="right-column__header">
              <h2 class="right-column__title">Способ оплаты</h2>
              <div class="right-column__method-of-pay">
                <div class="right-column__select-bank">
                  <span>СПБ</span>
                </div>
                <div class="right-column__action-edit">Изменить</div>
              </div>
            </div>
            <!--          объявляю новый блок - info-order на уровне этого блока и потом использую его-->
            <div class="right-column__order-info info-order">
              <h2 class="info-order__title">Итого</h2>
              <div class="info-order__total-price">
                <span>Стоимость товаров</span>
                <span>{{ totalPriceInCart.toFixed(0) }} ₽</span>
              </div>
              <div class="info-order__price-delivery">
                <span>Доставка</span>
                <span>0 ₽</span>
              </div>
              <div class="info-order__price-service">
                <span>Работа сервиса</span>
                <span>81 ₽</span>
              </div>
              <div class="info-order-footer">
                <div
                    class="info-order__action"
                    @click="creatingAnOrder()"
                >
                  <span>Оплатить</span>
                </div>
                <span class="info-order__action-span">{{ totalPriceInCart.toFixed(0) }} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ref,
} from "vue";
import store from "@/store";
import router from "@/router";
import {TCartProduct} from "@/store/modules/cart/types";
import {TProductsWithId} from "@/store/modules/products/types";

export default {
  name: 'offerPage',
  setup() {
    const delivery = ref(true);

    const cart = computed<TCartProduct[]>(() => store.getters['cart/cart']);

    const productsWithId = computed<TProductsWithId>(() => store.getters['products/productsWithID']);

    const totalPriceInCart = computed<number>(() => store.getters['cart/totalPriceInCart']);

    const creatingAnOrder = () => {
      const userId = JSON.parse(localStorage.getItem("isAuth") as string);
      const orders = {
        id: userId.userIsAuth,
        productsInOrder: cart.value,
        totalPrice: totalPriceInCart.value,
      }
      const ordersFromUsers = localStorage.getItem("Orders") ?
          JSON.parse(localStorage.getItem("Orders") as string) : [];
      ordersFromUsers.unshift(orders);
      localStorage.setItem('Orders', JSON.stringify(ordersFromUsers));
      router.push('/shop');
      removeFromCart();
    };
    const changeMethodOfDelivery = () => {
      delivery.value = !delivery.value;
    };
    const removeFromCart = () => {
      store.commit('cart/REMOVE_FROM_CART')
      router.push('/shop');
    };

    const addOneProductToCart = (productID: number) => { //
      store.commit('cart/ADD_PRODUCT_TO_CART', productID);
    };

    const removeProductOneFromCart = (productID: number) => {
      store.commit('cart/REMOVE_PRODUCT_ONE_FROM_CART', productID);
    };

    return {
      cart,
      productsWithId,
      totalPriceInCart,
      removeFromCart,
      addOneProductToCart,
      removeProductOneFromCart,
      changeMethodOfDelivery,
      delivery,
      creatingAnOrder
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>