<template>
  <footer class="flex flex-col w-full">
    <div
      class="flex items-center justify-center bg-bwa-gray-80"
    >
      <div
        class="flex w-full lg:max-w-[1133px] xl:max-w-[1440px] px-[24px] py-[36px] lg:px-[70px] lg:py-[40px] pb-[150px] lg:pb-[85px] gap-[60px]"
      >
        <div
          class="flex flex-col flex-grow opacity-80 text-white gap-[32px] lg:flex-row lg:gap-[60px]"
        >
          <div class="flex flex-col">
            <h2 class="text-20 text-white font-bold">
              Home
            </h2>
            <div
              class="flex flex-col mt-[24px] text-14-big-line gap-[8px] opacity-80"
            >
              <n-link to="/">
                Why choose bwadl?
              </n-link>
              <n-link to="/">
                Centralized view
              </n-link>
              <n-link to="/"> Full Control </n-link>
              <n-link to="/"> Security </n-link>
              <n-link to="/"> FAQ </n-link>
            </div>
          </div>
          <div class="flex flex-col">
            <h2 class="text-20 text-white font-bold">
              Products
            </h2>
            <div
              class="flex flex-col mt-[24px] text-14-big-line gap-[8px] opacity-80"
            >
              <n-link to="/products/letter-of-guarantee">
                Letter of Guarantee
              </n-link>
              <n-link to="/"> Accounts </n-link>
              <n-link to="/">
                Payments and Transfers
              </n-link>
            </div>
          </div>
          <div class="flex flex-col">
            <h2 class="text-20 text-white font-bold">
              Company
            </h2>
            <div
              class="flex flex-col mt-[24px] text-14-big-line gap-[8px] opacity-80"
            >
              <n-link to="/"> About bwadl </n-link>
            </div>
          </div>
        </div>
        <div
          class="flex ltr:text-right rtl:text-left flex-col"
        >
          <h2 class="text-20 text-white font-bold">
            Get the app
          </h2>
          <div class="flex flex-col mt-[24px] gap-[24px]">
            <n-link
              to="https://apps.apple.com/tr/app/bwadl-business/id1602372558"
              target="_blank"
              ><img
                src="@/static/images/appstore.png"
                class="inline w-auto h-[40px] lg:h-[52px]"
            /></n-link>
            <n-link
              to="https://play.google.com/store/apps/details?id=sa.bwatech.bwadl.business"
              target="_blank"
              ><img
                src="@/static/images/googleplay.png"
                class="inline w-auto h-[40px] lg:h-[52px]"
            /></n-link>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-center bg-bwa-gray-90"
    >
      <div
        class="flex w-full lg:max-w-[1133px] xl:max-w-[1440px] px-[24px] py-[20px] lg:px-[70px] gap-[20px] text-bwa-gray-50 items-center justify-between flex-col lg:flex-row lg:pb-[100px] lg:justify-stretch"
      >
        <div class="w-full">
          Copyright © 2023 by BWATECH. All rights reserved
        </div>
        <div
          class="flex w-full gap-[10px] justify-center items-center"
        >
          <n-link to="/"> Terms and Conditions </n-link>
          <span>|</span>
          <n-link to="/"> Privacy Policy </n-link>
        </div>
        <div
          class="flex w-full items-center justify-center gap-[20px] lg:justify-end"
        >
          <n-link
            to="https://twitter.com/bwatechsa"
            target="_blank"
            ><img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE2QzAgNy4xNjM0NCA3LjE2MzQ0IDAgMTYgMEMyNC44MzY2IDAgMzIgNy4xNjM0NCAzMiAxNkMzMiAyNC44MzY2IDI0LjgzNjYgMzIgMTYgMzJDNy4xNjM0NCAzMiAwIDI0LjgzNjYgMCAxNlpNMjIuMSAxMS41QzIyLjggMTEuNCAyMy40IDExLjMgMjQgMTFDMjMuNiAxMS43IDIzIDEyLjMgMjIuMyAxMi43QzIyLjUgMTcuNCAxOS4xIDIyLjUgMTMgMjIuNUMxMS4yIDIyLjUgOS41IDIxLjkgOCAyMUM5LjcgMjEuMiAxMS41IDIwLjcgMTIuNyAxOS44QzExLjIgMTkuOCAxMCAxOC44IDkuNiAxNy41QzEwLjEgMTcuNiAxMC42IDE3LjUgMTEuMSAxNy40QzkuNiAxNyA4LjUgMTUuNiA4LjUgMTQuMUM5IDE0LjMgOS41IDE0LjUgMTAgMTQuNUM4LjYgMTMuNSA4LjEgMTEuNiA5IDEwLjFDMTAuNyAxMi4xIDEzLjEgMTMuNCAxNS44IDEzLjVDMTUuMyAxMS41IDE2LjkgOS41IDE5IDkuNUMxOS45IDkuNSAyMC44IDkuOSAyMS40IDEwLjVDMjIuMiAxMC4zIDIyLjkgMTAuMSAyMy41IDkuN0MyMy4zIDEwLjUgMjIuOCAxMS4xIDIyLjEgMTEuNVoiIGZpbGw9IiM4Mjg2OTkiLz4KPC9zdmc+Cg=="
              class="inline w-[32px] h-[32px]"
          /></n-link>
          <n-link
            to="https://www.linkedin.com/company/bwatech"
            target="_blank"
            ><img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE2QzAgNy4xNjM0NCA3LjE2MzQ0IDAgMTYgMEMyNC44MzY2IDAgMzIgNy4xNjM0NCAzMiAxNkMzMiAyNC44MzY2IDI0LjgzNjYgMzIgMTYgMzJDNy4xNjM0NCAzMiAwIDI0LjgzNjYgMCAxNlpNOC4yIDEzLjNWMjRIMTEuNlYxMy4zSDguMlpNOCA5LjlDOCAxMSA4LjggMTEuOCA5LjkgMTEuOEMxMSAxMS44IDExLjggMTEgMTEuOCA5LjlDMTEuOCA4LjggMTEgOCA5LjkgOEM4LjkgOCA4IDguOCA4IDkuOVpNMjAuNiAyNEgyMy44VjE3LjRDMjMuOCAxNC4xIDIxLjggMTMgMTkuOSAxM0MxOC4yIDEzIDE3IDE0LjEgMTYuNyAxNC44VjEzLjNIMTMuNVYyNEgxNi45VjE4LjNDMTYuOSAxNi44IDE3LjkgMTYgMTguOSAxNkMxOS45IDE2IDIwLjYgMTYuNSAyMC42IDE4LjJWMjRaIiBmaWxsPSIjODI4Njk5Ii8+Cjwvc3ZnPgo="
              class="inline w-[32px] h-[32px]"
          /></n-link>
          <n-link
            to="https://twitter.com/bwatechsa"
            target="_blank"
            ><img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjYgMTZMMTQuNCAxMy42VjE4LjRMMTguNiAxNloiIGZpbGw9IiM4Mjg2OTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE2QzAgNy4xNjM0NCA3LjE2MzQ0IDAgMTYgMEMyNC44MzY2IDAgMzIgNy4xNjM0NCAzMiAxNkMzMiAyNC44MzY2IDI0LjgzNjYgMzIgMTYgMzJDNy4xNjM0NCAzMiAwIDI0LjgzNjYgMCAxNlpNMjIuMiAxMC43QzIyLjkgMTAuOSAyMy40IDExLjQgMjMuNiAxMi4xQzI0IDEzLjQgMjQgMTYgMjQgMTZDMjQgMTYgMjQgMTguNiAyMy43IDE5LjlDMjMuNSAyMC42IDIzIDIxLjEgMjIuMyAyMS4zQzIxIDIxLjYgMTYgMjEuNiAxNiAyMS42QzE2IDIxLjYgMTAuOSAyMS42IDkuNyAyMS4zQzkgMjEuMSA4LjUgMjAuNiA4LjMgMTkuOUM4IDE4LjYgOCAxNiA4IDE2QzggMTYgOCAxMy40IDguMiAxMi4xQzguNCAxMS40IDguOTAwMDEgMTAuOSA5LjYwMDAxIDEwLjdDMTAuOSAxMC40IDE1LjkgMTAuNCAxNS45IDEwLjRDMTUuOSAxMC40IDIxIDEwLjQgMjIuMiAxMC43WiIgZmlsbD0iIzgyODY5OSIvPgo8L3N2Zz4K"
              class="inline w-[32px] h-[32px]"
          /></n-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
