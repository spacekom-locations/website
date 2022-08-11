<template>
  <div>
    <v-carousel
      cycle
      show-arrows-on-hover
      :interval="4000"
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
        :src="image"
        @click="show"
      ></v-carousel-item>
    </v-carousel>
    <!-- <v-container style="max-width: 1200px">
      <div>
        <v-btn color="success" large depressed @click="downloadImages">
          <v-icon>mdi-download</v-icon>
          <span class="mx-1"></span>
          <span> download images </span>
        </v-btn>
      </div>
    </v-container> -->
    <div style="display: none">
      <img
        v-for="(image, i) in images"
        :key="image + i"
        :id="`image_${image}`"
        :src="image"
      />
    </div>
  </div>
</template>

<script>
import JsZip from "jszip";

export default {
  props: {
    images: {
      type: Array,
      required: true,
      default() {
        return ["https://giggster.com/images/imgEmpty2.svg"];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    show() {
      this.$viewerApi({
        images: this.images,
        options: {
          navbar: true,
        },
      });
    },
    async downloadImages() {
      var zip = new JsZip();
      var img = zip.folder("images");
      let name, imageURL;
      for (let i = 0; i < this.images.length; i++) {
        imageURL = this.images[i];
        name = imageURL.split("/");
        name = name[name.length - 1] + i;
        img.file(
          name,
          this.getBase64Image(document.getElementById(`image_${imageURL}`)),
          { base64: true, 'cross-origin': 'anonymous' }
        );
      }
      zip
        .generateAsync({
          type: "blob",
        })
        .then(function (content) {
          zip.saveAs(content, "img_archive.zip");
        });
    },
    getBase64Image(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      console.log('here one')
      var dataURL = canvas.toDataURL("image/png");
      console.log('here 2')
      return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    },
  },
};
</script>

<style>
</style>