<template>
  <div class="sidebar-container">
    <!-- 로고 영역 -->
    <div class="logo">
      <!-- <img src="/logo.png" alt="Logo" class="logo-image" /> -->
      <span class="logo-text">My App</span>
    </div>

    <!-- 메뉴 영역 -->
    <el-menu
      class="el-menu-demo"
      mode="vertical"
      :default-active="activeIndex"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <!-- Level 1 -->
      <el-menu-item index="1">
        <el-icon><home /></el-icon>
        <span>Dashboard</span>
      </el-menu-item>

      <!-- Level 1 with Sub-menu -->
      <el-sub-menu index="2">
        <template #title>
          <el-icon><setting /></el-icon>
          <span>Management</span>
        </template>
        <!-- Level 2 -->
        <el-menu-item index="2-1">
          <el-icon><user /></el-icon>
          <span>User Management</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <el-icon><key /></el-icon>
          <span>Role Management</span>
        </el-menu-item>

        <!-- Level 2 with Sub-menu -->
        <el-sub-menu index="2-3">
          <template #title>
            <el-icon><lock /></el-icon>
            <span>Permission</span>
          </template>
          <!-- Level 3 -->
          <el-menu-item index="2-3-1">
            <el-icon><view /></el-icon>
            <span>View Permissions</span>
          </el-menu-item>
          <el-menu-item index="2-3-2">
            <el-icon><edit /></el-icon>
            <span>Edit Permissions</span>
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>

      <!-- Another Level 1 -->
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <span>Reports</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>

const activeIndex = ref('1'); // 기본 활성화된 메뉴

const handleSelect = (key: string) => {
  console.log('Selected menu item:', key);
  // 선택된 메뉴에 따른 로직 추가 가능
};
</script>

<style>
.sidebar-container {
  width: 250px;
  min-height: 100vh;
  background-color: #545c64;
  display: flex;
  flex-direction: column;
}

.logo {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #2c2f33;
  color: #fff;
}

.logo-image {
  height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-size: 18px;
  font-weight: bold;
}

.el-menu-demo {
  flex: 1;
}
</style>
