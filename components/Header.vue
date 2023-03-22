<template>
  <header
    :class="isSticked ? 'lg:h-[120px] lg:py-[45px]' : 'lg:h-[80px] lg:py-[25px]'"
    class="flex w-full bg-bwa-blue justify-center fixed transition-all duration-500 z-[99999] h-[80px]"
  >
    <nav
      class="flex w-full lg:max-w-[1133px] xl:max-w-[1440px] items-center justify-between px-[25px] lg:px-[70px]"
    >
      <div class="ltr:pr-[30px] rtl:pl-[30px] w-full lg:w-auto">
        <div
          class="flex items-center justify-between w-full md:w-auto gap-[30px] flex-grow"
        >
          <nuxt-link :to="localePath('/')"
            ><img
              src="@/static/images/logo.svg"
              alt="Logo"
              class="h-[30px] min-h-[30px] w-auto"
          /></nuxt-link>
          <div class="text-white text-14">
            <div class="relative cursor-pointer">
              <div class="trigger">
                <div class="flex items-center">
                  <span>{{ localeCode.toUpperCase() }}</span>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzdfMjQzKSI+CjxwYXRoIGQ9Ik03LjQxIDguNTlMMTIgMTMuMTdMMTYuNTkgOC41OUwxOCAxMEwxMiAxNkw2IDEwTDcuNDEgOC41OVoiIGZpbGw9IiNmZmYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83XzI0MyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                    alt=""
                    class="h-[16px] w-auto inline"
                  />
                </div>
              </div>
              <div class="hidden absolute z-10 ltr:left-0 rtl:right-0 trigger-menu">
                <div
                  class="bg-bwa-blue py-[20px] flex flex-col gap-[10px] border border-bwa-gray-10"
                >
                  <nuxt-link
                    key="en"
                    :class="localeCode === 'en' ? 'opacity-60' : ''"
                    :to="switchLocalePath('en')"
                    class="px-[30px]"
                    >ENGLISH
                  </nuxt-link>
                  <div
                    class="h-[2px] border-b border-bwa-gray-10 mx-[10px]"
                  ></div>
                  <nuxt-link
                    key="ar"
                    :class="localeCode === 'ar' ? 'opacity-60' : ''"
                    :to="switchLocalePath('ar')"
                    class="px-[30px]"
                  >
                    <span>العربية</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center w-full justify-end">
        <div
          class="hidden lg:flex items-center gap-[40px] w-full ltr:border-l rtl:border-r border-white-washed ltr:pl-[30px] rtl:pr-[30px] justify-between text-16 text-white"
        >
          <div>
            <nuxt-link
              :to="localePath('/')"
              class="px-[16px] py-[10px] hover:bg-bwa-blue-active rounded-[8px] cursor-pointer"
              >{{ $t('header.business') }}</nuxt-link
            >
            <nuxt-link :to="localePath('/')" class="px-[16px] py-[10px] opacity-40"
              >{{ $t('header.personal') }}</nuxt-link
            >
          </div>
          <div class="flex justify-end flex-grow">
            <span
              class="px-[16px] py-[10px] hover:bg-bwa-blue-active rounded-[8px] cursor-pointer"
              >{{ $t('header.products') }}</span
            >
            <nuxt-link
              :to="localePath('/')"
              class="px-[16px] py-[10px] hover:bg-bwa-blue-active rounded-[8px] cursor-pointer"
              >{{ $t('header.about') }}</nuxt-link
            >
            <nuxt-link
              :to="localePath('/')"
              class="px-[16px] py-[10px] hover:bg-bwa-blue-active rounded-[8px] cursor-pointer"
              >{{ $t('header.login') }}</nuxt-link
            >
          </div>
          <div>
            <nuxt-link
              :to="localePath('/')"
              class="text-bwa-gray-100 bg-white py-[10px] px-[16px] rounded-[8px] whitespace-nowrap"
            >
            {{ $t('header.joinUs') }}
            </nuxt-link>
          </div>
        </div>
        <div class="lg:hidden">
          <a href="#" class="menu-togler">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzcwXzIzNTMpIj4KPHBhdGggZD0iTTQgMThIMjBDMjAuNTUgMTggMjEgMTcuNTUgMjEgMTdDMjEgMTYuNDUgMjAuNTUgMTYgMjAgMTZINEMzLjQ1IDE2IDMgMTYuNDUgMyAxN0MzIDE3LjU1IDMuNDUgMTggNCAxOFpNNCAxM0gyMEMyMC41NSAxMyAyMSAxMi41NSAyMSAxMkMyMSAxMS40NSAyMC41NSAxMSAyMCAxMUg0QzMuNDUgMTEgMyAxMS40NSAzIDEyQzMgMTIuNTUgMy40NSAxMyA0IDEzWk0zIDdDMyA3LjU1IDMuNDUgOCA0IDhIMjBDMjAuNTUgOCAyMSA3LjU1IDIxIDdDMjEgNi40NSAyMC41NSA2IDIwIDZINEMzLjQ1IDYgMyA2LjQ1IDMgN1oiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNzBfMjM1MyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
              class="h-[35px] w-auto"
            />
          </a>
        </div>
      </div>
    </nav>
    <div
      class="mobile-menu w-full bg-bwa-blue text-white fixed top-[80px] hidden"
    >
      <div class="w-full flex px-[16px] py-[10px] pb-[20px] gap-[20px]">
        <div class="flex flex-col">
          <nuxt-link :to="localePath('/')" class="px-[16px] py-[10px]">{{ $t('header.business') }}</nuxt-link>
          <nuxt-link :to="localePath('/')" class="px-[16px] py-[10px] opacity-40"
            >{{ $t('header.personal') }}</nuxt-link
          >
        </div>
        <div class="flex flex-col">
          <span class="px-[16px] py-[10px]">{{ $t('header.products') }}</span>
          <div class="flex flex-col px-[20px]">
            <nuxt-link :to="localePath('/')" class="px-[16px] py-[10px]">
              {{ $t('header.letterOfGuarantee') }}
            </nuxt-link>
            <nuxt-link :to="localePath('/')" class="px-[16px] py-[10px]"> {{ $t('header.accounts') }} </nuxt-link>
            <nuxt-link :to="localePath('/')" class="px-[16px] py-[10px]">
              {{ $t('header.paymentsAndTransfers') }}
            </nuxt-link>
          </div>
          <nuxt-link :to="localePath('/')" class="px-[16px] py-[10px]">{{ $t('header.about') }}</nuxt-link>
          <nuxt-link :to="localePath('/')" class="px-[16px] py-[10px]">{{ $t('header.login') }}</nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isSticked: null,
    }
  },
  computed: {
    localeCode() {
      return this.$i18n.locale;
    },
  },
  mounted() {
    document.querySelector('.menu-togler').onclick = () => {
      document.querySelector('.mobile-menu').classList.toggle('hidden')
    };
    document.querySelector('.trigger').onclick = () => {
      document.querySelector('.trigger-menu').classList.toggle('hidden')
    };
    window.addEventListener('scroll',() => {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      if (window.pageYOffset > 100 && width > 1023) {
          this.isSticked = false;
        } else {
          this.isSticked = true;
        }
    });
  },
}
</script>

<style></style>
