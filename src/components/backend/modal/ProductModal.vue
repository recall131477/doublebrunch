<template>
  <div
    class="duration-300 fixed overflow-y-auto z-[1000] inset-0"
    :class="{ 'opacity-0 invisible': !isOpen, 'opacity-100 visible': isOpen }"
  >
    <div
      class="fixed top-0 left-0 w-full h-full bg-primary bg-opacity-50"
      @click="closeModal"
    ></div>
    <div
      class="relative flex justify-center items-center w-full min-h-[calc(100%-2.5rem)] max-w-[960px] pointer-events-none mx-auto my-5"
    >
      <div class="w-full pointer-events-auto">
        <h2
          class="text-white bg-primary text-center py-5"
          v-if="status === 'add'"
        >
          新增產品
        </h2>
        <h2 class="text-white bg-primary text-center py-5" v-else>編輯產品</h2>
        <div class="bg-secondary">
          <div class="grid grid-cols-3 gap-5 p-5">
            <div class="col-span-1">
              <h3 class="text-primary mb-1">主要圖片</h3>
              <div class="space-y-5">
                <input
                  type="text"
                  placeholder="請輸入圖片連結"
                  class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                  v-model="tempProduct.imageUrl"
                />
                <img
                  :src="tempProduct.imageUrl"
                  :alt="tempProduct.title"
                  v-if="tempProduct.imageUrl"
                />
                <input
                  type="file"
                  class="btn-file border-primary border-2 w-full h-[60px]"
                />
                <div>
                  <h3 class="text-primary mb-1">多圖新增</h3>
                  <div v-if="Array.isArray(tempProduct.imagesUrl)">
                    <div
                      v-for="(image, index) in tempProduct.imagesUrl"
                      :key="index"
                    >
                      <h3 class="text-primary mb-1">圖片網址</h3>
                      <input
                        type="text"
                        placeholder="請輸入圖片連結"
                        class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5 mb-5"
                        v-model="tempProduct.imagesUrl[index]"
                      />
                      <img :src="image" alt="" class="mb-5" v-if="image" />
                    </div>
                    <button
                      type="button"
                      class="text-primary border-primary border-2 w-full py-2.5"
                      v-if="
                        !tempProduct.imagesUrl.length ||
                        tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                      "
                      @click="tempProduct.imagesUrl.push('')"
                    >
                      新增圖片
                    </button>
                    <button
                      type="button"
                      class="text-warning border-warning border-2 w-full py-2.5"
                      v-else
                      @click="tempProduct.imagesUrl.pop()"
                    >
                      刪除圖片
                    </button>
                  </div>
                  <div v-else>
                    <button
                      type="button"
                      class="text-primary border-primary border-2 w-full py-2.5"
                      @click="uploadImagesForUrl"
                    >
                      新增圖片
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-2 space-y-5">
              <div>
                <label for="title" class="block text-primary w-full mb-1"
                  >標題</label
                >
                <input
                  type="text"
                  id="title"
                  placeholder="請輸入標題"
                  class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                  v-model="tempProduct.title"
                />
              </div>
              <div class="grid grid-cols-2 gap-5 mb-5">
                <div class="col-span-1">
                  <label for="category" class="block text-primary w-full mb-1"
                    >分類</label
                  >
                  <input
                    type="text"
                    id="category"
                    placeholder="請輸入分類"
                    class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="col-span-1">
                  <label for="unit" class="block text-primary w-full mb-1"
                    >單位</label
                  >
                  <input
                    type="text"
                    id="unit"
                    placeholder="請輸入單位"
                    class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                    v-model="tempProduct.unit"
                  />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-5">
                <div class="col-span-1">
                  <label
                    for="originPrice"
                    class="block text-primary w-full mb-1"
                    >原價</label
                  >
                  <input
                    type="text"
                    id="originPrice"
                    placeholder="請輸入原價"
                    class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                    v-model.number="tempProduct.origin_price"
                  />
                </div>
                <div class="col-span-1">
                  <label for="price" class="block text-primary w-full mb-1"
                    >售價</label
                  >
                  <input
                    type="text"
                    id="price"
                    placeholder="請輸入售價"
                    class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                    v-model.number="tempProduct.price"
                  />
                </div>
              </div>
              <div>
                <label for="description" class="block text-primary w-full mb-1"
                  >產品描述</label
                >
                <input
                  type="text"
                  id="description"
                  placeholder="請輸入產品描述"
                  class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                  v-model="tempProduct.description"
                />
              </div>
              <div>
                <label for="content" class="block text-primary w-full mb-1"
                  >說明內容</label
                >
                <input
                  type="text"
                  id="content"
                  placeholder="請輸入說明內容"
                  class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                  v-model="tempProduct.content"
                />
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="is_enabled"
                  class="btn-check mr-2"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempProduct.is_enabled"
                />
                <label for="is_enabled" class="text-primary">是否啟用</label>
              </div>
            </div>
          </div>
          <div class="text-right border-primary border-t-2 p-5">
            <button
              type="button"
              class="duration-300 text-warning border-warning border-2 px-12 py-2.5 hover:text-white hover:bg-warning"
              @click="closeModal"
            >
              取消
            </button>
            <button
              type="button"
              class="duration-300 text-primary border-primary border-2 px-12 py-2.5 ml-2.5 hover:text-white hover:bg-primary"
              @click="updateProduct(tempProduct.id)"
            >
              {{ status === 'add' ? '新增' : '修改' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    status: {
      type: String,
      default: '',
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  watch: {
    product() {
      this.tempProduct = JSON.parse(JSON.stringify(this.product));
    },
  },
  data() {
    return {
      isOpen: false,
      tempProduct: {
        imagesUrl: [],
      },
    };
  },
  methods: {
    updateProduct(id) {
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      let status = '新增產品';
      if (this.status !== 'add') {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
        httpMethod = 'put';
        status = '更新產品';
      }
      this.$http[httpMethod](url, { data: this.tempProduct })
        .then((res) => {
          this.$messageState(res, status);
          this.$emit('update-product', this.currentPage);
          this.closeModal();
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    uploadImagesForUrl() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push('');
    },
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
  mounted() {
    emitter.on('update-product', (item) => {
      this.tempProduct = item;
      this.updateProduct(item.id);
    });
  },
};
</script>

<style lang="scss">
input::placeholder {
  opacity: 0.5;
}
</style>
