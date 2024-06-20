<template>
  <div>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 1 }">
        <p>header</p>
      </a-layout-header>
      <a-layout>
        <!-- <a-layout-sider width="200" style="background: #fff">
          <p>sider</p>
        </a-layout-sider> -->
        <a-layout style="padding: 0 24px 24px">
          <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
          <a-layout-content :style="{ background: '#fff', padding: '4px', margin: 0 }">
            <slot />
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>
