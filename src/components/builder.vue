<template>
  <div v-if='id'>
    <v-btn class="green" dark @click.prevent="savePage()">Сохранить</v-btn>
    <v-btn class="orange" dark @click="modal = true">Настройки страницы</v-btn>
    <v-dialog v-model="modal" max-width="500px" persistent lazy scrollable>
      <v-card>
        <v-toolbar card dark color="primary"><v-btn icon dark @click="modal = false"><v-icon>close</v-icon></v-btn></v-toolbar>
        <v-card-text>
          <v-text-field v-model="title" label="Title Page"></v-text-field>
          <v-text-field v-model="description" label="Description Page"></v-text-field>
          <div style="display: flex">
            <v-flex xs10 sm10 md10>
              <v-text-field disabled v-model="img" label="Превью картинка (.jpg)"/>
            </v-flex>
            <v-flex xs2 sm2 md2>
              <v-btn fab small dark color="green" @click="openDownload(null, null, 300, 'meta')">
                <v-icon dark>add</v-icon>
              </v-btn>
            </v-flex>
          </div>
          <div>
            <v-text-field 
              v-model="path" 
              :label="(lang=='en' ? 'www' : lang ) + '.' + site + '.com/'+type+'/'"
              @change="delSpaceUrl()">
            </v-text-field>
          </div>
          <v-switch
              label="Скрыть страницу (режим черновика)"
              v-model="active">
          </v-switch>
          <v-switch
              label="Страница требует локализацию"
              v-model="needTranslate">
          </v-switch>
          <v-switch
              label="На странице запрещено вносить правки"
              v-model="lock">
          </v-switch>
          <!-- <v-combobox
            v-model="tags"
            :items="Object.entries(tagsList).map(item => ({'id': item[0], 'name': item[1]}))"
            label="Выбрать теги для страницы"
            item-text='name'
            item-value='id'
            multiple
            chips
          ></v-combobox> -->
        </v-card-text>
      </v-card>
    </v-dialog>
    <div v-for='(item, i) in obj' :key='i' class="component-wrapper">
      <wrapper :strings='strings' :obj='item' :site='site' :filestore='filestore'/>
      <div class="component-overlay">
        <v-btn fab small dark color="orange" 
          style="position: absolute; bottom: -20px; z-index: 2;"
          @click.prevent="openChooseComponentModal(i)">
            <v-icon dark>add</v-icon>
        </v-btn>
        <v-btn fab small dark color="green" 
          @click.prevent="obj[i].edit = true">
            <v-icon dark>mode_edit</v-icon>
        </v-btn>
        <v-btn fab v-show="i > 0" small dark color="blue" 
          @click.prevent="switchComponents(i-1, i)">
            <v-icon dark>keyboard_arrow_up</v-icon>
        </v-btn>
        <v-btn fab v-show="obj.length-1 > i" small dark color="blue" 
          @click.prevent="switchComponents(i, i+1)">
            <v-icon dark>keyboard_arrow_down</v-icon>
        </v-btn>
        <v-btn fab small dark color="error" 
          style="margin-left: auto;" 
          @click.prevent='deleteComponent(i)'>
            <v-icon dark>close</v-icon>
        </v-btn>
      </div>
      <v-dialog
        v-model="obj[i].edit" max-width="900px" persistent lazy scrollable>
        <v-card tile>
          <v-toolbar card dark color="primary"><v-btn icon dark @click="obj[i].edit = false"><v-icon>close</v-icon></v-btn></v-toolbar>
          <v-card-text style="display: flex; flex-direction: column;">
            <v-switch v-for="(elem, b) in item.props.boolean" :key="b + '-' + i" 
              style="display: inline-block; margin-right: 30px;"
              :style="{'order': obj[i].orders.hasOwnProperty(b) ? obj[i].orders[b] : b}"
              :label="obj[i].placeholders.hasOwnProperty(b) ? obj[i].placeholders[b] : b"
              v-model="obj[i].props.boolean[b]">
            </v-switch>
            <v-select v-for="(elem, se) in item.props.selects" :key="se + '-' + i" 
              v-model="obj[i].props.selects[se]" 
              :label="obj[i].placeholders[se]"
              outline
              :style="{'order': obj[i].orders[se]}"
              :items="obj[i].selects[se]">
            </v-select>
            <v-text-field
              v-for="(elem, s) in item.props.string" :key="s + '-' + i"
              v-model="strings[obj[i].props.string[s]]"
              :style="{'order': obj[i].orders.hasOwnProperty(s) ? obj[i].orders[s] : s}"
              :label="obj[i].placeholders.hasOwnProperty(s) ? obj[i].placeholders[s] : s">
            </v-text-field>
            <editor v-for="(elem, e) in item.props.editor" :key="e + '-' + i"
              v-model="strings[elem]"
              :order="obj[i].orders.hasOwnProperty(e) ? obj[i].orders[e] : e"
              :labels="obj[i].placeholders.hasOwnProperty(e) ? obj[i].placeholders[e] : e">
            </editor>
            <v-text-field
              v-for="(elem, l) in item.props.links" :key="l + '-' + i"
              v-model="obj[i].props.links[l]"
              :style="{'order': obj[i].orders.hasOwnProperty(l) ? obj[i].orders[l] : l}"
              :label="obj[i].placeholders.hasOwnProperty(l) ? obj[i].placeholders[l] : l"/>
            <v-text-field
              v-for="(elem, cus) in item.props.custom" :key="cus + '-' + i"
              v-model="obj[i].props.custom[cus]"
              :style="{'order': obj[i].orders.hasOwnProperty(cus) ? obj[i].orders[cus] : cus}"
              :label="obj[i].placeholders.hasOwnProperty(cus) ? obj[i].placeholders[cus] : cus"/>
            <v-layout row wrap v-for="(elem, im) in item.props.imgs" :key="im + '-' + i"
              :style="{'order': obj[i].orders.hasOwnProperty(im) ? obj[i].orders[im] : im}">
              <v-flex xs8 sm10 md10>
                <v-text-field 
                  disabled
                  v-model="obj[i].props.imgs[im]"
                  :label="obj[i].placeholders.hasOwnProperty(im) ? obj[i].placeholders[im] : im"/>
              </v-flex>
              <v-btn 
                fab small dark color="green" 
                @click="openDownload(i, im, size, false)">
                <v-icon dark>add</v-icon>
              </v-btn>
              <v-btn 
                fab small dark color="red" 
                @click="obj[i].props.imgs[im] = ''">
                <v-icon dark>close</v-icon>
              </v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <v-dialog v-model="modalComponents" max-width="900px" scrollable>
      <v-card>
        <v-toolbar card dark color="primary"><v-btn icon dark @click="modalComponents = false"><v-icon>close</v-icon></v-btn></v-toolbar>
        <v-card-text v-if="listComponents">
          <div v-for="(list, l) in Object.keys(category)" :key="l" >
              <a href="#" @click.prevent="openListComponents(list)">{{list}} [-]</a>
                <div v-for="(item, i) in filterComponents(list)" 
                  :key="i" class="select-components list-select-components" :class="{'hide': !category[list]}">
                      <img v-if="item.preview" :src="item.preview" alt="" style="display: block; width: 100%;">
                      <component v-else :is='site + "-" +item.name'/>
                      <v-btn class="select-components__btn" @click="chooseComponent(item.name)">Выбрать</v-btn>
                </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <download 
      v-model='modalDownload' 
      :size='size' 
      :site='site'
      :lang='lang'
      :type='type'
      :id='id'
      :filestore='filestore'
      :func-ok='uploadMetaImg ? uploadPreviewImg : uploadImg'/>
    <v-btn 
      v-show="obj.length == 0"
      @click.prevent="openChooseComponentModal(0)"
      fab dark color="indigo" 
      style="display: block; margin: 0 auto;">
      <v-icon dark>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import editor from '@/components/editor.vue'
