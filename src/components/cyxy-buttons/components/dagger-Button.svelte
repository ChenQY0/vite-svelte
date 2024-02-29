<script lang="ts">
    import 'uno.css'
    import IconLogo from "../icons/icon-512.png";
    // import { onMount } from 'svelte';
    // let x = 0;
    // let y = 0;
    // let isDragging = false;

    // function handleMouseDown() {
    //     isDragging = true;
    // }
    // function handleMouseUp() {
    //     isDragging = false;
    // }
    // function handleMouseMove(event: MouseEvent) {
    //     if (isDragging) {
    //         x = event.clientX;
    //         y = event.clientY;
    //     }
    // }

    // onMount(() => {
    //     window.addEventListener('mouseup', handleMouseUp);
    //     window.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         window.removeEventListener('mouseup', handleMouseUp);
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     };
    // });
</script>

<div class="fixed right-0 bottom-10  z-100 ">
    <div class="relative pt-10 pr-10 pb-10 pl-14 right-0 bottom-5  z-100 flex items-end font-sans select-none leading-1em">
        <img src={IconLogo} alt="logo" class="block m-auto text-white text-lg w-6 h-6"/>
    </div>
</div>


<style>

</style>
  