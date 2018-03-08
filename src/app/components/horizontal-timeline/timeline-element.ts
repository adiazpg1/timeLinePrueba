export interface TimelineElement {
  caption: string;
  date: Date;
  title: string;
  content: string;
  selected?: boolean;
  visible?: boolean;
  link?: string;
}
