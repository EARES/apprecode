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
              {{ $t('footer.home') }}
            </h2>
            <div
              class="flex flex-col mt-[24px] gap-[8px] opacity-80 text-14-big-line"
            >
              <nuxt-link :to="localePath('/')">
                {{ $t('footer.why') }}
              </nuxt-link>
              <nuxt-link :to="localePath('/')">
                {{ $t('footer.centralizedView') }}
              </nuxt-link>
              <nuxt-link :to="localePath('/')"> {{ $t('footer.fullControl') }} </nuxt-link>
              <nuxt-link :to="localePath('/')"> {{ $t('footer.security') }} </nuxt-link>
              <nuxt-link :to="localePath('/')"> {{ $t('footer.faq') }} </nuxt-link>
            </div>
          </div>
          <div class="flex flex-col">
            <h2 class="text-20 text-white font-bold">
              {{ $t('footer.products') }}
            </h2>
            <div
              class="flex flex-col mt-[24px] text-14-big-line gap-[8px] opacity-80"
            >
              <nuxt-link :to="localePath('/')">
                {{ $t('footer.letterOfGuarantee') }}
              </nuxt-link>
              <nuxt-link :to="localePath('/')"> {{ $t('footer.accounts') }} </nuxt-link>
              <nuxt-link :to="localePath('/')">
                {{ $t('footer.paymentsAndTransfers') }}
              </nuxt-link>
            </div>
          </div>
          <div class="flex flex-col">
            <h2 class="text-20 text-white font-bold">
              {{ $t('footer.company') }}
            </h2>
            <div
              class="flex flex-col mt-[24px] text-14-big-line gap-[8px] opacity-80"
            >
              <nuxt-link :to="localePath('/')"> {{ $t('footer.about') }} </nuxt-link>
            </div>
          </div>
        </div>
        <div
          class="flex ltr:text-right rtl:text-left flex-col"
        >
          <h2 class="text-20 text-white font-bold">
            {{ $t('footer.getApp') }}
          </h2>
          <div class="flex flex-col mt-[24px] gap-[24px]">
            <nuxt-link
              to="https://apps.apple.com/tr/app/bwadl-business/id1602372558"
              target="_blank"
              rel="noopener"
              ><img
                src="@/static/images/appstore.png"
                class="inline w-auto h-[40px] lg:h-[52px]"
            /></nuxt-link>
            <nuxt-link
              to="https://play.google.com/store/apps/details?id=sa.bwatech.bwadl.business"
              target="_blank"
              rel="noopener"
              ><img
                src="@/static/images/googleplay.png"
                class="inline w-auto h-[40px] lg:h-[52px]"
            /></nuxt-link>
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
          {{ $t('footer.copyright') }}
        </div>
        <div
          class="flex w-full gap-[10px] justify-center items-center"
        >
          <nuxt-link :to="localePath('/')"> {{ $t('footer.terms') }} </nuxt-link>
          <span>|</span>
          <nuxt-link :to="localePath('/')"> {{ $t('footer.privacy') }} </nuxt-link>
        </div>
        <div
          class="flex w-full items-center justify-center gap-[20px] lg:justify-end"
        >
          <nuxt-link
            to="https://twitter.com/bwatechsa"
            target="_blank"
            rel="noopener"
            ><img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE2QzAgNy4xNjM0NCA3LjE2MzQ0IDAgMTYgMEMyNC44MzY2IDAgMzIgNy4xNjM0NCAzMiAxNkMzMiAyNC44MzY2IDI0LjgzNjYgMzIgMTYgMzJDNy4xNjM0NCAzMiAwIDI0LjgzNjYgMCAxNlpNMjIuMSAxMS41QzIyLjggMTEuNCAyMy40IDExLjMgMjQgMTFDMjMuNiAxMS43IDIzIDEyLjMgMjIuMyAxMi43QzIyLjUgMTcuNCAxOS4xIDIyLjUgMTMgMjIuNUMxMS4yIDIyLjUgOS41IDIxLjkgOCAyMUM5LjcgMjEuMiAxMS41IDIwLjcgMTIuNyAxOS44QzExLjIgMTkuOCAxMCAxOC44IDkuNiAxNy41QzEwLjEgMTcuNiAxMC42IDE3LjUgMTEuMSAxNy40QzkuNiAxNyA4LjUgMTUuNiA4LjUgMTQuMUM5IDE0LjMgOS41IDE0LjUgMTAgMTQuNUM4LjYgMTMuNSA4LjEgMTEuNiA5IDEwLjFDMTAuNyAxMi4xIDEzLjEgMTMuNCAxNS44IDEzLjVDMTUuMyAxMS41IDE2LjkgOS41IDE5IDkuNUMxOS45IDkuNSAyMC44IDkuOSAyMS40IDEwLjVDMjIuMiAxMC4zIDIyLjkgMTAuMSAyMy41IDkuN0MyMy4zIDEwLjUgMjIuOCAxMS4xIDIyLjEgMTEuNVoiIGZpbGw9IiM4Mjg2OTkiLz4KPC9zdmc+Cg=="
              class="inline w-[32px] h-[32px]"
          /></nuxt-link>
          <nuxt-link
            to="https://www.linkedin.com/company/bwatech"
            target="_blank"
            rel="noopener"
            ><img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE2QzAgNy4xNjM0NCA3LjE2MzQ0IDAgMTYgMEMyNC44MzY2IDAgMzIgNy4xNjM0NCAzMiAxNkMzMiAyNC44MzY2IDI0LjgzNjYgMzIgMTYgMzJDNy4xNjM0NCAzMiAwIDI0LjgzNjYgMCAxNlpNOC4yIDEzLjNWMjRIMTEuNlYxMy4zSDguMlpNOCA5LjlDOCAxMSA4LjggMTEuOCA5LjkgMTEuOEMxMSAxMS44IDExLjggMTEgMTEuOCA5LjlDMTEuOCA4LjggMTEgOCA5LjkgOEM4LjkgOCA4IDguOCA4IDkuOVpNMjAuNiAyNEgyMy44VjE3LjRDMjMuOCAxNC4xIDIxLjggMTMgMTkuOSAxM0MxOC4yIDEzIDE3IDE0LjEgMTYuNyAxNC44VjEzLjNIMTMuNVYyNEgxNi45VjE4LjNDMTYuOSAxNi44IDE3LjkgMTYgMTguOSAxNkMxOS45IDE2IDIwLjYgMTYuNSAyMC42IDE4LjJWMjRaIiBmaWxsPSIjODI4Njk5Ii8+Cjwvc3ZnPgo="
              class="inline w-[32px] h-[32px]"
          /></nuxt-link>
          <nuxt-link
            to="https://twitter.com/bwatechsa"
            target="_blank"
            rel="noopener"
            ><img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjYgMTZMMTQuNCAxMy42VjE4LjRMMTguNiAxNloiIGZpbGw9IiM4Mjg2OTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE2QzAgNy4xNjM0NCA3LjE2MzQ0IDAgMTYgMEMyNC44MzY2IDAgMzIgNy4xNjM0NCAzMiAxNkMzMiAyNC44MzY2IDI0LjgzNjYgMzIgMTYgMzJDNy4xNjM0NCAzMiAwIDI0LjgzNjYgMCAxNlpNMjIuMiAxMC43QzIyLjkgMTAuOSAyMy40IDExLjQgMjMuNiAxMi4xQzI0IDEzLjQgMjQgMTYgMjQgMTZDMjQgMTYgMjQgMTguNiAyMy43IDE5LjlDMjMuNSAyMC42IDIzIDIxLjEgMjIuMyAyMS4zQzIxIDIxLjYgMTYgMjEuNiAxNiAyMS42QzE2IDIxLjYgMTAuOSAyMS42IDkuNyAyMS4zQzkgMjEuMSA4LjUgMjAuNiA4LjMgMTkuOUM4IDE4LjYgOCAxNiA4IDE2QzggMTYgOCAxMy40IDguMiAxMi4xQzguNCAxMS40IDguOTAwMDEgMTAuOSA5LjYwMDAxIDEwLjdDMTAuOSAxMC40IDE1LjkgMTAuNCAxNS45IDEwLjRDMTUuOSAxMC40IDIxIDEwLjQgMjIuMiAxMC43WiIgZmlsbD0iIzgyODY5OSIvPgo8L3N2Zz4K"
              class="inline w-[32px] h-[32px]"
          /></nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
