<template>
  <el-form-item  :label-width="formLabelWidth">
    <quill-editor class="quill" v-model="value" ref="myQuillEditor" :options="editorOption" @change="onEditorChange($event)">

    </quill-editor>
  </el-form-item>
</template>

<script>
    export default {
      name: "Quill-editor",
      data() {
        // let toolbarOptions = [
        //     ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        //     ['blockquote', 'code-block'],
        //
        //     [{'header': 1}, {'header': 2}],               // custom button values
        //     [{'list': 'ordered'}, {'list': 'bullet'}],
        //     [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
        //     [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
        //     [{'direction': 'rtl'}],                         // text direction
        //
        //     [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
        //     [{'header': [1, 2, 3, 4, 5, 6, false]}],
        //
        //     [{'color': []}, {'background': []}],          // dropdown with defaults from theme
        //     [{'font': []}],
        //     [{'align': []}],
        //     ['link', 'image', 'video'],
        //     ['clean']                                         // remove formatting button
        //   ]
        return {
          editorOption: {
            placeholder: '请输入院校简介',
            theme: 'snow',
            modules: {
              toolbar: {
                handlers: {
                  container: toolbarOptions,  // 工具栏
                  'image': function (n) {
                    if (n) {
                      alert(1)
                    } else {
                      this.quill.format('image', false);
                    }
                  },
                  'video': function (n) {
                    if (n) {
                      alert(2)
                    } else {
                      this.quill.format('image', false);
                    }
                  },
                }
              }

            }
          }
        }
      },

          methods: {
            onEditorChange() {
              console.log(this.value)

          },
            quillImgSuccess(res, file) { // 富文本编辑框图片上传
                                         // console.log(URL.createObjectURL(file.raw));
                                         // this.form.icon = URL.createObjectURL(file.raw);
                                         // res为图片服务器返回的数据
                                         // 获取富文本组件实例
              let quill = this.$refs.myQuillEditor.quill
              // 如果上传成功
              if (res.errno == '0') {
                // 获取光标所在位置
                let length = quill.getSelection().index;
                // 插入图片  res.data为服务器返回的图片地址
                quill.insertEmbed(length, 'image', res.data)
                // 调整光标到最后
                quill.setSelection(length + 1)
              } else {
                this.$message.error('图片插入失败')
              }
            },
        }

    }
</script>

<style scoped>
.quill{
  height: 200px;
}
</style>
