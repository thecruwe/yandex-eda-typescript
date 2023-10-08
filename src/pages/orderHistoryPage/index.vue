<template>
  <div class="orders">
    <div class="orders__wrapper">
      <div class="orders-header">
          <img
              src="https://yastatic.net/s3/eda-front/www/assets/desktop.back.f12112a002a623ccef71.svg"
              class="header-action__img"
              alt="Изображение кнопки назад"
          >
          <span
              class="header-action__span"
              @click="$router.push('/shop')"
          >
            Назад
          </span>
      </div>
      <h2 class="orders__title">Мои заказы</h2>
      <div class="orders__content">
        <div
            class="orders-history"
            v-if="listOfOrders"
        >
          <div
              class="order-list"
              v-for="order of listOfOrders"
              :key="order.id"
              @click="getSelectedOrder(order.productsInOrder, order.totalPrice, order.userAddress)"
          >
            <div class="product">
              <div class="product__header">
                <div class="product-header__container">
                  <div class="product__title">Му-Му</div>
                  <div class="product__date">14 сентября 14:32</div>
                </div>
                <div class="product-header__container">
                  <span class="product__price">{{ order.totalPrice.toFixed(0) }} ₽</span>
                  <div class="product__status">отменён</div>
                </div>
              </div>
              <div
                  class="product__content"
                  v-for="product in order.productsInOrder"
                  :key="product.id"
              >
                <img
                    class="product__content-img"
                    :src="productsWithId[product.id]?.image"
                    alt="Картинка продукта"
                >
                <div class="product__content-title">{{ productsWithId[product.id]?.title }}</div>
              </div>
            </div>
          </div>
        </div>
        <div
            class="order__empty"
            v-else
        >
          <h2 class="order__empty-title">У вас еще не было ни одного заказа</h2>
        </div>
        <div class="order-last">
          <h2 class="order-last__title">Последний заказ</h2>
          <div class="order-last__header">
            <div class="order-last__number">№231233-131</div>
            <div class="order-last__date">Заказ создан 10 сентября, 15:46</div>
          </div>
          <div class="order-address">Адрес</div>
          <div class="order-address__title">Российская Федерация, Москва, улица Арбат, дом , кв {{headerInfo.apartment}}, этаж {{headerInfo.floor}} </div>
          <div
              class="order-address__container"
              v-if="headerInfo.comment"
          >
            <span class="order-address__comment">Комментарий к заказу:</span>
            <span class="order-address__comment-title">{{headerInfo.comment}}</span>
          </div>
          <div class="order-line"></div>
          <div class="order__title">Состав заказа</div>
          <div
              class="order-composition"
              v-for="product in productsInLastOrder"
              :key="product.id"
          >
            <img
                class="order-product__img"
                :src="productsWithId[product.id]?.image"
                alt="Картинка товара"
            >
            <div class="order-product__title">{{ productsWithId[product.id]?.title }}
              <span>{{ product.quantity }} шт</span>
            </div>
            <div class="order-product__price">{{ productsWithId[product.id]?.price.toFixed(0) }} ₽</div>
          </div>
          <div class="order-line"></div>
          <div class="order-footer__title">Оплата</div>
          <div class="order-footer__prices">
            <div class="order-footer__price-product">
              Стоимость товаров
              <span>{{totalPriceInLastOrder?.toFixed(0)}} ₽</span>
            </div>
            <div class="order-footer__price-delivery">
              Стоимость доставки
              <span>100 ₽</span>
            </div>
            <div class="order-footer__price-service">
              Сервисный сбор
              <span>49 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, ref
} from "vue";
import store from "@/store";
import product from "../../components/Product/index.vue";
import header from "../../components/Header/index.vue";

export default {
  name: 'ordersPage',
  computed: {
    header() {
      return header
    },
    product() {
      return product
    }
  },
  setup() {
    const ordersList = JSON.parse(localStorage.getItem('Orders') as string);

    const IDIsAuthUser = JSON.parse(localStorage.getItem('isAuth') as string);

    const productsWithId = computed(() => store.getters['products/productsWithID']);

    const listOfOrders = ordersList?.filter((order: {id: number}) => order.id === IDIsAuthUser?.userIsAuth);

    const productsInLastOrder = ref(listOfOrders[0]?.productsInOrder);

    const totalPriceInLastOrder = ref(listOfOrders[0]?.totalPrice);

    const headerInfo = ref(listOfOrders[0]?.userAddress)
    const getSelectedOrder = (product: [], totalPrice: number, userAddress: {}) => {
      if (productsInLastOrder.value) {
        productsInLastOrder.value = [];
        productsInLastOrder.value = product;
        totalPriceInLastOrder.value = totalPrice;
        headerInfo.value = userAddress;
        console.log(headerInfo)
      } else {
        productsInLastOrder.value = product;
      }
    };

    return {
      listOfOrders,
      productsWithId,
      getSelectedOrder,
      productsInLastOrder,
      totalPriceInLastOrder,
      headerInfo
    }
  }
}

</script>

<style lang="scss" src="./styles.scss" scoped></style>