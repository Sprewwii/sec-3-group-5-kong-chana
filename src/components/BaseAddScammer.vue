 <script setup>
import { ref } from 'vue'

defineEmits(['createNewScammer'])


const newScammer = ref({ img: "images/DefaultShopImage.jpg", count: 1, isActive: true }) //////////////เก็บใส่ในนี้
</script>

  <template>
    <div>
        <div class="pt-20 right-0 left-0 top-4 z-50 flex justify-center items-center md:inset-0">
            <form class="bg-white rounded-2xl px-6 pt-6 pb-8 w-1/2">
                <h3 class="text-3xl font-black text-gray-900">เพิ่มรายชื่อผู้โกง</h3>
                <p class="text-base font-medium text-gray-500">คุณสามารถเพิ่มรายชื่อผู้ที่โกงคุณได้</p>
                <div class="flex">
                                                    <div class="flex-1 text-gray-700 pt-3">
                                                        <label class="block text-gray-700 text-sm font-bold mb-2"
                                                            for="password">ชื่อ</label>
                                                        <input type="text" name="firstName" id="firstName"
                                                            placeholder="ชื่อ" v-model="newScammer.firstName"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                    </div>

                                                    <div class="flex-1 text-gray-700 pt-3 pl-5">
                                                        <label class="block text-gray-700 text-sm font-bold mb-2"
                                                            for="password">นามสกุล</label>
                                                        <input type="text" name="lastName" id="lastName"
                                                            placeholder="นามสกุล" v-model="newScammer.lastName"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                    </div>
                                                </div>

                <div class="pt-3">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="shopName">ชื่อร้าน</label>
                    <input type="text" name="shopName" id="shopName" placeholder="ชื่อร้าน"
                        v-model="newScammer.shopName"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="pt-3">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="bank">ธนาคาร</label>
                    <select type="text" name="bank" id="bank" placeholder="ธนาคาร" v-model="newScammer.bank"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option>Kbank</option>
                        <option>SCB</option>
                        <option>KTB</option>
                    </select>
                </div>
                <div class="pt-3">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="bankAccount">เลขบัญชี</label>
                    <input type="text" name="bankId" id="bankId" placeholder="xxxxxxxxxx" v-model="newScammer.bankId"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="pt-3">
                    <label class="block text-gray-700 text-sm font-bold mb-2"
                        for="bankAccount">คำอธิบายเพิ่มเติม</label>
                    <textarea type="text" name="description" id="description" placeholder="คำอธิบาย..."
                        v-model="newScammer.description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
      </textarea>
                    <div>
                        <div class="pt-3.5">
                            <button
                                class="w-full text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button" data-modal-toggle="add-form"
                                @click="$emit('createNewScammer', newScammer)">
                                เพิ่มรายชื่อผู้โกง
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <!-- </div>
</div>
</div> -->



    <!-- <div id="add-form" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
            <form class="bg-white shadow-md rounded-2xl px-6 pt-6 pb-8 mb-4 w-1/2">
                <div class="pt-3.5">
                    <div class="flex">
                        <h3 class="text-3xl font-black text-gray-900">เพิ่มรายชื่อผู้โกง</h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            data-modal-toggle="add-form" @click="menu = [1, 0, 0, 0]">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <p class="text-base font-medium text-gray-700">กรอกข้อมูลประวัติผู้โกง</p>
                </div>
                <div class="flex">
                    <div class="flex-1 text-gray-700 pr-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">ชื่อ</label>
                        <input type="text" name="firstName" id="firstName" placeholder="ชื่อ" v-model="firstName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    </div>

                    <div class="flex-1 text-gray-700 pb-3.5">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">นามสกุล</label>
                        <input type="text" name="lastName" id="lastName" placeholder="นามสกุล" v-model="lastName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    </div>
                </div>

                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="shopName">ชื่อร้าน</label>
                    <input type="text" name="shopName" id="shopName" placeholder="ชื่อร้าน" v-model="shopName"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="bank">ธนาคาร</label>
                    <select type="text" name="bank" id="bank" placeholder="ธนาคาร" v-model="bank"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option>Kbank</option>
                        <option>SCB</option>
                        <option>KTB</option>
                    </select>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="bankAccount">เลขบัญชี</label>
                    <input type="number" name="bankId" id="bankId" placeholder="xxxxxxxxxx" v-model="bankId"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2"
                        for="bankAccount">คำอธิบายเพิ่มเติม</label>
                    <textarea type="text" name="description" id="description" placeholder="คำอธิบาย..."
                        v-model="description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
      </textarea>
                </div>

                <div class="pt-3.5">
                    <button
                        class="w-full text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        type="button" data-modal-toggle="add-form"
                        @click="addScammer(shopName, firstName, lastName, bank, bankId, description); firstName = ''; lastName = ''; shopName = ''; bank = ''; bankId = ''; description = ''; menu = [1, 0, 0, 0]">
                        เพิ่มรายชื่อผู้โกง
                    </button>
                </div>
            </form>
            </div> 
         -->





    <!-- <div> -->
    <!-- <div class="flex flex-col justify-center items-center">
                    <div>
                        <h3 class="font-bold text-lg">เพิ่มรายชื่อผู้โกง</h3>
                    </div>
                    ชื่อ: <input type="text" class="mt-4" v-model="newScammer.firstName" /> <br>
                    นามสกุล: <input type="text" class="mt-4" v-model="newScammer.LastName" /> <br>
                    ชื่อร้าน: <input type="text" class="mt-4" v-model="newScammer.shopName" /> <br>
                    ธนาคาร: <input type="text" class="mt-4" v-model="newScammer.bank" /> <br>
                    เลขบัญชี: <input type="text" class="mt-4" v-model="newScammer.bankId" /> <br>
                    คำอธิบายเพิ่มเติม: <input type="text" class="mt-4" v-model="newScammer.description" /> <br>
                    <button @click="$emit('createNewScammer', newScammer)" class="btn btn-primary"
                        for="my-modal">CREATE</button>
                </div>
            </div> -->
</template>
  
 <style>
</style>
 
