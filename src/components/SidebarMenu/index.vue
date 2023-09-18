<template>
    <div class="sidebar-menu">
        <div class="menu__action">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="menu__action-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m7.8 11 5.246-5.246a.5.5 0 0 0 0-.708l-.692-.692a.5.5 0 0 0-.708 0L4 12l7.646 7.646a.5.5 0 0 0 .708 0l.692-.692a.5.5 0 0 0 0-.708L7.8 13h11.7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H7.8Z" fill="currentColor"></path></svg>
            <span class="menu__action-span">Все рестораны</span>
        </div>
        <h1 class="sidebar-menu__title">Меню</h1>
        <ul>
            <li class="sidebar-menu__item active">Салаты и закуски</li>
            <li class="sidebar-menu__item">Паста</li>
            <li class="sidebar-menu__item">Суши-бар</li>
            <li class="sidebar-menu__item">Горячие блюда</li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'SideBarMenu',
  setup() {
    return {

    }
  }
}

</script>

<style lang="scss" src="./styles.scss"></style>