<script setup lang="ts">
const { playlists } = usePlaylistsStore();
const { getLessonsById } = useLessonsStore();

const lists = [
  {
    heading: 'Popular Playlists',
    items: playlists.slice(4, 7).map((playlist) => {
      const lesson = getLessonsById(playlist.lessonIds[0] ?? 0);

      if (!lesson) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Lesson not found',
        });
      }

      return {
        label: playlist.title,
        link: `/playlists/${slugify(playlist.title || '')}/lessons/${slugify(lesson.title)}`,
      };
    }),
  },
  {
    heading: 'Configurations',
    items: playlists.slice(0, 3).map((playlist) => {
      const lesson = getLessonsById(playlist.lessonIds[0] ?? 0);

      if (!lesson) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Lesson not found',
        });
      }

      return {
        label: playlist.title,
        link: `/playlists/${slugify(playlist.title || '')}/lessons/${slugify(lesson.title)}`,
      };
    }),
  },
  {
    heading: 'Social',
    items: [
      { label: 'YouTube', link: 'https://youtube.com' },
      { label: 'Telegram', link: 'https://telegram.org' },
      { label: 'GitHub', link: 'https://github.com' },
    ],
  },
];
</script>

<template>
  <div class="flex flex-col gap-y-8 sm:flex-row sm:gap-x-16">
    <AppFooterList
      v-for="list in lists"
      :key="list.heading"
      :list="list"
    />
  </div>
</template>
