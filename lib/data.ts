import { API_URL, POSTS_PER_PAGE } from './constants';
import { Comment, Post, PostWithUser, User } from './definitions';

// Post

/**
 * Fetches all posts from the API.
 * @returns {Promise<Post[]>} A promise that resolves to an array of posts.
 * @throws {Error} An error is thrown if the API request fails.
 */
export async function fetchAllPosts(): Promise<Post[]> {
  try {
    const response = await fetch(`${API_URL}/posts`);
    const allPosts = await response.json();
    return allPosts;
  } catch (error) {
    console.error('API Error: ', error);
    throw new Error('Failed to fetch all posts.');
  }
}

/**
 * Fetches a single post by its ID from the API.
 * @param postId The ID of the post to fetch.
 * @returns {Promise<Post>} A promise that resolves to the post with the given ID.
 * @throws {Error} An error is thrown if the API request fails.
 */
export async function fetchPostById(postId: number): Promise<Post> {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}`);
    const post = await response.json();
    return post;
  } catch (error) {
    console.error('API Error: ', error);
    throw new Error('Failed to fetch post by ID.');
  }
}

/**
 * Fetches all posts by a user ID from the API.
 * @param userId The ID of the user to fetch posts for.
 * @returns {Promise<Post[]>} A promise that resolves to an array of posts by the user.
 * @throws {Error} An error is thrown if the API request fails.
 */
export async function fetchPostsByUserId(userId: number): Promise<Post[]> {
  try {
    const response = await fetch(`${API_URL}/posts?userId=${userId}`);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('API Error: ', error);
    throw new Error('Failed to fetch posts by user ID.');
  }
}

/**
 * Fetches all post pages from the API.
 * @returns {Promise<number>} A promise that resolves to the number of post pages.
 * @throws {Error} An error is thrown if the API request fails.
 */
export async function fetchAllPostPages(): Promise<number> {
  try {
    const allPosts = await fetchAllPosts();
    return Math.ceil(allPosts.length / POSTS_PER_PAGE);
  } catch (error) {
    console.error('API Error: ', error);
    throw new Error('Failed to fetch all post pages.');
  }
}

/**
 * Fetches a page of posts from the API.
 * @param page The page number to fetch.
 * @returns {Promise<Post[]>} A promise that resolves to a page of posts.
 * @throws {Error} An error is thrown if the API request fails.
 */
export async function fetchPostsByPage(page: number): Promise<Post[]> {
  try {
    const response = await fetch(
      `${API_URL}/posts?_page=${page}&_limit=${POSTS_PER_PAGE}`
    );
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('API Error: ', error);
    throw new Error('Failed to fetch posts by page.');
  }
}

// User

/**
 * Fetches all users from the API.
 * @returns {Promise<User[]>} A promise that resolves to an array of users.
 * @throws {Error} An error is thrown if the API request fails.
 */
export async function fetchAllUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${API_URL}/users`);
    const allUsers = await response.json();
    return allUsers;
  } catch (error) {
    console.error('API Error: ', error);
    throw new Error('Failed to fetch all users.');
  }
}

/**
 * Fetches a single user by their ID from the API.
 * @param userId The ID of the user to fetch.
 * @returns {Promise<User>} A promise that resolves to the user with the given ID.
 * @throws {Error} An error is thrown if the API request fails.
 */
export async function fetchUserById(userId: number): Promise<User> {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('API Error: ', error);
    throw new Error('Failed to fetch user by ID.');
  }
}

// Post with User

/**
 * Fetches all posts with their own associated user from the API.
 * @returns {Promise<PostWithUser[]>} A promise that resolves to an array of posts with their own associated user.
 * @throws {Error} An error is thrown if the API request fails.
 */
export async function fetchAllPostsWithUser(): Promise<PostWithUser[]> {
  try {
    const allPosts = await fetchAllPosts();
    const allPostsWithUser = await Promise.all(
      allPosts.map(async (post) => {
        const user = await fetchUserById(post.userId);
        return { ...post, user };
      })
    );
    return allPostsWithUser;
  } catch (error) {
    console.error('API Error: ', error);
    throw new Error(
      'Failed to fetch all posts with their own associated user.'
    );
  }
}

/**
 * Fetches a post with its associated user by post ID.
 * @param postId The ID of the post to fetch.
 * @returns {Promise<PostWithUser>} A promise that resolves to a post with its own associated user.
 * @throws {Error} An error is thrown if the API request fails.
 */
export async function fetchPostWithUserById(
  postId: number
): Promise<PostWithUser> {
  try {
    const post = await fetchPostById(postId);
    const user = await fetchUserById(post.userId);
    return { ...post, user };
  } catch (error) {
    console.error('API Error: ', error);
    throw new Error('Failed to fetch post with its own associated user.');
  }
}

/**
 * Fetches posts with their own associated user by page from the API.
 * @param page The page number to fetch.
 * @returns {Promise<PostWithUser[]>} A promise that resolves to a page of posts with their own associated user.
 * @throws {Error} An error is thrown if the API request fails.
 */
export async function fetchPostsWithUserByPage(
  page: number
): Promise<PostWithUser[]> {
  try {
    const posts = await fetchPostsByPage(page);
    const postsWithUser = await Promise.all(
      posts.map(async (post) => {
        const user = await fetchUserById(post.userId);
        return { ...post, user };
      })
    );
    return postsWithUser;
  } catch (error) {
    console.error('API Error: ', error);
    throw new Error(
      'Failed to fetch posts with their own associated user by page.'
    );
  }
}

// Comments

/**
 * Fetches all comments from the API.
 * @returns {Promise<Comment[]>} A promise that resolves to an array of comments.
 * @throws {Error} An error is thrown if the API request fails.
 */
export async function fetchAllComments(): Promise<Comment[]> {
  try {
    const response = await fetch(`${API_URL}/comments`);
    const allComments = await response.json();
    return allComments;
  } catch (error) {
    console.error('API Error: ', error);
    throw new Error('Failed to fetch all comments.');
  }
}

/**
 * Fetches all comments associated with a post by post ID.
 * @param postId The ID of the post to fetch comments for.
 * @returns {Promise<Comment[]>} A promise that resolves to an array of comments associated with the post.
 * @throws {Error} An error is thrown if the API request fails.
 */
export async function fetchCommentsByPostId(
  postId: number
): Promise<Comment[]> {
  try {
    const response = await fetch(`${API_URL}/comments?postId=${postId}`);
    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error('API Error: ', error);
    throw new Error('Failed to fetch comments by post ID.');
  }
}
