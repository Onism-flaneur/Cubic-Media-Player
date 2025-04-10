// components/VideoPlayer.js
"use client";

import { useState } from 'react';
import styles from './VideoPlayer.module.css';

const VideoPlayer = () => {
    const [videoSrc, setVideoSrc] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setVideoSrc(url);
        }
    };

    return (
        <section className={styles.section}>
            <label className={styles.customFileUpload}>
                <input type="file" accept="video/*" onChange={handleFileChange} />
                <span className={styles.buttonText}>Play video form your device</span>
            </label>
            {videoSrc && (
                <video src={videoSrc} autoPlay loop unmuted className={styles.backgroundVideo} />
            )}
        </section>
    );
};

<time datetime="2016-10-25" suppressHydrationWarning />

export default VideoPlayer;