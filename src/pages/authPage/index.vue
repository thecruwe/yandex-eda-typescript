<template>
  <div class="sign-in">
    <div class="sign-in__content">
        <router-link to="/">
          <div class="sign-in__action-to-back"></div>
        </router-link>
      <div class="sign-in__logo">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect width="24" height="24" rx="12" fill="#FC3F1D"></rect><path d="M13.6911 19.2125H16.1981V4.8125H12.5515C8.88415 4.8125 6.95724 6.69797 6.95724 9.47437C6.95724 11.6913 8.01393 12.9967 9.8994 14.3434L6.62573 19.2125H9.33998L12.9866 13.7633L11.7227 12.9138C10.1895 11.8778 9.44357 11.0698 9.44357 9.32933C9.44357 7.7961 10.521 6.76013 12.5722 6.76013H13.6911V19.2125Z" fill="white"></path></svg>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 0 6px 0 2px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C12.0461 0 11.0951 0.104993 10.1641 0.313082L10.7595 2.97645C6.16575 3.99878 2.73137 8.0983 2.73137 13C2.73137 18.6712 7.32881 23.2687 13.0001 23.2687C18.6713 23.2687 23.2687 18.6712 23.2687 13H26ZM13 0C20.1797 0 26 5.8203 26 13C26 12.0461 25.895 11.0951 25.6869 10.1641L23.0236 10.7595C22.0013 6.16571 17.9018 2.73129 13.0001 2.73129H13V0ZM12.9999 20.6856C16.163 20.6856 18.8798 18.7748 20.059 16.0446L17.5556 14.9532C16.7976 16.7188 15.0431 17.9554 12.9999 17.9554C10.9781 17.9554 9.23913 16.7447 8.46842 15.0087L5.96509 16.1001C7.15697 18.8007 9.85832 20.6856 12.9999 20.6856Z" fill="black"></path></svg>
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0611 19.9876V20H7.20852V0H13.157C14.7199 0 16.1616 0.17252 17.47 0.517559C18.7784 0.862598 19.9172 1.41713 20.8985 2.18114C21.8678 2.94516 22.631 3.96795 23.1762 5.22488C23.7214 6.49413 24 8.04681 24 9.88291C24 12.0641 23.5154 13.9125 22.5583 15.4035C21.6012 16.8946 20.2807 18.0406 18.6088 18.817C16.9369 19.5933 15.047 19.9876 12.939 19.9876H11.0611ZM11.0611 17.0548V2.93283H12.8178C14.2231 2.93283 15.4831 3.14232 16.5735 3.5613C17.6638 3.98028 18.524 4.70732 19.1419 5.7178C19.7597 6.74059 20.0747 8.10843 20.0747 9.83362C20.0747 11.4356 19.7597 12.7665 19.1297 13.8385C18.4998 14.9106 17.6154 15.7116 16.4887 16.2538C15.362 16.796 14.0535 17.0548 12.5634 17.0548H11.0611Z" fill="black"></path><path d="M3.81624 20V3.7456e-05H0V20H3.81624Z" fill="black"></path></svg>
      </div>
        <div class="sign-in__content-wrapper">
          <div class="sign-in__content-wrapper-actions">
            <div
                class="sign-in__content-wrapper-action-email"
                @click="switchSignInOrSignUp"
                :class="{active : isActive}"
            >
              Регистрация
            </div>
            <div
                class="sign-in__content-wrapper-action-password"
                @click="switchSignInOrSignUp"
                :class="{active : !isActive}"
            >
              Вход
            </div>
          </div>
          <div
              class="sign-in__content-wrapper-inputs"
              v-if="!isActive">
            <input
                v-model="inputEmail"
                class="sign-in__content-wrapper-input"
                placeholder="Введите почту"
            >
            <input
                v-model="inputPassword"
                class="sign-in__content-wrapper-input"
                placeholder="Введите пароль"
                type='password'
            >
          </div>
          <div
              class="sign-up__content-wrapper-inputs"
              v-else-if="isActive"
          >
            <input
                class="sign-up__content-wrapper-input-email"
                :class="{incorrectData: incorrectData === 'incorrectEmail'}"
                v-model="inputEmail"
                placeholder="Введите почту"
            >
            <input
                class="sign-up__content-wrapper-input-password"
                :class="{incorrectData: incorrectData === 'incorrectPassword'}"
                v-model="inputPassword"
                placeholder="Введите пароль"
                type='password'
            >
            <input
                class="sign-up__content-wrapper-input-password"
                :class="{incorrectData: incorrectData === 'incorrectPassword'}"
                v-model="inputPasswordRepeat"
                placeholder="Подтвердите пароль"
                type='password'
            >
        </div>
        </div>
            <div
              class="sign-in__content-action-sign-up"
              v-if="isActive"
              @click="signUp"
          >
              Зарегистрироваться
            </div>
          <div
              class="sign-in__content-action-sign-in"
              v-if="!isActive"
              @click="signIn"
          >
            Войти
          </div>
    </div>
  </div>
</template>

<script>

import {ref} from "vue";
import router from "@/router";

export default {
  name: 'signInPage',
  setup() {
    const isActive = ref(false);
    const incorrectData = ref('');
    const inputEmail = ref('');
    const inputPassword = ref('');
    const inputPasswordRepeat = ref('');
    const switchSignInOrSignUp = () => {
      isActive.value = !isActive.value;
    };

    const signUp = () => {
      const idUser = Math.random().toString(16).slice(2);
      const userInfo = {
        idUser: idUser,
        email: inputEmail.value,
        password: inputPassword.value,
      };
      const profilesOfUsers = localStorage.getItem("Users") ? JSON.parse(localStorage.getItem("Users")) : [];
      const foundEmail = profilesOfUsers.find((user) => user.email === inputEmail.value);
      if (inputPassword.value === inputPasswordRepeat.value && inputEmail.value.length > 5 && !foundEmail) {
        profilesOfUsers.unshift(userInfo);
        const isAuth = {
          userIsAuth: idUser
        };
        localStorage.setItem('Users', JSON.stringify(profilesOfUsers));
        localStorage.setItem('isAuth', JSON.stringify(isAuth));
        router.push('/shop');
      } else if (inputEmail.value.length < 5) {
        incorrectData.value = 'incorrectEmail';
        alert('Неправильная почта');
      } else if (inputPassword.value !== inputPasswordRepeat.value) {
        incorrectData.value = 'incorrectPassword';
        alert('Неправильный пароль');
      } else if (foundEmail) {
        incorrectData.value = 'incorrectEmail';
        alert('Данная почта уже используется');
      }
    };

    const signIn = () => {
      const userProfileInfo = JSON.parse(localStorage.getItem('Users'));
      const foundLog = userProfileInfo.find((profile) => profile.email === inputEmail.value);
      const foundPas = userProfileInfo.find((profile) => profile.password === inputPassword.value);
      const foundId = userProfileInfo.filter((profile) => profile.email === inputEmail.value);
      if (foundLog && foundPas) {
        const isAuth = {
          userIsAuth: foundId[0].idUser
        };
        localStorage.setItem('Users', JSON.stringify(userProfileInfo));
        localStorage.setItem('isAuth', JSON.stringify(isAuth));
        router.push('/shop');
      }
    };

    return {
      signUp,
      isActive,
      inputEmail,
      inputPassword,
      inputPasswordRepeat,
      switchSignInOrSignUp,
      incorrectData,
      signIn
    }
  }
}

</script>

<style lang="scss" src="./styles.scss" scoped>

</style>