<template>
  <div class="checkout">
    <div class="checkout-header">
      <div
          class="header-action"
          @click="$router.push('/shop')"
      >
        <img
            :src="icons.actionBack"
            class="header-action__img"
            alt="Картинка кнопки назад"
        >
        Назад
      </div>
      <div class="header-logo">
        <img
            class="header-logo__img"
            :src="icons.logoYE"
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
                    :src="icons.addressPic"
                    class="address-img-home"
                    alt="Картинка адреса"
                >
                <span class="address__street">улица Российская</span>
                <span class="address__number">47</span>
                <img
                    :src="icons.arrowPic"
                    class="address-img-arrow"
                    alt="Картинка стрелки адреса"
                >
              </div>
              <div class="delivery-inputs">
                <input
                    class="delivery-input delivery-input_margin"
                    placeholder="Кв./офис"
                    v-model="inputApartment"
                >
                <input
                    class="delivery-input delivery-input_margin"
                    placeholder="Домофон"
                    v-model="inputIntercom"
                >
                <input
                    class="delivery-input delivery-input_margin"
                    placeholder="Подъезд"
                    v-model="inputEntrance"
                >
                <input
                    class="delivery-input"
                    placeholder="Этаж"
                    v-model="inputFloor"
                >
              </div>
              <input
                  class="delivery-input delivery-input_long"
                  placeholder="Комментарий к заказу"
                  v-model="inputComment"
              >
              <div
                  class="delivery-inputs"
                  v-if="!delivery"
              >
                <input
                    class="delivery-input delivery-input_margin"
                    placeholder="Имя получателя"
                    v-model="inputReceiverName"
                >
                <input
                    class="delivery-input"
                    placeholder="Номер телефона получателя"
                    v-model="inputReceiverPhone"
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
                      :src="icons.cartPic"
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
                        @click="removeProductOneFromCart(product.id, product.quantity)"
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
                <span>49 ₽</span>
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
import icons from "@/icons";

export default {
  name: 'offerPage',
  setup() {
    const delivery = ref(true);

    const cart = computed<TCartProduct[]>(() => store.getters['cart/cart']);

    const productsWithId = computed<TProductsWithId>(() => store.getters['products/productsWithID']);

    const totalPriceInCart = computed<number>(() => store.getters['cart/totalPriceInCart']);

    const inputApartment = ref('');

    const inputIntercom = ref('');

    const inputEntrance = ref('');

    const inputFloor = ref('');

    const inputComment = ref('');

    const inputReceiverName = ref('');

    const inputReceiverPhone = ref('');

    const creatingAnOrder = () => {
      const userId = JSON.parse(localStorage.getItem("isAuth") as string);
      const orders = {
        id: userId.userIsAuth,
        productsInOrder: cart.value,
        totalPrice: totalPriceInCart.value,
        userAddress: {
          apartment: inputApartment.value,
          intercom: inputIntercom.value,
          entrance: inputEntrance.value,
          floor: inputFloor.value,
          comment: inputComment.value,
          receiverName: inputReceiverName.value,
          receiverPhone: inputReceiverPhone.value
        }
      }
      console.log(Object.values(orders.userAddress))
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

    const removeProductOneFromCart = (productID: number, quantity: number) => {
      store.commit('cart/REMOVE_PRODUCT_ONE_FROM_CART', productID);
      if (quantity === 1) {
        router.push('/shop');
      }
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
      creatingAnOrder,
      inputApartment,
      inputIntercom,
      inputEntrance,
      inputFloor,
      inputComment,
      inputReceiverName,
      inputReceiverPhone,
      icons
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>