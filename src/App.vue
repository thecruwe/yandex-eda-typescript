<template>
  <div class="main-wrapper">
    <Header />
    <div class="content">
      <sidebarMenu />
      <div class="main-block">
        <preview />
        <category />
      </div>
      <div class="sidebar-right">
        <cart />
      </div>
    </div>
  </div>
  <router-view />
</template>

<script setup>

import Header from './components/Header'
import SidebarMenu from './components/SidebarMenu'
import Preview from './components/Preview'
import Cart from './components/Cart'
import Category from './components/Category'

</script>

<style>
@font-face {
  font-family: 'Arimo', sans-serif;
  src: url('https://fonts.googleapis.com');
  src: url('https://fonts.gstatic.com');
  src: url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;700&display=swap');
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Arimo', sans-serif;
}

.main-wrapper{
  background-color: #f5f4f2;
  display: flex;
  position: fixed;
  flex-direction: column;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.content {
  display: flex;
  flex-grow: 1;
  overflow-y: auto;
  padding: 22px 6px;
  margin: auto;
}

.content::-webkit-scrollbar {
  width: 0;
}

.contant-container {
  justify-content: center;
  padding: 22px 6px;
  margin-left: 10px;
  max-width: 1873px;
  min-width: 1200px;
}

.sidebar-right {
  position: sticky;
  top: 0px;
  width: 320px;
  margin-left: 32px;
  margin-bottom: -22px;
}

</style>
