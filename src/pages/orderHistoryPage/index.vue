<template>
  <div class="orders">
    <div class="orders__wrapper">
      <div class="orders__header">
          <img
              src="https://yastatic.net/s3/eda-front/www/assets/desktop.back.f12112a002a623ccef71.svg"
              class="header-action__img"
              alt="Изображение кнопки назад"
          >
          <span
              class="orders__header-action-back-span"
              @click="$router.push('/shop')"
          >
            Назад
          </span>
      </div>
      <h2 class="orders__title">Мои заказы</h2>
      <div class="orders__content">
        <div
            class="orders__history"
            v-if="listOfOrders"
        >
          <div
              class="orders__history-product-list"
              v-for="order of listOfOrders"
              :key="order.id"
              @click="getSelectedOrder(order.productsInOrder, order.totalPrice)"
          >
            <div class="orders__history-product">
              <div class="orders__history-product-header">
                <div class="orders__history-product-header-info-leftside">
                  <div class="orders__history-product-header-info-leftside-title">Му-Му</div>
                  <div class="orders__history-product-header-info-leftside-date">14 сентября 14:32</div>
                </div>
                <div class="orders__history-product-header-info-rightside">
                  <span class="orders__history-product-header-info-rightside-price">{{ order.totalPrice.toFixed(0) }} ₽</span>
                  <div class="orders__history-product-header-info-rightside-status">отменён</div>
                </div>
              </div>
              <div
                  class="orders__history-product-content"
                  v-for="product in order.productsInOrder"
                  :key="product.id"
              >
                <img
                    class="orders__history-product-content-img"
                    :src="productsWithId[product.id]?.image"
                    alt="Картинка продукта"
                >
                <div class="orders__history-product-content-title">{{ productsWithId[product.id]?.title }}</div>
              </div>
            </div>
          </div>
        </div>
        <div
            class="orders__empty"
            v-else
        >
          <h2 class="orders__empty-title">У вас еще не было ни одного заказа</h2>
        </div>
        <div class="orders__info-latest">
          <h2 class="orders__info-latest-header-title">Последний заказ</h2>
          <div class="orders__info-latest-header">
            <div class="orders__info-latest-header-number">№231233-131</div>
            <div class="orders__info-latest-header-date">Заказ создан 10 сентября, 15:46</div>
          </div>
          <div class="orders__info-address-title">Адрес</div>
          <div class="orders__info-address">Российская Федерация, Москва, улица Арбат, 26</div>
          <div class="orders__info-line"></div>
          <div class="orders__info-composition-title">Состав заказа</div>
          <div
              class="orders__info-composition"
              v-for="product in productsInLastOrder"
              :key="product.id"
          >
            <img
                class="orders__info-composition-product-img"
                :src="productsWithId[product.id]?.image"
                alt="Картинка товара"
            >
            <div class="orders__info-composition-product-title">{{ productsWithId[product.id]?.title }}
              <span>{{ product.quantity }} шт</span>
            </div>
            <div class="orders__info-composition-product-price">{{ productsWithId[product.id]?.price.toFixed(0) }} ₽</div>
          </div>
          <div class="orders__info-line"></div>
          <div class="orders__info-footer-title">Оплата</div>
          <div class="orders__info-footer-prices">
            <div class="orders__info-footer-price-product">
              Стоимость товаров
              <span>{{totalPriceInLastOrder.toFixed(0)}} ₽</span>
            </div>
            <div class="orders__info-footer-price-delivery">
              Стоимость доставки
              <span>₽</span>
            </div>
            <div class="orders__info-footer-price-service">
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
  computed, ref
} from "vue";
import store from "@/store";
import product from "../../components/Product/index.vue";

export default {
  name: 'ordersPage',
  computed: {
    product() {
      return product
    }
  },
  setup() {
    const ordersList = JSON.parse(localStorage.getItem('Orders') as string);

    const IDIsAuthUser = JSON.parse(localStorage.getItem('isAuth') as string);

    const productsWithId = computed(() => store.getters['products/productsWithID']);

    const listOfOrders = ordersList?.filter((product: {ID: number}) => product.ID === IDIsAuthUser?.userIsAuth);

    const productsInLastOrder = ref(listOfOrders[0].productsInOrder);

    const totalPriceInLastOrder = ref(listOfOrders[0].totalPrice);
    const getSelectedOrder = (product: [], totalPrice: number) => {
      if (productsInLastOrder.value) {
        productsInLastOrder.value = [];
        productsInLastOrder.value = product;
        totalPriceInLastOrder.value = totalPrice;
      } else {
        productsInLastOrder.value = product;
      }
    };

    return {
      listOfOrders,
      productsWithId,
      getSelectedOrder,
      productsInLastOrder,
      totalPriceInLastOrder
    }
  }
}

</script>

<style lang="scss" src="./styles.scss" scoped></style>