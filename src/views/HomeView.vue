<script setup lang="ts">
import Paper from '@/components/Paper.vue';
import Links from '@/components/Links.vue';
import db from '@/plugins/firebase';
import { reactive } from 'vue';

const getPath = (path: string): string => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};

interface Link {
  iconType: string;
  icon: string;
  name: string;
  url: string;
}

interface videoSharingService {
  VideoSharingServices: Link[];
  KIT: Link[];
  Google: Link[];
  Other: Link[];
}

const contentsInfo: videoSharingService = reactive({
  VideoSharingServices: [],
  KIT: [],
  Google: [],
  Other: [],
});

db.collection('portal-contents')
  .doc('KIT')
  .get()
  .then((querySnapshot) => {
    console.log(querySnapshot.data());
    const data: { contents: Link[] } = querySnapshot.data() as {
      contents: Link[];
    };
    contentsInfo.KIT = data.contents;
  })
  .catch((error) => {
    console.log(error);
    contentsInfo.KIT = [];
  });
db.collection('portal-contents')
  .doc('VideoSharingServices')
  .get()
  .then((querySnapshot) => {
    console.log(querySnapshot.data());
    const data: { contents: Link[] } = querySnapshot.data() as {
      contents: Link[];
    };
    contentsInfo.VideoSharingServices = data.contents;
  })
  .catch((error) => {
    console.log(error);
    contentsInfo.VideoSharingServices = [];
  });
db.collection('portal-contents')
  .doc('Google')
  .get()
  .then((querySnapshot) => {
    console.log(querySnapshot.data());
    const data: { contents: Link[] } = querySnapshot.data() as {
      contents: Link[];
    };
    contentsInfo.Google = data.contents;
  })
  .catch((error) => {
    console.log(error);
    contentsInfo.Google = [];
  });
db.collection('portal-contents')
  .doc('Other')
  .get()
  .then((querySnapshot) => {
    console.log(querySnapshot.data());
    const data: { contents: Link[] } = querySnapshot.data() as {
      contents: Link[];
    };
    contentsInfo.Other = data.contents;
  })
  .catch((error) => {
    console.log(error);
    contentsInfo.Other = [];
  });
</script>

<template>
  <main
    class="relative h-[65vw] min-h-[520px] max-h-[767px] w-full max-w-[1180px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
  >
    <img
      src="@/assets/cork-board.png"
      alt="bg image"
      class="w-full h-full absolute top-0 left-0 select-none pointer-events-none z-0"
    />
    <img
      src="@/assets/github.png"
      alt="sticker"
      class="w-[15%] h-auto top-[50%] left-[5%] absolute z-10 rotate-12"
    />
    <img
      src="@/assets/c++.png"
      alt="sticker"
      class="w-[15%] h-auto top-[65%] left-[15%] absolute z-10 -rotate-12"
    />
    <img
      src="@/assets/C3tyan.png"
      alt="sticker"
      class="w-[40%] h-auto top-[52%] left-[55%] absolute z-10"
    />
    <a
      href="https://compositecomputer.club"
      title="C3公式サイト"
      target="_blank"
      class="w-[23%] h-auto top-[10%] left-[70%] absolute z-10 -rotate-12"
    >
      <img
        src="@/assets/c3-logo.png"
        alt="sticker"
        class="w-full h-auto dropshadow"
      />
    </a>
    <a
      href="https://mastodon.compositecomputer.club"
      title="mastodon"
      target="_blank"
      class="w-[15%] h-auto top-[7%] left-[50%] absolute z-10 rotate-12"
    >
      <img
        src="@/assets/mastodon.png"
        alt="sticker"
        class="w-full h-auto dropshadow"
      />
    </a>
    <a
      href="https://toybox.compositecomputer.club"
      title="ToyBox"
      target="_blank"
      class="w-[20%] h-auto top-[10%] left-[60%] absolute z-10"
    >
      <img
        src="@/assets/ToyBox.png"
        alt="sticker"
        class="w-full h-auto dropshadow"
      />
    </a>
    <Paper class="top-[15%] left-[15%] rotate-3" pin-color="yellow">
      <Links
        v-for="(videoSharingServices, i) in contentsInfo.VideoSharingServices"
        :key="i"
        :link-icon="
          videoSharingServices.iconType === 'internal'
            ? getPath(videoSharingServices.icon)
            : videoSharingServices.icon
        "
        :link-name="videoSharingServices.name"
        :link-url="videoSharingServices.url"
      />
    </Paper>
    <Paper class="top-[25%] left-[40%] -rotate-2" pin-color="blue">
      <Links
        v-for="(KIT, i) in contentsInfo.KIT"
        :key="i"
        :link-icon="KIT.iconType === 'internal' ? getPath(KIT.icon) : KIT.icon"
        :link-name="KIT.name"
        :link-url="KIT.url"
      />
    </Paper>
    <Paper class="top-[45%] left-[25%] -rotate-2" pin-color="red">
      <Links
        v-for="(Google, i) in contentsInfo.Google"
        :key="i"
        :link-icon="
          Google.iconType === 'internal' ? getPath(Google.icon) : Google.icon
        "
        :link-name="Google.name"
        :link-url="Google.url"
      />
    </Paper>
    <Paper class="top-[35%] left-[63%] rotate-3" pin-color="green">
      <Links
        v-for="(Other, i) in contentsInfo.Other"
        :key="i"
        :link-icon="
          Other.iconType === 'internal' ? getPath(Other.icon) : Other.icon
        "
        :link-name="Other.name"
        :link-url="Other.url"
      />
    </Paper>
  </main>
</template>

<style scoped>
.dropshadow:hover {
  -webkit-filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.2));
  -moz-filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.2));
  -ms-filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.3));
}
</style>
