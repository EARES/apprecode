<template>
  <div class="w-full bg-bwa-gray text-bwa-gray-100 flex justify-center">
    <div
      class="w-full lg:max-w-[1133px] xl:max-w-[1440px] py-[32px] px-[29px] pb-[66px] lg:pb-[100px] lg:px-[56px] lg:py-[50px] xl:px-[180px] flex flex-col"
    >
      <div class="w-full text-center">
        <h1 class="font-bold text-32 lg:text-56">{{ $t('homeFaq.title') }}</h1>
      </div>
      <div class="w-full flex flex-col mt-[24px] lg:mt-[56px] gap-[16px]">
        <div
          class="w-full flex flex-col bg-white text-bwa-gray-100 rounded-[8px] p-[26px] lg:p-[34px]"
        >
          <div
            class="w-full text-15 lg:text-24 flex items-center justify-between cursor-pointer accordion-header"
          >
            <span class="flex-grow font-bold"
              >{{ $t('homeFaq.faqQuestion1') }}</span
            >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzdfMjQzKSI+CjxwYXRoIGQ9Ik03LjQxIDguNTlMMTIgMTMuMTdMMTYuNTkgOC41OUwxOCAxMEwxMiAxNkw2IDEwTDcuNDEgOC41OVoiIGZpbGw9IiMxMjEzMUEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83XzI0MyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
              class="w-[24px] h-auto transition-all"
            />
          </div>
          <div class="w-full pt-[24px] text-18 accordion-content hidden">
            {{ $t('homeFaq.faqAnswer1') }}
          </div>
        </div>
        <div
          class="w-full flex flex-col bg-white text-bwa-gray-100 rounded-[8px] p-[26px] lg:p-[34px]"
        >
          <div
            class="w-full text-15 lg:text-24 flex items-center justify-between cursor-pointer accordion-header"
          >
            <span class="flex-grow font-bold"
              >{{ $t('homeFaq.faqQuestion2') }}</span
            >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzdfMjQzKSI+CjxwYXRoIGQ9Ik03LjQxIDguNTlMMTIgMTMuMTdMMTYuNTkgOC41OUwxOCAxMEwxMiAxNkw2IDEwTDcuNDEgOC41OVoiIGZpbGw9IiMxMjEzMUEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83XzI0MyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
              class="w-[24px] h-auto transition-all"
            />
          </div>
          <div class="w-full pt-[24px] text-18 accordion-content hidden" v-html="$t('homeFaq.faqAnswer2')">
          </div>
        </div>
        <div
          class="w-full flex flex-col bg-white text-bwa-gray-100 rounded-[8px] p-[26px] lg:p-[34px]"
        >
          <div
            class="w-full text-15 lg:text-24 flex items-center justify-between cursor-pointer accordion-header"
          >
            <span class="flex-grow font-bold"
              >{{ $t('homeFaq.faqQuestion3') }}</span
            >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzdfMjQzKSI+CjxwYXRoIGQ9Ik03LjQxIDguNTlMMTIgMTMuMTdMMTYuNTkgOC41OUwxOCAxMEwxMiAxNkw2IDEwTDcuNDEgOC41OVoiIGZpbGw9IiMxMjEzMUEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83XzI0MyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
              class="w-[24px] h-auto transition-all"
            />
          </div>
          <div class="w-full pt-[24px] text-18 accordion-content hidden">
            {{ $t('homeFaq.faqAnswer3') }}
          </div>
        </div>
        <div
          class="w-full flex flex-col bg-white text-bwa-gray-100 rounded-[8px] p-[26px] lg:p-[34px]"
        >
          <div
            class="w-full text-15 lg:text-24 flex items-center justify-between cursor-pointer accordion-header"
          >
            <span class="flex-grow font-bold"
              >{{ $t('homeFaq.faqQuestion4') }}</span
            >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzdfMjQzKSI+CjxwYXRoIGQ9Ik03LjQxIDguNTlMMTIgMTMuMTdMMTYuNTkgOC41OUwxOCAxMEwxMiAxNkw2IDEwTDcuNDEgOC41OVoiIGZpbGw9IiMxMjEzMUEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83XzI0MyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
              class="w-[24px] h-auto transition-all"
            />
          </div>
          <div class="w-full pt-[24px] text-18 accordion-content hidden">
            {{ $t('homeFaq.faqAnswer4') }}
          </div>
        </div>
        <div
          class="w-full flex flex-col bg-white text-bwa-gray-100 rounded-[8px] p-[26px] lg:p-[34px]"
        >
          <div
            class="w-full text-15 lg:text-24 flex items-center justify-between cursor-pointer accordion-header"
          >
            <span class="flex-grow font-bold">{{ $t('homeFaq.faqQuestion5') }}</span>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzdfMjQzKSI+CjxwYXRoIGQ9Ik03LjQxIDguNTlMMTIgMTMuMTdMMTYuNTkgOC41OUwxOCAxMEwxMiAxNkw2IDEwTDcuNDEgOC41OVoiIGZpbGw9IiMxMjEzMUEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83XzI0MyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
              class="w-[24px] h-auto transition-all"
            />
          </div>
          <div class="w-full pt-[24px] text-18 accordion-content hidden">
            {{ $t('homeFaq.faqAnswer5') }}
          </div>
        </div>
        <div
          class="w-full flex flex-col bg-white text-bwa-gray-100 rounded-[8px] p-[26px] lg:p-[34px]"
        >
          <div
            class="w-full text-15 lg:text-24 flex items-center justify-between cursor-pointer accordion-header"
          >
            <span class="flex-grow font-bold"
              >{{ $t('homeFaq.faqQuestion6') }}</span
            >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzdfMjQzKSI+CjxwYXRoIGQ9Ik03LjQxIDguNTlMMTIgMTMuMTdMMTYuNTkgOC41OUwxOCAxMEwxMiAxNkw2IDEwTDcuNDEgOC41OVoiIGZpbGw9IiMxMjEzMUEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83XzI0MyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
              class="w-[24px] h-auto transition-all"
            />
          </div>
          <div class="w-full pt-[24px] text-18 accordion-content hidden">
            {{ $t('homeFaq.faqAnswer6') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const accordionHeader = document.querySelectorAll('.accordion-header')
    accordionHeader.forEach((header) => {
      header.addEventListener('click', () => {
        const accordionContent =
          header.parentElement.querySelector('.accordion-content')
        accordionContent.classList.toggle('hidden')
        header.querySelector('img').classList.toggle('rotate-180')
      })
    })
  },
}
</script>
