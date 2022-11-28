import { useEffect } from 'react';

const importScript = resourceUrl => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const script = document.createElement('script');
		script.src = resourceUrl;
		script.defer = true;
		script.type = "text/babel"
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		}
	}, [resourceUrl]);
};
export default importScript;