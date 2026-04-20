import type { Tag } from '~/interfaces/tag.interface';

export const useTagsStore = defineStore('tags', () => {
  const tags = ref<Tag[]>([
    { id: 1, name: 'Productivity' },
    { id: 2, name: 'Development' },
    { id: 3, name: 'Design' },
    { id: 4, name: 'Utility' },
    { id: 5, name: 'Integration' },
    { id: 6, name: 'Testing' },
    { id: 7, name: 'Debugging' },
    { id: 8, name: 'Formatting' },
    { id: 9, name: 'Collaboration' },
    { id: 10, name: 'Documentation' },
  ]);

  return {
    tags,
  };
});
