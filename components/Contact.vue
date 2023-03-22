<template>
  <div class="w-full bg-bwa-gray-20 text-bwa-gray-100 flex justify-center">
    <div
      class="w-full lg:max-w-[1133px] xl:max-w-[1440px] py-[32px] px-[29px] pb-[66px] lg:pb-[100px] lg:px-[157px] lg:py-[50px] xl:px-[310px] flex flex-col"
    >
      <div class="w-full text-center">
        <h1 class="font-bold text-32 lg:text-56">{{ $t('homeContact.title') }}</h1>
      </div>
      <form
        @submit.prevent="contactSubmit()"
        class="w-full flex flex-col gap-[20px] mt-[28px]"
      >
        <div class="flex flex-col lg:flex-row gap-[20px]">
          <div class="w-full flex flex-col">
            <label class="text-14" for="email">{{ $t('contact.workEmail') }}</label>
            <input
              id="email"
              type="email"
              name="email"
              autocomplete="email"
              :placeholder="$t('contact.workEmail')"
              maxlength="100"
              v-model="formData.email"
              minlength="3"
              required
              class="h-[40px] mt-[10px] border border-surface-variant rounded-[6px] px-[10px]"
            />
          </div>
          <div class="w-full flex flex-col">
            <label class="text-14" for="companyName">{{ $t('contact.companyName') }}</label>
            <input
              id="companyName"
              name="companyName"
              autocomplete="organization"
              :placeholder="$t('contact.companyName')"
              v-model="formData.companyName"
              maxlength="100"
              minlength="3"
              required
              class="h-[40px] mt-[10px] border border-surface-variant rounded-[6px] px-[10px]"
            />
          </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-[20px]">
          <div class="w-full flex flex-col">
            <label class="text-14" for="name">{{ $t('contact.firstName') }}</label>
            <input
              id="name"
              name="name"
              autocomplete="given-name"
              maxlength="100"
              v-model="formData.name"
              :placeholder="$t('contact.firstName')"
              minlength="3"
              required
              class="h-[40px] mt-[10px] border border-surface-variant rounded-[6px] px-[10px]"
            />
          </div>
          <div class="w-full flex flex-col">
            <label class="text-14" for="surname">{{ $t('contact.lastName') }}</label>
            <input
              id="surname"
              name="surname"
              autocomplete="family-name"
              minlength="3"
              :placeholder="$t('contact.lastName')"
              v-model="formData.surname"
              maxlength="100"
              required
              class="h-[40px] mt-[10px] border border-surface-variant rounded-[6px] px-[10px]"
            />
          </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-[20px]">
          <div class="w-full flex flex-col">
            <label class="text-14" for="phoneNumber">{{ $t('contact.phone') }}</label>
            <input
              id="phoneNumber"
              type="tel"
              autocomplete="tel"
              :placeholder="$t('contact.phone')"
              name="phoneNumber"
              maxlength="100"
              v-model="formData.phoneNumber"
              required
              class="h-[40px] mt-[10px] border border-surface-variant rounded-[6px] px-[10px]"
            />
          </div>
          <div class="w-full flex flex-col">
            <label class="text-14" for="message">{{ $t('contact.additionalInfo') }}</label>
            <input
              id="message"
              name="message"
              :placeholder="$t('contact.additionalInfo')"
              maxlength="1000"
              v-model="formData.message"
              required
              class="h-[40px] mt-[10px] border border-surface-variant rounded-[6px] px-[10px]"
            />
          </div>
        </div>
        <div class="flex flex-col gap-[20px] text-center px-[20px]">
          <p class="text-14">
            {{ $t('contact.formAgree1') }}
            <nuxt-link :to="localePath('/')" class="text-bwa-blue" target="_blank"
              >{{ $t('contact.formAgree2') }}</nuxt-link
            >
          </p>
        </div>
        <div class="flex flex-col gap-[20px] text-center">
          <button
            type="submit"
            class="text-white bg-bwa-blue py-[12px] rounded-[4px] contact-btn text-15"
          >
            <span>{{ $t('contact.submit') }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formData: {},
    }
  },
  methods: {
    contactSubmit() {
      document.querySelector('.contact-btn').disabled = true
      document.querySelector('.contact-btn').classList.add('opacity-60')
      this.$axios
        .post('contact', this.formData)
        .then((response) => {
          alert(response)
        })
        .catch((err) => {
          alert(err)
        })
        .finally(() => {
          document.querySelector('.contact-btn').disabled = false
          document.querySelector('.contact-btn').classList.remove('opacity-60')
          this.formData = {}
        })
    },
  },
}
</script>

<style></style>
