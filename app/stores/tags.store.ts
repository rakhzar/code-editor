import type { Tag } from '~/interfaces/tag.interface';

export const useTagsStore = defineStore('tags', () => {
  const tags = ref<Tag[]>([
    { id: 1, name: 'Utility' },
    { id: 2, name: 'Formatting' },
    { id: 3, name: 'Development' },
    { id: 4, name: 'Collaboration' },
    { id: 5, name: 'Git' },
    { id: 6, name: 'Version Control' },
    { id: 7, name: 'Debugging' },
    { id: 8, name: 'Testing' },
    { id: 9, name: 'Web Development' },
    { id: 10, name: 'Python' },
    { id: 11, name: 'React' },
    { id: 12, name: 'Remote' },
    { id: 13, name: 'Productivity' },
    { id: 14, name: 'Settings' },
    { id: 15, name: 'Keyboard' },
    { id: 16, name: 'Extensions' },
  ]);

  const selectedTagIds = ref<number[]>([]);

  function getTagsById(ids: number[]) {
    return tags.value.filter((tag) => ids.includes(tag.id));
  }

  function toggleTag(tagIds: number) {
    selectedTagIds.value = selectedTagIds.value.includes(tagIds)
      ? selectedTagIds.value.filter((id) => id !== tagIds)
      : [...selectedTagIds.value, tagIds];
  }

  return {
    tags,
    selectedTagIds,
    getTagsById,
    toggleTag,
  };
});
