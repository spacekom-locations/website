<template>
  <v-row>
    <confirm-delete
      :show="showConfirmDelete"
      @cancel="showConfirmDelete = false"
      @confirm="removeSelectedImage"
      loading
    />
    <v-col lg="8" sm="12" xs="12">
      <v-card max-width="10800px" flat>
        <p class="display-1 font-weight-bold mb-8">
          Get your listing to stand out
        </p>
        <div class="mt-8">
          <v-alert type="warning" border="left" prominent text>
            You need at least 5 photos. You can skip this step, but you won’t be
            able to publish the location.
          </v-alert>
          <p class="mt-8 caption">
            Add as many images of your location as you'd like. Producers
            typically select a location based on the pictures. This helps them
            tremendously. Make sure your images are at least 1200px width.
            Horizontal images work best.
          </p>
        </div>
        <v-card
          outlined
          class="my-4"
          :disabled="uploadingImages"
          :loading="uploadingImages"
        >
          <UploadImages ref="uploadImagesRef" @changed="uploadImages" />
        </v-card>
        
        <div class="mt-8">
          
          <draggable
            v-model="location.images"
            v-bind="dragOptions"
            style="background-color: #ccc5"
            class="rounded-lg outlined text-center"
          >
            <transition-group
              type="transition"
              :name="!isDragging ? 'flip-list' : null"
            >
            
              <v-card
                width="280px"
                v-for="(image, index) of location.images"
                :key="image + index"
                @start="isDragging = true"
                @end="isDragging = false"
                class="glyphicon glyphicon-pushpin d-inline-block ma-3"
                outlined
                :loading="selectedImage == image && removingImage"
                :disabled="removingImage"
              >
                <v-card-title class="py-1">
                  <v-chip filter :input-value="true" color="success" v-if="index == 0" outlined
                    >Cover</v-chip
                  >
                  <v-spacer></v-spacer>
                  {{ index + 1 }}
                  <v-spacer></v-spacer>
                  <v-btn
                    @click="
                      selectedImage = image;
                      showConfirmDelete = true;
                    "
                    icon
                    color="error"
                  >
                    <v-icon>mdi-delete-outline</v-icon>
                  </v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-img :key="image + '__' + index" :src="image" :aspect-ratio="16/9" />
                </v-card-text>
              </v-card>
            </transition-group>
          </draggable>
        </div>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined class="pa-6">
        <div>
          <v-img
            src="https://giggster.com/images/become-host-steps/photos.png"
          />
        </div>

        <p class="subtitle-1 font-weight-bold mt-4">Showcase your location.</p>
        <p class="caption mt-4 grey--text">
          Include photos of all areas that will be available - interior and
          exterior.
        </p>
        <p class="subtitle-1 font-weight-bold mt-4">
          Take photos when your space is well-lit.
        </p>
        <p class="caption mt-4 grey--text">
          Let in as much natural light as possible by opening blinds and
          curtains.
        </p>
        <p class="subtitle-1 font-weight-bold mt-4">
          Don't forget the details.
        </p>
        <p class="caption mt-4 grey--text">
          Make sure to highlight amenities/features booking organizers will
          enjoy.
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import draggable from "vuedraggable";
import UploadImages from "vue-upload-drop-images";
import { removeLocationImage, uploadLocationImages } from "@/api/locations";
import ConfirmDelete from "@/components/confirmDelete.vue";

export default {
  components: { draggable, UploadImages, ConfirmDelete },
  props: {
    value: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  data: () => ({
    isDragging: false,
    location: {},
    uploadingImages: false,
    removingImage: false,
    showConfirmDelete: false,
    selectedImage: "",
  }),
  watch: {
    value(new_value) {
      if (JSON.stringify(this.location) != JSON.stringify(new_value)) {
        this.location = new_value;
      }
    },

    location: {
      handler(val) {
        this.$emit("input", Object.assign({}, val));
      },
      deep: true,
    },
  },
  created() {
    this.location = this.value;
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  methods: {
    confirmRemoval(image) {
      alert(image);
    },
    async uploadImages(images) {
      if (images.length < 1) return;
      this.uploadingImages = true;
      try {
        const response = await uploadLocationImages(this.location.id, images);
        this.location = response.data;
      } catch (error) {
        console.log(error);
      }
      this.uploadingImages = false;
      this.$refs.uploadImagesRef.reset();
    },
    async removeSelectedImage() {
      this.showConfirmDelete = false;
      this.removingImage = true;
      try {
        const response = await removeLocationImage(
          this.location.id,
          this.selectedImage
        );
        this.location = response.data;
        this.selectedImage = "";
      } catch (error) {
        console.log(error);
      }
      this.removingImage = false;
    },
  },
};
</script>

<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>