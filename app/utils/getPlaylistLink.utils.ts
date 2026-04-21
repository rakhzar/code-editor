import type { Lesson } from '~/interfaces/lesson.interface';
import type { Playlist } from '~/interfaces/playlist.interface';

export function getPlaylistLink(playlist?: Playlist, lesson?: Lesson) {
  if (!lesson) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Lesson not found',
    });
  }

  return `/playlists/${slugify(playlist?.title || '')}/lessons/${slugify(lesson.title)}`;
}
