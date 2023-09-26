<template>
  <div class="preview">
    <div class="preview__logo">
      <img
          class="preview__logo-img"
          src="https://eda.yandex/images/3439767/60cc137523f6a8e0750404068edf6ecf-1100x825.jpg"
      >
    </div>
    <div class="preview__gradient">
    </div>
    <h1 class="preview__title">Му-Му</h1>
    <div class="preview__actions">
      <div class="preview__actions-delivery">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="preview__actions-svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="m17.809 4.45.67-.27a1.554 1.554 0 0 0 .958-1.649l-3.061.54a2.787 2.787 0 1 0 1.433 1.379Zm-14.68 6.293a2.914 2.914 0 0 1 2.694-1.56c.476.019 1.04.028 1.663.039 1.253.02 2.742.045 4.216.155.293 3.884-.856 6.327-2.552 7.923l-.3 2.1-5.2-.3.85-6.4-1.951-.847.58-1.11ZM8.85 19.4 8.6 21c.444 0 1.416.011 2.587.024h.001c1.768.02 3.985.046 5.512.046.366-1.189.665-2.414.915-3.76l1.76 3.763c.613-.485.92-.727 1.115-1.024a2.2 2.2 0 0 0 .36-1.296c-.014-.355-.152-.72-.427-1.453l-2.062-5.473c-.037-.097-.061-.162-.088-.21a.736.736 0 0 0-.132-.251c-.856-1.052-2.78-1.575-4.932-1.842.368 4.38-1.125 7.824-4.359 9.876Z"
                fill="currentColor"></path>
        </svg>
        <div class="preview__actions-description">
          <div class="preview__actions-title">35-40</div>
          <div class="preview__actions-subtitle">мин</div>
        </div>
      </div>
      <div class="preview__actions-rating">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="preview__actions-svg">
          <path
              d="m12 16-5.878 4.09 2.074-6.854L2.489 8.91l7.16-.146L12 2l2.351 6.764 7.16.146-5.707 4.326 2.074 6.854L12 16Z"
              fill="currentColor"></path>
        </svg>
        <div class="preview__actions-description">
          <div class="preview__actions-title">4.8</div>
          <div class="preview__actions-subtitle">200+</div>
        </div>
      </div>
      <div class="preview__actions-information">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             class="preview__actions-information-svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"></circle>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm.5 7a.5.5 0 0 1-.5-.5V10a.5.5 0 0 0-.5-.5H10v1h.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5H10v1h4v-1h-.5Z"
                fill="currentColor"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Preview',
  setup() {
    return {}
  }
}

</script>

<style lang="scss" src="./styles.scss"></style>