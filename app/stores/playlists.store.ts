import type { Playlist } from '~/interfaces/playlist.interface';

export const usePlaylistsStore = defineStore('playlists', () => {
  const playlists = ref<Playlist[]>([
    {
      id: 1,
      title: 'Prettier',
      description:
        'Automatically format your code to ensure consistent style across your project.',
      tagIds: [14, 1, 3],
    },
    {
      id: 2,
      title: 'GitLens',
      description:
        'Supercharge Git within VS Code with commit visualization and blame annotations.',
      tagIds: [15, 13, 3],
    },
    {
      id: 3,
      title: 'Live Share',
      description:
        'Real-time collaborative development from the comfort of your favorite editor.',
      tagIds: [16, 3, 1],
    },
    {
      id: 4,
      title: 'ESLint',
      description:
        'Find and fix problems in your JavaScript/TypeScript code automatically.',
      tagIds: [5, 6, 4],
    },
    {
      id: 5,
      title: 'Code Runner',
      description:
        'Run code snippets in multiple programming languages with a single click.',
      tagIds: [7, 3, 1],
    },
    {
      id: 6,
      title: 'REST Client',
      description:
        'Send HTTP requests and view responses directly in Visual Studio Code.',
      tagIds: [9, 3, 1],
    },
    {
      id: 7,
      title: 'Code Spell Checker',
      description:
        'Catch common spelling errors in your source code and documentation.',
      tagIds: [10, 3, 1],
    },
    {
      id: 8,
      title: 'Docker',
      description:
        'Manage Docker containers and images directly from VS Code.',
      tagIds: [11, 9, 3],
    },
  ]);

  return {
    playlists,
  };
});
