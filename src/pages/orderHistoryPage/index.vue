<template>
  <div class="orders">
    <div class="header">
      <router-link to="/" class="header__action-to-back-router">
        <img
            src="https://yastatic.net/s3/eda-front/www/assets/desktop.back.f12112a002a623ccef71.svg"
            class="header__action-to-back-img"
            alt="Изображение стрелки назад"
        >
        Назад
      </router-link>
    </div>
    <div class="container">
      <h2 class="orders__title">Мои заказы</h2>
      <div class="orders__container">
        <div class="orders__history">
          <div
              class="orders__list"
              v-for="order of listOfOrders"
              :key="order"
              @click="showMeUrId(order.productsInOrder)"
          >
            <div class="orders__product">
              <div class="orders__product-header">
                <div class="orders__product-header-order-info">
                  <div class="orders__product-header-order-title">Му-Му</div>
                  <div class="orders__product-header-order-date">14 сентября 14:32</div>
                </div>
                <div class="orders__product-header-delivery-info">
                  <span class="orders__product-header-delivery-info-price">{{ order.totalPrice }} ₽</span>
                  <div class="orders__product-header-delivery-info-status">отменён</div>
                </div>
              </div>
              <div
                  class="orders__product-content"
                  v-for="product in order.productsInOrder"
                  :key="product.ID"
              >
                {{ product }}
                <img
                    class="orders__product-content-img"
                    :src="productsWithId[product.id].image"
                    alt="Картинка продукта"
                >
                <div class="orders__product-content-title">{{ productsWithId[product.id].title }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="orders__info">
          <h2 class="orders__info-header-title">Последний заказ</h2>
          <div class="orders__info-header">
            <div class="orders__info-header-number">№231233-131</div>
            <div class="orders__info-header-date">Заказ создан 10 сентября, 15:46</div>
          </div>
          <div class="orders__info-address-title">Адрес</div>
          <div class="orders__info-address">Российская Федерация, Москва, улица Арбат, 26</div>
          <div class="orders__info-line"></div>
          <div class="orders__info-composition-title">Состав заказа</div>
          <div class="orders__info-composition">
            <img
                class="orders__info-composition-img"
            >
            <div class="orders__info-composition-title">{{ massiv }}
              <span></span>
            </div>
            <div class="orders__info-composition-price"></div>
          </div>
          <div class="orders__info-line"></div>
          <div class="orders__info-pay">Оплата</div>
          <div class="orders__info-about-price">
            <div class="orders__info-about-price-items">
              Стоимость товаров
              <span>₽</span>
            </div>
            <div class="orders__info-about-price-delivery">
              Стоимость доставки
              <span>₽</span>
            </div>
            <div class="orders__info-about-price-total">
              Сервисный сбор
              <span>₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed
} from "vue";
import store from "@/store";

export default {
  name: 'ordersPage',
  setup() {
    const ordersList = JSON.parse(localStorage.getItem('Orders') as string);

    const isAuthId = JSON.parse(localStorage.getItem('isAuth') as string);

    const productsWithId = computed(() => store.getters['products/productsWithID']);

    const listOfOrders = ordersList?.filter((product: any) => product.ID === isAuthId.userIsAuth);

    const massiv: any = [];
    const showMeUrId = (product:any) => {
      if (massiv) {
        massiv.shift()
        product.forEach((item:any) => {
          massiv.push(item);
        });
      } else {
        massiv.push(product)
      }
      console.log(product)
      console.log(massiv);
    }
    return {
      listOfOrders,
      productsWithId,
      showMeUrId,
      massiv,
    }
  }
}

</script>

<style lang="scss" src="./styles.scss" scoped></style>