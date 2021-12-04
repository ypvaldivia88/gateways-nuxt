<template>
  <!-- GATEWAY CARD -->
  <CardWithHeading>
    <template #headingArea>
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div
          class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap"
        >
          <div class="ml-4 mt-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Create Gateway
            </h3>
          </div>
          <div class="ml-4 mt-2 flex-shrink-0">
            <span class="inline-flex rounded-md shadow-sm">
              <nuxt-link to="/">
                <button
                  type="button"
                  class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
                >
                  Back
                </button>
              </nuxt-link>
            </span>
          </div>
        </div>
      </div>
    </template>
    <template #contentArea>
      <div class="grid grid-cols-2 mt-2">
        <form class="w-full">
          <div class="flex flex-wrap mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-name"
              >
                Name
              </label>
              <input
                id="grid-name"
                :value="gateway.name"
                readonly
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="provide a name"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-serial"
              >
                Serial
              </label>
              <input
                id="grid-serial"
                :value="gateway.serial"
                readonly
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="serial number"
              />
            </div>
          </div>
          <div class="flex flex-wrap mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-ipv4"
              >
                IPv4 Address
              </label>
              <input
                id="grid-ipv4"
                :value="gateway.ipv4"
                readonly
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="0.0.0.0"
              />
            </div>
          </div>
          <div class="flex flex-wrap mb-2">
            <div class="w-full px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-description"
              >
                Description
              </label>
              <input
                id="grid-description"
                :value="gateway.description"
                readonly
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-8 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="provide a description"
              />
            </div>
          </div>
        </form>
        <div class="w-full">
          <div class="flex flex-col w-full px-3 mb-6 md:mb-0">
            <div class="overflow-x-auto">
              <div class="py-2 align-middle inline-block min-w-full">
                <div
                  class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
                >
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          UID
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Vendor
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="dev in gateway.devices" :key="dev.uid">
                        <td class="px-6 py-4 whitespace-nowrap">
                          {{ dev.uid }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          {{ dev.vendor }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span
                            :class="[
                              'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                              dev.status === 'online'
                                ? 'bg-green-300 text-white'
                                : 'bg-red-300 text-white',
                            ]"
                          >
                            {{ dev.status }}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </CardWithHeading>
</template>

<script>
/* eslint-disable no-console */
export default {
  data() {
    return {
      gateway: {},
    }
  },
  mounted() {
    this.gateway = this.$route.params
  },
}
</script>
