<template>
  <div class="container">
    <!-- 로고 영역 -->
    <div class="logo">
      <div class="logo-text">My App</div>
    </div>
    
    <div class="select-container">
      <div class="sidebar-container">
        <!-- 메뉴 영역 -->
        <el-menu
          class="el-menu-demo"
          mode="vertical"
          :default-active="activeMenu"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-sub-menu index="2">
            <template #title>
              <el-icon><setting /></el-icon>
              <span>Management</span>
            </template>
            <!-- Level 2 -->
                        <!-- Level 2 -->
            <el-menu-item v-for="menu in menuList" :key="menu" :index="menu.value">
              <el-icon><user /></el-icon>
              <span>{{ menu.label }}</span>
            </el-menu-item>
  
  
          </el-sub-menu>
          <!-- Another Level 1 -->
          <el-menu-item index="3">
            <el-icon><Platform /></el-icon>
            <span>FormSetting</span>
          </el-menu-item>
        </el-menu>
      </div>

    
      <div class="content">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'

// 각각 라우터 인스턴스와 현재 라우트에 접근하는 데 사용된다
const router = useRouter()
// const route = useRoute()

// 인코딩 문제로 추천되는 방식 - params는 name으로 보내야 인코딩이 된다

const activeMenu = ref<string>('1');
const menuList = ref<Array<{ label: string; value: string, icon: string}>>([
  { label: "User Management", value: "2-1", icon: "user"}
])

const handleSelect = (key: string) => {
  if(key === "3") {
    router.push('/formSetting')
  }
};
</script>

<style lang="scss" scoped>

.container {
  .logo {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    background-color: #545c64;
    color: #fff;
    .logo-text {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .select-container {
    display: flex;
    .sidebar-container {
      min-height: 100vh;
      display: flex;
    }
  
    .content {
      width: 100%;
      padding: 2rem;
    }
    
  }
}

</style>