import download from '@/components/download.vue'
import wrapper from '@/components/wrapperComponent.vue'
export default {
  props: {
    site: {default: ''},
    lang: {default: ''},
    type: {default: ''},
    id: {default: ''},
    filestore: {default: ''},
    propListComponents: {default: () => {}},
  },
  data: function () {
      return { 
        modal: false,
        modalDownload: false,
        loading: false,
        listComponents: [],
        strings: {},
        settings: {},
        obj: [],
        path: '',
        startPath: '',
        title: '',
        active: false,
        lock: false,
        needTranslate: false,
        description: '',
        img: '',
        tags: [],
        tagsList: {},
        uploadMetaImg: false,
        modalComponents: false,
        positionCreatingComponent: 0,
        obj_i: '', 
        imgs_im: '',
        size: 300,
        category: {}
      }
  },
  mounted() {
    if (this.site) {
      this.getComponents()
      this.getPage() 
    }
  },
  watch: {
    site: {handler: function () { 
        this.getPage()
        this.getComponents()
      }
    },
    lang: {handler: function () { 
        this.getPage()
      }
    },
    type: {handler: function () { 
        this.getPage()
      }
    },
    id: {handler: function () { 
        this.getPage()
      }
    },
  },
  methods: {
    getComponents() {
      this.listComponents = this.propListComponents
      this.listComponents.forEach(element => {
        if (!Object.keys(this.category).includes(element.category)) this.category[element.category+''] = false
      });
    },
    openDownload(obj_i, imgs_im, size, meta) {
      this.modalDownload = true
      this.uploadMetaImg = !!meta
      this.obj_i = obj_i 
      this.imgs_im = imgs_im
      this.size = size
    },
    uploadImg(url) {
      this.obj[this.obj_i].props.imgs[this.imgs_im] = url
    },
    uploadPreviewImg(url) {
      this.img = url
    },
    savePage: async function() {
      let item = {
        page: this.obj.slice(),
        strings: JSON.parse(JSON.stringify(this.strings)),
        title: this.title,
        path: this.path,
        description: this.description,
        img: this.img,
        id: this.id,
        tags: this.tags,
        active: this.active,
        lock: this.lock,
        needTranslate: this.needTranslate
      }
      await this.$db.collection(''+this.site).doc('collections').get().then((doc) => {
        console.log("Document data:", doc.data());
        this.settings = doc.data()

        let setItem = JSON.parse(JSON.stringify(this.settings))
        setItem[this.lang][this.type][this.id] = this.path

        this.$db.collection(''+this.site).doc(''+this.lang).collection(''+this.type).doc(""+this.id).set(item).then(() => {
          this.$db.collection(''+this.site).doc('collections').set(setItem).then(() => {
              alert("Сохранено")
            })
        });
      })
    },
    async getPage() {
      this.$db.collection(''+this.site).doc('tags').get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              this.tagsList = doc.data().tags
          } else {
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
      await this.$db.collection(''+this.site).doc(''+this.lang).collection(''+this.type).doc(""+this.id).get()
        .then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              this.strings = doc.data().strings
              this.obj = doc.data().page
              this.path = doc.data().path
              this.startPath = doc.data().path
              this.title = doc.data().title
              this.description = doc.data().description
              this.img = doc.data().img
              this.tags = doc.data().tags
              this.active = doc.data().active
              this.lock = doc.data().lock,
              this.needTranslate = doc.data().needTranslate
          } else {
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    },
    switchComponents(i, n) {
      let tmp = this.obj[i];
      this.obj[i] = this.obj[n];
      this.obj[n] = tmp;
      this.$forceUpdate()
    },
    deleteComponent(i) {
      for (let key in this.obj[i].props.string) delete this.strings[this.obj[i].props.string[key]]
      for (let key in this.obj[i].props.editor) delete this.strings[this.obj[i].props.editor[key]]
      this.obj.splice(i, 1);
    },
    openChooseComponentModal(i){
      this.modalComponents = true,
      this.positionCreatingComponent = i
    },
    chooseComponent(name) {
      this.modalComponents=false
      console.log(this.createComponent(name))
      this.obj.splice(this.positionCreatingComponent+1, 0, this.createComponent(name))
      
    },
    createComponent(nameComponent) {
      let idComponent = nameComponent + Date.now()
      let addingComponent = JSON.parse(JSON.stringify(this.listComponents.find(item => item.name === nameComponent)))
      addingComponent['id'] = idComponent
      for (let key in addingComponent.props.string) {
        this.strings[idComponent + '_string_' + key] = addingComponent.props.string[key]
        addingComponent.props.string[key] = idComponent + '_string_' + key
      }
      for (let key in addingComponent.props.editor) {
        this.strings[idComponent + '_editor_' + key] = addingComponent.props.editor[key]
        addingComponent.props.editor[key] = idComponent + '_editor_' + key
      }
      return addingComponent
    },
    async delSpaceUrl() {
      let thisApp = this;
      this.path = this.path.replace(/[^\w\d]/g, '-').toLowerCase();

      await this.$db.collection(''+this.site).doc('collections').get().then((doc) => {
        console.log("Document data:", doc.data());
        this.settings = doc.data()

        console.log(Object.values(this.settings[this.lang][this.type]))
        Object.values(this.settings[this.lang][this.type]).forEach(function(url) {
            if (url == thisApp.path && url != thisApp.startPath) {
              alert('This url is already in use! / Такой url уже используется!');
              thisApp.path = thisApp.startPath
            }
        });
      })      
    },
    openListComponents(list) {
      this.category[list] = !this.category[list]
      this.$forceUpdate()
    },
    filterComponents(list) {
      console.log(this.listComponents.filter(elem => elem.category == list))
      return this.listComponents.filter(elem => elem.category == list)
    }
  },
  components: {
    editor, 
    wrapper,
    download
  }
}
</script>

<style scoped lang='scss'>
.component-wrapper {
  position: relative;
}
.component-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s;
  & button {
    display: none;
  }
  &:hover, &:focus {
    background: rgba(156, 38, 176, .7);
    & button {
      display: inline-block;
    }
  }
}

.select-components {
  position: relative;
  margin-bottom: 20px;
  &__btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    opacity: 0;
    transition: .2s;
  }
  &:hover{
    .select-components__btn {
      opacity: 1;
    }
    img {
      filter: brightness(0.4);
    }
  }
}
.list-select-components {
  &.hide {
    overflow: hidden;
    height: 0;
    margin: 0;
  }
}
</style>