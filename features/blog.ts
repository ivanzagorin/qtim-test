import { ref, Ref } from 'vue';
import { IBlogItem } from '../types/interfaces/Post.interface';

export const posts: Ref<Array<IBlogItem>> = ref([]);