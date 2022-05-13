<template>
  <div>
    <div
      class="lg:sr-only"
      :class="isShowMenuMobileOpen ? 'fixed bg-overlay w-full h-screen z-10' : 'sr-only'"
      @click="handleToggleMenu"
    ></div>
    <aside
      class="bg-primary w-[220px] h-screen lg:fixed lg:block py-4 lg:translate-x-0 transition-all ease-in-out duration-500 z-10"
      :class="isShowMenuMobileOpen ? 'fixed' : 'block fixed -translate-x-[220px]'"
    >
      <div
        class="fixed -right-12 mt-[2px] block lg:hidden rounded-full cursor-pointer"
        :class="isShowMenuMobileOpen ? 'left-[235px]' : ''"
      >
        <ic-menu
          class="text-display-md text-white hover:text-primary"
          @click="handleToggleMenu"
        />
      </div>

      <div class="block text-white-light px-2 mb-6">
        <nuxt-link to="/">
          <logo-ipsum />
        </nuxt-link>
      </div>

      <div class="flex flex-col justify-between h-[90%]">
        <accordion
          v-for="dataItem in dataAccordion"
          :key="dataItem.section"
        >
          <template #header>
            <div class="flex gap-2 items-center">
              <div v-html="dataItem.icon"></div>
              <span>{{ dataItem.section }}</span>
            </div>
          </template>
          <template #body>
            <accordion-item-link
              v-for="(item, index) in dataItem.content"
              :key="index"
              :to="item.link"
              :title="item.title"
            >
            </accordion-item-link>
          </template>
        </accordion>
        <ic-logout
          role="button"
          class="text-2xl ml-4 pointer-events-auto text-white-light"
          @click="logout"
        />
      </div>
    </aside>
  </div>
</template>
<script
  setup
  lang="ts"
>
  import IcLogout from '../../icons/IcLogout.vue';
  import { AuthServices } from '../../services/api';
  import IcMenu from './../../icons/IcMenu.vue';
  import LogoIpsum from './../../icons/LogoIpsum.vue';
  import { dataAccordion } from './dataSideNavbar';

  const isShowMenuMobileOpen = ref(false);

  const logout = () => {
    AuthServices.signOut();
  };

  const handleToggleMenu = () => {
    isShowMenuMobileOpen.value = !isShowMenuMobileOpen.value;
  };
</script>
