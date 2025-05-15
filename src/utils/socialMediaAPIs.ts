interface PostOptions {
    message?: string;
    caption?: string;
    image?: string;
    pageId?: string;
    accessToken: string;
}

export class FacebookAPI {
    static async createPost(options: PostOptions) {
        try {
            const url = `https://graph.facebook.com/${options.pageId}/feed`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: options.message,
                    access_token: options.accessToken,
                    ...(options.image && { photo: options.image }),
                }),
            });
            return await response.json();
        } catch (error) {
            console.error('Error posting to Facebook:', error);
            throw error;
        }
    }
}

export class InstagramAPI {
    static async createPost(options: PostOptions) {
        try {
            // First, upload the image to get the media ID
            const mediaId = await this.uploadImage(options.image!, options.accessToken);

            // Then create the post with the media ID
            const url = `https://graph.instagram.com/me/media`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    media_type: 'IMAGE',
                    media_id: mediaId,
                    caption: options.caption,
                    access_token: options.accessToken,
                }),
            });
            return await response.json();
        } catch (error) {
            console.error('Error posting to Instagram:', error);
            throw error;
        }
    }

    private static async uploadImage(imageUrl: string, accessToken: string): Promise<string> {
        const url = `https://graph.instagram.com/me/media`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image_url: imageUrl,
                access_token: accessToken,
            }),
        });
        const data = await response.json();
        return data.id;
    }
} 