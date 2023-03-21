<template>
  <header
    class="flex w-full bg-bwa-blue justify-center fixed transition-all duration-500 z-[99999] h-[80px] lg:h-[80px] lg:py-[25px]"
  >
    <nav
      class="flex w-full lg:max-w-[1133px] xl:max-w-[1440px] items-center justify-between px-[25px] lg:px-[70px]"
    >
      <div class="ltr:pr-[30px] rtl:pl-[30px] w-full lg:w-auto">
        <div
          class="flex items-center justify-between w-full md:w-auto gap-[30px] flex-grow"
        >
          <n-link to="/" class="nuxt-link-exact-active nuxt-link-active"
            ><img
              data-v-ff73bed6=""
              src="@/static/images/logo.svg"
              alt="Logo"
              class="h-[30px] min-h-[30px] w-auto"
          /></n-link>
          <div class="text-white text-14">
            <div class="relative cursor-pointer">
              <div class="trigger">
                <div class="flex items-center">
                  <span>EN</span>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzdfMjQzKSI+CjxwYXRoIGQ9Ik03LjQxIDguNTlMMTIgMTMuMTdMMTYuNTkgOC41OUwxOCAxMEwxMiAxNkw2IDEwTDcuNDEgOC41OVoiIGZpbGw9IiNmZmYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83XzI0MyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                    alt="En"
                    class="h-[16px] w-auto inline"
                  />
                </div>
              </div>
              <!---->
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center w-full justify-end">
        <div
          class="hidden lg:flex items-center gap-[40px] w-full ltr:border-l rtl:border-r border-white-washed ltr:pl-[30px] rtl:pr-[30px] justify-between text-16 text-white"
        >
          <div>
            <n-link
              to="/"
              class="px-[16px] py-[10px] hover:bg-bwa-blue-active rounded-[8px] cursor-pointer"
              >Business</n-link
            >
            <n-link to="/" class="px-[16px] py-[10px] opacity-40"
              >Personal</n-link
            >
          </div>
          <div class="flex justify-end flex-grow">
            <span
              class="px-[16px] py-[10px] hover:bg-bwa-blue-active rounded-[8px] cursor-pointer"
              >Products</span
            >
            <n-link
              to="/"
              class="px-[16px] py-[10px] hover:bg-bwa-blue-active rounded-[8px] cursor-pointer"
              >About</n-link
            >
            <n-link
              to="/"
              class="px-[16px] py-[10px] hover:bg-bwa-blue-active rounded-[8px] cursor-pointer"
              >Login</n-link
            >
          </div>
          <div>
            <n-link
              to="/"
              class="text-bwa-gray-100 bg-white py-[10px] px-[16px] rounded-[8px] whitespace-nowrap"
            >
              Join Us
            </n-link>
          </div>
        </div>
        <div class="lg:hidden">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzcwXzIzNTMpIj4KPHBhdGggZD0iTTQgMThIMjBDMjAuNTUgMTggMjEgMTcuNTUgMjEgMTdDMjEgMTYuNDUgMjAuNTUgMTYgMjAgMTZINEMzLjQ1IDE2IDMgMTYuNDUgMyAxN0MzIDE3LjU1IDMuNDUgMTggNCAxOFpNNCAxM0gyMEMyMC41NSAxMyAyMSAxMi41NSAyMSAxMkMyMSAxMS40NSAyMC41NSAxMSAyMCAxMUg0QzMuNDUgMTEgMyAxMS40NSAzIDEyQzMgMTIuNTUgMy40NSAxMyA0IDEzWk0zIDdDMyA3LjU1IDMuNDUgOCA0IDhIMjBDMjAuNTUgOCAyMSA3LjU1IDIxIDdDMjEgNi40NSAyMC41NSA2IDIwIDZINEMzLjQ1IDYgMyA2LjQ1IDMgN1oiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNzBfMjM1MyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
            class="h-[35px] w-auto"
          />
        </div>
      </div>
    </nav>
    <!---->
    <!---->
  </header>
</template>

<script>
export default {}
</script>

<style></style>
