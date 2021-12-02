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
                v-model="gateway.name"
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
                v-model="gateway.serial"
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
                v-model="gateway.ipv4"
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
                v-model="gateway.description"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-8 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="provide a description"
              />
            </div>
          </div>
        </form>
        <div class="w-full">
          <form class="w-full">
            <div class="flex flex-wrap mb-2 items-end">
              <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-uid"
                >
                  UID
                </label>
                <input
                  id="grid-uid"
                  v-model="device.uid"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="number"
                  placeholder="1234"
                />
              </div>
              <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-vendor"
                >
                  Vendor
                </label>
                <input
                  id="grid-vendor"
                  v-model="device.vendor"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="vendor"
                />
              </div>
              <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-status"
                >
                  Status
                </label>
                <div class="relative">
                  <select
                    id="grid-status"
                    v-model="device.status"
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option disabled selected>select</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="w-24 relative inline-flex text-center ml-4 md:ml-0 px-2 py-3 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
                @click="pushDevice"
              >
                Add
              </button>
            </div>
          </form>
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
        <button
          type="button"
          class="w-32 relative inline-flex text-center m-4 px-2 py-3 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
          @click="handleSubmit"
        >
          Save gateway
        </button>
      </div>
    </template>
  </CardWithHeading>
</template>

<script>
/* eslint-disable no-console */
export default {
  data() {
    return {
      gateway: {
        name: '',
        serial: '',
        ipv4: '',
        description: '',
        devices: [],
      },
      device: {
        uid: '',
        vendor: '',
        status: 'select',
      },
      deviceStatus: ['online', 'offline'],
    }
  },
  methods: {
    pushDevice() {
      this.gateway.devices.push({ ...this.device })
      this.device = {
        uid: '',
        vendor: '',
        status: 'select',
      }
    },
    handleSubmit() {
      this.$toast.show('Saving gateway...')
      const updatedGateway = { ...this.gateway, ...{ devices: [] } }
      this.$axios
        .$post('gateways', updatedGateway)
        .then((resGat) => {
          this.gateway.devices.forEach((device) => {
            this.$toast.success('Gateway created successfully')
            const updatedDevice = {
              uid: device.uid,
              vendor: device.vendor,
              status: device.status,
              gateway: resGat._id,
            }
            const devIds = []

            this.$toast.show('Adding devices to gateway...')
            this.$axios
              .$post('devices', updatedDevice)
              .then((resDev) => {
                devIds.push(resDev._id)
                this.$toast.success('Device added successfully')
              })
              .catch((err) => {
                this.$toast.error(
                  'Error adding devices to gateway: ' + err.message
                )
              })
            resGat = { ...resGat, ...{ devices: devIds } }
            this.$axios.$put(`gateways/${resGat._id}`, resGat).catch((err) => {
              this.$toast.error(
                'Error updating gateway devices: ' + err.message
              )
            })
          })
        })
        .catch((err) => {
          this.$toast.error('Error creating gateway: ' + err.message)
        })
    },
  },
}
</script>
