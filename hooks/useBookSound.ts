import useSound from 'use-sound';

export const useBookSound = () => {
    // You would need to add a real sound file to your public folder
    // For now we'll setup the hook structure
    const [playFlip] = useSound('/sounds/page-flip.mp3', {
        volume: 0.5,
        interrupt: true,
    });

    return { playFlip };
};
