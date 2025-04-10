// components/VideoPlayer.js
"use client"; // Ensure this component runs on the client

import { useState, useEffect } from 'react';
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
            <input type="file" accept="video/*" onChange={handleFileChange} className={styles.fileInput} />
            {videoSrc && (
                <video src={videoSrc} autoPlay loop muted className={styles.backgroundVideo} />
            )}
            <div className={styles.box}>
                <div>
                    <span>
                        {videoSrc && <video src={videoSrc} autoPlay loop muted className={styles.innerVideo} />}
                    </span>
                    <span>
                        {videoSrc && <video src={videoSrc} autoPlay loop muted className={styles.innerVideo} />}
                    </span>
                    <span>
                        {videoSrc && <video src={videoSrc} autoPlay loop muted className={styles.innerVideo} />}
                    </span>
                </div>
            </div>
        </section>
    );
};

<time datetime="2016-10-25" suppressHydrationWarning />

export default VideoPlayer;
