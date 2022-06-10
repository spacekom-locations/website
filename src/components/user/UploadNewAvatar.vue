<template>
  <v-dialog
    :value="show"
    :overlay="false"
    max-width="900px"
    transition="dialog-transition"
    @click:outside="$emit('close')"
    scrollable
  >
    <v-card :loading="uploadingImage" :disabled="uploadingImage">
      <v-card-text class="pa-4">
        <avatar-cropper
          style="max-height: 500px"
          :src="image.src"
          stencil-component="circle-stencil"
          ref="cropper"
        />
        <input
          type="file"
          ref="file"
          @change="loadImage($event)"
          accept="image/*"
          hidden
        />
        <div v-if="!image.src" class="ma-4 text-center">
          <v-text-field
            prepend-inner-icon="mdi-link"
            outlined
            label="url"
            placeholder="Enter image url. e.g Http://url.com/image.jpg"
            @keyup.enter="image.src = $event.target.value"
            id="id"
          ></v-text-field>
          <p class="headline">Or</p>
          <v-card
            class="mt-6 py-6"
            style="border: 2px dashed #ccc"
            flat
            @click="$refs.file.click()"
          >
            <v-card-text class="headline">
              <v-icon>mdi-cloud-upload</v-icon>
              <span class="mx-2"></span>
              <span>Select Image from this pc</span>
            </v-card-text>
          </v-card>
        </div>
      </v-card-text>
      <v-card-actions v-if="image.src" class="pa-6">
        <v-row>
          <v-col>
            <v-btn block text x-large @click="reset">
              <v-icon>mdi-refresh</v-icon>
              <span class="mx-2"></span>
              <span>Reset</span>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              block
              color="secondary"
              outlined
              x-large
              style="border: 2px dashed #ccc"
              @click="$refs.file.click()"
            >
              <v-icon>mdi-cloud-upload</v-icon>
              <span class="mx-2"></span>
              <span>Select new image</span>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn block color="success" outlined x-large @click="uploadImage">
              <v-icon>mdi-upload</v-icon>
              <span class="mx-2"></span>
              <span>Upload</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { update } from "@/api/users";

function getMimeType(file, fallback = null) {
  const byteArray = new Uint8Array(file).subarray(0, 4);
  let header = "";
  for (let i = 0; i < byteArray.length; i++) {
    header += byteArray[i].toString(16);
  }
  switch (header) {
    case "89504e47":
      return "image/png";
    case "47494638":
      return "image/gif";
    case "ffd8ffe0":
    case "ffd8ffe1":
    case "ffd8ffe2":
    case "ffd8ffe3":
    case "ffd8ffe8":
      return "image/jpeg";
    default:
      return fallback;
  }
}
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data() {
    return {
      image: {
        src: null,
        type: null,
      },
      uploadingImage: false,
    };
  },
  methods: {
    async uploadImage() {
      const { canvas } = this.$refs.cropper.getResult();
      if (canvas) {
        const form = new FormData();
        canvas.toBlob(async (blob) => {
          form.append("avatar", blob);
          this.uploadingImage = true;
          const userResponse = await update(form);
          this.$store.commit("User/setUser", userResponse.data);
          this.reset();
          this.uploadingImage = false;
          this.$emit('close');
        }, "image/jpeg");
      }
    },

    reset() {
      this.image = {
        src: null,
        type: null,
      };
    },
    loadImage(event) {
      // Reference to the DOM input element
      const { files } = event.target;
      // Ensure that you have a file before attempting to read it
      if (files && files[0]) {
        // 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
        if (this.image.src) {
          URL.revokeObjectURL(this.image.src);
        }
        // 2. Create the blob link to the file to optimize performance:
        const blob = URL.createObjectURL(files[0]);

        // 3. The steps below are designated to determine a file mime type to use it during the
        // getting of a cropped image from the canvas. You can replace it them by the following string,
        // but the type will be derived from the extension and it can lead to an incorrect result:
        //
        // this.image = {
        //   src: blob,
        //   type: files[0].type,
        // };

        // Create a new FileReader to read this image binary data
        const reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.image" refers to the image of Vue component
          this.image = {
            // Set the image source (it will look like blob:http://example.com/2c5270a5-18b5-406e-a4fb-07427f5e7b94)
            src: blob,
            // Determine the image type to preserve it during the extracting the image from canvas:
            type: getMimeType(e.target.result, files[0].type),
          };
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsArrayBuffer(files[0]);
      }
    },
  },
  destroyed() {
    // Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
    if (this.image.src) {
      URL.revokeObjectURL(this.image.src);
    }
  },
};
</script>

<style>
</style>