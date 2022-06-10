import { useEffect, useState } from 'react';

const useInfiniteScroll = (query, data, lastItem) => {
	const [loading, setLoading] = useState(false);
	const [blogPost, setBlogPost] = useState([]);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setBlogPost([]);
	}, [query]);

	useEffect(() => {
		setLoading(true);

		const nextBlogPost = data.slice(lastItem, lastItem + 15);

		if (query) {
			const searchedPosts = data.filter(post => post.attributes.title.toLowerCase().includes(query.toLowerCase()));

			setBlogPost(searchedPosts);
			setHasMore(lastItem < searchedPosts.length);
		} else {
			setBlogPost(prevState => [...prevState, ...nextBlogPost]);
			setHasMore(lastItem < data.length);
		}

		setLoading(false);
	}, [query, data, lastItem]);

	return { loading, blogPost, hasMore };
};

export default useInfiniteScroll;
