<template>
  <CardWithHeading>
    <template #headingArea>
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div
          class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap"
        >
          <div class="ml-4 mt-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Gateways
            </h3>
          </div>
          <div class="ml-4 mt-2 flex-shrink-0">
            <span class="inline-flex rounded-md shadow-sm">
              <nuxt-link to="/new">
                <button
                  type="button"
                  class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
                >
                  Create new
                </button>
              </nuxt-link>
            </span>
          </div>
        </div>
      </div>
    </template>
    <template #contentArea>
      <ul>
        <li v-for="(gateway, key) in gateways" :key="key">
          <nuxt-link
            :to="{ name: 'view', params: gateway }"
            class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
          >
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full"
                    :src="`https://source.unsplash.com/80x80/?smartphone,sig=${key}`"
                    alt="gateway img"
                  />
                </div>
                <div
                  class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"
                >
                  <div>
                    <div
                      class="text-sm leading-5 font-medium text-indigo-600 truncate"
                    >
                      {{ gateway.name }}
                    </div>
                    <div
                      class="mt-2 flex items-center text-sm leading-5 text-gray-500"
                    >
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                        />
                        <path
                          d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                        />
                      </svg>
                      <span class="truncate">{{ gateway.serial }} </span>
                    </div>
                  </div>
                  <div class="hidden md:block">
                    <div>
                      <div class="text-sm leading-5 text-gray-900">
                        IPv4
                        <time datetime="2020-01-07">{{ gateway.ipv4 }} </time>
                      </div>
                      <div
                        class="mt-2 flex items-center text-sm leading-5 text-gray-500"
                      >
                        <svg
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        {{ gateway.description }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  class="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </template>
  </CardWithHeading>
</template>

<script>
/* eslint-disable no-console */
export default {
  data() {
    return {
      gateways: [],
    }
  },
  mounted() {
    this.$axios.$get('gateways').then((res) => {
      console.log(res)
      this.gateways = res
    })
  },
}
</script>
