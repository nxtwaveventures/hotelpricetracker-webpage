export interface VideoScript {
    title: string;
    description: string;
    scenes: Scene[];
}

export interface Scene {
    narration: string;
    visualDescription: string;
    duration: number; // in seconds
    type: 'comparison' | 'showcase' | 'testimonial' | 'explanation' | 'callToAction';
}

export interface VideoMetadata {
    title: string;
    description: string;
    tags: string[];
    category: string;
    privacyStatus: 'private' | 'unlisted' | 'public';
}

export interface GeneratedVideo {
    videoFile: string;
    metadata: VideoMetadata;
    thumbnail: string;
} 