export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: number;
}

export interface NumberedLesson extends Lesson {
  number: number;
}
