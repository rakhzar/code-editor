import type { Playlist } from '~/interfaces/playlist.interface';

export const usePlaylistsStore = defineStore('playlists', () => {
  const playlists = ref<Playlist[]>([
    {
      id: 1,
      title: 'Prettier',
      description:
        'Automatically format your code to ensure consistent style across your project.',
      tags: ['Utility', 'Formatting'],
    },
    {
      id: 2,
      title: 'GitLens',
      description:
        'Supercharge Git within VS Code with commit visualization and blame annotations.',
      tags: ['Development', 'Collaboration'],
    },
    {
      id: 3,
      title: 'Live Share',
      description:
        'Real-time collaborative development from the comfort of your favorite editor.',
      tags: ['Development', 'Collaboration'],
    },
    {
      id: 4,
      title: 'ESLint',
      description:
        'Find and fix problems in your JavaScript/TypeScript code automatically.',
      tags: ['Development', 'Debugging'],
    },
    {
      id: 5,
      title: 'Code Runner',
      description:
        'Run code snippets in multiple programming languages with a single click.',
      tags: ['Development', 'Utility'],
    },
    {
      id: 6,
      title: 'REST Client',
      description:
        'Send HTTP requests and view responses directly in Visual Studio Code.',
      tags: ['Development', 'Utility'],
    },
    {
      id: 7,
      title: 'Code Spell Checker',
      description:
        'Catch common spelling errors in your source code and documentation.',
      tags: ['Utility', 'Documentation'],
    },
    {
      id: 8,
      title: 'Docker',
      description:
        'Manage Docker containers and images directly from VS Code.',
      tags: ['Development', 'Integration'],
    },
  ]);

  return {
    playlists,
  };
});
