import { useEffect, useState } from 'react';

const PHRASES = ['Frontend Developer', 'React Developer', 'MERN Stack Developer'];

export function useTypingEffect(phrases: string[] = PHRASES, typeSpeed = 90, deleteSpeed = 45, pause = 1400) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    let timeout: number;

    if (!isDeleting && text === current) {
      timeout = window.setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIndex((i) => i + 1);
      timeout = window.setTimeout(() => {}, 200);
    } else {
      timeout = window.setTimeout(
        () => {
          setText((prev) =>
            isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
          );
        },
        isDeleting ? deleteSpeed : typeSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pause]);

  return text;
}
