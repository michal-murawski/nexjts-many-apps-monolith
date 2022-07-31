/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

interface Props {
	defaultValue?: boolean;
}

const useComponentOnScreen = ({ defaultValue = false }: Props) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const [isOnScreen, setIsOnScreen] = useState(defaultValue);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => setIsOnScreen(entry.isIntersecting));

		observer.observe(containerRef.current);
		return () => {
			observer.disconnect();
		};
	}, []);

	return { isOnScreen, containerRef };
};

export default useComponentOnScreen;
