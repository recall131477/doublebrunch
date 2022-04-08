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
          新增文章
        </h2>
        <h2 class="text-white bg-primary text-center py-5" v-else>編輯文章</h2>
        <div class="bg-secondary">
          <div class="grid grid-cols-3 gap-5 p-5">
            <div class="col-span-1">
              <div class="space-y-5">
                <div>
                  <label for="title" class="block text-primary w-full mb-1"
                    >標題
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="請輸入標題"
                    class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                    v-model="tempArticle.title"
                  />
                </div>
                <div>
                  <label for="imgUrl" class="block text-primary w-full mb-1"
                    >圖片網址
                  </label>
                  <input
                    type="text"
                    id="imgUrl"
                    placeholder="請輸入圖片連結"
                    class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                    v-model="tempArticle.imageUrl"
                  />
                </div>
                <div>
                  <label for="author" class="block text-primary w-full mb-1"
                    >作者
                  </label>
                  <input
                    type="text"
                    id="author"
                    placeholder="請輸入作者"
                    class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                    v-model="tempArticle.author"
                  />
                </div>
                <div>
                  <label for="createDate" class="block text-primary w-full mb-1"
                    >文章建立日期
                  </label>
                  <input
                    type="date"
                    id="createDate"
                    class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                    v-model="createAt"
                  />
                </div>
              </div>
            </div>
            <div class="col-span-2 space-y-5">
              <div>
                <label for="tag" class="block text-primary w-full mb-1"
                  >標籤</label
                >
                <div class="flex">
                  <div
                    class="relative"
                    :class="{ 'mr-2.5': tempArticle.tag.length > 1 }"
                    v-for="(label, key) in tempArticle.tag"
                    :key="key"
                  >
                    <input
                      type="text"
                      id="tag"
                      placeholder="請輸入標籤"
                      class="text-primary bg-secondary border-primary border-2 w-[120px] h-10 p-2.5"
                      v-model="tempArticle.tag[key]"
                    />
                    <button
                      type="button"
                      class="duration-300 absolute top-1/2 right-2.5 -translate-y-1/2 w-5 h-5 bg-warning rounded-full hover:rotate-90"
                      @click="tempArticle.tag.splice(key, 1)"
                    >
                      <span
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-2 h-[2px] bg-white"
                      ></span>
                      <span
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-[2px] bg-white"
                      ></span>
                    </button>
                  </div>
                  <button
                    type="button"
                    class="duration-300 flex justify-center items-center text-primary border-primary border-2 w-[120px] h-10 p-2.5 hover:text-white hover:bg-primary"
                    :class="{ 'ml-2.5': tempArticle.tag.length === 1 }"
                    v-if="
                      tempArticle.tag[tempArticle.tag.length - 1] ||
                      !tempArticle.tag.length
                    "
                    @click="tempArticle.tag.push('')"
                  >
                    新增標籤
                  </button>
                </div>
              </div>
              <div>
                <label for="description" class="block text-primary w-full mb-1"
                  >文章描述</label
                >
                <input
                  type="text"
                  id="description"
                  placeholder="請輸入文章描述"
                  class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                  v-model="tempArticle.description"
                />
              </div>
              <ckeditor
                :editor="editor"
                :config="editorConfig"
                v-model="tempArticle.content"
              ></ckeditor>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="isPublic"
                  class="btn-check mr-2"
                  v-model="tempArticle.isPublic"
                />
                <label for="isPublic" class="text-primary">是否公開</label>
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
              @click="updateArticle(tempArticle.id)"
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import emitter from '@/methods/emitter';

export default {
  props: {
    article: {
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
    article() {
      this.tempArticle = {
        ...this.article,
        tag: this.article.tag || [],
        isPublic: this.article.isPublic || false,
      };
      // 時間戳轉換 yyyy-mm-dd
      const dateAndTime = new Date(this.tempArticle.create_at * 1000)
        .toISOString()
        .split('T');
      [this.createAt] = dateAndTime;
    },
    createAt() {
      this.tempArticle.create_at = Math.floor(new Date(this.createAt) / 1000);
    },
  },
  data() {
    return {
      isOpen: false,
      tempArticle: {
        tag: [''],
      },
      articleModal: '',
      createAt: 0,
      // CKEditor 文字編輯器
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', 'bold', 'italic', '|', 'link'],
      },
    };
  },
  methods: {
    updateArticle(id) {
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article`;
      let httpMethod = 'post';
      let status = '新增文章';
      if (this.status !== 'add') {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`;
        httpMethod = 'put';
        status = '更新文章';
      }
      this.$http[httpMethod](url, { data: this.tempArticle })
        .then((res) => {
          this.$messageState(res, status);
          this.$emit('update-article', this.currentPage);
          this.closeModal();
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
  mounted() {
    emitter.on('update-article', (item) => {
      this.tempArticle = item;
      this.updateArticle(item.id);
    });
  },
};
</script>

<style lang="scss">
input::placeholder {
  opacity: 0.5;
}

.ck-editor__editable_inline {
  min-height: 300px;
}

.ck.ck-toolbar,.ck.ck-editor__main>.ck-editor__editable {
  background: none;
}

.ck.ck-toolbar,.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused) {
  border: 2px solid #8CA06E;
}

.ck.ck-editor__main {
  p {
    color: #8CA06E;
  }
}
</style>
