<template>
<v-dialog v-model="opening" max-width="900px" scrollable>
  <v-card>
    <v-toolbar card dark color="primary">
      <v-btn icon dark @click="$emit('opening-switched', false)">
        <v-icon>close</v-icon>
      </v-btn> 
      Загрузка изображения
    </v-toolbar>
    <v-card-text>
      <form v-on:submit.prevent id="formFiles" action="">
        <input type="file" id="uploadImg" accept="image/*" @change="processFile($event)">
        <p>Only .jpg and .png files, size &lt; {{size}}кб</p>
      </form>
      <img :src="urlFirebase" alt="" style="max-width: 500px;">
      <v-text-field :value="'/_vue_builder/' + url"  readonly  disabled></v-text-field>
    </v-card-text>
    <v-btn v-if='url' @click="saveUrl()">OK</v-btn>
  </v-card>
</v-dialog>
</template>

<script>
export default {
    model: {
        prop: 'opening',
        event: 'opening-switched'
    },
    props: {
        opening: {default: false},
        funcOk: {type: Function},
        size: {type: Number},
        site: {default: ''},
        lang: {default: ''},
        type: {default: ''},
        id: {default: ''},
        filestore: {
            default: 'https://firebasestorage.googleapis.com/v0/b/smartcatpromoadmin.appspot.com/o/smartcat%2F'
        },
    },
    data() {
        return {
            progress: 0,
            file: null,
            url: '',
            urlFirebase: ''
        }
    },
    methods: {
      saveUrl() {
        if (this.funcOk && this.url) {
          this.funcOk(this.url)
          this.$emit('opening-switched', false)
          document.getElementById('formFiles').reset();
          this.progress = 0
          this.file = null
          this.url = ''
          this.urlFirebase = ''
        }
        else console.log('не передана action функция')
      },
      processFile(event) {
        this.progress = 0
        this.file = null
        this.url = ''
        this.urlFirebase = ''
        console.log(event.target.files[0].type)
        if (((event.target.files[0].size/1024).toFixed(0)) > this.size) {
          document.getElementById('formFiles').reset();
          alert("The file should not be more than " + this.size + "kb! / Файл не должен превышать " + this.size + "кб!");
        } else if ((event.target.files[0].type.split('/')[0] !== "image")) {
          document.getElementById('formFiles').reset();
          alert("You can upload only image files! / Можно загружать только тзображения!");
        } else {
          this.file = event.target.files[0],
          this.url = this.id + '_' + Date.now() + '_' + event.target.files[0].name.replace(/[^\w\d\.\-]/g, '_');
          this.uploadFile(this.file, this.url)
        }
      },
      uploadFile(file, url) {
        let metadata = {
          contentType: file.type
        };
        let uploadTask = this.$storageRef.child(this.site + '/' + url).put(file, metadata);

        uploadTask.on(this.$firebase.storage.TaskEvent.STATE_CHANGED, 
          (snapshot) => {
            this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + this.progress + '% done');
            switch (snapshot.state) {
              case this.$firebase.storage.TaskState.PAUSED:
                console.log('Upload is paused');
                break;
              case this.$firebase.storage.TaskState.RUNNING:
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {console.log(error)}, 
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              console.log('File available at', downloadURL);
              document.getElementById('formFiles').reset();
              this.progress = 0
              this.urlFirebase = this.filestore + url + '?alt=media'
            });
          }
        );
      }
    }
}
</script>

<style>

</style>