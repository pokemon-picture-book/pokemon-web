import { onMounted, onUnmounted } from 'vue';

export const onBodyClick = (callback: (e?: any) => any) => {
    onMounted(() => {
        document.addEventListener('click', callback);
    });
    onUnmounted(() => {
        document.removeEventListener('click', callback);
    });
};
